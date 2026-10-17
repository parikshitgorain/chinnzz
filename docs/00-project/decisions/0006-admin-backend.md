---
title: "ADR 0006: Custom admin panel and backend"
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.0
---

# ADR 0006: Custom admin panel and backend

- **Status:** approved
- **Date:** 2026-10-17
- **Decision owner:** chinnzz
- **Supersedes:** none

## Context

chinnzz wants to manage all site settings himself. That includes copy, links, socials, the Stake code state, support links, sponsor details, SEO, media and legal pages. Editing files in git does not meet that requirement.

The site is small and runs on Cloudflare Pages. The admin does not need to be public, and it does not need to serve content to visitors at runtime. A heavy CMS would add cost and maintenance that the project does not need.

## Decision

Build a small custom admin panel and backend with these parts:

- **Admin UI:** Node.js, Express and EJS server-rendered pages. Small vanilla JavaScript for the editor and media preview. No single-page framework.
- **Database:** SQLite through `better-sqlite3` for users, sessions, audit log and media metadata.
- **Content:** stays in versioned files under `content/`. The admin writes those files.
- **Auth:** email and password with argon2 hashes, server sessions, HttpOnly cookies, CSRF tokens and rate limiting.
- **Publish:** validate content, write files, commit and push through the GitHub API, then call a Cloudflare deploy hook.
- **Hosting:** the admin runs on the developer machine during M9. It moves to a VPS in M11 behind HTTPS and auth, likely at `admin.chinnzz.com`.
- **Masking:** admin routes are not part of the Cloudflare Pages public build. The public site never loads admin code or calls the admin API.

The admin UI uses an adapter. `MockAdapter` reads and writes local content files. `HttpAdapter` calls the future VPS API. The adapter is selected in configuration.

## Consequences

Easier:

- chinnzz can edit the whole site from a phone or desktop without touching git.
- Content stays reviewable and reversible in git history.
- The public site remains static and fast.
- The backend can be replaced or moved without changing the public site.

Harder:

- The project now needs server patching, backups and auth monitoring after the VPS deploy.
- Media uploads need validation and storage limits.
- Publish failures must be handled without losing edits or deploying a broken build.

Now true:

- The public site is the source of truth only after a publish. Draft edits are not live.
- Git history is the revision history and rollback path.
- The admin is an internal tool and must never be indexed or linked from the public site.

## Alternatives considered

| Option | Why not chosen |
|---|---|
| Git CMS such as Decap or Tina | Ties editing to git workflows and a hosted service. Weaker mobile editing. Less control over validation and publish flow. |
| WordPress | Heavy, security exposure, hosting cost and plugin maintenance for a single page. |
| Directus or Strapi | Strong CMS features, but a large service and database to run for a small site. |
| Edit JSON files by hand | Does not meet the client requirement for an admin panel. |
| Cloudflare D1 and Workers only | Keeps hosting simple, but the client wants a VPS path and the admin needs file and media handling. |
| Full custom SPA admin | More code and more failure states than server-rendered forms. |

## Follow-up

- [ ] Build the admin UI and local mock adapter in M9. Owner: Parik.
- [ ] Deploy the backend and admin to the VPS in M11. Owner: Parik.
- [ ] Set up backups, uptime checks and an update schedule after the VPS deploy. Owner: Parik.

## Related documents

- [Content model and admin](../../03-technical/content-model-and-admin.md)
- [Backend API](../../03-technical/backend-api.md)
- [Security](../../03-technical/security.md)
- [ADR 0007: Static fallback](0007-static-fallback.md)

