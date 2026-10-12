import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PricingCards } from "@/components/pricing-cards";
import { SiteShell } from "@/components/site-shell";
import { faqPageJson, pageHead } from "@/lib/seo";
import { addons, faqs } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () =>
    pageHead({
      title: "Pricing — Websites from $500, Growth from $300 | Adilflow",
      description:
        "Website projects from $500. Growth partnerships from $300 a month. Custom systems quoted to the brief. USD, paid by bank transfer, Wise, or Payoneer.",
      path: "/pricing",
    }),
});

function PricingPage() {
  return (
    <SiteShell>
      <JsonLd data={faqPageJson(faqs)} />
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">Pricing</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">Clear USD pricing</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            A website, a monthly growth partnership, or a custom system. No country-specific starter budgets.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap">
          <PricingCards />
          <p className="mt-6 text-base text-muted">
            Ad spend is billed separately. Payment by bank transfer, Wise or Payoneer.
          </p>
        </div>
      </section>

      <section className="bg-cream-deep py-16 text-fg md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl">Optional add-ons</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {addons.map((addon) => (
              <li
                key={addon.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-line bg-card px-5 py-4"
              >
                <span className="text-base">{addon.name}</span>
                <span className="text-base font-medium">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dark-surface bg-ink py-16 text-on-ink md:py-24">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl">Frequently asked questions</h2>
          <div className="mt-8">
            <FaqList tone="ink" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
