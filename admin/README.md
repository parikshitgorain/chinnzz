# chinnzz admin

Local-first admin panel for chinnzz.com. Full build ships in **M9**.

## What it will do (M9)

- Edit every string on the public site: copy, links, socials, code state, support links, sponsor details, SEO, media and legal pages.
- Save drafts to SQLite, validate, then publish: write `content/`, run the Eleventy build, commit, push and call the Cloudflare deploy hook.
- Run locally with a mock adapter first, move to a VPS at `admin.chinnzz.com` in M11.

## Now

`npm run admin` (from the repo root) starts a placeholder server on port 3000 with a status page and `/healthz`. The public site builds and deploys without it.

## Spec

- `docs/03-technical/content-model-and-admin.md`
- `docs/03-technical/backend-api.md`
- `docs/03-technical/architecture.md`
