import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/services_/paid-ads")({
  component: () => <LandingPage path="/services/paid-ads" />,
  head: () => landingHead("/services/paid-ads"),
});
