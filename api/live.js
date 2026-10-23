const SLUG = "chinnzz";
const CHANNEL_URL = `https://kick.com/${SLUG}`;
const API_URL = `https://kick.com/api/v2/channels/${SLUG}`;

// Vercel Serverless Function (Node.js runtime, Web API signature).
// Same response shape as the Cloudflare Pages Function it replaces.
export async function GET() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(API_URL, {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0 (compatible; chinnzz-site/1.0)",
      },
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) return json(unknownBody());

    const data = await res.json();
    const stream = data?.livestream ?? null;
    return json({
      live: Boolean(stream),
      status: stream ? "live" : "offline",
      viewers: stream?.viewer_count ?? null,
      title: stream?.session_title ?? null,
      startedAt: stream?.created_at ?? null,
      channelUrl: CHANNEL_URL,
      checkedAt: new Date().toISOString(),
    });
  } catch {
    return json(unknownBody());
  }
}

function unknownBody() {
  return {
    live: false,
    status: "unknown",
    viewers: null,
    title: null,
    startedAt: null,
    channelUrl: CHANNEL_URL,
    checkedAt: new Date().toISOString(),
  };
}

function json(body) {
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // Vercel edge-caches function responses that set s-maxage.
      "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
