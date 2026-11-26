import { createFileRoute, redirect } from "@tanstack/react-router";

/** Older URL. vercel.json still points /privacy-policy.html here. */
export const Route = createFileRoute("/privacy-policy")({
  beforeLoad: () => {
    throw redirect({ to: "/privacy", statusCode: 301 });
  },
});
