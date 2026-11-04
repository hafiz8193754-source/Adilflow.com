import { Link } from "@tanstack/react-router";
import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { landings, type Landing, type LandingPath } from "@/lib/landing";
import { breadcrumbJson, faqPageJson, pageHead, serviceJson } from "@/lib/seo";
import { projects, site } from "@/lib/site";

export function landingHead(path: LandingPath) {
  const l: Landing = landings[path];
  return pageHead({ title: l.title, description: l.description, path: l.path });
}

export function LandingPage({ path }: { path: LandingPath }) {
  const l: Landing = landings[path];
  const work = l.projectSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter((p) => p !== undefined);
  const crumbs = l.path.startsWith("/services/")
    ? [{ name: "Services", path: "/services" }, { name: l.crumb, path: l.path }]
    : [{ name: l.crumb, path: l.path }];
  return (
    <SiteShell>
      <JsonLd data={serviceJson(l.serviceName, l.path, l.description, l.areaServed)} />
      <JsonLd data={faqPageJson(l.faqs)} />
      <JsonLd data={breadcrumbJson(crumbs)} />
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">{l.eyebrow}</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">{l.h1}</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">{l.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="lime" size="lg">
              <Link to="/contact">Get a quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid gap-4 md:grid-cols-2">
          {l.sections.map((s) => (
            <article key={s.heading} className="rounded-2xl border border-line bg-card p-6">
              <h2 className="font-display text-3xl">{s.heading}</h2>
              {s.body ? <p className="mt-3 text-base text-muted">{s.body}</p> : null}
              {s.points ? (
                <ul className="mt-4 space-y-2 text-base">
                  {s.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-ink" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="dark-surface bg-ink py-16 md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl text-on-ink">Related work</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {work.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-ink-line bg-ink-raised p-6">
                <p className="text-sm tracking-widest text-accent uppercase">{p.category}</p>
                <h3 className="mt-2 font-display text-2xl text-on-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-on-ink-muted">{p.client}</p>
                <p className="mt-3 text-base text-on-ink-muted">{p.description}</p>
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center text-base text-accent underline underline-offset-4">
                  View live site
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl">Frequently asked questions</h2>
          <dl className="mt-8 space-y-6">
            {l.faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-base text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-14 font-display text-3xl">Related services</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {l.related.map((r) => (
              <li key={r}>
                <a href={r} className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:border-fg">
                  {landings[r as LandingPath]?.crumb ?? r}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaStrip />
    </SiteShell>
  );
}
