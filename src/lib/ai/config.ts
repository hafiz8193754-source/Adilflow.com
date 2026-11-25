/**
 * Single model id for the site chat demo.
 * Routed through Vercel AI Gateway (AI_GATEWAY_API_KEY, or OIDC on Vercel).
 * google/gemini-2.5-flash-lite is a current low-latency Gateway model
 * (about $0.10 / 1M input tokens and $0.40 / 1M output tokens).
 */
export const CHAT_MODEL = "google/gemini-2.5-flash-lite" as const;

export const chatLimits = {
  /** Hard cap so a reply stays short on Hobby-plan CPU. */
  maxOutputTokens: 180,
  /** Extra character ceiling if the provider ignores the token cap. */
  maxOutputChars: 900,
  /** Conversation turns forwarded to the model, including the newest user message. */
  maxMessages: 6,
  maxMessageChars: 500,
  /** Per-IP window. In-memory, so it is per instance, not global. */
  maxRequests: 8,
  windowMs: 10 * 60 * 1000,
  /** Abort the model call so a stuck request cannot sit on CPU. */
  totalTimeoutMs: 12_000,
  firstChunkTimeoutMs: 8_000,
} as const;
