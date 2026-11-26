import { createFileRoute } from "@tanstack/react-router";
import { LegalBlock, LegalPage, legalLinkClass } from "@/components/legal-page";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    pageHead({
      title: "Privacy Policy — Adilflow",
      description:
        "Information you share with Adilflow is kept confidential and secure, and is used only to respond to your enquiry and deliver your project. Email hello@adilflow.com to request deletion.",
      path: "/privacy",
    }),
});

export function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      lede="Information you share with Adilflow is kept confidential and secure."
    >
      <LegalBlock title="Your information">
        <p>
          Information you share with Adilflow is kept confidential and secure. It is used only to
          respond to your enquiry and to deliver your project. It is never sold or shared with
          third parties.
        </p>
        <p>
          Email{" "}
          <a href={`mailto:${site.email}`} className={legalLinkClass}>
            {site.email}
          </a>{" "}
          at any time to request deletion. You can also reach us on WhatsApp at {site.phoneDisplay}.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
