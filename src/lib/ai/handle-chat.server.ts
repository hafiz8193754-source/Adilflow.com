import "@tanstack/react-start/server-only";
import { streamText, type ModelMessage } from "ai";
import { CHAT_MODEL, chatLimits } from "@/lib/ai/config";
import { chatInstructions, FALLBACK_REPLY, STUB_REPLY } from "@/lib/ai/knowledge";
import { allowRequest, clientIp } from "@/lib/ai/rate-limit";

type ChatRole = "user" | "assistant";

function plain(body: string, status: number, mode: "stub" | "fallback" | "limited") {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Adilflow-Chat": mode,
    },
  });
}

function sanitize(body: unknown): ModelMessage[] | null {
  if (!body || typeof body !== "object") return null;
  const raw = (body as { messages?: unknown }).messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 20) return null;

  const cleaned: { role: ChatRole; content: string }[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const text = content.replace(/\s+/g, " ").trim().slice(0, chatLimits.maxMessageChars);
    if (!text) continue;
    cleaned.push({ role, content: text });
  }

  const recent = cleaned.slice(-chatLimits.maxMessages);
  while (recent[0]?.role === "assistant") recent.shift();
  if (!recent.length || !recent.some((message) => message.role === "user")) return null;
  return recent;
}

function gatewayConfigured() {
  return Boolean(process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN);
}

export async function handleChat(request: Request): Promise<Response> {
  if (!allowRequest(clientIp(request))) {
    return plain(
      "Too many messages from this network. Please wait a few minutes, or use the contact form.",
      429,
      "limited",
    );
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > 12_000) {
    return plain("That message is too long. Please shorten it.", 413, "limited");
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return plain("I couldn't read that message. Please try again.", 400, "fallback");
  }

  const messages = sanitize(payload);
  if (!messages) {
    return plain("Please send a short question about Adilflow's services.", 400, "fallback");
  }

  if (!gatewayConfigured()) {
    const production = process.env.VERCEL_ENV === "production";
    return plain(production ? FALLBACK_REPLY : STUB_REPLY, 200, production ? "fallback" : "stub");
  }

  const abort = new AbortController();
  const onAbort = () => abort.abort();
  request.signal.addEventListener("abort", onAbort);

  try {
    const result = streamText({
      model: CHAT_MODEL,
      instructions: chatInstructions,
      messages,
      maxOutputTokens: chatLimits.maxOutputTokens,
      temperature: 0.2,
      reasoning: "none",
      maxRetries: 0,
      timeout: {
        totalMs: chatLimits.totalTimeoutMs,
        firstChunkMs: chatLimits.firstChunkTimeoutMs,
      },
      abortSignal: abort.signal,
    });

    const encoder = new TextEncoder();
    let sent = 0;
    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const part of result.textStream) {
            if (request.signal.aborted) break;
            sent += part.length;
            controller.enqueue(encoder.encode(part));
            if (sent >= chatLimits.maxOutputChars) {
              abort.abort();
              break;
            }
          }
          if (!request.signal.aborted && sent === 0) {
            controller.enqueue(encoder.encode(FALLBACK_REPLY));
          }
        } catch (error) {
          if (!request.signal.aborted && sent === 0) {
            controller.enqueue(encoder.encode(FALLBACK_REPLY));
          }
          console.error("[chat] stream failed", error instanceof Error ? error.name : "error");
        } finally {
          request.signal.removeEventListener("abort", onAbort);
          try {
            controller.close();
          } catch {
            /* already closed */
          }
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Accel-Buffering": "no",
        "X-Adilflow-Chat": "live",
      },
    });
  } catch (error) {
    request.signal.removeEventListener("abort", onAbort);
    console.error("[chat] request failed", error instanceof Error ? error.name : "error");
    return plain(FALLBACK_REPLY, 200, "fallback");
  }
}
