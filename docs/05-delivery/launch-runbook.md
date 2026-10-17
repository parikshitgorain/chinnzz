---
title: Launch Runbook
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Launch Runbook

Two launches:

- **Public site.** Static, Cloudflare Pages. Can happen before the admin exists.
- **Admin.** Express and SQLite on a VPS at `admin.chinnzz.com`. Happens after the VPS is ready.

Do not skip the ownership steps. chinnzz must own the domain and the accounts.

## 0. Preconditions

- [ ] M1 to M9 complete. QA checklist passed.
- [ ] chinnzz approved final copy, design and legal wording.
- [ ] `chinnzz.com` is purchased or the purchase is ready.
- [ ] chinnzz has a Cloudflare account.
- [ ] The GitHub repository is ready and `main` is the release branch.
- [ ] Final assets are in `content/media/`.

## 1. Purchase the domain, chinnzz

1. Buy `chinnzz.com` from a reputable registrar in chinnzz's name.
2. Enable registrar lock and 2FA.
3. Enable auto-renew.
4. Record the registrar and owner in the [Content and Assets Checklist](../01-brand/content-assets-checklist.md).
5. Do not transfer ownership to the developer. Give delegated access if needed.

Domain cost is chinnzz's responsibility. See the [SOW](../00-project/scope-and-sow.md).

## 2. Create the Cloudflare Pages project

1. Sign in to Cloudflare on chinnzz's account. Add the developer as a member if needed.
2. Workers and Pages, then Create, then Pages, then Connect to Git.
3. Select `parikshitgorain/chinnzz`.
4. Build settings:
   - Framework preset: None
   - Build command: `npm run build:site`
   - Build output directory: `site/_site`
   - Node version: 22
5. Deploy. Confirm the `*.pages.dev` URL renders.
6. Check `/api/live` returns JSON on the preview URL.
7. Confirm the admin is not part of this build. There should be no `/admin` route.

## 3. Add the custom domain

1. In the Pages project, open Custom domains, then Set up a domain.
2. Add `chinnzz.com` and `www.chinnzz.com`.
3. If the domain is not on Cloudflare DNS yet, add the site to Cloudflare and update the nameservers at the registrar.
4. Canonical host: apex `chinnzz.com`. Redirect `www` to apex.
5. Wait for the certificate and verify HTTPS.

## 4. DNS and redirects

- [ ] Apex resolves to the Pages project.
- [ ] `www` redirects to the apex.
- [ ] No conflicting A, AAAA or CNAME records.
- [ ] DNSSEC enabled if the registrar supports it.
- [ ] HTTP redirects to HTTPS.

## 5. Public production verification

- [ ] `https://chinnzz.com/` loads.
- [ ] `https://www.chinnzz.com/` redirects correctly.
- [ ] Certificate is valid for both hosts.
- [ ] Security headers present. Check with `curl -I` or a header scanner.
- [ ] `/api/live` returns the expected JSON.
- [ ] Live state matches Kick. Check live and offline if possible.
- [ ] Code card shows the correct state and disclosure.
- [ ] Support and sponsor actions point to real destinations.
- [ ] OG preview works in Discord and X.
- [ ] `robots.txt` and `sitemap.xml` resolve.
- [ ] No console errors.
- [ ] Lighthouse mobile at 95 or above.
- [ ] 320px and 360px pass on a real phone.
- [ ] Key links work: Kick, X, Discord, Stake, tips, legal.

## 6. Search and analytics

- [ ] Add the domain to Google Search Console and Bing Webmaster Tools.
- [ ] Submit the sitemap.
- [ ] If analytics is approved, confirm it records page views.
- [ ] Confirm preview deployments are `noindex`.

## 7. Admin deployment on the VPS

Do this only after the public site is stable.

1. Provision the VPS with Node 22 and a reverse proxy.
2. Create a service user with no shell.
3. Clone the repository to a deploy directory.
4. Install with `npm ci --omit=dev` in `admin/`.
5. Set environment variables: session secret, deploy hook URL, GitHub token, admin host.
6. Initialize the SQLite database and create the owner user.
7. Start the service under systemd or a container with restart on failure.
8. Put TLS in front. Force HTTPS.
9. Restrict the firewall to 22, 80 and 443.
10. Set DNS for `admin.chinnzz.com`.
11. Confirm `robots.txt` disallows all and the response sends `X-Robots-Tag: noindex`.
12. Test login, rate limiting, CSRF rejection and a publish from a phone.
13. Test a failed publish. The last public build must stay live.
14. Run a backup and test one restore.

Admin verification:

- [ ] `https://admin.chinnzz.com` loads over HTTPS.
- [ ] Login works with the owner account.
- [ ] Five failed logins trigger the lock.
- [ ] Editor cannot publish.
- [ ] Publish writes content, pushes and triggers the deploy hook.
- [ ] The public site updates within the expected build time.
- [ ] Stopping the admin does not affect the public site.
- [ ] Backup file exists and can be restored.

## 8. Handover

- [ ] Give chinnzz access to GitHub, Cloudflare, the registrar and the VPS.
- [ ] Walk through [Handover](handover.md).
- [ ] Confirm chinnzz can edit a section, preview it, publish it and see the live change.
- [ ] Confirm he knows how to use the manual file fallback.
- [ ] Share the documentation index.

## 9. Rollback

Public:

1. Open Cloudflare Pages, then Deployments.
2. Find the last known good production deployment.
3. Roll back to it.
4. Fix on a branch, retest on preview, then deploy to `main`.
5. If DNS is the cause, revert the DNS change in Cloudflare.

Content:

1. Revert the publish commit in git.
2. Push. Cloudflare rebuilds.
3. Confirm the previous content is live.

Admin:

1. Restore the last SQLite backup if the database is damaged.
2. Restart the service.
3. If the host is compromised, take it offline and follow [incident response](../03-technical/security.md#incident-response).

## 10. First 48 hours

- [ ] Watch uptime and `/api/live`.
- [ ] Check mobile in-app browsers.
- [ ] Check the code card state and disclosure.
- [ ] Check the Discord invite.
- [ ] Watch analytics for unexpected referrers.
- [ ] Confirm chinnzz knows how to request a change.

## Related documents

- [QA Checklist](qa-checklist.md)
- [Handover](handover.md)
- [Security](../03-technical/security.md)
- [SEO and Metadata](../03-technical/seo-and-metadata.md)
- [Backend API](../03-technical/backend-api.md)
