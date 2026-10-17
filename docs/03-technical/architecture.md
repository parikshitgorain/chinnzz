---
title: Technical Architecture
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Technical Architecture

## Summary

| Layer | Choice |
|---|---|
| Public markup | Eleventy 3.x + Nunjucks, static HTML output |
| Public styling | One hand-written CSS file, custom properties from the design system |
| Public behavior | Vanilla JavaScript, no client framework |
| Build | `npm run build:site` writes `site/_site` |
| Hosting | Cloudflare Pages |
| Runtime server | One Pages Function, `GET /api/live` |
| Content | Versioned files in `content/`, read at build time |
| Admin | Node.js 22 LTS, Express, EJS, SQLite |
| Admin host | Local now, VPS at `admin.chinnzz.com` later |
| Database | SQLite via `better-sqlite3`, admin data only |
| Fonts | Self-hosted WOFF2, subset |
| Analytics | Cloudflare Web Analytics, cookieless and optional |

Decisions: [ADR 0002](../00-project/decisions/0002-static-site.md), [ADR 0003](../00-project/decisions/0003-cloudflare-pages.md), [ADR 0004](../00-project/decisions/0004-kick-live-proxy.md), [ADR 0006](../00-project/decisions/0006-admin-backend.md), [ADR 0007](../00-project/decisions/0007-static-fallback.md), [ADR 0008](../00-project/decisions/0008-build-step.md).

## The rule that shapes everything

The public site reads `content/` at build time. It never fetches content from the admin or backend at runtime. The only runtime call is `GET /api/live`.

That means:

- The public site works when the backend is down, not deployed or unreachable.
- Publishing is a build event, not a live query.
- The admin can be rebuilt or moved without touching the public site.

## Repository structure (planned)

```
/
├── site/                       # public Eleventy project
│   ├── src/
│   │   ├── _includes/          # layouts and Nunjucks partials
│   │   ├── _data/              # content loaders
│   │   ├── pages/              # index and legal pages
│   │   ├── css/styles.css
│   │   ├── js/main.js
│   │   └── _site/              # build output, gitignored
│   ├── eleventy.config.js
│   └── package.json
├── content/
│   ├── site.json
│   ├── sections/
│   │   ├── hero.json
│   │   ├── live.json
│   │   ├── socials.json
│   │   ├── play.json
│   │   ├── support.json
│   │   ├── sponsor.json
│   │   ├── about.json
│   │   └── faq.json
│   ├── legal/
│   │   ├── privacy.md
│   │   ├── terms.md
│   │   └── responsible-gambling.md
│   └── media/
├── admin/                      # Express admin, separate service
│   ├── src/
│   │   ├── routes/
│   │   ├── views/              # EJS
│   │   ├── adapters/           # MockAdapter, HttpAdapter
│   │   ├── services/           # content, publish, media
│   │   └── db/
│   ├── data/                   # SQLite file, gitignored
│   └── package.json
├── functions/
│   └── api/live.js             # Cloudflare Pages Function
├── public/                     # static passthrough: robots.txt, favicon, _headers
├── docs/                       # this documentation set
├── package.json                # workspace scripts
└── README.md
```

The admin is a separate runtime and never enters the Cloudflare Pages build. `site/_site` contains only public files.

## Build and data flow

```
Admin edit
   │
   ├── Save draft ───────────────► SQLite draft table
   │
   └── Publish
         ├── validate content
         ├── write content/*.json and content/legal/*.md
         ├── npm run build:site
         ├── git commit and push
         └── call Cloudflare deploy hook
                    │
                    ▼
             Cloudflare Pages builds from git
                    │
                    ▼
             Static HTML, CSS, JS on the CDN
```

Manual fallback: edit files in `content/`, commit and push. The pipeline is identical from that point.

## Content loading

Eleventy `_data` files read `content/` and expose it to templates as global data. Templates hold structure and layout only.

- Every visible string comes from `content/`.
- Unknown or missing fields render the documented neutral state. They do not throw.
- The code card renders exactly one state based on `stake.state`.
- Sections that lack a required link render without that action, never with a dead button.

Schema: [Content Model and Admin](content-model-and-admin.md).

## Page load flow

1. Browser requests a prebuilt HTML page from the Cloudflare edge.
2. CSS and one deferred script load. The page is readable and complete without JavaScript.
3. `main.js` binds the mobile menu, FAQ behavior, copy button and analytics events.
4. `main.js` fetches `/api/live` once and updates the live state.
5. Polling repeats every 60 seconds only while the tab is visible.
6. On failure, the static neutral state remains. No error message is shown to the visitor.

## Environments

| Environment | Public site | Admin |
|---|---|---|
| Local site | `http://localhost:8080` via Eleventy dev server | not needed |
| Local full stack | Eleventy dev server | `http://localhost:3000` with MockAdapter |
| Preview | `<branch>.chinnzz.pages.dev` | not deployed |
| Production | `https://chinnzz.com` | `https://admin.chinnzz.com` behind auth |

Local admin talks to `MockAdapter`, which reads and writes `content/` on disk. The VPS admin uses `HttpAdapter` against the same API contract. Switching is one environment value.

## Deployment flow

Public:

1. Merge to `main`.
2. Cloudflare Pages runs `npm run build:site` and publishes `site/_site`.
3. `functions/api/live.js` deploys as a Pages Function.
4. The custom domain attaches after chinnzz buys it.

Admin, later:

1. Provision the VPS, Node 22, SQLite and a reverse proxy with TLS.
2. Run the admin as a systemd service or container.
3. Set secrets in the environment, never in git.
4. Deploy it on `admin.chinnzz.com`, protected by auth.
5. Publish triggers the Cloudflare deploy hook.

Rollback:

- Public: redeploy a previous Cloudflare Pages deployment, or revert the commit.
- Content: revert the publish commit. Git is the revision history.
- Admin data: restore the SQLite backup.

## Runtime dependency map

| Visitor action | Depends on |
|---|---|
| Read any page | Cloudflare CDN and the last successful build |
| Open any link | The destination site |
| See live status | `/api/live` and the Kick endpoint, with a neutral fallback |
| Copy the code | Browser clipboard, with a select-and-copy fallback |

Nothing else depends on a running server.

## Browser support

- Current and previous major versions of Chrome, Edge, Firefox and Safari, desktop and mobile.
- Baseline features only: custom properties, grid, flexbox, `clamp()`, `:focus-visible`, `navigator.clipboard` with fallback.
- No Internet Explorer support.
- Mobile in-app browsers on iOS and Android are a first-class target because traffic arrives from Kick, X and Discord.

## Admin runtime

- Node.js 22 LTS. Express 5, EJS, `better-sqlite3`, `argon2`, `helmet`, a rate limiter and a session store.
- Server-rendered pages. Small vanilla JavaScript for preview, media and autosave hints.
- SQLite stores users, sessions, drafts, audit entries, media metadata and login attempts. Content stays in files.
- Mobile usable at 360px. Chinnzz can edit and publish from a phone.

See [Backend API](backend-api.md).

## Performance approach

- Static HTML from the edge. No client framework and no hydration.
- One CSS file and one small script.
- Self-hosted subset fonts, preload the display face only.
- Hero image with fixed dimensions and `fetchpriority="high"`.
- Below-fold images lazy-loaded.
- No third-party scripts except optional cookieless analytics.
- `/api/live` cached at the edge for 60 seconds.

Targets: [Performance and Accessibility](performance-and-a11y.md).

## Security approach

- Public: static assets, strict CSP, HSTS, no inline scripts, one function with a fixed slug.
- Admin: argon2id passwords, server sessions, HttpOnly cookies, CSRF tokens, rate limiting, role checks, audit log.
- Admin host is `noindex`, not linked from the public site and not part of the public TLS/CSP origin.
- Secrets live in environment variables and deploy settings.

See [Security](security.md).

## Risks

| Risk | Effect | Mitigation |
|---|---|---|
| Kick endpoint changes | Live status unknown | Isolated in one function, neutral fallback |
| Domain purchase delays | No canonical production URL | Ship on the Pages host, attach the domain later |
| Assets arrive late | Design and build gates slip | Typographic fallbacks are designed |
| VPS delay | Admin not live at launch | Public site does not depend on it, admin follows |
| Publish push fails | New content not live | Validation blocks the write, last build stays live, error is plain |
| Content errors | Broken page | Schema validation before publish |

## Related documents

- [Content Model and Admin](content-model-and-admin.md)
- [Backend API](backend-api.md)
- [Kick Live Integration](kick-live-integration.md)
- [SEO and Metadata](seo-and-metadata.md)
- [Performance and Accessibility](performance-and-a11y.md)
- [Security](security.md)
- [Launch Runbook](../05-delivery/launch-runbook.md)
