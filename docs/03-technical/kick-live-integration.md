---
title: Kick Live Integration
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Kick Live Integration

Decision: [ADR 0004](../00-project/decisions/0004-kick-live-proxy.md).

## Goal

Show whether chinnzz is live at https://kick.com/chinnzz, with viewer count and stream title when available, without slowing the page or breaking it when Kick is unavailable.

## Why a proxy

The Kick public channel endpoint (`https://kick.com/api/v2/channels/chinnzz`) does not send CORS headers, so the browser cannot call it directly. A Cloudflare Pages Function fetches it server-side and exposes a same-origin JSON endpoint at `/api/live`.

The function lives in the public deploy and is independent of the admin backend. It is the only runtime call the public site makes.

## Endpoint

```
GET /api/live
```

Response, always HTTP 200, including on upstream failure:

```json
{
  "live": true,
  "status": "live",
  "viewers": 1234,
  "title": "stream title",
  "startedAt": "2026-10-17T18:02:00Z",
  "channelUrl": "https://kick.com/chinnzz",
  "checkedAt": "2026-10-17T18:10:00Z"
}
```

| Field | Type | Notes |
|---|---|---|
| `live` | boolean | True only when `livestream` is a non-null object |
| `status` | `live`, `offline`, `unknown` | `unknown` on upstream error |
| `viewers` | number or null | `livestream.viewer_count` |
| `title` | string or null | `livestream.session_title` |
| `startedAt` | ISO string or null | `livestream.created_at` |
| `channelUrl` | string | Always the canonical Kick URL |
| `checkedAt` | ISO string | Server time of the check |

## Function outline (`functions/api/live.js`)

```js
const SLUG = "chinnzz";
const CHANNEL_URL = `https://kick.com/${SLUG}`;
const API_URL = `https://kick.com/api/v2/channels/${SLUG}`;

export async function onRequestGet() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(API_URL, {
      headers: {
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0 (compatible; chinnzz-site/1.0)",
      },
      signal: controller.signal,
      cf: { cacheTtl: 60, cacheEverything: true },
    });
    clearTimeout(timer);

    if (!res.ok) return unknown();

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
    return unknown();
  }
}

function unknown() {
  return json({
    live: false,
    status: "unknown",
    viewers: null,
    title: null,
    startedAt: null,
    channelUrl: CHANNEL_URL,
    checkedAt: new Date().toISOString(),
  });
}

function json(body) {
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
```

Notes:

- Fixed slug only. No user input, so no SSRF surface.
- 5 second upstream timeout.
- Edge cache of 60 seconds keeps Kick requests low and the response fast.
- If Kick blocks the user agent, test a standard browser agent and record the change here.
- `livestream: null` is the normal offline signal. Do not infer offline from a missing field without checking the payload shape.

## Client behavior

- Fetch after first paint. Do not block rendering on the request.
- Poll every 60 seconds.
- Pause while the tab is hidden. Fetch immediately when it becomes visible.
- Treat responses older than 3 minutes as stale and fall back to neutral.
- Abort in-flight requests on `pagehide`.
- Reserve space for the viewer count so the layout does not shift.
- Update only the status text and the actions, never the whole hero.

States:

| State | What the visitor sees |
|---|---|
| `live` | `LIVE NOW` with viewer count, optional title, primary action Watch live on Kick |
| `offline` | Neutral offline line, action Watch on Kick |
| `unknown` or network error | Watch on Kick, no live claim |
| Before the first response | The static neutral state from the build. Never a blocking Checking message. |
| No JavaScript | The static neutral state. Links work. |

`aria-live="polite"` is on the status text. Announce live and offline transitions only, not every viewer count.

## Content interaction

The status label, offline copy and watch button label come from `content/sections/live.json` and `content/sections/hero.json`. The function supplies live data only. It does not supply marketing copy.

If chinnzz changes his Kick slug, update:

1. `site.json` `kick.slug` and `kick.url`.
2. The function constant.
3. The canonical and structured data.
4. This document.

## Testing

| Case | How |
|---|---|
| Offline channel | Call `/api/live` while chinnzz is offline. Expect `status: "offline"` |
| Live channel | Test during a real stream. Check viewers and title |
| Upstream failure | Point the function at an invalid URL. Expect `status: "unknown"` and a working page |
| Timeout | Throttle the network or simulate a slow upstream |
| Rate limit or 429 | Return unknown. Never show an error toast |
| Cache | Check `cf-cache-status` and confirm roughly 60 second edge caching |
| No JavaScript | The static state renders and links work |
| In-app browser | Open from Kick, X and Discord on iOS and Android |

Local check:

```bash
npx wrangler pages dev site/_site
curl http://localhost:8788/api/live
```

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Unofficial endpoint changes | Isolated in one file, easy to swap |
| Cloudflare addresses blocked | Try another agent or move to an official API |
| Kick rate limiting | 60 second edge cache and 60 second client poll |
| Stale live claim | `checkedAt` freshness check and neutral fallback after 3 minutes |
| CORS regression | Same-origin only, no browser cross-origin dependency |

## Move to an official Kick API

If an official key becomes available:

1. Store it as a Cloudflare secret.
2. Replace the fetch in `functions/api/live.js`.
3. Keep the response shape, so the client does not change.
4. Update this document and ADR 0004.

## Related documents

- [Architecture](architecture.md)
- [ADR 0004](../00-project/decisions/0004-kick-live-proxy.md)
- [Content Model and Admin](content-model-and-admin.md)
- [Performance and Accessibility](performance-and-a11y.md)
