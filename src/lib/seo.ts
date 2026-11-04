import { site, socials } from "@/lib/site";

export const ORIGIN = "https://www.adilflow.com";

const SHARE_IMAGE = `${ORIGIN}/og.jpg`;

export function absoluteUrl(path: string) {
  if (path === "/") return `${ORIGIN}/`;
  return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Adilflow" },
      { property: "og:image", content: SHARE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const professionalServiceJson = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${ORIGIN}/#business`,
  name: "Adilflow",
  url: `${ORIGIN}/`,
  image: `${ORIGIN}/images/adil-260.webp`,
  logo: `${ORIGIN}/favicon-32.png`,
  telephone: site.phoneTel,
  email: site.email,
  priceRange: "$$",
  description:
    "Adilflow builds AI agents, chatbots, workflow automation, full-stack websites, SEO and Google/Meta ads for businesses in the US, UK, Europe, the UAE and worldwide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  founder: { "@id": `${ORIGIN}/about#adil` },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "European Union" },
    { "@type": "Country", name: "United Arab Emirates" },
    "Worldwide",
  ],
  knowsAbout: ["Web development", "AI agents automation", "AI chatbots", "SEO", "Google ads", "Meta ads"],
  sameAs: [site.whatsappBase, socials.facebook, socials.instagram, socials.tiktok, socials.x],
  hasOfferCatalog: { "@id": `${ORIGIN}/services#catalog` },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phoneTel,
      url: `${ORIGIN}/contact`,
      areaServed: ["US", "GB", "EU", "AE", "Worldwide"],
      availableLanguage: ["English"],
    },
  ],
};

export const serviceCatalog = [
  { name: "AI agents & workflow automation", path: "/services/ai-automation-agency" },
  { name: "AI chatbot development", path: "/services/ai-chatbot-development" },
  { name: "Full-stack web development", path: "/services/web-development" },
  { name: "SEO services", path: "/services/seo-services" },
  { name: "Paid media (Google & Meta ads)", path: "/services/paid-ads" },
] as const;

const SERVED = ["United States", "United Kingdom", "European Union", "United Arab Emirates", "Worldwide"];

export const offerCatalogJson = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${ORIGIN}/services#catalog`,
  name: "Adilflow services",
  itemListElement: serviceCatalog.map(({ name, path }) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      url: `${ORIGIN}${path}`,
      provider: { "@id": `${ORIGIN}/#business` },
      areaServed: SERVED,
    },
  })),
};

export function serviceJson(name: string, path: string, description: string, areaServed: string[] = SERVED) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${ORIGIN}${path}`,
    serviceType: name,
    provider: { "@id": `${ORIGIN}/#business` },
    areaServed,
  };
}

export const personJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${ORIGIN}/about#adil`,
  name: site.person,
  jobTitle: "Full Stack Developer, AI Automation Specialist & Digital Marketer",
  worksFor: { "@id": `${ORIGIN}/#business` },
  url: `${ORIGIN}/about`,
  sameAs: [socials.linkedinPerson, socials.x],
};

export function breadcrumbJson(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const contactPageJson = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Adilflow — Get a Quote",
  url: `${ORIGIN}/contact`,
  about: { "@id": `${ORIGIN}/#business` },
};

export function faqPageJson(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
