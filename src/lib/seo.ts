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
      { property: "og:site_name", content: "Muhammad Adil" },
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
  name: "Muhammad Adil",
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
  sameAs: [site.linkedin],
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
