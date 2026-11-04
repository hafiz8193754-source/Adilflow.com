import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/services_/web-development")({
  component: () => <LandingPage path="/services/web-development" />,
  head: () => landingHead("/services/web-development"),
});
