import { createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalPage, legalLinkClass } from "@/components/legal-page";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    pageHead({
      title: "Terms of Service — Adilflow",
      description:
        "Adilflow agrees the scope in writing before work starts. You own the deliverables when the project is paid in full, and your project information stays confidential. Email hello@adilflow.com with questions.",
      path: "/terms",
    }),
});

export function TermsPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Terms of Service"
      lede="These terms cover project work you commission from Adilflow."
    >
      <LegalBlock title="Scope">
        <p>A written scope is agreed before work starts.</p>
      </LegalBlock>
      <LegalBlock title="Ownership">
        <p>
          100% ownership of the deliverables transfers to you when the project is paid in full.
        </p>
      </LegalBlock>
      <LegalBlock title="Confidentiality">
        <p>Client data and project information stay confidential and secure.</p>
      </LegalBlock>
      <LegalBlock title="Contact">
        <p>
          Questions: email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>
          . WhatsApp {site.phoneDisplay}.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
