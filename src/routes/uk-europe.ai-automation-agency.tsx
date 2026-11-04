import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/uk-europe/ai-automation-agency")({
  component: () => <LandingPage path="/uk-europe/ai-automation-agency" />,
  head: () => landingHead("/uk-europe/ai-automation-agency"),
});
