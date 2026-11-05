// Regenerates public/sitemap.xml with per-page lastmod from git history.
// Run locally (`npm run sitemap`) and commit the result; Vercel clones shallow,
// so it is intentionally not run during `vite build`.
import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
const ORIGIN = "https://www.adilflow.com";
const landing = ["src/lib/landing.ts", "src/components/landing-page.tsx"];
const routes = {
  "/": ["src/routes/index.tsx"],
  "/services": ["src/routes/services.tsx"],
  "/portfolio": ["src/routes/portfolio.tsx"],
  "/pricing": ["src/routes/pricing.tsx", "src/components/pricing-cards.tsx"],
  "/about": ["src/routes/about.tsx"],
  "/contact": ["src/routes/contact.tsx"],
  "/services/ai-automation-agency": ["src/routes/services_.ai-automation-agency.tsx", ...landing],
  "/services/ai-chatbot-development": ["src/routes/services_.ai-chatbot-development.tsx", ...landing],
  "/services/web-development": ["src/routes/services_.web-development.tsx", ...landing],
  "/services/seo-services": ["src/routes/services_.seo-services.tsx", ...landing],
  "/services/paid-ads": ["src/routes/services_.paid-ads.tsx", ...landing],
  "/us/ai-automation-agency": ["src/routes/us.ai-automation-agency.tsx", ...landing],
  "/uk-europe/ai-automation-agency": ["src/routes/uk-europe.ai-automation-agency.tsx", ...landing],
  "/dubai/ai-automation-agency": ["src/routes/dubai.ai-automation-agency.tsx", ...landing],
  "/blog": ["src/routes/blog.index.tsx", "src/lib/blog-posts.ts"],
  "/blog/ai-automation-for-small-businesses": ["src/lib/blog-posts.ts"],
  "/blog/how-much-does-a-website-cost": ["src/lib/blog-posts.ts"],
  "/blog/remote-web-developer-vs-local-agency": ["src/lib/blog-posts.ts"],
};
const today = new Date().toISOString().slice(0, 10);
const lastmod = (files) => {
  try {
    if (execSync(`git status --porcelain -- ${files.join(" ")}`).toString().trim()) return today;
    return execSync(`git log -1 --format=%cs -- ${files.join(" ")}`).toString().trim() || today;
  } catch {
    return today;
  }
};
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(routes).map(([p, f]) => `  <url><loc>${ORIGIN}${p}</loc><lastmod>${lastmod(f)}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync("public/sitemap.xml", xml);
console.log(xml);
