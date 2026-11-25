import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendContact } from "@/lib/contact/send-contact";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Role = "user" | "assistant";
type ChatMessage = { id: string; role: Role; content: string };

const GREETING =
  "Hi, I can answer questions about Adilflow's services from what's published on this site. I don't quote prices — those are custom. What are you looking to build?";

const CLIENT_FALLBACK =
  "I couldn't complete that reply. Please try again, or send your name, email and what you need with the form in this chat.";

const fieldClass =
  "min-h-11 w-full rounded-xl border border-line bg-card px-3.5 text-base text-fg outline-none focus:border-fg";

function nextId() {
  return crypto.randomUUID();
}

export function ChatPanel({
  inputIdPrefix,
  onClose,
  className,
  titleId: titleIdProp,
}: {
  inputIdPrefix: string;
  onClose?: () => void;
  className?: string;
  titleId?: string;
}) {
  const generatedTitleId = useId();
  const titleId = titleIdProp ?? generatedTitleId;
  const inputId = `${inputIdPrefix}-input`;
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const requestRef = useRef(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "greeting", role: "assistant", content: GREETING },
  ]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, notice]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  function patchMessage(id: string, content: string) {
    setMessages((current) =>
      current.map((message) => (message.id === id ? { ...message, content } : message)),
    );
  }

  async function ask(event: FormEvent) {
    event.preventDefault();
    const text = draft.trim().slice(0, 500);
    if (!text || busy) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const requestId = ++requestRef.current;
    const assistantId = nextId();
    const history = [
      ...messages
        .filter((message) => message.id !== "greeting" && message.content.trim())
        .map((message) => ({ role: message.role, content: message.content })),
      { role: "user" as const, content: text },
    ].slice(-6);

    setDraft("");
    setBusy(true);
    setNotice("");
    setStatusText("Replying…");
    setMessages((current) => [
      ...current,
      { id: nextId(), role: "user", content: text },
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });
      let full = "";
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          full += decoder.decode(value, { stream: true });
          patchMessage(assistantId, full);
        }
        full += decoder.decode();
      } else {
        full = await response.text();
      }
      if (!full.trim()) full = CLIENT_FALLBACK;
      patchMessage(assistantId, full);
      const mode = response.headers.get("x-adilflow-chat");
      setNotice(
        mode === "stub"
          ? "Sample reply — the live model is not connected in this environment."
          : "",
      );
      setStatusText(full);
    } catch (error) {
      if (controller.signal.aborted) return;
      console.error("[chat] browser request failed", error instanceof Error ? error.name : "error");
      patchMessage(assistantId, CLIENT_FALLBACK);
      setStatusText(CLIENT_FALLBACK);
    } finally {
      if (requestRef.current === requestId) setBusy(false);
    }
  }

  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-2xl border border-ink-line bg-ink text-on-ink",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3 border-b border-ink-line px-4 py-3">
        <div>
          <p id={titleId} className="font-display text-2xl">
            Ask Adilflow
          </p>
          <p className="text-sm text-on-ink-muted">
            Answers from this site. Prices are a custom quote.
          </p>
        </div>
        {onClose ? (
          <button
            type="button"
            className="inline-flex min-h-11 items-center px-2 text-sm text-on-ink-muted hover:text-on-ink"
            onClick={onClose}
          >
            Close
          </button>
        ) : null}
      </div>

      <div ref={logRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-busy={busy}>
        {messages.map((message) => (
          <ChatBubble key={message.id} role={message.role}>
            {message.content || (busy ? "Replying…" : "")}
          </ChatBubble>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {statusText}
      </p>

      {notice ? (
        <p
          className="mx-4 mb-2 rounded-xl border border-accent/50 bg-ink-raised px-3 py-2 text-sm text-accent"
          role="note"
        >
          {notice}
        </p>
      ) : null}

      <LeadForm />

      <form onSubmit={ask} className="flex items-end gap-2 border-t border-ink-line p-3">
        <label htmlFor={inputId} className="sr-only">
          Your question
        </label>
        <textarea
          ref={inputRef}
          id={inputId}
          value={draft}
          maxLength={500}
          rows={2}
          placeholder="Ask about chatbots, websites, SEO…"
          className="min-h-11 flex-1 resize-none rounded-xl border border-ink-line bg-ink-raised px-3 py-2 text-base text-on-ink outline-none placeholder:text-on-ink-muted focus:border-accent"
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
        />
        <Button type="submit" variant="lime" disabled={busy || draft.trim().length === 0}>
          {busy ? "Sending" : "Send"}
        </Button>
      </form>
    </div>
  );
}

function ChatBubble({ role, children }: { role: Role; children: ReactNode }) {
  const mine = role === "user";
  return (
    <p
      className={cn(
        "max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap",
        mine ? "ml-auto bg-accent text-ink" : "bg-ink-raised text-on-ink",
      )}
    >
      <span className="sr-only">{mine ? "You" : "Adilflow"}: </span>
      {children}
    </p>
  );
}

function LeadForm() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [website, setWebsite] = useState("");
  const [form, setForm] = useState({ name: "", email: "", need: "" });
  const panelId = useId();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const need = form.need.trim();
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || need.length < 12) {
      setError(
        "Add your name, a valid email, and a short note about what you need (at least a sentence).",
      );
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const result = await sendContact({
        data: {
          name,
          email,
          subject: "AI chatbot enquiry",
          budget: "AI chatbot — custom quote",
          message: `Sent from the Adilflow chat demo.\n\nWhat they need:\n${need}`,
          website,
        },
      });
      if (result.ok) {
        setSent(true);
        setStatus("idle");
        return;
      }
      setError(result.error);
      setStatus("error");
    } catch {
      setError("Couldn't send that. Please use the contact page or WhatsApp.");
      setStatus("error");
    }
  }

  return (
    <div className="border-t border-ink-line px-3 py-2">
      <button
        type="button"
        className="inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Hide details form" : "Send your details"}
      </button>
      {open ? (
        <div id={panelId} className="pb-2">
          {sent ? (
            <p className="mt-2 flex items-start gap-2 text-sm text-on-ink" role="status">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              Sent. I'll reply to {form.email.trim()} — usually within 24 hours. WhatsApp is faster:{" "}
              {site.phoneDisplay}.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="relative mt-2 space-y-2" noValidate>
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </label>
              </div>
              <label className="block text-sm" htmlFor={`${panelId}-name`}>
                Name
                <input
                  id={`${panelId}-name`}
                  className={cn(fieldClass, "mt-1")}
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  required
                />
              </label>
              <label className="block text-sm" htmlFor={`${panelId}-email`}>
                Email
                <input
                  id={`${panelId}-email`}
                  type="email"
                  autoComplete="email"
                  className={cn(fieldClass, "mt-1")}
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  required
                />
              </label>
              <label className="block text-sm" htmlFor={`${panelId}-need`}>
                What do you need?
                <textarea
                  id={`${panelId}-need`}
                  className={cn(fieldClass, "mt-1 min-h-20 py-2")}
                  value={form.need}
                  onChange={(event) => setForm({ ...form, need: event.target.value })}
                  required
                />
              </label>
              {status === "error" ? (
                <p role="alert" className="text-sm text-accent">
                  {error}
                </p>
              ) : null}
              <Button
                type="submit"
                variant="lime"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send to Adilflow"}
              </Button>
              <p className="text-xs text-on-ink-muted">
                Same enquiry path as the contact form. Or{" "}
                <a
                  href={site.whatsapp}
                  className="underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp {site.phoneDisplay}
                </a>
                .
              </p>
            </form>
          )}
        </div>
      ) : null}
    </div>
  );
}
