import { faqs } from "@/lib/site";

export type LandingSection = { heading: string; body?: string; points?: readonly string[] };
export type Landing = {
  path: string;
  crumb: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  serviceName: string;
  areaServed?: string[];
  sections: readonly LandingSection[];
  projectSlugs: readonly string[];
  faqs: readonly { q: string; a: string }[];
  related: readonly string[];
};

const pricingFaq = faqs.find((f) => f.q.toLowerCase().includes("cost") || f.q.toLowerCase().includes("pric")) ?? faqs[0];
const remoteFaq = {
  q: "Do you work with international clients?",
  a: "Yes. I work with clients in the US, UK, Europe and the UAE. Communication is remote by email and WhatsApp, around your time zone.",
};

export const landings = {
  "/services/ai-automation-agency": {
    path: "/services/ai-automation-agency",
    crumb: "AI automation agency",
    eyebrow: "AI agents & workflow automation",
    title: "AI Automation Agency — AI Agents & Workflows | Adilflow",
    description:
      "Adilflow builds AI agents and workflow automation for small and growing businesses: lead capture, CRM updates, email, reporting and ads, with human review.",
    h1: "AI automation agency for small and growing businesses",
    intro:
      "Any digital workflow your team repeats on a screen can be turned into automation with AI agents. I map the workflow, build the agents, and connect them to the tools you already use, with human review where it matters.",
    serviceName: "AI agents & workflow automation",
    sections: [
      {
        heading: "What we automate",
        points: [
          "Lead capture, qualification and follow-up",
          "CRM updates and operations workflows",
          "Email and customer support assistants",
          "Reporting and internal tools",
          "Meta, Google, LinkedIn and TikTok ads campaigns, with approvals",
          "Social media planning, drafting and scheduling pipelines",
        ],
      },
      {
        heading: "How it works: audit → build → monitor",
        points: [
          "Audit: a focused conversation by email or WhatsApp to map the workflow, the constraint and what success looks like.",
          "Build: agents designed, developed and connected in weekly cycles, so you see progress and we correct course early.",
          "Monitor: launch, measure and keep improving, with human review steps and a handover your team can run.",
        ],
      },
      {
        heading: "Tools",
        body: "n8n, Make, the OpenAI / ChatGPT API, custom AI agents and custom code with API integrations, chosen to fit the stack you already run rather than replacing it.",
      },
      {
        heading: "Pricing approach",
        body: "Pricing is quoted per project by scope, timeline and market. You get a written scope and quote to agree before any work starts. One-time builds and monthly retainers are both available.",
      },
    ],
    projectSlugs: ["aiaunties", "tikmove", "metax"],
    faqs: [
      { q: "What can an AI agent automate for my business?", a: "Any repeated digital workflow: lead follow-up, CRM updates, support replies, reporting, content and ads operations. We start by mapping one workflow and automating it end to end." },
      { q: "Will people still review the work?", a: "Yes. Human review steps are built in where decisions matter, such as ad approvals or customer replies." },
      pricingFaq,
      remoteFaq,
    ],
    related: ["/services/ai-chatbot-development", "/services/web-development"],
  },
  "/services/ai-chatbot-development": {
    path: "/services/ai-chatbot-development",
    crumb: "AI chatbot development",
    eyebrow: "AI chatbots",
    title: "AI Chatbot Development — Website & WhatsApp | Adilflow",
    description:
      "Custom AI chatbots for your website and WhatsApp: support, lead capture and booking, trained on your own content, with hand-off to a human. Get a quote.",
    h1: "AI chatbot development for websites and WhatsApp",
    intro:
      "A chatbot should answer real questions, capture leads and know when to hand over to a person. I build customer support assistants and lead capture bots on the ChatGPT API, connected to your site, WhatsApp and CRM.",
    serviceName: "AI chatbot development",
    sections: [
      { heading: "Use cases", points: ["Customer support answers around the clock", "Lead capture and qualification", "Booking and enquiry handling", "Routing enquiries into your CRM"] },
      { heading: "WhatsApp Business API", body: "Many clients already talk to customers on WhatsApp. The chatbot can work in the same channel, connected through the WhatsApp Business API, so enquiries never leave the conversation." },
      { heading: "Trained on your data", body: "The assistant answers from your own pages, FAQs and documents, so replies match your products, prices and policies." },
      { heading: "Hand-off to a human", body: "When a question needs a person, the bot passes the conversation, with context, to your team." },
      { heading: "Hosted tool vs custom build", body: "For simple FAQs a hosted chatbot tool can be enough. When the bot needs your CRM, bookings or custom logic, a custom build on the ChatGPT API gives you full control. I'll recommend the cheaper option when it fits." },
    ],
    projectSlugs: ["aiaunties", "metax", "onyx"],
    faqs: [
      { q: "Can the chatbot work on WhatsApp?", a: "Yes. It can be connected through the WhatsApp Business API as well as on your website." },
      { q: "What happens when the bot can't answer?", a: "It hands the conversation to a person on your team, with the context of the chat so far." },
      pricingFaq,
      remoteFaq,
    ],
    related: ["/services/ai-automation-agency", "/services/web-development"],
  },
  "/services/web-development": {
    path: "/services/web-development",
    crumb: "Web development",
    eyebrow: "Full-stack web development",
    title: "Custom Web Development & WordPress | Adilflow",
    description:
      "Custom websites and web apps in React, Next.js, TanStack and Laravel, or WordPress when it fits. Fast, responsive, SEO built in. See 40+ live projects.",
    h1: "Custom websites and web apps that load fast and convert",
    intro:
      "I have been building websites since 2022: WordPress first, then React.js, Laravel and Node.js. Every build is fast, responsive and built to convert, from first sketch to production.",
    serviceName: "Full-stack web development",
    sections: [
      { heading: "Custom (React / TanStack) vs WordPress", body: "Custom React, Next.js or TanStack builds suit products, web apps and sites where speed and flexibility matter. WordPress (Elementor, Divi) is the right call when your team wants to edit pages without a developer. I'll tell you which fits your brief." },
      { heading: "Speed", body: "Performance is part of the build, not an afterthought: optimised images, minimal scripts and modern frameworks so pages load fast on mobile." },
      { heading: "SEO built in", body: "Clean URLs, titles and descriptions, structured data, sitemaps and analytics are set up at launch." },
      { heading: "Process and timeline", points: ["Discover: understand the business and goal", "Strategy: scope, timeline, stack", "Build: weekly cycles with visible progress", "Launch and iterate after go-live"] },
    ],
    projectSlugs: ["metax", "onyx", "saucedo"],
    faqs: [
      { q: "Do you build on WordPress or custom code?", a: "Both. Custom React/Next.js/TanStack and Laravel/Node.js for apps and high-performance sites; WordPress when easy editing matters most." },
      { q: "What happens after launch?", a: "One-time projects include a handover, and I stay available for fixes and iteration. Ongoing growth partnerships are also available." },
      pricingFaq,
      remoteFaq,
    ],
    related: ["/services/seo-services", "/services/ai-automation-agency"],
  },
  "/services/seo-services": {
    path: "/services/seo-services",
    crumb: "SEO services",
    eyebrow: "SEO",
    title: "SEO Services — Technical, Local & Content | Adilflow",
    description:
      "Technical SEO audits, local SEO and Google Business Profile, content plans and monthly Search Console and GA4 reporting, so traffic turns into leads.",
    h1: "SEO services that bring leads, not just traffic",
    intro: "Technical and on-page search, content and conversion, so traffic is a pipeline, not a vanity number.",
    serviceName: "SEO services",
    sections: [
      { heading: "Technical audit", body: "Crawlability, indexing, page speed, titles, structured data and sitemaps checked and fixed on the pages that matter." },
      { heading: "Local SEO and Google Business Profile", body: "Business profile setup and consistent business details for companies that serve a city or region." },
      { heading: "Content plan", body: "Content strategy and conversion copy built around the searches your customers actually make." },
      { heading: "Reporting with Search Console and GA4", body: "Analytics, tracking and monthly reporting, plus CRO on the pages that already get traffic." },
    ],
    projectSlugs: ["onyx", "nad-go", "amargosa"],
    faqs: [
      { q: "What does an SEO engagement include?", a: "Technical and on-page SEO, content strategy and conversion copy, analytics and tracking, and monthly reporting." },
      { q: "Can you work on an existing site?", a: "Yes. I start with a technical audit of your current site and fix the highest-impact issues first." },
      pricingFaq,
      remoteFaq,
    ],
    related: ["/services/web-development", "/services/paid-ads"],
  },
  "/services/paid-ads": {
    path: "/services/paid-ads",
    crumb: "Google & Meta ads",
    eyebrow: "Paid media & growth",
    title: "Google & Meta Ads Management | Adilflow",
    description:
      "Google, Meta, TikTok and LinkedIn ads planned with the landing page and the follow-up: tracking setup, monthly reporting, ad spend billed separately.",
    h1: "Google and Meta ads that pay for themselves",
    intro: "Ads planned together with the landing page and the follow-up, not as a separate vendor, with budgets aimed at qualified conversations rather than vanity clicks.",
    serviceName: "Paid media (Google & Meta ads)",
    sections: [
      { heading: "Platforms", points: ["Google Ads", "Meta Ads (Facebook & Instagram)", "TikTok Ads", "LinkedIn Ads"] },
      { heading: "Tracking setup", body: "Conversion tracking set up before spend, so every campaign is judged on leads and sales." },
      { heading: "Monthly reporting", body: "Clear monthly reports on spend, conversions and what changes next month." },
      { heading: "Ad spend billed separately", body: "Management is quoted per project or retainer; ad spend is paid directly to the platforms and billed separately." },
    ],
    projectSlugs: ["tikmove", "nbfashion", "probuilt"],
    faqs: [
      { q: "Is ad spend included in your fee?", a: "No. Ad spend is billed separately and paid to the ad platforms." },
      { q: "Which platforms do you manage?", a: "Google, Meta, TikTok and LinkedIn ads." },
      pricingFaq,
      remoteFaq,
    ],
    related: ["/services/seo-services", "/services/ai-automation-agency"],
  },
  "/uk-europe/ai-automation-agency": {
    path: "/uk-europe/ai-automation-agency",
    crumb: "UK & Europe",
    eyebrow: "UK & Europe",
    title: "AI Automation & Web Development UK & Europe | Adilflow",
    description:
      "AI agents, automation and multilingual websites for UK and European businesses, with a +44 number and work for brands in London, the EU, Switzerland and Norway.",
    h1: "AI automation and web development for UK and European businesses",
    intro: "I have worked with MetaX Payments (London, remote) since 2022, and Adilflow has built multilingual storefronts and sites for European brands, including NadGo and ONYX Research (UK & EU), Ferienwohnung Fiescheralp in Switzerland and Urke Gartneri in Norway, and adds AI agents and automation on top.",
    serviceName: "AI automation and web development",
    areaServed: ["United Kingdom", "European Union"],
    sections: [
      { heading: "Multilingual sites", body: "Storefronts and websites built for more than one language and market, so each audience gets a first-class experience." },
      { heading: "Quotes for your market", body: "Pricing differs country-wise and is agreed after a short conversation, with a written scope before work starts. Payment by bank transfer, Wise or Payoneer." },
      { heading: "Time-zone overlap", body: "Communication by email and WhatsApp, scheduled around the UK and European working day. UK clients can call or WhatsApp +44 7878 268504." },
      { heading: "UK & European client work", points: ["MetaX Payments, London: global payments platform site", "NadGo: premium multilingual NAD+ wellness storefront (UK & EU)", "ONYX Research: compliance-first storefront for a research materials brand (UK & EU)", "Ferienwohnung Fiescheralp: alpine holiday apartment, Switzerland", "Urke Gartneri: horticulture, Norway"] },
    ],
    projectSlugs: ["metax", "nad-go", "fiescher"],
    faqs: [remoteFaq, pricingFaq],
    related: ["/services/ai-automation-agency", "/services/web-development"],
  },
  "/us/ai-automation-agency": {
    path: "/us/ai-automation-agency",
    crumb: "US",
    eyebrow: "United States",
    title: "AI Automation Agency for US Businesses | Adilflow",
    description:
      "AI agents, chatbots and websites for US businesses, quoted in USD, with communication scheduled around US hours. See work for US contractors and destinations.",
    h1: "AI automation and chatbots for US businesses",
    intro: "I have worked with MetaX Payments (London, remote) since 2022, and Adilflow has built websites for US businesses including Saucedo Pools & Spas, Visit Amargosa and ProBuilt Window Screens, and now adds AI agents and chatbots on top.",
    serviceName: "AI automation and chatbots",
    areaServed: ["United States"],
    sections: [
      { heading: "USD pricing", body: "Quotes in USD by scope and timeline, with a written scope agreed before work starts." },
      { heading: "Time-zone overlap", body: "Communication by email and WhatsApp around your time zone, with updates in weekly cycles." },
      { heading: "US client work", points: ["Saucedo Pools & Spas: pool and spa contractor", "Visit Amargosa: destination marketing", "ProBuilt Window Screens: window screen contractor"] },
    ],
    projectSlugs: ["saucedo", "amargosa", "probuilt"],
    faqs: [{ q: "Do you quote in USD?", a: "Yes. Quotes are given in USD for US clients." }, remoteFaq, pricingFaq],
    related: ["/services/ai-chatbot-development", "/services/ai-automation-agency"],
  },
  "/dubai/ai-automation-agency": {
    path: "/dubai/ai-automation-agency",
    crumb: "Dubai",
    eyebrow: "Dubai & UAE",
    title: "AI Automation & Web Development in Dubai | Adilflow",
    description:
      "AI automation and websites for Dubai and UAE businesses: English and Arabic sites, WhatsApp-first automation and chatbots. Quotes by email or WhatsApp.",
    h1: "AI automation and websites for Dubai and UAE businesses",
    intro: "Businesses in Dubai run on WhatsApp. I build WhatsApp-first automation, chatbots and fast websites for Dubai and UAE companies, working remotely around UAE hours.",
    serviceName: "AI automation and web development",
    areaServed: ["United Arab Emirates"],
    sections: [
      { heading: "English and Arabic sites", body: "Multilingual websites built so each language is a first-class experience, not an afterthought." },
      { heading: "WhatsApp-first automation", body: "Chatbots and lead follow-up that live in WhatsApp, connected to your CRM and team." },
      { heading: "Remote, around your hours", body: "I work with UAE clients remotely by email and WhatsApp, around your time zone." },
    ],
    projectSlugs: ["metax", "nad-go", "aiaunties"],
    faqs: [{ q: "Can you build Arabic websites?", a: "Yes. Sites can be built in English and Arabic." }, remoteFaq, pricingFaq],
    related: ["/services/ai-chatbot-development", "/services/web-development"],
  },
} satisfies Record<string, Landing>;

export type LandingPath = keyof typeof landings;
