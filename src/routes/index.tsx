import { Link, createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PricingCards } from "@/components/pricing-cards";
import { ProjectCard } from "@/components/project-card";
import { ResponsiveImage } from "@/components/responsive-image";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { portraitSources } from "@/lib/images";
import { faqPageJson, pageHead } from "@/lib/seo";
import {
  agentAutomation,
  clientNames,
  faqs,
  heroStats,
  homeProjectOrder,
  homeServices,
  marketingResults,
  process,
  projects,
  site,
  testimonials,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "Adilflow — Web Development, AI Automation & Growth",
      description:
        "Muhammad Adil builds fast, high-converting websites, AI automation and SEO & paid-media growth systems for businesses worldwide. Book a free call.",
      path: "/",
    }),
});

function Home() {
  const selected = homeProjectOrder.map((slug) => projects.find((item) => item.slug === slug)!);

  return (
    <SiteShell>
      <JsonLd data={faqPageJson(faqs)} />
      <section className="dark-surface bg-ink pb-28 md:pb-20">
        <div className="site-wrap grid items-center gap-10 pt-12 md:grid-cols-12 md:gap-12 md:pt-16">
          <div className="md:col-span-7">
            <p className="flex items-center gap-2 text-sm tracking-widest text-on-ink uppercase">
              <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              Available for new projects · Working with clients worldwide
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-on-ink sm:text-5xl lg:text-6xl">
              Websites, AI automation & growth —{" "}
              <em className="text-accent italic">engineered as one system.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-ink-muted md:text-lg">
              I'm Muhammad Adil, founder of Adilflow. I design, build and scale
              high-converting websites, AI workflows and SEO & paid-media funnels
              for businesses in the US, UK, Europe and the Gulf — one accountable
              partner instead of three vendors.
            </p>
            <p className="mt-4 max-w-xl border-l-2 border-accent pl-4 text-base font-medium leading-relaxed text-on-ink md:text-lg">
              I can convert any digital workflow into automation with AI agents —
              ops, lead follow-up, content, CRM, support and internal tools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="lime" size="lg">
                <a href="#contact">Book a free call →</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">See selected work</a>
              </Button>
            </div>
            <p className="mt-5 pb-6 text-base md:pb-0">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-on-ink underline decoration-on-ink/40 underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Prefer chat? Message me on WhatsApp
              </a>
            </p>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl">
              <ResponsiveImage
                sources={portraitSources}
                sizes="260px"
                alt="Muhammad Adil, founder of Adilflow"
                priority
                className="aspect-[260/285] w-full object-cover object-top"
              />
              <p className="absolute inset-x-0 bottom-0 bg-ink px-3 py-3 text-sm leading-snug text-on-ink">
                Muhammad Adil — Full-stack developer · AI automation · Growth
              </p>
            </div>
          </div>
        </div>

        <div className="site-wrap mt-12 grid grid-cols-2 gap-8 border-t border-ink-line pt-8 md:grid-cols-4">
          {heroStats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-4xl text-on-ink md:text-5xl">{item.value}</p>
              <p className="mt-1 text-sm text-on-ink-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-surface border-y border-ink-line bg-ink py-8" aria-label="Selected clients and projects">
        <div className="site-wrap">
          <h2 className="text-center text-sm tracking-widest text-on-ink-muted uppercase">
            Selected clients and projects
          </h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {clientNames.map((name) => (
              <li key={name} className="text-sm text-on-ink">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 bg-cream py-20 text-fg md:py-28">
        <div className="site-wrap">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Live products, built to convert.</h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            A selection from 40+ shipped websites — growth brands, home services, hospitality, education and healthcare.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {selected.map((project) => (
              <ProjectCard key={project.slug} project={project} label={project.homeLabel} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/portfolio"
              className="inline-flex min-h-11 items-center text-base font-medium text-fg underline decoration-fg/30 underline-offset-4"
            >
              Full portfolio
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="dark-surface scroll-mt-20 bg-ink py-20 md:py-28">
        <div className="site-wrap">
          <h2 className="font-display text-4xl text-on-ink md:text-5xl">Services</h2>
          <div className="mt-8 rounded-2xl border border-accent/40 bg-ink-raised p-6 md:p-8">
            <p className="text-sm tracking-widest text-accent uppercase">{agentAutomation.eyebrow}</p>
            <h3 className="mt-2 font-display text-3xl text-on-ink md:text-4xl">{agentAutomation.title}</h3>
            <p className="mt-3 max-w-3xl text-base text-on-ink-muted md:text-lg">{agentAutomation.body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {agentAutomation.areas.map((area) => (
                <li key={area} className="rounded-full border border-ink-line px-3 py-1 text-sm text-on-ink">{area}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {homeServices.map((service) => (
              <article key={service.slug} className="rounded-2xl border border-ink-line bg-ink-raised p-6">
                <h3 className="font-display text-3xl text-on-ink">{service.title}</h3>
                <p className="mt-3 text-base text-on-ink-muted">{service.summary}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex min-h-11 items-center text-base text-accent"
                >
                  See the detail
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 bg-cream py-20 text-fg md:py-28">
        <div className="site-wrap">
          <h2 className="font-display text-4xl md:text-5xl">Process</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      <section id="results" className="dark-surface scroll-mt-20 bg-ink py-20 md:py-28">
        <div className="site-wrap">
          <h2 className="font-display text-4xl text-on-ink md:text-5xl">Results</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketingResults.map((item) => (
              <article key={item.label} className="rounded-2xl border border-ink-line bg-ink-raised p-6">
                <p className="font-display text-5xl text-accent">{item.value}</p>
                <h3 className="mt-3 text-base font-medium text-on-ink">{item.label}</h3>
                <p className="mt-2 text-base text-on-ink-muted">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 text-fg md:py-28">
        <div className="site-wrap">
          <h2 className="font-display text-4xl md:text-5xl">What partners say</h2>
          <div className="mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.name} className="flex flex-col rounded-2xl border border-line bg-card p-6">
                <blockquote className="flex-1 text-base leading-relaxed">“{item.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center text-base underline decoration-fg/30 underline-offset-4"
                  >
                    Visit website
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20 bg-cream-deep py-20 text-fg md:py-28">
        <div className="site-wrap">
          <h2 className="font-display text-4xl md:text-5xl">Pricing</h2>
          <div className="mt-10">
            <PricingCards />
          </div>
          <p className="mt-6 text-base text-muted">
            Ad spend is billed separately. Payment by bank transfer, Wise or Payoneer.
          </p>
        </div>
      </section>

      <section id="faq" className="dark-surface scroll-mt-20 bg-ink py-20 text-on-ink md:py-28">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl">FAQ</h2>
          <div className="mt-8">
            <FaqList tone="ink" />
          </div>
        </div>
      </section>

      <section id="contact" className="dark-surface scroll-mt-20 border-t border-ink-line bg-ink py-20 md:py-28">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl text-on-ink md:text-5xl">Have a project in mind? Let's talk.</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="lime" size="lg">
              <Link to="/contact">Book a free call</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${site.email}`}>Email me</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-on-ink-muted">Usually replies within an hour on WhatsApp</p>
        </div>
      </section>
    </SiteShell>
  );
}
