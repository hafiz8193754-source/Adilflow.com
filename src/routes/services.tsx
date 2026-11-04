import { CtaStrip } from "@/components/cta-strip";
import { Link, createFileRoute } from "@tanstack/react-router";
import { AiVideos } from "@/components/ai-videos";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { offerCatalogJson, pageHead, serviceCatalog } from "@/lib/seo";
import { agentAutomation, caseStudies, homeServices, moreServices, process, stack } from "@/lib/site";

const services = [...homeServices, ...moreServices];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () =>
    pageHead({
      title: "Services: AI Agents, Web Dev, SEO & Ads | Adilflow",
      description:
        "AI automation, chatbot development, full-stack websites, SEO and Google/Meta ads under one roof. See what each service includes and request a quote.",
      path: "/services",
    }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd data={offerCatalogJson} />
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">Services</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">AI automation, web development, SEO and ads</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            From marketing to development to AI automation — scoped as one engagement, or as a precise slice of it.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {serviceCatalog.map((item) => (
              <li key={item.path}>
                <a href={item.path} className="inline-flex min-h-11 items-center rounded-full border border-ink-line px-4 text-sm text-on-ink hover:border-accent hover:text-accent">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-accent/40 bg-ink-raised p-6 md:p-8">
            <p className="text-sm tracking-widest text-accent uppercase">{agentAutomation.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl text-on-ink md:text-4xl">{agentAutomation.title}</h2>
            <p className="mt-3 max-w-3xl text-base text-on-ink-muted md:text-lg">{agentAutomation.body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {agentAutomation.areas.map((area) => (
                <li key={area} className="rounded-full border border-ink-line px-3 py-1 text-sm text-on-ink">{area}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-line bg-card p-6">
              <h2 className="font-display text-3xl">{service.title}</h2>
              <p className="mt-3 text-base text-muted">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-base">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-ink" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outlineInk" className="mt-6">
                <Link to="/contact">Get started</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-surface bg-ink py-16 md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl text-on-ink">How the work compounds</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.slug} className="rounded-2xl border border-ink-line bg-ink-raised p-6">
                <p className="text-sm tracking-widest text-accent uppercase">{study.sector}</p>
                <h3 className="mt-2 font-display text-2xl text-on-ink">{study.title}</h3>
                <p className="mt-1 text-sm text-on-ink-muted">{study.client}</p>
                <p className="mt-3 text-base text-on-ink-muted">{study.body}</p>
                <ul className="mt-4 space-y-2">
                  {study.metrics.map((metric) => (
                    <li key={metric.label} className="text-base text-on-ink">
                      <span className="font-display text-2xl text-accent">{metric.value}</span>{" "}
                      {metric.label}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid gap-4 md:grid-cols-3">
          {stack.map((group) => (
            <article key={group.title} className="rounded-2xl border border-line bg-card p-6">
              <h2 className="font-display text-3xl">{group.title}</h2>
              <p className="mt-2 text-base text-muted">{group.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-2 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="site-wrap mt-14">
          <h2 className="font-display text-4xl">How we work together</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.n}>
                <p className="font-display text-3xl text-accent-ink">{step.n}</p>
                <h3 className="mt-2 text-base font-medium">{step.title}</h3>
                <p className="mt-2 text-base text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <AiVideos />
      <CtaStrip />
    </SiteShell>
  );
}
