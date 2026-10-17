---
title: "ADR 0003: Cloudflare Pages hosting"
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.1
---

# ADR 0003: Cloudflare Pages hosting

- **Status:** approved
- **Date:** 2026-10-17
- **Decision owner:** Parik
- **Supersedes:** none

## Context

The public site needs free or cheap hosting, HTTPS, a global CDN, simple git-based deploys and one small server-side function for the Kick live-status proxy. The revised scope adds a build step and a separate admin server. The public site is still a single page.

## Decision

Host the public site on **Cloudflare Pages**:

- Connect the GitHub repository. Every push to `main` deploys production. Other branches produce preview URLs.
- Build command: `npm run build:site`.
- Build output directory: `site/_site`.
- Node version is pinned in `.nvmrc` or the Pages environment.
- Use a Pages Function at `functions/api/live.js` for the Kick proxy.
- Use Cloudflare DNS for `chinnzz.com` once the client purchases it.
- Use Cloudflare Web Analytics (cookieless) if the client approves analytics.
- Host the admin separately on the VPS. It is not part of the Pages project and not served from the public domain.

## Consequences

Easier:

- The free tier covers the public site.
- Automatic HTTPS and CDN.
- Preview deployments per branch.
- Functions and DNS in one account.
- Instant rollbacks through deployment history.

Harder:

- The build must pass before a deploy. A failed build blocks the publish, which is the intended behavior.
- The client needs a Cloudflare account or must grant access.
- Two hosting systems exist after the VPS phase: Cloudflare for the public site and the VPS for the admin.

Now true:

- Public deploys are git driven and build from `content/`.
- The admin host is separate and must not be reachable on the public domain.
- Secrets for publishing live in the VPS environment, not in Cloudflare or the repository.

## Alternatives considered

| Option | Why not chosen |
|---|---|
| GitHub Pages | Free, but no serverless function for the Kick proxy. |
| Vercel | Good product, but the free usage model and function setup are less aligned with this static page. |
| Netlify | Comparable. Cloudflare was chosen for DNS, functions and analytics in one account. |
| Shared hosting | Recurring cost and manual deploys. |
| Serve the public site from the VPS | Adds a runtime dependency and breaks the static fallback design. |

## Follow-up

- [ ] Create the Cloudflare Pages project and set the build command at M10. Owner: Parik.
- [ ] Confirm the client owns the Cloudflare account or has admin access. Owner: both.
- [ ] Confirm the domain and DNS ownership at M10. Owner: chinnzz.

## Related documents

- [ADR 0008: Build step](0008-build-step.md)
- [Architecture](../../03-technical/architecture.md)
- [Launch runbook](../../05-delivery/launch-runbook.md)

