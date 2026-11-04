import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/us/ai-automation-agency")({
  component: () => <LandingPage path="/us/ai-automation-agency" />,
  head: () => landingHead("/us/ai-automation-agency"),
});
