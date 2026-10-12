import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

const explore = [
  { to: "/portfolio" as const, label: "Work" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/pricing" as const, label: "Pricing" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="dark-surface border-t border-ink-line bg-ink text-on-ink">
      <div className="site-wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">Adilflow</p>
          <p className="mt-3 max-w-sm text-base text-on-ink-muted">
            Any digital workflow, automated with AI agents — websites, ads, social, and video. One accountable partner.
          </p>
          <p className="mt-5 text-sm text-on-ink">Remote · {site.remote}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm tracking-widest text-on-ink-muted uppercase">Explore</p>
          <ul className="mt-3">
            {explore.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-11 items-center text-base text-on-ink hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/"
                hash="faq"
                className="inline-flex min-h-11 items-center text-base text-on-ink hover:text-accent"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-sm tracking-widest text-on-ink-muted uppercase">Contact</p>
          <ul className="mt-3">
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-base text-on-ink hover:text-accent"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center text-base text-on-ink hover:text-accent"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-wrap border-t border-ink-line py-5 text-sm text-on-ink-muted">
        © {new Date().getFullYear()} Adilflow. All rights reserved.
      </div>
    </footer>
  );
}
