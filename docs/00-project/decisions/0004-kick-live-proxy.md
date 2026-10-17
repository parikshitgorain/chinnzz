---
title: "ADR 0004: Kick live status through a Pages Function"
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.1
---

# ADR 0004: Kick live status through a Pages Function

- **Status:** approved
- **Date:** 2026-10-17
- **Decision owner:** Parik
- **Supersedes:** none

## Context

The site should show whether chinnzz is live. The Kick channel is `https://kick.com/chinnzz`. Kick's public channel endpoint (`https://kick.com/api/v2/channels/chinnzz`) does not send CORS headers, so the browser cannot call it directly. The site is static and should stay fast. A full Kick OAuth app is overkill for v1.

The admin backend is a separate service and is not always running. Live status must not depend on it.

## Decision

Add a small **Cloudflare Pages Function** at `functions/api/live.js` that:

- Fetches `https://kick.com/api/v2/channels/chinnzz` server-side with a normal `User-Agent` and `Accept: application/json`.
- Returns a normalized JSON payload: `{ live, status, viewers, title, startedAt, channelUrl, checkedAt }`.
- Caches the response at the edge for about 60 seconds with `stale-while-revalidate=120`.
- Never throws a user-facing error. On failure it returns a neutral unknown payload.

The frontend fetches `/api/live` on load and every 60 seconds only while the tab is visible. It updates a live pill or a neutral "Watch on Kick" state. No player iframe loads automatically. "Watch live" links out to Kick.

## Consequences

Easier:

- Same-origin fetch with no CORS problem.
- No API keys and no cost.
- Fast and gracefully degradable.
- The unofficial endpoint is isolated in one file.

Harder:

- The endpoint is unofficial and could change or rate limit.
- Cloudflare could be blocked by Kick at some point.
- Viewer counts can be stale, so the UI must not overstate freshness.

Now true:

- If the function fails, the page still renders and shows a neutral CTA.
- Migrating to Kick's official API later means changing only this function.
- The admin backend is not involved in live status.

## Alternatives considered

| Option | Why not chosen |
|---|---|
| Browser fetch of the Kick API | Blocked by CORS. |
| Third-party public API or proxy | Unreliable, rate limited and adds a dependency. |
| Kick iframe or embed only | No reliable live signal without loading a heavy player and causing layout shift. |
| Official Kick OAuth API | Requires app registration and credentials for a single public channel. |
| No live badge | Fails a core client request. |
| Fetch through the VPS admin | Ties public live status to the backend uptime. |

## Follow-up

- [ ] Implement and test live, offline and failure states in M8. Owner: Parik.
- [ ] Monitor the unofficial endpoint after launch and swap to the official API if it breaks. Owner: Parik.

## Related documents

- [Kick live integration](../../03-technical/kick-live-integration.md)
- [Architecture](../../03-technical/architecture.md)
- [Security](../../03-technical/security.md)

