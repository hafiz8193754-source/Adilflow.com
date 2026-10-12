import { createServerFn } from "@tanstack/react-start";

export type ContactInput = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  budget?: string;
  message: string;
  website?: string; // honeypot
};

export type ContactResult =
  { ok: true } | { ok: false; error: string; fieldErrors?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): ContactInput => {
    const d = (data ?? {}) as Record<string, unknown>;
    return {
      name: str(d.name, 120),
      email: str(d.email, 200),
      phone: str(d.phone, 40),
      subject: str(d.subject, 120),
      budget: str(d.budget, 80),
      message: str(d.message, 5000),
      website: str(d.website, 200),
    };
  })
  .handler(async ({ data }): Promise<ContactResult> => {
    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (data.website) return { ok: true };

    const fieldErrors: Record<string, string> = {};
    if (data.name.length < 2) fieldErrors.name = "Please add your name.";
    if (!EMAIL_RE.test(data.email)) fieldErrors.email = "A valid email is required.";
    if (data.message.length < 12) fieldErrors.message = "Tell me a little more about the project.";
    if (Object.keys(fieldErrors).length) {
      return { ok: false, error: "Please fix the highlighted fields.", fieldErrors };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !to) {
      console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not configured");
      return { ok: false, error: "Email is temporarily unavailable. Please use WhatsApp instead." };
    }

    const rows: Array<[string, string]> = [
      ["Name", data.name],
      ["Email", data.email],
      ["WhatsApp / phone", data.phone || "—"],
      ["Subject", data.subject || "—"],
      ["Budget", data.budget || "—"],
    ];
    const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", data.message].join("\n");
    const html = `<h2>New enquiry from adilflow.com</h2><table cellpadding="4">${rows
      .map(
        ([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`,
      )
      .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Adilflow <hello@adilflow.com>",
          to: [to],
          reply_to: data.email,
          subject: `New enquiry: ${data.subject || "Project"} — ${data.name}`.slice(0, 200),
          text,
          html,
        }),
      });
      if (!res.ok) {
        console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
        return {
          ok: false,
          error: "Couldn't send your message. Please try again or use WhatsApp.",
        };
      }
      return { ok: true };
    } catch (err) {
      console.error("[contact] Resend request failed", err);
      return { ok: false, error: "Couldn't send your message. Please try again or use WhatsApp." };
    }
  });
