import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <SiteShell>
      <section className="dark-surface bg-ink py-24">
        <div className="site-wrap max-w-xl">
          <p className="text-sm tracking-widest text-accent uppercase">404</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink">This page is not on the site.</h1>
          <p className="mt-4 text-base text-on-ink-muted">
            The link may be out of date. The work, services, and contact paths are still here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="lime">
              <Link to="/">Back home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
