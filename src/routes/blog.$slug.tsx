import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaStrip } from "@/components/cta-strip";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { getPost } from "@/lib/blog-posts";
import { ORIGIN, breadcrumbJson, faqPageJson, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: loaderData.titleTag,
          description: loaderData.metaDescription,
          path: `/blog/${loaderData.slug}`,
          type: "article",
        })
      : {},
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const url = `${ORIGIN}/blog/${post.slug}`;
  const postingJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    keywords: post.keywords.join(", "),
    author: { "@type": "Person", "@id": `${ORIGIN}/about#adil`, name: "Muhammad Adil", url: `${ORIGIN}/about` },
    publisher: { "@type": "Organization", "@id": `${ORIGIN}/#business`, name: "Adilflow", logo: { "@type": "ImageObject", url: `${ORIGIN}/favicon-32.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: `${ORIGIN}/og.jpg`,
  };
  return (
    <SiteShell>
      <JsonLd data={postingJson} />
      <JsonLd data={faqPageJson(post.faqs)} />
      <JsonLd data={breadcrumbJson([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])} />
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-on-ink-muted">
            <Link to="/" className="hover:text-on-ink">Home</Link> /{" "}
            <Link to="/blog" className="hover:text-on-ink">Blog</Link>
          </nav>
          <h1 className="mt-4 font-display text-4xl text-on-ink md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-on-ink-muted">
            By <Link to="/about" className="text-accent hover:underline">Muhammad Adil</Link> ·{" "}
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </p>
        </div>
      </section>
      <section className="bg-cream py-16 text-fg md:py-20">
        <article className="blog-prose site-wrap max-w-3xl" dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
      <CtaStrip />
    </SiteShell>
  );
}
