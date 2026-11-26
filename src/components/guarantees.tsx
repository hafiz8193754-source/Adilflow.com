import { Link } from "@tanstack/react-router";
import { guarantees } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GuaranteeGrid({
  tone = "cream",
  compact = false,
}: {
  tone?: "cream" | "ink";
  compact?: boolean;
}) {
  const onInk = tone === "ink";
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {guarantees.map((item) => (
        <article
          key={item.n}
          className={cn(
            "rounded-2xl",
            compact ? "p-4" : "p-6",
            onInk ? "border border-ink-line bg-ink-raised" : "border border-line bg-card",
          )}
        >
          <p
            className={cn(
              "text-sm tracking-widest uppercase",
              onInk ? "text-accent" : "text-accent-ink",
            )}
          >
            {item.n}
          </p>
          {compact ? (
            <p className={cn("mt-2 text-base font-medium", onInk ? "text-on-ink" : "text-fg")}>
              {item.title}
            </p>
          ) : (
            <h3 className={cn("mt-2 font-display text-3xl", onInk ? "text-on-ink" : "text-fg")}>
              {item.title}
            </h3>
          )}
          <p className={cn("mt-3 text-base", onInk ? "text-on-ink-muted" : "text-muted")}>
            {item.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export function GuaranteesSection() {
  return (
    <section id="guarantees" className="scroll-mt-20 bg-cream py-20 text-fg md:py-28">
      <div className="site-wrap">
        <p className="text-sm tracking-widest text-accent-ink uppercase">Guarantees</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">
          Agreed in writing, before work starts
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
          Two commitments on every project.
        </p>
        <div className="mt-10">
          <GuaranteeGrid />
        </div>
        <p className="mt-8 text-base text-muted">
          The{" "}
          <Link to="/terms" className="text-accent-ink underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          cover how this works on a project. The{" "}
          <Link to="/privacy" className="text-accent-ink underline underline-offset-4">
            Privacy Policy
          </Link>{" "}
          covers what happens to an enquiry.
        </p>
      </div>
    </section>
  );
}
