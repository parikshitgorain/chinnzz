---
title: "ADR 0002: Static site"
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.1
---

# ADR 0002: Static site

- **Status:** approved. The no-build-step part is superseded by [ADR 0008](0008-build-step.md).
- **Date:** 2026-10-17
- **Decision owner:** Parik
- **Supersedes:** none

## Context

v1 is a single landing page with no visitor accounts, no payments and no public database. The audience is mobile-first. The client wants something simple now, with room to grow later. Hosting should be free or near free, and the page must load fast inside the Kick, X and Discord in-app browsers.

The revised scope adds an admin panel, a content model and a build step. The reason for a static public site still holds. The reason for no build step does not.

## Decision

Build the public site as static output:

- Eleventy renders the page from `content/` at build time. See [ADR 0008](0008-build-step.md).
- CSS and JavaScript stay hand written. No client framework.
- The admin is a separate Node service and is not part of the public build.
- The public site never fetches content from the backend at runtime.
- A single Cloudflare Pages Function handles Kick live status.

The original no-build-step choice is superseded. The static-hosting choice remains.

## Consequences

Easier:

- Fast deploys and excellent performance.
- No public database or server dependency.
- Content can be reviewed and rolled back in git.
- Free hosting on Cloudflare Pages.

Harder:

- Content changes need a build and publish step.
- The admin adds server maintenance after the VPS deploy.
- Repeated markup must be handled through templates rather than hand editing.

Now true:

- The public site is static output, not hand-written HTML.
- The admin is an internal tool with its own host.
- Future features such as a leaderboard would still need a new data source and a change request.

## Alternatives considered

| Option | Why not chosen |
|---|---|
| Next.js plus Tailwind | Heavier than a one-page site and adds a client framework. |
| Astro | Capable, but more framework than the page needs. |
| Vite plus React | A single-page app adds JavaScript and failure states for static content. |
| WordPress | Hosting cost and security burden. It also conflicts with the static public site. |
| Server-rendered public site on the VPS | The public site would depend on the backend and break the fallback requirement. |

## Follow-up

- [x] Supersede the no-build-step point with ADR 0008.
- [ ] Keep the public build free of backend calls in code review. Owner: Parik.
- [ ] Revisit if v1 grows past one public page. Owner: Parik.

## Related documents

- [ADR 0003: Cloudflare Pages](0003-cloudflare-pages.md)
- [ADR 0007: Static fallback](0007-static-fallback.md)
- [ADR 0008: Build step](0008-build-step.md)
- [Architecture](../../03-technical/architecture.md)

