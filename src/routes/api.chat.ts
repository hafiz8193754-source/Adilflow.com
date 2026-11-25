import { createFileRoute } from "@tanstack/react-router";
import { handleChat } from "@/lib/ai/handle-chat.server";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => handleChat(request),
    },
  },
});
