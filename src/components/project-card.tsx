import { ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { projectSources } from "@/lib/images";
import type { Project } from "@/lib/site";

export function ProjectCard({
  project,
  label,
}: {
  project: Project;
  label?: string;
}) {
  const sources = projectSources[project.slug as keyof typeof projectSources];
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card text-fg">
      <div className="aspect-[16/10] overflow-hidden bg-cream-deep">
        {sources ? (
          <ResponsiveImage
            sources={sources}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            alt={`${project.title} website screenshot`}
            className="h-full w-full object-cover object-top"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl leading-tight">{label ?? project.title}</h3>
        <p className="mt-2 flex-1 text-base text-muted">{project.description}</p>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-fg underline decoration-fg/30 underline-offset-4 hover:decoration-fg"
        >
          Visit live site
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
