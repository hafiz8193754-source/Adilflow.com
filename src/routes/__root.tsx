import { useEffect } from "react";
import { createRootRoute, HeadContent, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { NotFoundPage } from "@/components/not-found";
import appCss from "../styles.css?url";

const GA_ID = "G-KBPVMLYNST";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adilflow — AI Agents, Automation, Web & Growth" },
      {
        name: "description",
        content:
          "Adilflow builds fast, high-converting websites, AI automation and SEO & paid-media growth systems for businesses worldwide. Get a quote by email or WhatsApp.",
      },
      { name: "theme-color", content: "#070B14" },
      { name: "author", content: "Muhammad Adil" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
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
    scripts: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true});`,
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFoundPage,
});

function useGaPageViews() {
  const router = useRouter();
  useEffect(() => {
    // Initial load is counted by gtag('config'); only track subsequent navigations.
    let lastHref = window.location.href;
    return router.subscribe("onResolved", () => {
      const href = window.location.href;
      if (href === lastHref) return;
      lastHref = href;
      // onResolved fires before <HeadContent/> commits the new <title>, so
      // read the title from the resolved matches (deepest wins), then set it
      // and send the page_view after the next frame so DOM + GA agree.
      const matches = router.state.matches;
      let title: string | undefined;
      for (let i = matches.length - 1; i >= 0 && !title; i--) {
        const meta = (matches[i] as { meta?: Array<{ title?: string } | undefined> }).meta;
        title = meta?.find((m) => m?.title)?.title;
      }
      requestAnimationFrame(() => {
        if (title && document.title !== title) document.title = title;
        window.gtag?.("event", "page_view", {
          page_path: window.location.pathname + window.location.search,
          page_location: href,
          page_title: title ?? document.title,
        });
      });
    });
  }, [router]);
}

function RootDocument() {
  useGaPageViews();
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
