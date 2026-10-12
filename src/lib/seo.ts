import { site } from "@/lib/site";

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
  name: "Adilflow",
  url: `${ORIGIN}/`,
  image: `${ORIGIN}/images/adil-260.webp`,
  telephone: site.phoneTel,
  email: site.email,
  currenciesAccepted: "USD",
  founder: {
    "@type": "Person",
    name: site.person,
  },
  areaServed: ["Worldwide", "US", "UK", "EU", "Gulf"],
  sameAs: [site.whatsappBase],
  description:
    "Hire Adilflow for web development, AI agents automation, SEO and Meta/Google ads. Contact by email or WhatsApp for a quote.",
  knowsAbout: ["Web development", "AI agents automation", "Meta ads", "Google ads", "LinkedIn ads", "TikTok ads", "SEO", "AI video generation"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phoneTel,
      url: `${ORIGIN}/contact`,
      areaServed: ["Worldwide", "US", "GB", "EU", "AE", "SA"],
      availableLanguage: ["English", "Urdu"],
    },
  ],
};

export const contactPageJson = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Adilflow — Get a Quote",
  url: `${ORIGIN}/contact`,
  about: { "@type": "ProfessionalService", name: "Adilflow", email: site.email, telephone: site.phoneTel },
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
