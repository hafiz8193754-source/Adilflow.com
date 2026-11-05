import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/blog-posts";
import { ORIGIN, breadcrumbJson, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () =>
    pageHead({
      title: "Blog — AI Automation, Web Development & Growth | Adilflow",
      description:
        "Practical guides from Adilflow on AI automation, website costs and hiring web developers, for businesses in the US, UK, Europe and the UAE.",
      path: "/blog",
    }),
});

const collectionJson = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adilflow Blog",
  url: `${ORIGIN}/blog`,
  publisher: { "@id": `${ORIGIN}/#business` },
  hasPart: blogPosts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${ORIGIN}/blog/${p.slug}` })),
};

function BlogIndex() {
  return (
    <SiteShell>
      <JsonLd data={collectionJson} />
      <JsonLd data={breadcrumbJson([{ name: "Blog", path: "/blog" }])} />
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">Blog</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">Guides for growing businesses</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            Straight answers on AI automation, websites and working with a remote studio.
          </p>
        </div>
      </section>
      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-2xl border border-line bg-card p-6">
              <time dateTime={post.datePublished} className="text-sm text-muted">
                {new Date(post.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <h2 className="mt-2 font-display text-2xl">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-accent-ink">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-base text-muted">{post.metaDescription}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-5 inline-flex min-h-11 items-center text-base font-medium text-accent-ink"
              >
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaStrip />
    </SiteShell>
  );
}
