import { chatLimits } from "@/lib/ai/config";

type Bucket = { count: number; reset: number };

const buckets = new Map<string, Bucket>();

/** Basic per-IP limit. Each serverless instance has its own map. */
export function allowRequest(ip: string, now = Date.now()): boolean {
  if (buckets.size > 2000) {
    for (const [key, bucket] of buckets) {
      if (bucket.reset <= now) buckets.delete(key);
    }
  }

  const current = buckets.get(ip);
  if (!current || current.reset <= now) {
    buckets.set(ip, { count: 1, reset: now + chatLimits.windowMs });
    return true;
  }
  if (current.count >= chatLimits.maxRequests) return false;
  current.count += 1;
  return true;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const raw = forwarded?.split(",")[0] ?? request.headers.get("x-real-ip") ?? "unknown";
  const ip = raw.trim().slice(0, 64);
  return ip || "unknown";
}
