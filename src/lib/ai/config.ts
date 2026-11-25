/**
 * Single model id for the site chat demo.
 * Primary path: Google AI Studio free tier via `@ai-sdk/google`
 * (`GOOGLE_GENERATIVE_AI_API_KEY`). `gemini-2.5-flash-lite` is closed to new
 * keys; `gemini-3.5-flash-lite` is the free-tier model that answers on v1beta.
 * If only `AI_GATEWAY_API_KEY` is set, the same id is sent as `google/<id>`.
 */
export const CHAT_MODEL = "gemini-3.5-flash-lite" as const;

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
