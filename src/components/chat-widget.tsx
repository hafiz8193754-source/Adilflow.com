import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { ChatPanel } from "@/components/chat-panel";

const FOCUSABLE = 'button, [href], textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = panelRef.current;
    const launcher = buttonRef.current;
    const focusable = () =>
      Array.from(root?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
      );
    const frame = window.requestAnimationFrame(() => {
      const items = focusable();
      const field = items.find((el) => el.tagName === "TEXTAREA");
      (field ?? items[0])?.focus();
    });

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      launcher?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="dark-surface fixed bottom-4 left-4 z-40 grid size-14 place-items-center rounded-full bg-accent text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:bg-accent-hover md:bottom-6 md:left-6"
        aria-expanded={open}
        aria-controls="adilflow-chat"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close Adilflow chat" : "Open Adilflow chat"}</span>
        <MessageCircle className="size-7" aria-hidden="true" />
      </button>
      {open ? (
        <div
          ref={panelRef}
          id="adilflow-chat"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed bottom-20 left-3 z-40 w-[min(24rem,calc(100%-1.5rem))] md:bottom-24 md:left-6"
        >
          <ChatPanel
            inputIdPrefix="widget"
            titleId={titleId}
            onClose={() => setOpen(false)}
            className="h-[min(32rem,calc(100dvh-8rem))] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      ) : null}
    </>
  );
}
