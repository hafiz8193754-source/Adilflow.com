import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={cn(
            "flex flex-col rounded-2xl p-6 md:p-7",
            plan.featured
              ? "bg-accent text-ink"
              : "border border-ink-line bg-ink-raised text-on-ink",
          )}
        >
          <h3 className="font-display text-3xl">{plan.name}</h3>
          <p className={cn("mt-2 text-base", plan.featured ? "text-ink/75" : "text-on-ink-muted")}>
            {plan.audience}
          </p>
          <p className="mt-6 font-display text-5xl leading-none">
            {plan.price}
            {plan.period ? (
              <span className="ml-2 font-sans text-base font-medium">{plan.period}</span>
            ) : null}
          </p>
          <ul className="mt-6 flex-1 space-y-2.5 text-base">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <Check className="mt-1 size-4 shrink-0" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant={plan.featured ? "outlineInk" : "lime"}
            className="mt-8 w-full"
          >
            <Link to="/contact">{plan.cta}</Link>
          </Button>
        </article>
      ))}
    </div>
  );
}
