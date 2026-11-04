import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/services_/ai-automation-agency")({
  component: () => <LandingPage path="/services/ai-automation-agency" />,
  head: () => landingHead("/services/ai-automation-agency"),
});
