import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/services_/seo-services")({
  component: () => <LandingPage path="/services/seo-services" />,
  head: () => landingHead("/services/seo-services"),
});
