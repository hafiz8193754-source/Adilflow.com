import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () =>
    pageHead({
      title: "Privacy Policy — Adilflow",
      description:
        "How Adilflow uses the contact form, email, Google Analytics 4 and Vercel Analytics. Contact hello@adilflow.com with any privacy questions.",
      path: "/privacy-policy",
    }),
});

export function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">Legal</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            This page explains what information Adilflow collects on adilflow.com and how it is used.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap max-w-3xl space-y-10 text-base leading-relaxed text-muted">
          <div>
            <h2 className="font-display text-3xl text-fg">Contact form and email</h2>
            <p className="mt-3">
              The <Link to="/contact" className="text-accent-ink underline underline-offset-4">contact form</Link> collects
              your name, email address, message, and any phone number, subject or budget you choose to include. That
              information is sent by email through Resend so we can reply to your enquiry, usually from{" "}
              <a href={`mailto:${site.email}`} className="text-accent-ink underline underline-offset-4">
                {site.email}
              </a>
              . We use it only to handle your request and related follow-up.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-fg">Analytics</h2>
            <p className="mt-3">
              The site uses Google Analytics 4 and Vercel Analytics to understand how pages are used — for example,
              which pages are visited and in which country. These tools may set cookies or similar identifiers and
              collect device and usage information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-fg">How to reach us</h2>
            <p className="mt-3">
              For a privacy question, email{" "}
              <a href={`mailto:${site.email}`} className="text-accent-ink underline underline-offset-4">
                {site.email}
              </a>{" "}
              or use the <Link to="/contact" className="text-accent-ink underline underline-offset-4">contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
