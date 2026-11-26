import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalPage, legalLinkClass } from "@/components/legal-page";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    pageHead({
      title: "Terms of Service — Adilflow",
      description:
        "How Adilflow scopes work, takes milestone payments, transfers ownership on final payment, and handles confidentiality and post-launch support.",
      path: "/terms",
    }),
});

export function TermsPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Terms of Service"
      lede="These terms cover use of adilflow.com and project work commissioned from Adilflow. A written proposal controls if it states a different scope, price, schedule, or support window."
    >
      <LegalBlock title="Who you are contracting with">
        <p>
          Adilflow is the practice of {site.person}. Office: {site.officeLine}. Website:{" "}
          <a href="https://www.adilflow.com" className={legalLinkClass}>
            https://www.adilflow.com
          </a>
          . Email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>{" "}
          or WhatsApp{" "}
          <a href={site.whatsappBase} className={legalLinkClass} target="_blank" rel="noreferrer">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <p>
          Browsing the site, or sending an enquiry, does not by itself start a project. Work starts
          when a written proposal is agreed and the first milestone in that proposal is paid.
        </p>
      </LegalBlock>

      <LegalBlock title="Scope and written proposals">
        <p>
          There is no public price list. After a conversation by the{" "}
          <Link to="/contact" className={legalLinkClass}>
            contact form
          </Link>
          , email, or WhatsApp, you receive a written scope and quote. It states the work, the
          timeline, and the milestone schedule. That document is what the project follows.
        </p>
        <p>
          Quotes vary by country, scope, and market. Figures on the website that are labelled as
          examples are illustrations from past work. They are not a promise of results on your
          project.
        </p>
      </LegalBlock>

      <LegalBlock title="Milestone payments">
        <p>
          The proposal sets the milestones and when each is due. Payment is by bank transfer, Wise,
          or Payoneer. Work on a milestone starts once the payment for it has been received, and the
          project starts once the first milestone is paid.
        </p>
        <p>
          Advertising spend on Google, Meta, TikTok, LinkedIn, or any other platform is billed
          separately and is paid to those platforms. Hosting, domains, software subscriptions, and
          API usage are also billed separately, unless the written proposal includes a named item.
        </p>
      </LegalBlock>

      <LegalBlock title="Intellectual property">
        <p>
          When the final payment in the proposal is received, you own the custom source code,
          designs, domains, and accounts created for the project. No vendor lock-in on that custom
          work.
        </p>
        <p>
          Open-source libraries and third-party products stay under their own licences. Materials
          you supply remain yours. Adilflow keeps its pre-existing tools, templates, and methods.
          Work that a paid milestone has already delivered is yours as the proposal describes it.
          Custom work that has not been paid for is not transferred.
        </p>
        <p>
          A finished public site may be shown in the Adilflow portfolio. If the work must stay
          private, say so in the proposal or in an NDA.
        </p>
      </LegalBlock>

      <LegalBlock title="Confidentiality and NDA">
        <p>
          A mutual NDA is signed on request, before you share business data, credentials, or
          internal workflows. With or without that NDA, client materials are used only to do the
          work and are not published.
        </p>
        <p>
          The demo chatbot on this website is not a confidential channel. Do not put secrets into
          it. See the{" "}
          <Link to="/privacy" className={legalLinkClass}>
            Privacy Policy
          </Link>
          .
        </p>
      </LegalBlock>

      <LegalBlock title="Post-launch support">
        <p>
          Bug-fix and handover support is included after launch for the window written in the
          proposal, together with clean documentation. That window is agreed per project. It is not
          a fixed number of days published on the site.
        </p>
        <p>
          A retainer for ongoing SEO, ads, content, or automation is a separate agreement. It starts
          only if it is written down and accepted.
        </p>
      </LegalBlock>

      <LegalBlock title="Limitation of liability">
        <p>
          Adilflow carries out the agreed work with reasonable care. Adilflow is not liable for
          indirect or consequential loss, lost profits, or outcomes that depend on an advertising
          platform, a search ranking, or another company’s service.
        </p>
        <p>
          Liability for a project is limited to the fees you paid Adilflow for that project. Nothing
          in these terms limits liability that the law does not allow to be limited.
        </p>
      </LegalBlock>

      <LegalBlock title="Using the website">
        <p>
          The site is for information and enquiries. The demo chatbot can be wrong. It is not legal,
          financial, or technical advice. Do not misuse the site, attempt to disrupt it, or send
          unlawful content through the forms or the chat.
        </p>
      </LegalBlock>

      <LegalBlock title="Law and contact">
        <p>These terms are governed by the laws of Pakistan.</p>
        <p>
          Questions about a project or these terms: {site.person}, {site.officeLine}. Email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>{" "}
          or WhatsApp {site.phoneDisplay}.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
