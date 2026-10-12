import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const quote =
    pathname === "/"
      ? { to: "/" as const, hash: "contact" }
      : { to: "/contact" as const, hash: undefined };

  return (
    <header className="dark-surface sticky top-0 z-50 border-b border-ink-line bg-ink/95 text-on-ink backdrop-blur-md">
      <div className="site-wrap flex h-16 items-center justify-between gap-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === "/" && hash === item.hash;
            return (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className={cn(
                  "inline-flex min-h-11 items-center px-2.5 text-sm text-on-ink-muted hover:text-on-ink",
                  active && "text-on-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="lime">
            <Link to={quote.to} hash={quote.hash}>
              Get a quote
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-ink-line text-on-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="dark-surface fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-ink px-5 pb-10 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="inline-flex min-h-11 items-center border-b border-ink-line text-base text-on-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild variant="outline" className="w-full">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="lime" className="w-full">
              <Link to={quote.to} hash={quote.hash}>
                Get a quote
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
