export const site = {
  name: "Muhammad Adil",
  person: "Muhammad Adil",
  role: "Full Stack Developer, AI Automation Specialist & Digital Marketer",
  shortRole: "Full-stack developer · AI automation · Growth",
  email: "hello@adilflow.com",
  phoneDisplay: "+44 7878 268504",
  phoneTel: "+447878268504",
  whatsapp:
    "https://wa.me/447878268504?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  whatsappBase: "https://wa.me/447878268504",
  availability: "Available for new projects",
  remote: "Working with clients worldwide",
} as const;

export const nav = [
  { hash: "work", label: "Work" },
  { hash: "services", label: "Services" },
  { hash: "process", label: "Process" },
  { hash: "results", label: "Results" },
  { hash: "videos", label: "AI Videos" },
  { hash: "pricing", label: "Pricing" },
  { hash: "faq", label: "FAQ" },
] as const;

export const pricingServices = [
  {
    name: "Web Development",
    audience: "Fast, high-converting websites, stores and web apps.",
    featured: false,
    features: [
      "Custom design and full-stack build",
      "E-commerce, booking and lead-gen sites",
      "SEO-ready, mobile-first, fast",
      "Integrations: WhatsApp, payments, APIs",
      "Handover plus post-launch support",
    ],
  },
  {
    name: "Social Media Marketing",
    audience: "Organic content and paid campaigns that bring customers.",
    featured: false,
    features: [
      "Meta, Google, TikTok and LinkedIn ads",
      "Content planning and posting",
      "Audience, creative and funnel strategy",
      "Monthly reporting and optimisation",
      "Ad spend billed separately",
    ],
  },
  {
    name: "AI Automation",
    audience: "Any digital workflow converted into automation with AI agents.",
    featured: true,
    features: [
      "Custom AI agents for ops, leads and support",
      "Workflow automation across your tools and CRM",
      "AI-run ad management and reporting",
      "AI video generation for ads and social",
      "Ongoing monitoring and iteration",
    ],
  },
] as const;

export const heroStats = [
  { value: "40+", label: "Live websites shipped" },
  { value: "4", label: "Ad platforms automated by AI agents" },
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
  "ONYX Research",
  "MetaX Payments",
  "NadGo",
  "TikMove",
  "Saucedo Pools & Spas",
  "Ferienwohnung Fiescheralp",
  "Urke Gartneri",
  "Inzimation Edu",
  "Team Pat The Roc",
  "AI Aunties",
  "ProBuilt Window Screens",
  "NB Fashion",
  "PSCO",
] as const;

export const caseStudies = [
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
  "onyx",
  "metax",
  "nad-go",
  "tikmove",
  "saucedo",
  "inzimation",
  "fiescher",
  "urke",
] as const;

export const projects: Project[] = [
  {
    slug: "onyx",
    title: "ONYX Research",
    client: "Research-grade laboratory materials brand, UK & EU",
    category: "E-commerce",
    description:
      "A compliance-first storefront for research-grade laboratory materials — HPLC/LC-MS verification, on-site authenticity code checks, B2B trade accounts, and clear laboratory-research-use-only positioning throughout.",
    outcome: "Trust-led catalogue, verification, and trade ordering built as one brand system.",
    href: "https://onyxhealth.net/",
    tech: ["Custom Web", "E-commerce", "SEO"],
    homeLabel: "ONYX Research (UK/EU)",
  },
  {
    slug: "metax",
    title: "MetaX Payments",
    client: "Global digital payments platform",
    category: "Web Development",
    description:
      "A trust-first fintech site for a global payments platform — business and personal accounts, multi-currency rails (GBP Faster Payments, EUR SEPA Instant, USD ACH/SWIFT, AED accounts), live FX rates, and a clear path to opening a business account.",
    outcome: "Product, pricing, and onboarding journeys unified into one credible financial brand.",
    href: "https://www.metaxpayments.com/",
    tech: ["Custom Web", "Fintech UX", "Lead Capture"],
    homeLabel: "MetaX Payments",
  },
  {
    slug: "nad-go",
    title: "NadGo™",
    client: "NAD+ wellness & longevity brand, UK & EU",
    category: "E-commerce",
    description:
      "A premium multilingual storefront for a NAD+ wellness and longevity brand — product range including the Dual Chamber Pen, a research journal, B2B wholesale partnerships, and purity and quality standards front and centre.",
    outcome: "Education-led shopping, wholesale enquiries, and international shipping in one brand system.",
    href: "https://www.nad-go.com/",
    tech: ["E-commerce", "Multilingual", "SEO"],
    homeLabel: "NadGo™",
  },
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
];

export const agentAutomation = {
  eyebrow: "AI agents",
  title: "Any digital workflow, automated with AI agents.",
  body: "I can convert any digital workflow into automation through AI agents — Meta ads, Google ads, LinkedIn ads, TikTok ads, web development, social media marketing, video generation, and any other digital work your team repeats on a screen. I map the workflow, build the agents, and connect them to your existing tools, with human review where it matters.",
  areas: [
    "Meta ads",
    "Google ads",
    "LinkedIn ads",
    "TikTok ads",
    "Web development",
    "Social media marketing",
    "Video generation",
    "Operations",
    "Lead follow-up",
    "Content",
    "CRM",
    "Customer support",
    "Reporting",
    "Internal tools",
  ],
} as const;

export const homeServices = [
  {
    slug: "ai",
    title: "AI agents & workflow automation",
    summary:
      "Any digital workflow can be turned into automation with AI agents — Meta, Google, LinkedIn and TikTok ads campaigns, web development, social media marketing, video generation, lead follow-up, CRM, support, and internal tools, wired into the stack you already use.",
    points: [
      "Meta, Google, LinkedIn and TikTok ads campaigns automated by AI agents, with approvals",
      "Social media marketing: planning, drafting, and scheduling pipelines",
      "AI video generation: product explainers and brand films",
      "Map the workflow, then automate it end-to-end with AI agents",
      "Lead capture, qualification, and follow-up automation",
      "CRM updates, reporting, and operations workflows",
      "Customer support assistants and content pipelines",
      "ChatGPT API, Make.com, Zapier, and custom integrations",
      "Human review steps and handover your team can run",
    ],
  },
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
    body: "A focused conversation by email or WhatsApp to understand the business, the constraint, and what success actually looks like.",
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
    title: "Independent practice",
    body: "Launched an independent practice under my own name — product, AI automation, and growth, working with clients worldwide.",
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
    role: "Founder, Learn Quran With Kafayat",
    href: "https://learnquranwithkafayat.com/",
  },
  {
    quote:
      "Muhammad delivered a clean, conversion-ready payments website with clear product journeys and trust-first UX. Sharp communication, quick iterations, and a partner who understood how fintech should look and feel.",
    name: "Product team",
    role: "MetaX Payments",
    href: "https://www.metaxpayments.com/",
  },
] as const;

export const faqs = [
  {
    q: "How long does a project take?",
    a: "A focused website is scoped from your enquiry, then designed and built in weekly cycles so you see progress early. Larger systems and monthly partnerships follow the same path — Discover, Strategy, Build, Compound — and the timeline is agreed in the proposal before work starts.",
  },
  {
    q: "How are projects quoted?",
    a: "Pricing is negotiated per project and differs country-wise. After a short conversation by email, WhatsApp or the contact form, I quote based on your country and market, the scope, and timelines — for web development, social media marketing and AI automation alike. You get a written scope and quote to agree before any work starts. One-time projects and monthly retainers are both available; ad spend is billed separately.",
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
    a: "Yes. I work with clients in the US, UK, Europe, and the Gulf. Communication is remote by email and WhatsApp, around your time zone.",
  },
  {
    q: "What support is there after launch?",
    a: "One-time projects include a handover, and I stay available for fixes and iteration. A growth partnership covers ongoing SEO, ads, content, and automation after the site is live, including email and WhatsApp support and regular strategy check-ins.",
  },
] as const;

export const subjects = [
  "General enquiry",
  "Full-stack web development",
  "AI automation",
  "SEO",
  "Paid media & growth",
  "Custom systems",
  "AI video generation",
  "Get a quote",
] as const;

export const budgets = [
  "Website project",
  "Growth partnership (monthly)",
  "AI agent automation",
  "AI video generation",
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

export const aiVideos = [
  {
    src: "/videos/ai-agents/01.mp4",
    poster: "/videos/ai-agents/01.jpg",
    title: "Onyx Dual-Chamber Pen — 3D explainer",
    caption: "3D product explainer mixing teaser and technical breakdown, created through AI agents.",
  },
  {
    src: "/videos/ai-agents/02.mp4",
    poster: "/videos/ai-agents/02.jpg",
    title: "Onyx Dual-Chamber Pen — technical walkthrough",
    caption: "Companion explainer in the same pen series, created through AI agents.",
  },
  {
    src: "/videos/ai-agents/03.mp4",
    poster: "/videos/ai-agents/03.jpg",
    title: "Onyx Health — brand film I",
    caption: "Brand film for the Onyx Health research range (BPC-157, MOTS-c, NAD+), created through AI agents.",
  },
  {
    src: "/videos/ai-agents/04.mp4",
    poster: "/videos/ai-agents/04.jpg",
    title: "Onyx Health — brand film II: lab & supply",
    caption: "Brand film on the laboratory and supply programme, created through AI agents.",
  },
] as const;

export const ruoDisclaimer = "For laboratory research use only. Not for human consumption.";
