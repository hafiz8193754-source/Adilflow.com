import { ArrowUpRight, Check } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { projectSources } from "@/lib/images";
import { experience, featuredProjects, type FeaturedProject } from "@/lib/site";

function FeaturedCard({ project, headingLevel }: { project: FeaturedProject; headingLevel: "h3" | "h2" }) {
  const sources = project.image ? projectSources[project.image as keyof typeof projectSources] : undefined;
  const Heading = headingLevel;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card text-fg">
      <div className="aspect-[16/10] overflow-hidden border-b border-line bg-cream-deep">
        {sources ? (
          <ResponsiveImage
            sources={sources}
            sizes="(min-width: 768px) 560px, 100vw"
            alt={`${project.title} — live site screenshot`}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <p className="font-display text-3xl">{project.domain}</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full border border-line px-3 py-1 text-muted">{project.domain}</span>
          {project.recent ? (
            <span className="rounded-full bg-ink px-3 py-1 text-on-ink">Built in the last 12 months</span>
          ) : null}
        </div>
        <Heading className="mt-3 font-display text-3xl leading-tight">{project.title}</Heading>
        <p className="mt-2 text-base text-muted">{project.overview}</p>

        <dl className="mt-4 grid gap-3 text-base">
          <div>
            <dt className="text-sm tracking-widest text-muted uppercase">My role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          {project.stack.length ? (
            <div>
              <dt className="text-sm tracking-widest text-muted uppercase">Stack</dt>
              <dd className="mt-2">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>

        {project.features.length ? (
          <>
            <p className="mt-4 text-sm tracking-widest text-muted uppercase">Key features built</p>
            <ul className="mt-2 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-base">
                  <Check className="mt-1 size-4 shrink-0 text-accent-ink" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {project.note ? <p className="mt-4 text-base text-muted">{project.note}</p> : null}

        <div className="mt-auto pt-5">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-fg underline decoration-fg/30 underline-offset-4 hover:decoration-fg"
            >
              Visit {project.domain}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <p className="inline-flex min-h-11 items-center text-base text-muted">Live link coming soon</p>
          )}
        </div>
      </div>
    </article>
  );
}

export function ExperienceFacts({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const muted = dark ? "text-on-ink-muted" : "text-muted";
  const line = dark ? "border-ink-line" : "border-line";
  const role = experience.roles[0];
  return (
    <div>
      <dl className={`grid gap-6 border-y ${line} py-6 sm:grid-cols-3`}>
        <div>
          <dt className={`text-sm ${muted}`}>Building websites since</dt>
          <dd className="mt-1 font-display text-4xl">{experience.websitesSince}</dd>
        </div>
        <div>
          <dt className={`text-sm ${muted}`}>
            {role.org} · {role.location}
          </dt>
          <dd className="mt-1 font-display text-4xl">{role.period}</dd>
        </div>
        <div>
          <dt className={`text-sm ${muted}`}>AI projects delivered</dt>
          <dd className="mt-1 font-display text-4xl">{experience.aiProjects}</dd>
        </div>
      </dl>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Core stack">
        {experience.stack.map((item) => (
          <li key={item} className={`rounded-full border ${line} px-3 py-1 text-sm ${muted}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturedProjects({
  headingLevel = "h2",
  showFacts = true,
}: {
  headingLevel?: "h1" | "h2";
  showFacts?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="scroll-mt-20 bg-cream py-16 text-fg md:py-24"
    >
      <div className="site-wrap">
        <p className="text-sm tracking-widest text-accent-ink uppercase">Featured live projects</p>
        <Heading id="featured-heading" className="mt-3 font-display text-4xl leading-tight md:text-5xl">
          Recent builds, live in production.
        </Heading>
        <p className="mt-4 max-w-2xl text-base text-muted">
          Full stack, React / Next.js and AI automation work — and open to remote roles with European teams.
          Each case study describes what you can see on the live site today.
        </p>
        {showFacts ? (
          <div className="mt-8">
            <ExperienceFacts />
          </div>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.slug} project={project} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
