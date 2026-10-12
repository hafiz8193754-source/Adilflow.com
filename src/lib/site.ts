export const site = {
  name: "Adilflow",
  person: "Muhammad Adil",
  role: "Full Stack Developer, AI Automation Specialist & Digital Marketer",
  shortRole: "Full-stack developer · AI automation · Growth",
  email: "hafiz8193754@gmail.com",
  phoneDisplay: "+44 7878 268504",
  phoneTel: "+447878268504",
  whatsapp:
    "https://wa.me/447878268504?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  whatsappBase: "https://wa.me/447878268504",
  linkedin: "https://www.linkedin.com/in/muhammad-adil-77248b2ab/",
  linkedinLabel: "linkedin.com/in/muhammad-adil",
  availability: "Available for new projects",
  remote: "Working with clients worldwide",
} as const;

export const nav = [
  { hash: "work", label: "Work" },
  { hash: "services", label: "Services" },
  { hash: "process", label: "Process" },
  { hash: "results", label: "Results" },
  { hash: "pricing", label: "Pricing" },
  { hash: "faq", label: "FAQ" },
] as const;

export const heroStats = [
  { value: "40+", label: "Live websites shipped" },
  { value: "40%", label: "Enrolment lift for Learn Quran With Kifayat" },
  { value: "Up to 3×", label: "Example paid-media ROAS" },
  { value: "Up to 4×", label: "Example organic traffic lift" },
] as const;

export const marketingResults = [
  {
    value: "Up to 3×",
    label: "Example ROAS",
    note: "Illustrative: best-case Google Ads + Meta accounts; results vary by offer and budget",
  },
  {
    value: "Up to 4×",
    label: "Example organic traffic lift",
    note: "Illustrative: example range from technical SEO and content work; not a guarantee",
  },
  {
    value: "40%",
    label: "Enrolment lift",
    note: "Learn Quran With Kifayat, reported by the founder after launch",
  },
  {
    value: "Up to 60%",
    label: "Lower cost-per-lead (example)",
    note: "Illustrative: example reduction versus prior in-house campaigns; varies by account",
  },
  {
    value: "30K+",
    label: "Audience grown",
    note: "Illustrative: combined owned social and email audiences across client accounts",
  },
  {
    value: "Up to 2×",
    label: "Qualified leads (example)",
    note: "Illustrative: example lift after tracking, landing pages, and follow-up automation",
  },
] as const;

export const clientNames = [
  "TikMove",
  "Saucedo Pools & Spas",
  "Ferienwohnung Fiescheralp",
  "Urke Gartneri",
  "Inzimation Edu",
  "Willson Home Patient Care",
  "Team Pat The Roc",
  "AI Aunties",
  "Dale Cleaners",
  "ProBuilt Window Screens",
  "NB Fashion",
  "PSCO",
] as const;

export const caseStudies = [
  {
    slug: "education",
    sector: "Education",
    title: "A tutoring brand that finally converts visitors into enrolled students",
    client: "Learn Quran With Kifayat",
    channels: ["Web platform", "WhatsApp", "Local SEO"],
    body: "Class scheduling, fee management, and WhatsApp were rebuilt as one enrolment path — not three disconnected pages. Families could understand the offer and book without a phone tag.",
    metrics: [
      { value: "40%", label: "Enrolment increase after launch" },
      { value: "1", label: "WhatsApp path from every page" },
    ],
  },
  {
    slug: "paid",
    sector: "Performance",
    title: "Paid media treated as a pipeline, not a spend line",
    client: "Multi-brand retainers",
    channels: ["Google Ads", "Meta Ads", "TikTok Ads"],
    body: "Creative, landing pages, and conversion tracking planned together. Budgets moved toward the campaigns that produced qualified conversations — not vanity clicks.",
    metrics: [
      { value: "Up to 3×", label: "Example blended ROAS (illustrative)" },
      { value: "Up to 60%", label: "Example cost-per-lead reduction (illustrative)" },
    ],
  },
  {
    slug: "commerce",
    sector: "E-commerce",
    title: "Storefronts structured so shoppers can compare, trust, and buy",
    client: "Fashion, electronics, and specialty retail",
    channels: ["Store UX", "SEO", "CRO"],
    body: "Catalogue architecture, product credibility, and mobile checkout paths for independent brands — from wedding fashion to electronics and specialty retail.",
    metrics: [
      { value: "7", label: "Live commerce storefronts" },
      { value: "Up to 2×", label: "Example qualified enquiry lift (illustrative)" },
    ],
  },
] as const;

export const tech = [
  "React",
  "Laravel",
  "Node.js",
  "Python",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "WordPress",
  "MySQL",
  "MongoDB",
  "ChatGPT API",
  "Make.com",
  "Zapier",
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Figma",
  "Google Analytics",
] as const;

export type ProjectCategory = "Web Development" | "E-commerce" | "Brand & Growth";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  description: string;
  outcome: string;
  href: string;
  tech: string[];
  homeLabel?: string;
};

export const homeProjectOrder = [
  "tikmove",
  "saucedo",
  "inzimation",
  "fiescher",
  "urke",
  "willson",
] as const;

export const projects: Project[] = [
  {
    slug: "inzimation",
    title: "Inzimation Edu",
    client: "Mathematics tutoring platform",
    category: "Web Development",
    description:
      "A full tutoring product — class scheduling, student progress tracking, and a conversion-led presence for O-Level, A-Level, and IGCSE programmes.",
    outcome: "Platform, scheduling, and enrolment UX delivered as one system.",
    href: "https://www.inzimationedu.com/",
    tech: ["React", "Scheduling", "Lead Capture"],
    homeLabel: "Inzimation Edu",
  },
  {
    slug: "saucedo",
    title: "Saucedo Pools & Spas",
    client: "Pool and spa contractor, USA",
    category: "Web Development",
    description:
      "A service-and-gallery site for custom pools, spas, and outdoor living — structured around estimates, proof of work, and local search.",
    outcome: "Project proof up front, enquiry-first UX for a US home-services brand.",
    href: "https://saucedospoolsandspas.com/",
    tech: ["WordPress", "Local SEO", "Lead Capture"],
    homeLabel: "Saucedo Pools & Spas (USA)",
  },
  {
    slug: "nbfashion",
    title: "NB Fashion",
    client: "Wedding & occasion wear",
    category: "E-commerce",
    description:
      "A storefront for hand-embroidered wedding fashion — collections, craftsmanship, and a path from lookbook to order without friction.",
    outcome: "Catalogue UX and product storytelling for a heritage fashion label.",
    href: "https://nbfashion.shop/",
    tech: ["E-commerce", "Product UX", "SEO"],
  },
  {
    slug: "albashar",
    title: "Al Bashar Store",
    client: "Consumer electronics retail",
    category: "E-commerce",
    description:
      "An online electronics store for headphones, earbuds, speakers, and wearables — merchandised to compare, trust, and check out on mobile.",
    outcome: "Product-first commerce with secure checkout and search-ready copy.",
    href: "https://albasharstore.com/",
    tech: ["E-commerce", "CRO", "SEO"],
  },
  {
    slug: "fiescher",
    title: "Ferienwohnung Fiescheralp",
    client: "Alpine holiday apartment, Switzerland",
    category: "Web Development",
    description:
      "A hospitality site for a ski-in apartment at 2,200 m — photography, seasonality, and booking information presented with editorial calm.",
    outcome: "A destination-grade stay page for an alpine rental.",
    href: "https://ferienwohnung.godigitalhost.com",
    tech: ["Hospitality", "Content System", "SEO"],
    homeLabel: "Ferienwohnung Fiescheralp (Switzerland)",
  },
  {
    slug: "ah-solar",
    title: "AH Solar Solutions",
    client: "Wholesale solar",
    category: "E-commerce",
    description:
      "A conversion-focused wholesale site for Jinko, Canadian Solar, Longi, and JA Solar panels — built to turn catalogue browsers into qualified enquiries.",
    outcome: "Clear product architecture, enquiry-first UX, and search-ready copy.",
    href: "https://www.ahsolarsolutions.com/",
    tech: ["React", "SEO", "Lead Capture"],
  },
  {
    slug: "willson",
    title: "Willson Home Patient Care",
    client: "Home healthcare",
    category: "Web Development",
    description:
      "A calm, trustworthy service site for 24/7 nursing, caregiving, and in-home support — designed so families can understand care options and book with confidence.",
    outcome: "Service clarity, mobile-first booking paths, and a professional care presence.",
    href: "https://www.willsonhomepatientcare.com/",
    tech: ["React", "Responsive UI", "Local SEO"],
    homeLabel: "Willson Home Patient Care",
  },
  {
    slug: "kafayat",
    title: "Learn Quran With Kifayat",
    client: "Quranic education",
    category: "Web Development",
    description:
      "Class scheduling, fee management, and WhatsApp integration for Tajweed, Tafseer, and Quran programmes — a site families can actually enrol through.",
    outcome: "Enrolment increased 40% after launch.",
    href: "https://learnquranwithkafayat.com/",
    tech: ["Scheduling", "WhatsApp", "Local SEO"],
  },
  {
    slug: "ptpc",
    title: "PTPC Tourism",
    client: "Tourism promotion council",
    category: "Brand & Growth",
    description:
      "An institutional website for a national tourism council — destinations, culture, and mandate presented with editorial weight.",
    outcome: "A credible public-facing presence with destination storytelling.",
    href: "https://ptpctourism.com/",
    tech: ["HTML/CSS", "Content System", "SEO"],
  },
  {
    slug: "rao",
    title: "Rao Home Appliances",
    client: "Retail & e-commerce",
    category: "E-commerce",
    description:
      "A product-first storefront for genuine irons, blenders, and kettles — structured so shoppers can compare, trust, and buy without friction.",
    outcome: "Catalogue UX, product credibility, and a storefront built to convert walk-in demand online.",
    href: "https://raohomeappliances.com/",
    tech: ["E-commerce", "Product UX", "SEO"],
  },
  {
    slug: "tikmove",
    title: "TikMove",
    client: "TikTok Shop growth partner",
    category: "Brand & Growth",
    description:
      "A sharp marketing site for a TikTok Shop growth partner — positioning, proof, and a direct path from interest to a strategy conversation.",
    outcome: "Agency-grade narrative, high-contrast visual system, and conversion-led landing structure.",
    href: "https://www.tikmove.com/",
    tech: ["React", "Landing Systems", "Performance"],
    homeLabel: "TikMove",
  },
  {
    slug: "deep-clean",
    title: "Deep Cleaning Service",
    client: "Home & office cleaning",
    category: "Web Development",
    description:
      "A local-services site for residential and commercial deep cleaning — packages, coverage, and WhatsApp booking in one clean flow.",
    outcome: "Local SEO foundation, package clarity, and a mobile booking path.",
    href: "https://deepcleaningservice.online/",
    tech: ["Local SEO", "WhatsApp", "Responsive UI"],
  },
  {
    slug: "patroc",
    title: "Team Pat The Roc",
    client: "Sports & entertainment brand",
    category: "Brand & Growth",
    description:
      "A brand site for a sports and entertainment team — identity, story, and a direct line to the community around the name.",
    outcome: "A memorable public presence with clear brand hierarchy.",
    href: "https://teampattheroc.com",
    tech: ["Brand Site", "Responsive UI", "SEO"],
  },
  {
    slug: "aiaunties",
    title: "AI Aunties",
    client: "AI product studio",
    category: "Web Development",
    description:
      "A product marketing site for an AI studio — positioning the offer with restraint so the product, not the decoration, does the talking.",
    outcome: "A focused, high-clarity presence for an AI brand.",
    href: "https://aiaunties.com/",
    tech: ["React", "Product UX", "Performance"],
  },
  {
    slug: "psco",
    title: "PSCO",
    client: "Industrial group",
    category: "Web Development",
    description:
      "A corporate site for an industrial group — capabilities, divisions, and a professional enquiry path for B2B buyers.",
    outcome: "Clear information architecture for a multi-division business.",
    href: "https://home.psco.com.pk/",
    tech: ["Corporate Web", "IA", "SEO"],
  },
  {
    slug: "amargosa",
    title: "Visit Amargosa",
    client: "Destination marketing, USA",
    category: "Brand & Growth",
    description:
      "A destination site for Amargosa — places to go, reasons to stay, and a visitor-facing narrative for a desert town.",
    outcome: "Tourism storytelling with practical visitor information.",
    href: "https://visitamargosa.com/",
    tech: ["Destination", "Content System", "SEO"],
  },
  {
    slug: "urke",
    title: "Urke Gartneri",
    client: "Horticulture, Norway",
    category: "Web Development",
    description:
      "A Norwegian nursery site — plants, seasons, and a horticulture business presented with Scandinavian restraint.",
    outcome: "A clean, local-first web presence for a Nordic grower.",
    href: "https://urkegartneri.no/",
    tech: ["WordPress", "Local SEO", "Content"],
    homeLabel: "Urke Gartneri (Norway)",
  },
  {
    slug: "birahvis",
    title: "Birahvis Farm",
    client: "Organic farm powders",
    category: "E-commerce",
    description:
      "A farm-to-shelf store for organic chikoo, papaya, and moringa powders — grown, harvested, and processed on the farm.",
    outcome: "Product credibility and a direct-to-consumer catalogue.",
    href: "https://birahvis.com",
    tech: ["E-commerce", "Product UX", "SEO"],
  },
  {
    slug: "probuilt",
    title: "ProBuilt Window Screens",
    client: "Window screen contractor, USA",
    category: "Web Development",
    description:
      "A trades site for window screen repair and installation — services, coverage, and a straightforward estimate request.",
    outcome: "Service structure that matches how homeowners actually enquire.",
    href: "https://probuiltwindowscreens.godigitalhost.com/",
    tech: ["WordPress", "Local SEO", "Lead Capture"],
  },
  {
    slug: "dale",
    title: "Dale Cleaners",
    client: "Dry cleaning & laundry",
    category: "Web Development",
    description:
      "A neighbourhood dry-cleaner site — services, hours, and a mobile-friendly path to drop-off or pickup enquiries.",
    outcome: "Local SEO and a simple service menu for a long-running cleaner.",
    href: "https://dalecleaners.com/",
    tech: ["Local SEO", "Service UX", "WhatsApp"],
  },
  {
    slug: "hammad",
    title: "Hammad Trade Store",
    client: "General merchandise retail",
    category: "E-commerce",
    description:
      "A multi-category trade storefront — catalogue structure, product pages, and a checkout path built for repeat retail orders.",
    outcome: "A working shop with clear merchandising and mobile commerce.",
    href: "https://hammadtrade.shop/",
    tech: ["E-commerce", "Catalogue UX", "SEO"],
  },
  {
    slug: "maarij",
    title: "Maarij Sports",
    client: "Sportswear & equipment",
    category: "E-commerce",
    description:
      "A sports retail store — kits, equipment, and a product grid built for athletes who already know what they came for.",
    outcome: "Category architecture and a conversion-led sports shop.",
    href: "https://maarijsports.com/",
    tech: ["E-commerce", "Product UX", "SEO"],
  },
];

export const homeServices = [
  {
    slug: "full-stack",
    title: "Full-stack web development",
    summary:
      "Custom websites and web apps that are fast, responsive, and built to convert — from first sketch to production.",
    points: [
      "React.js frontends with precise, accessible UI",
      "Laravel & Node.js backends, APIs, and auth",
      "WordPress when the brief calls for it",
      "Performance, SEO foundations, and analytics",
      "Ongoing iteration after launch",
    ],
  },
  {
    slug: "ai",
    title: "AI automation & workflows",
    summary:
      "Practical AI that removes busywork — lead capture, support, content ops, and internal tools wired into how you already work.",
    points: [
      "ChatGPT API chatbots and assistants",
      "Make.com & Zapier workflow systems",
      "Lead qualification and follow-up automation",
      "Content and reporting pipelines",
      "Prompt systems your team can actually run",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    summary:
      "Technical and on-page search, content, and conversion — so traffic is a pipeline, not a vanity number.",
    points: [
      "Technical and on-page SEO",
      "Content strategy and conversion copy",
      "Analytics, tracking, and monthly reporting",
      "CRO on the pages that already get traffic",
    ],
  },
  {
    slug: "paid",
    title: "Paid media & growth",
    summary:
      "Google, Meta, TikTok, and LinkedIn ads planned with the landing page and the follow-up, not as a separate vendor.",
    points: [
      "Google, Meta, TikTok, and LinkedIn ads",
      "Creative and landing pages planned together",
      "Conversion tracking and monthly reporting",
      "Budgets aimed at qualified conversations",
    ],
  },
] as const;

export const moreServices = [
  {
    slug: "apps",
    title: "Custom web applications",
    summary:
      "Dashboards, CRMs, booking engines, and internal tools — software shaped around your operations, not the other way around.",
    points: [
      "Custom CRMs and admin dashboards",
      "Scheduling, fees, and enrolment systems",
      "Integrations: WhatsApp, payments, APIs",
      "Role-based access and reporting",
      "Reliable MySQL / MongoDB data layers",
    ],
  },
  {
    slug: "design",
    title: "UI/UX design",
    summary:
      "Interfaces that feel considered — hierarchy, spacing, and interaction design that make the product easier to trust.",
    points: [
      "Product and marketing UI design",
      "Figma systems and component libraries",
      "Landing pages built to convert",
      "Design-to-build handoff you can ship",
      "Brand-consistent visual language",
    ],
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Discover",
    body: "A focused call to understand the business, the constraint, and what success actually looks like.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "A clear plan — scope, timeline, stack, and the metrics we will move. No theatre. Just the work.",
  },
  {
    n: "03",
    title: "Build",
    body: "Design, develop, and automate in weekly cycles. You see progress; we correct course early.",
  },
  {
    n: "04",
    title: "Compound",
    body: "Launch, measure, and keep improving. The site, the ads, the workflows — treated as one system.",
  },
] as const;

export const journey = [
  {
    year: "2019",
    title: "Started learning",
    body: "Digital marketing fundamentals and the mechanics of how online businesses actually grow.",
  },
  {
    year: "2020",
    title: "First client",
    body: "Social media management for a first local business — the first live account, the first results.",
  },
  {
    year: "2021",
    title: "Web development",
    body: "HTML, CSS, WordPress. The first ten responsive websites. Design stopped being a file and became a product.",
  },
  {
    year: "2022",
    title: "Full-stack range",
    body: "React.js, Laravel, and Node.js. Started shipping complete applications, not just pages.",
  },
  {
    year: "2023",
    title: "AI in production",
    body: "ChatGPT API, Make.com, Zapier — automation became part of the delivery, not a slide in a deck.",
  },
  {
    year: "2024",
    title: "Growth & scale",
    body: "Dozens of sites shipped, six-figure audience growth across client accounts, and work with teams abroad.",
  },
  {
    year: "2025",
    title: "Adilflow",
    body: "Launched Adilflow — a single practice for product, automation, and growth, working with clients worldwide.",
  },
] as const;

export const traits = [
  "Data-driven",
  "Result-focused",
  "AI-powered",
  "Always learning",
] as const;

export const skillGroups = [
  {
    label: "Marketing",
    items: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "LinkedIn Ads",
      "Content strategy",
      "Email marketing",
    ],
  },
  {
    label: "Development",
    items: [
      "React.js",
      "Laravel",
      "Node.js",
      "PHP",
      "JavaScript",
      "Tailwind",
      "WordPress",
      "HTML/CSS",
    ],
  },
  {
    label: "AI & ops",
    items: ["ChatGPT API", "Make.com", "Zapier", "Prompt systems", "Workflow design"],
  },
] as const;

export const education = [
  {
    title: "B.S. Software Engineering",
    org: "Bahauddin Zakariya University",
    meta: "CGPA 3.79 / 4 — First Division",
  },
  {
    title: "F.Sc. (Pre-Medical)",
    org: "BZU",
    meta: "792 / 1100 — First Division",
  },
] as const;

export const awards = [
  "Provincial Champion — 2nd Place, Chief Minister’s Debate Competition",
  "Academic excellence — 3.79 / 4 CGPA, consecutive First Division",
  "Passion Certificate — Jamia Arabia Anwar-ul-Uloom",
  "Computer Proficiency Certificate — Jinn-e-Hunar Foundation",
  "Contribution Shield — Bahauddin Zakariya University",
] as const;

export const beyond = [
  {
    title: "Continuous learning",
    body: "New models, new tools, new stacks — studied before they are sold.",
  },
  {
    title: "Helping others",
    body: "Mentoring developers and marketers who are still assembling their craft.",
  },
  {
    title: "Global practice",
    body: "Work delivered remotely for teams in the US, UK, Europe, and the Gulf.",
  },
  {
    title: "Creative range",
    body: "Poetry, writing, cricket, and a standing interest in film and media.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Muhammad built our entire mathematics tutoring platform from scratch. The student progress tracking, class scheduling, and responsive design exceeded our expectations. Professional, timely, and technically brilliant.",
    name: "M. Inzimam Sajid",
    role: "Founder, Inzimation Edu",
    href: "https://www.inzimationedu.com/",
  },
  {
    quote:
      "Our Quranic education website needed class scheduling, fee management, and WhatsApp integration. Muhammad delivered everything flawlessly. The site is beautiful, fast, and our enrolment increased 40% after launch.",
    name: "Muhammad Kifayat Ullah",
    role: "Founder, Learn Quran With Kifayat",
    href: "https://learnquranwithkafayat.com/",
  },
] as const;

export const plans = [
  {
    name: "Website project",
    price: "From $500",
    period: "one-time",
    audience: "A focused site, scoped and shipped",
    features: [
      "Website build (about five pages)",
      "Responsive UI and SEO foundations",
      "Performance and analytics at launch",
      "One build, from sketch to handover",
    ],
    cta: "Book a free call",
    featured: false,
  },
  {
    name: "Growth partnership",
    price: "From $300",
    period: "/ month",
    audience: "Growing businesses, e-commerce, service brands",
    features: [
      "Social media management (1 platform)",
      "Google & Meta ads (up to $1K ad spend)",
      "AI automation setup (1 workflow)",
      "Content creation (8 posts / month)",
      "Advanced SEO + keyword tracking",
      "Monthly performance report",
      "Bi-weekly strategy calls (30 min)",
      "Email support (48h response)",
      "3 revisions per month",
    ],
    cta: "Book a free call",
    featured: true,
  },
  {
    name: "Custom systems",
    price: "Get a quote",
    period: "",
    audience: "When the work does not fit a package",
    features: [
      "Custom websites, apps, and automation",
      "Integrations, APIs, and internal tools",
      "A written scope before any build",
    ],
    cta: "Get a quote",
    featured: false,
  },
] as const;

export const addons = [
  { name: "AI chatbot integration", price: "$300 one-time" },
  { name: "Brand identity package", price: "$250 one-time" },
  { name: "Additional ads platform", price: "$100 / month" },
  { name: "Priority support (24h)", price: "$80 / month" },
  { name: "Monthly blog content (4)", price: "$150 / month" },
] as const;

export const faqs = [
  {
    q: "How long does a project take?",
    a: "A focused website is scoped on the discovery call, then designed and built in weekly cycles so you see progress early. Larger systems and monthly partnerships follow the same path — Discover, Strategy, Build, Compound — and the timeline is agreed in the proposal before work starts.",
  },
  {
    q: "How does pricing work?",
    a: "Website projects start from $500. A growth partnership starts from $300 a month: social on one platform, Google and Meta ads (up to $1K ad spend), one AI workflow, eight posts a month, advanced SEO and keyword tracking, a monthly report, bi-weekly strategy calls, email support, and three revisions. Custom systems are quoted after a discovery call. One-time projects and monthly retainers are both available. Ad spend is billed separately.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, Wise, or Payoneer. Work starts after a scoped proposal and an initial milestone.",
  },
  {
    q: "What technologies do you use?",
    a: "React, Laravel, Node.js, PHP, JavaScript, TypeScript, WordPress, Tailwind, MySQL, MongoDB, the ChatGPT API, Make.com, Zapier, and Google, Meta, and TikTok ads — chosen for the brief, not for the sake of a stack.",
  },
  {
    q: "Do you work remotely across time zones?",
    a: "Yes. I work with clients in the US, UK, Europe, and the Gulf. Communication is remote, and calls are scheduled around your time zone.",
  },
  {
    q: "What support is there after launch?",
    a: "One-time projects include a handover, and I stay available for fixes and iteration. A growth partnership covers ongoing SEO, ads, content, and automation after the site is live, including email support and regular strategy calls.",
  },
] as const;

export const subjects = [
  "General enquiry",
  "Full-stack web development",
  "AI automation",
  "SEO",
  "Paid media & growth",
  "Custom systems",
  "Pricing",
] as const;

export const budgets = [
  "Website project — from $500",
  "Growth partnership — from $300 / month",
  "Custom systems",
  "Not sure yet",
] as const;

export const stack = [
  {
    title: "Frontend",
    body: "Interfaces that feel fast and considered — the part customers actually touch.",
    items: ["React.js", "Tailwind", "Bootstrap", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    body: "Server-side systems that stay boring in production, which is the goal.",
    items: ["Laravel", "Node.js", "PHP", "Python"],
  },
  {
    title: "Data & APIs",
    body: "Storage, integrations, and the AI layer that sits on top of real operations.",
    items: ["MySQL", "MongoDB", "REST", "GraphQL", "ChatGPT API"],
  },
] as const;
