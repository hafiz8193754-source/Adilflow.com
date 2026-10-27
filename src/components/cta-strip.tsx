import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaStrip() {
  return (
    <section className="dark-surface border-t border-ink-line bg-ink py-14 text-on-ink">
      <div className="site-wrap flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Ready to start? Get a quote.</h2>
          <p className="mt-2 text-base text-on-ink-muted">
            Websites, AI agents automation and Meta/Google ads. Reply within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="lime" size="lg">
            <Link to="/contact">Send an enquiry</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
