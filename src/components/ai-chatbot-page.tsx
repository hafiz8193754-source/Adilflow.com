import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactElement,
} from "react";
import { Link } from "@tanstack/react-router";
import { Check, CheckCircle2 } from "lucide-react";
import { ChatPanel } from "@/components/chat-panel";
import { CtaStrip } from "@/components/cta-strip";
import { EnquiryLegalNote } from "@/components/enquiry-legal-note";
import { FaqList } from "@/components/faq-list";
import { GuaranteeGrid } from "@/components/guarantees";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { sendContact } from "@/lib/contact/send-contact";
import { chatbotMeta } from "@/lib/ai/chatbot-meta";
import { breadcrumbJson, faqPageJson, serviceJson } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const builds = [
  {
    title: "Website chatbot",
    body: "A chat on your site that answers from your pages and FAQs, and asks for the next step when someone is ready.",
  },
  {
    title: "WhatsApp, Instagram and Messenger",
    body: "The same assistant in the apps your customers already use, including WhatsApp Business, Instagram and Facebook Messenger.",
  },
  {
    title: "Lead capture and booking",
    body: "Questions that qualify an enquiry, collect the details you need, and hand a booking or callback to your team.",
  },
  {
    title: "Support trained on your docs",
    body: "Answers drawn from your FAQs, policies and documents, with a person taking over when the question needs one.",
  },
  {
    title: "WooCommerce and Shopify assistants",
    body: "Product, order and store questions for a WooCommerce or Shopify shop, pointed at a person when checkout needs a human.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Which conversations the bot should handle, and where a person on your team takes over.",
  },
  {
    n: "02",
    title: "Prepare",
    body: "Your FAQs, policies, product notes and the tone you want the assistant to keep.",
  },
  {
    n: "03",
    title: "Build",
    body: "The assistant, the channels, and the handoff into email, WhatsApp or your CRM.",
  },
  {
    n: "04",
    title: "Launch",
    body: "You test the answers. Then we go live and tighten the ones that were weak.",
  },
] as const;

const features = [
  "Answers from your pages, FAQs and documents",
  "Lead fields: name, email and what they need",
  "Booking or enquiry handoff",
  "Human takeover with the chat so far",
  "Website embed",
  "WhatsApp Business",
  "Instagram and Facebook Messenger",
  "WooCommerce and Shopify",
  "Email when a new lead arrives",
  "CRM connection when the brief includes it",
] as const;

const packages = [
  {
    name: "Website assistant",
    audience: "One chat on your site, trained on your pages and FAQs.",
    features: [
      "Website chatbot",
      "Answers from your content",
      "Lead capture",
      "Hand-off to a person",
    ],
  },
  {
    name: "Leads and booking",
    audience: "Website plus WhatsApp, for enquiries that should become a conversation.",
    features: [
      "Website and WhatsApp",
      "Qualification questions",
      "Booking or callback handoff",
      "Email or CRM notification",
    ],
  },
  {
    name: "Multi-channel and commerce",
    audience: "More than one channel, including a store assistant.",
    features: [
      "Website, WhatsApp, Instagram and Messenger",
      "Support trained on your documents",
      "WooCommerce or Shopify product help",
      "Human handoff on each channel",
    ],
  },
] as const;

const chatbotFaqs = [
  {
    q: "What chatbot services do you build?",
    a: "Website chatbots, WhatsApp, Instagram and Messenger bots, lead-capture and booking bots, customer-support bots trained on your FAQs and documents, and assistants for WooCommerce or Shopify stores.",
  },
  {
    q: "Will the chatbot use our own information?",
    a: "Yes. It is trained on your pages, FAQs and documents so replies match your products and policies. This demo on adilflow.com only knows Adilflow's own site.",
  },
  {
    q: "What happens when it cannot answer?",
    a: "It hands the conversation to a person on your team, with the context of the chat so far.",
  },
  {
    q: "Can it run on WhatsApp, Instagram or Messenger?",
    a: "Yes. Those channels can be connected alongside the website chat. The exact setup is part of the written quote.",
  },
  {
    q: "Do you work with WooCommerce and Shopify?",
    a: "Yes. A store assistant can help with product and order questions and pass checkout issues to a person. The catalogue connection is scoped in the quote.",
  },
  {
    q: "How much does an AI chatbot cost?",
    a: "There is no public price list. Every chatbot is a custom quote based on the channels, the content and your market. You get a written scope and quote before any work starts. One-time builds and monthly retainers are both available.",
  },
  {
    q: "How long does a chatbot take?",
    a: "The timeline is agreed in the proposal before work starts. It depends on how many channels you need and how much of your content the assistant has to learn.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work remotely with clients in the US, UK, Europe and the UAE, by email and WhatsApp, around your time zone.",
  },
] as const;

const fieldClass =
  "min-h-11 w-full rounded-xl border border-line bg-card px-3.5 text-base text-fg outline-none focus:border-fg";

export function AiChatbotPage() {
  return (
    <SiteShell>
      <JsonLd
        data={serviceJson("AI chatbot development", chatbotMeta.path, chatbotMeta.description)}
      />
      <JsonLd data={faqPageJson(chatbotFaqs)} />
      <JsonLd
        data={breadcrumbJson([
          { name: "Services", path: "/services" },
          { name: "AI chatbot services", path: chatbotMeta.path },
        ])}
      />

      <section className="dark-surface bg-ink py-16 md:py-20">
        <div className="site-wrap max-w-3xl">
          <p className="text-sm tracking-widest text-accent uppercase">AI chatbot services</p>
          <h1 className="mt-3 font-display text-5xl text-on-ink md:text-6xl">
            AI chatbot services for your website, WhatsApp and social
          </h1>
          <p className="mt-4 text-base text-on-ink-muted md:text-lg">
            A chatbot should answer from your own pages, capture the lead, and hand over to a person
            when it should. I build that for your website, WhatsApp, Instagram and Messenger —
            including booking flows and store assistants for WooCommerce and Shopify. Pricing is a
            custom quote, agreed before any work starts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="lime" size="lg">
              <a href="#quote">Get a quote</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#demo">Try the demo</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl">What we build</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {builds.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display text-3xl">{item.title}</h3>
                <p className="mt-3 text-base text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-surface bg-ink py-16 text-on-ink md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl">How it works</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-display text-3xl text-accent">{step.n}</p>
                <h3 className="mt-2 text-base font-medium">{step.title}</h3>
                <p className="mt-2 text-base text-on-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap">
          <h2 className="font-display text-4xl">Features and integrations</h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            The assistant is connected to the tools you already use. Language is agreed in the
            quote, and a hosted FAQ tool is recommended when a custom build would be more than you
            need.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm text-fg"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="packages"
        className="dark-surface scroll-mt-20 bg-ink py-16 text-on-ink md:py-24"
      >
        <div className="site-wrap">
          <h2 className="font-display text-4xl">Packages</h2>
          <p className="mt-4 max-w-2xl text-base text-on-ink-muted">
            No fixed public prices. The quote depends on the channels, the integrations and how much
            of your content the assistant needs to learn.
          </p>
          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
            {packages.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6 md:p-7"
              >
                <h3 className="font-display text-3xl">{plan.name}</h3>
                <p className="mt-2 text-base text-on-ink-muted">{plan.audience}</p>
                <p className="mt-6 font-display text-3xl leading-tight">Custom quote</p>
                <p className="mt-1 text-sm text-on-ink-muted">Starting from — contact us</p>
                <ul className="mt-6 flex-1 space-y-2.5 text-base">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="lime" className="mt-8 w-full">
                  <a href="#quote">Get a quote</a>
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-10 border-t border-ink-line pt-8">
            <h3 className="font-display text-3xl">How an engagement is protected</h3>
            <p className="mt-3 max-w-2xl text-base text-on-ink-muted">
              The same four commitments apply to a chatbot build. The proposal names the exact
              scope, milestones, and support window.
            </p>
            <div className="mt-6">
              <GuaranteeGrid tone="ink" compact />
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="scroll-mt-20 bg-cream py-16 text-fg md:py-24">
        <div className="site-wrap grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Try the demo</h2>
            <p className="mt-4 text-base text-muted">
              This assistant only answers questions about Adilflow, using the copy on this site. It
              will say when it does not know, and it will not invent a price. A bot built for your
              business is trained on your content, not ours.
            </p>
            <p className="mt-4 text-base text-muted">
              Ask it what we build, then use Send your details if you want a quote. That form uses
              the same enquiry path as the{" "}
              <Link to="/contact" className="text-accent-ink underline underline-offset-4">
                contact page
              </Link>
              .
            </p>
            <p className="mt-4 text-base text-muted">
              This demo sends what you type to Google Gemini to generate a reply. Do not share
              passwords, payment details, or confidential business data here.
            </p>
          </div>
          <ChatPanel inputIdPrefix="demo" className="h-[32rem] max-h-[min(32rem,70dvh)]" />
        </div>
      </section>

      <section className="bg-cream pb-16 text-fg md:pb-24">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-display text-4xl">Frequently asked questions</h2>
          <div className="mt-8">
            <FaqList items={chatbotFaqs} />
          </div>
          <h2 className="mt-14 font-display text-3xl">Related services</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              ["/services/ai-automation-agency", "AI automation agency"],
              ["/services/web-development", "Web development"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm hover:border-fg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteSection />
      <CtaStrip />
    </SiteShell>
  );
}

function QuoteSection() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [website, setWebsite] = useState("");
  const [focusTick, setFocusTick] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusTick) return;
    const node = formRef.current;
    if (!node) return;
    const target =
      node.querySelector<HTMLElement>('[aria-invalid="true"]') ??
      node.querySelector<HTMLElement>("#chatbot-server-error");
    target?.focus();
  }, [focusTick]);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "A valid email is required.";
    if (form.message.trim().length < 12)
      next.message = "Tell me a little more about the chatbot you need.";
    setErrors(next);
    if (Object.keys(next).length) {
      setFocusTick((tick) => tick + 1);
      return;
    }
    setStatus("sending");
    setServerError("");
    try {
      const result = await sendContact({
        data: {
          ...form,
          subject: "AI chatbot development",
          budget: "AI chatbot — custom quote",
          website,
        },
      });
      if (result.ok) {
        setSent(true);
        setStatus("idle");
        return;
      }
      if (result.fieldErrors) setErrors(result.fieldErrors);
      setServerError(result.error);
      setStatus("error");
      setFocusTick((tick) => tick + 1);
    } catch {
      setServerError("Couldn't send your message. Please try again or use WhatsApp.");
      setStatus("error");
      setFocusTick((tick) => tick + 1);
    }
  }

  return (
    <section id="quote" className="scroll-mt-20 bg-cream py-16 text-fg md:py-24">
      <div className="site-wrap grid items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl">Get a quote</h2>
          <p className="mt-4 text-base text-muted">
            Tell me which channels you need and what the bot should handle. I'll reply with a
            written scope. There is no price on this page because the quote depends on the brief.
          </p>
          <p className="mt-4 text-base text-muted">
            Prefer WhatsApp? Message {site.phoneDisplay}. Email {site.email} also works. Replies by
            email are within 24 hours.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-6 md:p-8 lg:col-span-7">
          {sent ? (
            <div ref={successRef} tabIndex={-1} role="status" className="outline-none">
              <CheckCircle2 className="size-8 text-accent-ink" aria-hidden="true" />
              <h3 className="mt-4 font-display text-3xl">Thanks — message sent</h3>
              <p className="mt-2 text-base text-muted">
                I'll reply to {form.email.trim() || "your email"} within 24 hours.
              </p>
              <Button asChild variant="lime" size="lg" className="mt-6">
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  Open WhatsApp
                </a>
              </Button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="relative space-y-4"
              aria-busy={status === "sending"}
            >
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    name="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </label>
              </div>
              <Field id="chatbot-name" label="Your name" error={errors.name} required>
                <input
                  className={fieldClass}
                  value={form.name}
                  autoComplete="name"
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
              </Field>
              <Field id="chatbot-email" label="Email" error={errors.email} required>
                <input
                  className={fieldClass}
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
              </Field>
              <Field id="chatbot-phone" label="WhatsApp / phone (optional)">
                <input
                  className={fieldClass}
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                />
              </Field>
              <Field
                id="chatbot-message"
                label="What should the chatbot do?"
                error={errors.message}
                required
              >
                <textarea
                  className={cn(fieldClass, "min-h-32 py-3")}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
              </Field>
              {status === "error" && serverError ? (
                <p
                  id="chatbot-server-error"
                  tabIndex={-1}
                  role="alert"
                  className="rounded-xl border border-danger px-3.5 py-3 text-sm text-danger outline-none"
                >
                  {serverError}
                </p>
              ) : null}
              <Button
                type="submit"
                variant="lime"
                size="lg"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Request a quote"}
              </Button>
              <EnquiryLegalNote />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactElement<Record<string, unknown>>;
}) {
  const errorId = `${id}-error`;
  const control = isValidElement(children)
    ? cloneElement(children, {
        id,
        name: id.replace(/^chatbot-/, ""),
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required ? true : undefined,
      })
    : children;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {required ? (
          <span className="text-accent-ink" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {control}
      {error ? (
        <p id={errorId} className="mt-1 block text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
