import { createFileRoute } from "@tanstack/react-router";
import { AiChatbotPage } from "@/components/ai-chatbot-page";
import { chatbotMeta } from "@/lib/ai/chatbot-meta";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services_/ai-chatbot-development")({
  component: AiChatbotPage,
  head: () =>
    pageHead({
      title: chatbotMeta.title,
      description: chatbotMeta.description,
      path: chatbotMeta.path,
    }),
});
