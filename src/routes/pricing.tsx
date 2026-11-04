import { createFileRoute } from "@tanstack/react-router";
import { CtaStrip } from "@/components/cta-strip";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PricingSection } from "@/components/pricing-cards";
import { SiteShell } from "@/components/site-shell";
import { faqPageJson, pageHead } from "@/lib/seo";
import { faqs } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () =>
    pageHead({
      title: "Pricing: Web, AI Automation & Marketing | Adilflow",
      description:
        "How Adilflow prices websites, AI automation and marketing. Per-project quotes by scope and country; ad spend billed separately. Ask for a free estimate.",
      path: "/pricing",
    }),
});

function PricingPage() {
  return (
    <SiteShell>
      <JsonLd data={faqPageJson(faqs)} />
      <PricingSection heading="h1" />
      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl">Frequently asked questions</h2>
          <div className="mt-8">
            <FaqList tone="cream" />
          </div>
        </div>
      </section>
      <CtaStrip />
    </SiteShell>
  );
}
