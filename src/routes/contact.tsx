import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { budgets, site, subjects } from "@/lib/site";
import { cn } from "@/lib/utils";
import { sendContact } from "@/lib/contact/send-contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageHead({
      title: "Contact Muhammad Adil — Adilflow",
      description:
        "Book a call with Muhammad Adil. WhatsApp +44 7878 268504 or hafiz8193754@gmail.com. Working with clients worldwide.",
      path: "/contact",
    }),
});

const fieldClass =
  "min-h-11 w-full rounded-xl border border-line bg-card px-3.5 text-base text-fg outline-none focus:border-fg";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0] as string,
    message: "",
    budget: budgets[0] as string,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [website, setWebsite] = useState("");

  const whatsappHref = `${site.whatsappBase}?text=${encodeURIComponent(
    [
      `Hi Muhammad, I'd like to discuss a project.`,
      form.name.trim() && `Name: ${form.name.trim()}`,
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n"),
  )}`;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "A valid email is required.";
    if (form.message.trim().length < 12) next.message = "Tell me a little more about the project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    setServerError("");
    try {
      const result = await sendContact({ data: { ...form, website } });
      if (result.ok) {
        setSent(true);
        setStatus("idle");
        return;
      }
      if (result.fieldErrors) setErrors(result.fieldErrors);
      setServerError(result.error);
      setStatus("error");
    } catch {
      setServerError("Couldn't send your message. Please try again or use WhatsApp.");
      setStatus("error");
    }
  }

  return (
    <SiteShell>
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">Contact</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">
            Let's work together
          </h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            Have a project in mind? I'd like to hear about it. Remote — working with clients
            worldwide.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid items-start gap-8 lg:grid-cols-12">
          <div
            id="enquiry"
            className="rounded-2xl border border-line bg-card p-6 md:p-8 lg:col-span-7"
          >
            {sent ? (
              <div role="status" aria-live="polite">
                <CheckCircle2 className="size-8 text-accent-ink" aria-hidden="true" />
                <h2 className="mt-4 font-display text-3xl">Thanks — message sent</h2>
                <p className="mt-2 text-base text-muted">
                  I'll reply to {form.email.trim() || "your email"} within 24 hours. Need a faster
                  answer? Message me on WhatsApp at {site.phoneDisplay}.
                </p>
                <Button asChild variant="lime" size="lg" className="mt-6">
                  <a href={site.whatsapp} target="_blank" rel="noreferrer">
                    Open WhatsApp
                  </a>
                </Button>
                <button
                  type="button"
                  className="mt-4 block min-h-11 text-base text-muted underline underline-offset-4"
                  onClick={() => {
                    setSent(false);
                    setForm({ ...form, message: "" });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="relative space-y-4"
                aria-busy={status === "sending"}
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
                  <label>
                    Website
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      name="website"
                      value={website}
                      onChange={(event) => setWebsite(event.target.value)}
                    />
                  </label>
                </div>
                <Field label="Your name" error={errors.name} required>
                  <input
                    className={fieldClass}
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field label="Email" error={errors.email} required>
                  <input
                    className={fieldClass}
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    autoComplete="email"
                    required
                  />
                </Field>
                <Field label="WhatsApp / phone (optional)" error={errors.phone}>
                  <input
                    className={fieldClass}
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    autoComplete="tel"
                    placeholder="+44…"
                  />
                </Field>
                <Field label="Subject">
                  <select
                    className={fieldClass}
                    value={form.subject}
                    onChange={(event) => setForm({ ...form, subject: event.target.value })}
                  >
                    {subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" error={errors.message} required>
                  <textarea
                    className={cn(fieldClass, "min-h-32 py-3")}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    required
                  />
                </Field>
                <Field label="Budget">
                  <select
                    className={fieldClass}
                    value={form.budget}
                    onChange={(event) => setForm({ ...form, budget: event.target.value })}
                  >
                    {budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                </Field>
                {status === "error" && serverError ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-danger px-3.5 py-3 text-sm text-danger"
                  >
                    {serverError}
                  </p>
                ) : null}
                <Button
                  type="submit"
                  variant="lime"
                  size="lg"
                  className="w-full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    Or chat on WhatsApp
                  </a>
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-3 lg:col-span-5">
            <Info
              title="WhatsApp"
              body={site.phoneDisplay}
              hint="Usually replies within an hour"
              href={site.whatsapp}
            />
            <Info
              title="Email"
              body={site.email}
              hint="Response within 24 hours"
              href={`mailto:${site.email}`}
            />
            <Info
              title="LinkedIn"
              body={site.person}
              hint={site.linkedinLabel}
              href={site.linkedin}
              icon
            />
            <div className="rounded-2xl border border-line bg-card p-5">
              <p className="text-base font-medium">Remote</p>
              <p className="mt-1 text-base text-accent-ink">{site.remote}</p>
              <p className="mt-1 text-sm text-muted">Calls scheduled around your time zone.</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label}
        {required ? <span className="text-accent-ink"> *</span> : null}
      </span>
      {children}
      {error ? (
        <span role="alert" className="mt-1 block text-sm text-danger">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Info({
  title,
  body,
  hint,
  href,
  icon,
}: {
  title: string;
  body: string;
  hint: string;
  href: string;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block rounded-2xl border border-line bg-card p-5"
    >
      <span className="flex items-center gap-2 text-sm text-muted">
        {icon ? <LinkedInIcon className="size-4" /> : null}
        {title}
      </span>
      <span className="mt-1 block text-base font-medium">{body}</span>
      <span className="mt-1 block text-sm text-muted">{hint}</span>
    </a>
  );
}
