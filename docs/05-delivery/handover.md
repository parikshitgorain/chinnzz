---
title: Handover
status: review
owner: Parik
updated: 2026-10-17
audience: client
version: 2.0
---

# Handover

What chinnzz owns, how to update the site, and where everything lives.

## What chinnzz owns

- The domain `chinnzz.com`, purchased in his name.
- The GitHub repository, or delegated access to it.
- The Cloudflare account and Pages project, or delegated access.
- The VPS and the `admin.chinnzz.com` host, when it exists.
- All brand assets and final content.
- The site code and approved deliverables, per the [SOW](../00-project/scope-and-sow.md).

## Access checklist

- [ ] GitHub access confirmed for `parikshitgorain/chinnzz`.
- [ ] Cloudflare Pages project access confirmed.
- [ ] Registrar access confirmed.
- [ ] VPS access confirmed, if the admin is live.
- [ ] Password manager entries for the admin and the VPS handed over.
- [ ] Documentation index shared: [`docs/README.md`](../README.md).
- [ ] chinnzz knows who to contact for support.

## How the site is put together

| Path | What it is | Who edits |
|---|---|---|
| `content/site.json` | Site name, SEO, Kick, Stake, support, sponsor, schedule, announcement | Admin, or manual edit |
| `content/sections/*.json` | Section copy, labels and links | Admin |
| `content/legal/*.md` | Privacy, terms, responsible gambling | Admin |
| `content/media/` | Images and the social preview image | Admin |
| `site/src/` | Templates, CSS, JavaScript | Developer |
| `site/_site/` | Build output | Nobody. Generated. |
| `admin/` | Admin application | Developer |
| `functions/api/live.js` | Kick live check | Developer |
| `docs/` | This documentation set | Both |

## Everyday editing in the admin

1. Sign in at `admin.chinnzz.com`, or run the admin locally.
2. Pick a section: Hero, Stream, Socials, Where I Play, Support, Sponsor, About, FAQ.
3. Edit the fields.
4. Choose Save draft. Nothing public changes yet.
5. Open Preview and check it at phone width.
6. Choose Publish. The site validates, writes files, builds, commits and deploys.
7. Wait for the confirmation. Open the live page and check the change.

If publish fails, the last good site stays live. Read the plain error, fix the field and try again.

## The code card

The code section has three states. The state must match reality.

| State | When to use it |
|---|---|
| Active and sponsored | A signed deal exists and the disclosure is approved |
| Active, unsponsored | The code exists but chinnzz earns nothing |
| Inactive | No code should be shown |

Do not choose sponsored because the card looks better. Change the state the same day a deal starts or ends. The disclosure text is a separate field. Keep it matched to the state.

See [Monetization and Partnerships](../01-brand/monetization-and-partnerships.md).

## Manual fallback

If the admin is unavailable:

1. Edit the JSON or Markdown file in `content/`.
2. Keep the schema and valid JSON.
3. Commit and push:
   ```bash
   git add content
   git commit -m "content: update schedule"
   git push
   ```
4. Cloudflare rebuilds automatically.
5. Check the live page.

If git access is also unavailable, the public site keeps serving the last build. Nothing breaks. Wait until access is restored.

## Preview before publishing

In the admin, use Preview. Outside the admin:

- Create a branch.
- Push it.
- Open the `*.pages.dev` preview URL for that branch.
- Check at 360px, 390px and 768px.
- Merge to `main` only when it looks right.

## Things not to change without the developer

- `site/src/` templates, CSS or JavaScript.
- `admin/` application code.
- `functions/api/live.js`.
- `_headers` and the CSP.
- The build command or output directory.
- Anything in `docs/03-technical/` without review.

## Routine responsibilities

| Item | Cadence | Owner |
|---|---|---|
| Discord invite valid | Monthly | chinnzz |
| Kick, X and Discord links correct | Monthly | chinnzz |
| Code state matches reality | Monthly and on change | chinnzz |
| Support links working | Monthly | chinnzz |
| Sponsor email working (business@chinnzz.com) | Monthly | chinnzz |
| Schedule accurate | When it changes | chinnzz |
| Kick live function working | Monthly | Parik or chinnzz |
| Responsible-gambling resources | Quarterly | chinnzz |
| Legal pages reviewed | Annually or on change | chinnzz |
| Domain renewal | Annually, auto-renew | chinnzz |
| Cloudflare billing | As needed | chinnzz |
| VPS updates and backups | Monthly | Parik or chinnzz |

## Documentation

- Start at [`docs/README.md`](../README.md).
- Keep document statuses current.
- Use the [change request template](../templates/change-request.md) for new features.
- Update [CHANGELOG.md](../CHANGELOG.md) for meaningful changes.

## Support and maintenance

- Support window: TBD in the [SOW](../00-project/scope-and-sow.md).
- Maintenance scope: see [Maintenance](maintenance.md).
- Anything outside the current scope needs a change request.

## Related documents

- [Launch Runbook](launch-runbook.md)
- [Maintenance](maintenance.md)
- [Content Model and Admin](../03-technical/content-model-and-admin.md)
- [Content and Assets Checklist](../01-brand/content-assets-checklist.md)
