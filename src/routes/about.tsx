import { CtaStrip } from "@/components/cta-strip";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { SiteShell } from "@/components/site-shell";
import { portraitSources } from "@/lib/images";
import { pageHead } from "@/lib/seo";
import { awards, beyond, education, journey, site, skillGroups, traits } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageHead({
      title: "About Muhammad Adil",
      description:
        "Muhammad Adil — full-stack development, AI automation, and growth since 2019, working with clients worldwide. Contact by email or WhatsApp to hire.",
      path: "/about",
    }),
});

export function AboutPage() {
  return (
    <SiteShell>
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">About</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">Muhammad Adil</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            {site.role}. {site.remote}.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <ResponsiveImage
              sources={portraitSources}
              sizes="(min-width: 768px) 280px, 80vw"
              alt="Portrait of Muhammad Adil"
              className="aspect-[260/285] w-full max-w-[260px] rounded-2xl object-cover object-top"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-muted">
              Results-driven full stack developer and digital marketer, practising since 2019 —
              multi-platform advertising, AI automation, and conversion-focused campaigns. I
              combine technical product skills with data-driven marketing to build high-performing
              digital systems for B2B and B2C teams.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Academic achiever with a 3.79 / 4 CGPA and Provincial Debate Champion — analytical
              precision and persuasive communication in the same brief. Fluent in English and Urdu,
              with Arabic reading proficiency. Working with clients worldwide.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {traits.map((trait) => (
                <li key={trait} className="flex items-center gap-2 text-base">
                  <Check className="size-4 text-accent-ink" aria-hidden="true" />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="dark-surface bg-ink py-16 md:py-24">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl text-on-ink">The path here</h2>
          <ol className="mt-10">
            {journey.map((item) => (
              <li key={item.year} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-ink-line py-5">
                <p className="font-display text-xl text-accent">{item.year}</p>
                <div>
                  <h3 className="text-base font-medium text-on-ink">{item.title}</h3>
                  <p className="mt-1 text-base text-on-ink-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl">Skills & technologies</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-base font-medium">{group.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-2 text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-surface bg-ink py-16 md:py-24">
        <div className="site-wrap grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-ink-line bg-ink-raised p-6">
            <h2 className="font-display text-3xl text-on-ink">Education</h2>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="text-base font-medium text-on-ink">{item.title}</p>
                  <p className="text-base text-on-ink-muted">{item.org}</p>
                  <p className="text-sm text-accent">{item.meta}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-ink-line bg-ink-raised p-6">
            <h2 className="font-display text-3xl text-on-ink">Certifications & awards</h2>
            <ul className="mt-5 space-y-3">
              {awards.map((award) => (
                <li key={award} className="flex gap-2 text-base text-on-ink-muted">
                  <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {award}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl">Beyond the work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {beyond.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-card p-5">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-base text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip />
    </SiteShell>
  );
}
