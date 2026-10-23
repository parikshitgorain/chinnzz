# chinnzz.com

Single-page hub and admin for **chinnzz**, a Kick streamer and community builder.

- **Kick:** https://kick.com/chinnzz
- **X:** https://x.com/lechinnzz
- **Discord:** https://discord.gg/T6Nx6fAMYk
- **Production domain:** `chinnzz.com`, available but not purchased yet
- **Status:** Public site built and verified locally. Awaiting push approval, Cloudflare Pages connection and the domain purchase for launch.
- **Theme:** Gold Noir (Direction C, Casino luxury, approved 2026-10-23). Gold is the only brand accent. The client's supplied gold-on-black logo is the brand mark.

## Start here

Read the [documentation index](docs/README.md). The project is documentation-first. The brief, scope, brand, design, technical, legal and delivery docs are written and approved before implementation.

## What this project is

A mobile-first single-page hub with these goals:

1. Send viewers to chinnzz's Kick stream.
2. Grow his X and Discord following.
3. Support him through Kick subscriptions, tips and sponsorship inquiries.
4. Present the Stake.com code `CHINNZZ` honestly. The code is not sponsored.
5. Let chinnzz manage all site content from an admin panel.

v1 is one public page. Leaderboard, raffle, deposits and prize mechanics are not included.

## Architecture

| Layer | Choice |
|---|---|
| Public site | Eleventy 3.x with Nunjucks, hand-written CSS and vanilla JavaScript |
| Hosting | Vercel (ADR 0009; supersedes the earlier Cloudflare Pages decision) |
| Content | Versioned files in `content/` |
| Admin | Node.js, Express, EJS and SQLite |
| Admin host | Local first, VPS later at a separate host such as `admin.chinnzz.com` |
| Live status | Vercel Serverless Function at `/api/live` |
| Fallback | The public site is static and never calls the admin or backend at runtime |

The admin edits content and publishes through a git commit and Cloudflare deploy hook. If the backend is unavailable, the last static build stays live. See [Architecture](docs/03-technical/architecture.md).

## Repository status

- Git initialized on branch `main`
- Remote: `https://github.com/parikshitgorain/chinnzz.git`
- Current contents: `docs/`, `site/` (Eleventy public site), `content/`, `functions/`, `public/`, `admin/` (M9 skeleton)
- Push to origin requires the client's go-ahead. Nothing is pushed without approval.

## Planned commands

```bash
npm run dev         # local public site
npm run build:site  # Eleventy build to site/_site
npm run admin       # local admin panel
```

These commands are planned and do not exist yet.

## Contributing workflow

1. Propose changes through a change request in `docs/templates/change-request.md`.
2. Update the relevant modular doc, not a single omnibus file.
3. Get client sign-off where the gate requires it.
4. Keep site copy and documentation free of em dashes and AI-sounding filler.
5. Commit docs and code separately so history stays readable.
