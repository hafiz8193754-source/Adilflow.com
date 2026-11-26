import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalPage, legalLinkClass } from "@/components/legal-page";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    pageHead({
      title: "Privacy Policy — Adilflow",
      description:
        "How Adilflow handles contact and quote forms, WhatsApp and email, the Gemini demo chat, and analytics. Ask for deletion at hello@adilflow.com.",
      path: "/privacy",
    }),
});

export function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      lede="What Adilflow collects on adilflow.com, why it is collected, and how to ask for it to be deleted."
    >
      <LegalBlock title="Who we are">
        <p>
          Adilflow is the practice of {site.person}. The office is {site.officeLine}. The website is{" "}
          <a href="https://www.adilflow.com" className={legalLinkClass}>
            https://www.adilflow.com
          </a>
          .
        </p>
        <p>
          Email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>{" "}
          or WhatsApp{" "}
          <a href={site.whatsappBase} className={legalLinkClass} target="_blank" rel="noreferrer">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </LegalBlock>

      <LegalBlock title="Contact and quote forms">
        <p>
          The{" "}
          <Link to="/contact" className={legalLinkClass}>
            contact form
          </Link>{" "}
          and the quote form on the{" "}
          <Link to="/services/ai-chatbot-development" className={legalLinkClass}>
            AI chatbot page
          </Link>{" "}
          collect your name, email address, and message, plus any phone number, subject, or budget
          you choose to add.
        </p>
        <p>
          That information is emailed to Adilflow through Resend so we can reply, usually from{" "}
          {site.email}. We use it to answer the enquiry and for follow-up about that project. We do
          not add you to a mailing list, and we do not sell it.
        </p>
        <p>
          The forms include a hidden field that people do not see. If an automated submission fills
          it, the message is dropped and is not emailed.
        </p>
      </LegalBlock>

      <LegalBlock title="WhatsApp and email">
        <p>
          If you message {site.phoneDisplay} on WhatsApp, or email {site.email}, we receive what you
          send: your number or address, and the contents of the message. We use that to reply and to
          discuss the work.
        </p>
        <p>
          WhatsApp is operated by Meta. Email is delivered by our mail provider. Those companies
          process the message under their own terms.
        </p>
      </LegalBlock>

      <LegalBlock title="Demo AI chatbot">
        <p>
          The site has a demo assistant: the chat button on each page, and the demo on the AI
          chatbot page. What you type is sent to <span className="text-fg">/api/chat</span> and
          answered with Google Gemini. Adilflow does not store the conversation in its own database.
          Google processes the message in order to generate the reply.
        </p>
        <p>
          The demo only discusses Adilflow. Do not type sensitive personal information or
          confidential business data into it — passwords, payment details, customer lists, or
          anything you would not want a third-party model provider to process. For a private
          conversation, use the contact form, email, or WhatsApp.
        </p>
        <p>
          To limit abuse, the server keeps the IP address of a chat request in memory for a short
          window on that server instance. It is not written to a database, and it is discarded when
          the window ends or the instance stops.
        </p>
      </LegalBlock>

      <LegalBlock title="Analytics and server logs">
        <p>
          The site uses Google Analytics 4 and Vercel Analytics to understand which pages are
          visited and, in broad terms, from which country. These tools may set cookies or similar
          identifiers and collect device and usage information. You can block or delete cookies in
          your browser.
        </p>
        <p>
          The site is hosted on Vercel. Vercel may keep standard request logs, such as IP address,
          browser, and the page requested, in order to run and protect the hosting. Adilflow does
          not keep a separate copy of those logs.
        </p>
      </LegalBlock>

      <LegalBlock title="How long information is kept">
        <p>
          Enquiry emails are kept so we can reply and, if a project goes ahead, keep a record of the
          conversation. Demo chat text is not stored by Adilflow. Analytics and host logs follow
          Google's and Vercel's own retention. We do not set a separate period for those tools.
        </p>
        <p>
          Email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>{" "}
          and we will delete the enquiry records we hold. A copy may be kept where a law, a tax
          rule, or an invoice requires it.
        </p>
      </LegalBlock>

      <LegalBlock title="Who else processes it">
        <ul className="space-y-2">
          {[
            "Resend, to deliver enquiry emails.",
            "Google, for the demo chatbot (Gemini) and for Google Analytics.",
            "Vercel, for hosting and Vercel Analytics.",
            "WhatsApp (Meta), if you message us there.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-ink"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>We do not sell personal information.</p>
      </LegalBlock>

      <LegalBlock title="Asking for access or deletion">
        <p>
          Email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>{" "}
          to ask what we hold about you, to correct it, or to ask for deletion. If you are in the UK
          or the EEA, local law may give you additional rights, including a complaint to your data
          authority. Write to us first and we will answer.
        </p>
        <p>
          The related project terms are on the{" "}
          <Link to="/terms" className={legalLinkClass}>
            Terms of Service
          </Link>
          .
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
