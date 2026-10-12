import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { NotFoundPage } from "@/components/not-found";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Muhammad Adil — AI Agents, Automation, Web & Growth" },
      {
        name: "description",
        content:
          "Muhammad Adil builds fast, high-converting websites, AI automation and SEO & paid-media growth systems for businesses worldwide. Book a free call.",
      },
      { name: "theme-color", content: "#070B14" },
      { name: "author", content: "Muhammad Adil" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "preload",
        href: "/fonts/instrument-serif-400.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/instrument-serif-400-italic.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFoundPage,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-ink font-sans text-base text-on-ink">
        <Outlet />
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}
