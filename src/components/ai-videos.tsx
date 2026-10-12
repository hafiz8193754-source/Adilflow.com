import { aiVideos, ruoDisclaimer } from "@/lib/site";

export function AiVideos({ id = "videos" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-cream-deep py-20 text-fg md:py-28">
      <div className="site-wrap">
        <p className="text-sm tracking-widest text-accent-ink uppercase">AI videos · Agent-made</p>
        <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
          Video generation, <em className="italic">run by AI agents.</em>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted">
          Product explainers and brand films produced through AI agent workflows — scripting, visuals,
          and edit assembled as one automated pipeline, with human review before delivery.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {aiVideos.map((video) => (
            <figure key={video.src} className="overflow-hidden rounded-2xl border border-line bg-card">
              <video
                className="aspect-video w-full bg-ink object-cover"
                src={video.src}
                poster={video.poster}
                controls
                muted
                playsInline
                preload="none"
              >
                <track kind="captions" />
              </video>
              <figcaption className="p-5">
                <h3 className="font-display text-2xl">{video.title}</h3>
                <p className="mt-2 text-base text-muted">{video.caption}</p>
                <p className="mt-3 text-sm font-medium">{ruoDisclaimer}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
