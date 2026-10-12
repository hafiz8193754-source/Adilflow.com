import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingServices, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const pricingNote =
  "Pricing is quoted after a short conversation. It varies by country, scope, and market, so every project gets a written quote agreed with you before work starts. No fixed price lists, no surprises.";

export function PricingCards() {
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-3">
      {pricingServices.map((plan) => (
        <article
          key={plan.name}
          className={cn(
            "flex flex-col rounded-2xl p-6 md:p-7",
            plan.featured ? "bg-accent text-ink" : "border border-ink-line bg-ink-raised text-on-ink",
          )}
        >
          <h3 className="font-display text-3xl">{plan.name}</h3>
          <p className={cn("mt-2 text-base", plan.featured ? "text-ink/75" : "text-on-ink-muted")}>
            {plan.audience}
          </p>
          <p className="mt-6 font-display text-3xl leading-tight">Custom quote</p>
          <p className={cn("mt-1 text-sm", plan.featured ? "text-ink/75" : "text-on-ink-muted")}>
            Agreed after a short call · varies by country &amp; scope
          </p>
          <ul className="mt-6 flex-1 space-y-2.5 text-base">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <Check className="mt-1 size-4 shrink-0" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-2">
            <Button asChild variant={plan.featured ? "outlineInk" : "lime"} className="w-full">
              <Link to="/contact">Get a quote</Link>
            </Button>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-current/30 px-3 py-2 text-center underline-offset-4 hover:underline"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Quote request: ${plan.name}`)}`}
                className="rounded-full border border-current/30 px-3 py-2 text-center underline-offset-4 hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const H = heading;
  return (
    <section id="pricing" className="dark-surface scroll-mt-20 bg-ink py-20 text-on-ink md:py-28">
      <div className="site-wrap">
        <p className="text-sm tracking-widest text-accent uppercase">Pricing</p>
        <H className="mt-3 font-display text-4xl md:text-5xl">Priced to your market, quoted to your brief</H>
        <p className="mt-4 max-w-2xl text-base text-on-ink-muted md:text-lg">{pricingNote}</p>
        <div className="mt-10">
          <PricingCards />
        </div>
        <p className="mt-6 text-base text-on-ink-muted">
          One-time projects and monthly retainers available. Ad spend is billed separately. Payment by bank transfer, Wise or Payoneer.
        </p>
      </div>
    </section>
  );
}
