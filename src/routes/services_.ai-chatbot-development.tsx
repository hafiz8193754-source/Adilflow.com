import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/services_/ai-chatbot-development")({
  component: () => <LandingPage path="/services/ai-chatbot-development" />,
  head: () => landingHead("/services/ai-chatbot-development"),
});
