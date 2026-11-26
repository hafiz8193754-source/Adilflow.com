import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";

export const legalUpdated = "26 November 2026";

export const legalLinkClass = "text-accent-ink underline underline-offset-4";

export function LegalPage({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">{kicker}</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">{title}</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">{lede}</p>
          <p className="mt-4 text-sm text-on-ink-muted">Last updated {legalUpdated}</p>
        </div>
      </section>
      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap max-w-3xl space-y-10 text-base leading-relaxed text-muted">
          {children}
        </div>
      </section>
    </SiteShell>
  );
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-3xl text-fg">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}
