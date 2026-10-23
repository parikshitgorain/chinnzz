---
title: "ADR 0009: Vercel hosting"
status: approved
owner: Parik
updated: 2026-10-23
audience: internal
version: 1.0
---

# ADR 0009: Vercel hosting

- **Status:** approved
- **Date:** 2026-10-23
- **Decision owner:** Parik
- **Supersedes:** ADR 0003 (Cloudflare Pages)

## Context

ADR 0003 chose Cloudflare Pages for the public site. The client asked to deploy on Vercel instead, and the Vercel account is already connected with working auth.

## Decision

Host the public site on **Vercel**:

- Connect the GitHub repository `parikshitgorain/chinnzz`. Every push to `main` deploys production.
- Build command: `npm run build:site`.
- Build output directory: `site/_site`.
- Node version: 22, via `.nvmrc`.
- The Kick live-status proxy moves from the Cloudflare Pages Function (`functions/api/live.js`) to the Vercel Serverless Function (`api/live.js`). Same response shape, same 60-second edge cache via `s-maxage`.
- Security and cache headers move from `public/_headers` to `vercel.json`. The Cloudflare files stay in the repo, inert.
- The custom domain attaches after chinnzz buys it.

## Consequences

- The deploy target changes; the architecture is unchanged (static output plus one serverless function, content from `content/`, admin separate).
- Preview deployments per branch keep working, now on Vercel URLs.
- `functions/api/live.js` and `public/_headers` are inert under Vercel and kept for reference.

## Related documents

- [ADR 0003: Cloudflare Pages hosting](0003-cloudflare-pages.md) (superseded)
- [Architecture](../../03-technical/architecture.md)
- [Launch runbook](../../05-delivery/launch-runbook.md)
