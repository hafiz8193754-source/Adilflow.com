import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/dubai/ai-automation-agency")({
  component: () => <LandingPage path="/dubai/ai-automation-agency" />,
  head: () => landingHead("/dubai/ai-automation-agency"),
});
