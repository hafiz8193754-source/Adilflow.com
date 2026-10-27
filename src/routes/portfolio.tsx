import { CtaStrip } from "@/components/cta-strip";
import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FeaturedProjects } from "@/components/featured-projects";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";
import { projects, type ProjectCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

const filters = ["All", "Web Development", "E-commerce", "Brand & Growth"] as const;

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () =>
    pageHead({
      title: "Selected Work — 40+ Live Websites | Adilflow",
      description:
        "Live websites by Adilflow: education, home services, hospitality, commerce, and growth brands. A selection from 40+ shipped sites. Get a quote for yours.",
      path: "/portfolio",
    }),
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === (filter as ProjectCategory)),
    [filter],
  );

  return (
    <SiteShell>
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">Work</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">Portfolio</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            Live products across education, hospitality, home services, commerce, and growth. Open any card to visit the site.
          </p>
        </div>
      </section>

      <FeaturedProjects showFacts={false} />

      <section className="border-t border-line bg-cream py-14 text-fg md:py-20" aria-labelledby="all-projects-heading">
        <div className="site-wrap">
          <h2 id="all-projects-heading" className="mb-6 font-display text-4xl leading-tight">
            All projects
          </h2>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-4 text-sm",
                  filter === item ? "bg-ink text-on-ink" : "border border-line text-muted",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="mt-6 text-base text-muted">
            {list.length} live {list.length === 1 ? "project" : "projects"}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {list.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <CtaStrip />
    </SiteShell>
  );
}
