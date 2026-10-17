---
title: "ADR 0007: Static fallback and file-based content"
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.0
---

# ADR 0007: Static fallback and file-based content

- **Status:** approved
- **Date:** 2026-10-17
- **Decision owner:** chinnzz
- **Supersedes:** none

## Context

The backend and admin will not be deployed until the VPS phase. chinnzz also needs the public site to keep working if the backend is down, slow or unavailable. A site that fetches its copy, links and code state from the backend at runtime would break in exactly those cases.

## Decision

Use versioned content files as the source of truth and build the public site from them:

- All editable content lives in `content/`.
- Eleventy reads the content and renders static HTML at build time.
- The public site is deployed to Cloudflare Pages and never calls the admin or backend at runtime.
- The only runtime API is `/api/live` for Kick status. It is isolated and has a neutral fallback.
- The admin writes content files and triggers a build. Draft edits do not affect the live site until publish succeeds.
- If the backend is unavailable, the last successful static build remains live. The admin shows an offline banner and keeps edits local.
- If a publish fails, nothing deploys and the last good build stays live.

## Consequences

Easier:

- The public site is fast, cacheable and independent of server uptime.
- Content history and rollback come from git.
- The site can launch before the VPS exists.
- A backend outage does not take the public site down.

Harder:

- Content changes require a build and deploy step.
- The admin must validate content and detect publish failures clearly.
- Media must be committed or stored in a location the build can read.

Now true:

- `content/` is the single source of truth for site copy and settings.
- A public visitor never depends on the admin server.
- The admin is a convenience layer over files, not a runtime dependency.

## Alternatives considered

| Option | Why not chosen |
|---|---|
| Runtime API for all content | Adds a failure point and slows first paint. Breaks the fallback requirement. |
| Database-only content | Loses simple git review and rollback. Requires the backend to be live at all times. |
| Headless CMS hosted service | Adds a monthly cost and an external dependency for a one-page site. |
| Static content with no admin | Does not meet the client requirement. |

## Follow-up

- [ ] Keep the rule in code review: no public page may fetch content from the admin API. Owner: Parik.
- [ ] Test the fallback by stopping the backend and loading the public site in M9 and M11. Owner: Parik.
- [ ] Document manual file editing as the emergency path in the handover. Owner: Parik.

## Related documents

- [Architecture](../../03-technical/architecture.md)
- [Content model and admin](../../03-technical/content-model-and-admin.md)
- [ADR 0006: Admin backend](0006-admin-backend.md)
- [Handover](../../05-delivery/handover.md)

