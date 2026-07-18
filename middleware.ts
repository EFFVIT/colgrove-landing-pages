// ─────────────────────────────────────────────────────────────────────────────
// EFFVIT AI-Visit collector — Next.js Edge Middleware
//
// Drop into a Next.js LP app as `middleware.ts` (or merge into an existing one).
// Beacons AI crawler / live-fetch / AI-referral hits to Control's ingest
// endpoint. Runs at the edge, before the page renders, and the beacon is
// fire-and-forget so it never blocks the response.
//
// Set these env vars in the app (Coolify → env):
//   AI_CRAWL_CLIENT_ID     e.g. "mollura"
//   AI_CRAWL_INGEST_URL    https://control.effvit.com/api/ai-crawl/ingest
//   AI_CRAWL_INGEST_SECRET must equal AI_CRAWL_INGEST_SECRET on Control
//
// No PHI / visitor PII is sent — only UA, path, referrer, and the bot IP.
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse, type NextRequest } from "next/server";

const UA_NEEDLES = [
  "gptbot", "oai-searchbot", "chatgpt-user", "claudebot", "anthropic-ai", "claude-user",
  "claude-web", "perplexitybot", "perplexity-user", "ccbot", "bytespider",
  "meta-externalagent", "meta-externalfetcher", "applebot", "amazonbot", "cohere-ai",
  "diffbot", "imagesiftbot", "youbot", "petalbot", "duckassistbot", "mistralai-user",
  "google-cloudvertexbot", "timpibot", "omgilibot",
];

const REF_HOSTS = [
  "chatgpt.com", "chat.openai.com", "perplexity.ai", "claude.ai", "gemini.google.com",
  "bard.google.com", "copilot.microsoft.com", "you.com", "phind.com", "poe.com",
];

function isAiSignal(ua: string, ref: string): boolean {
  const u = ua.toLowerCase();
  if (UA_NEEDLES.some((n) => u.includes(n))) return true;
  const r = ref.toLowerCase();
  return REF_HOSTS.some((h) => r.includes(h));
}

export function middleware(req: NextRequest) {
  const ua  = req.headers.get("user-agent") ?? "";
  const ref = req.headers.get("referer") ?? "";

  const url    = process.env.AI_CRAWL_INGEST_URL;
  const secret = process.env.AI_CRAWL_INGEST_SECRET;
  const client = process.env.AI_CRAWL_CLIENT_ID;

  if (url && secret && client && isAiSignal(ua, ref)) {
    const ip =
      req.headers.get("cf-connecting-ip") ??
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      null;

    const payload = JSON.stringify({
      client_id: client,
      property:  req.nextUrl.hostname,
      path:      req.nextUrl.pathname,
      ua,
      referrer:  ref,
      ip,
    });

    // Fire-and-forget. We do NOT await — the response goes out immediately.
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-ingest-key": secret },
      body: payload,
    }).catch(() => { /* never block or throw on a logging beacon */ });
  }

  return NextResponse.next();
}

// Only run on real page routes, not static assets.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?)).*)"],
};
