---
title: Security
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Security

## Threat model

The public site is static and read only. The admin is a small authenticated service. Realistic risks:

- Domain, DNS, GitHub or Cloudflare account takeover.
- Admin account compromise through weak credentials or phishing.
- Cross-site request forgery on admin actions.
- Malicious file upload through the media screen.
- A publish that pushes unintended content or secrets.
- Abuse of `/api/live` to generate outbound traffic.
- Phishing copies of the site. We mitigate with clear branding, not code.
- Data loss through a deleted file, a bad publish or a failed VPS disk.

## Public site headers (`_headers`)

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none'; object-src 'none'; upgrade-insecure-requests

/_site/assets/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400

/api/live
  Cache-Control: public, max-age=30, s-maxage=60, stale-while-revalidate=120
```

Notes:

- No inline scripts or style attributes, so `script-src 'self'` works without hashes.
- Add `preload` to HSTS only after the domain is stable.
- If an analytics provider is added, allow only its exact origins.
- If a Kick iframe is added, add `frame-src https://kick.com` through a change request.
- The admin origin is never allowed by the public CSP.

## Admin authentication

- Email and password. One owner account and one editor account at most.
- Passwords hashed with argon2id. Minimum 12 characters. No password hints.
- Login sends no indication whether the email exists.
- Rate limit: 5 failed attempts per account and IP per 15 minutes, then a timed lock.
- Session cookie: HttpOnly, Secure, SameSite=Lax, signed, 12 hour idle expiry and 7 day absolute expiry.
- Session ID rotates on login. Logout destroys the server session.
- Optional 2FA with TOTP, recommended before the admin moves to a public host.
- No magic links in v1. No social login.

## Admin request protection

- CSRF token on every state-changing request, checked server side.
- Origin and Referer checks for non-GET requests.
- `helmet` with a strict admin CSP, `frame-ancestors 'none'` and no external scripts.
- All admin hosts are HTTPS only.
- The admin sends `X-Robots-Tag: noindex` and `robots.txt` disallows all.
- Request body limits: 1 MB for JSON, 10 MB for image uploads.
- Generic error pages. Details go to the server log, not the browser.

## Authorization

Roles:

| Role | Can do |
|---|---|
| Owner | Everything, including users, publish, rollback and settings |
| Editor | Edit drafts, upload media and preview. Cannot publish or change users. |

Every route checks the role on the server. The UI hiding a button is not authorization.

## Media uploads

- Accept PNG, JPEG, WebP, AVIF and SVG. SVG is sanitized or rejected unless from a trusted source.
- Verify file type by content, not only by extension.
- Rename on upload. Never use the original name in a path.
- Re-encode images to WebP at known sizes. Strip EXIF, including location.
- Store under `content/media/` with a generated manifest.
- No executable files, no archives, no HTML uploads.
- Serve media with `Content-Disposition: inline` only for image types and `X-Content-Type-Options: nosniff`.

## Publish security

- Validate the full content model before writing anything.
- Build in a temporary directory. Publish only if the build passes.
- Write content files, never arbitrary paths. Reject ids outside the schema.
- Commit with a known author and a message that names the admin user.
- Push to the protected branch with a deploy key or a fine-grained token.
- The Cloudflare deploy hook URL is a secret. It is not exposed to the browser.
- On any failure, stop. Keep the last good build live and show the error in plain text.
- Log who published, when and which files changed.

## Secrets

Stored only as environment variables or host secrets:

- Session secret.
- Deploy hook URL.
- GitHub token or deploy key.
- Email credentials if the admin ever sends mail.

Never commit secrets. `.env`, `.dev.vars` and `admin/data/` are gitignored. Rotate any secret that appears in a log or a screenshot.

## Cloudflare and domain

- Client owns the Cloudflare account and the registrar account.
- 2FA on GitHub, Cloudflare, registrar and the VPS provider.
- Registrar lock and auto-renew on.
- DNSSEC if the registrar supports it.
- Choose one hostname, `https://chinnzz.com`, and redirect `www` to it.
- No wildcard DNS unless needed.
- Production builds only from the protected `main` branch.

## VPS hardening

- Latest Node 22 LTS, automatic security updates for the OS.
- SSH keys only. No root login. No password authentication.
- Firewall allows 22, 80 and 443 only.
- Reverse proxy with TLS, HTTP to HTTPS redirect and security headers.
- Admin binds to localhost and is reached through the proxy.
- Separate system user for the service. No shell.
- SQLite file readable only by that user.
- Daily database backup, 14 day retention, tested restore.
- Fail2ban or equivalent on SSH and the admin login route.
- Uptime check on `/api/health`.

## Dependency policy

The public site runs Eleventy at build time only. The admin runs Express, EJS, `better-sqlite3`, `argon2`, `helmet` and a rate limiter.

- Pin versions in `package-lock.json`.
- Review updates monthly.
- Run `npm audit` before each admin deploy.
- No dependency is added without a reason and a note in this document.
- Fonts and icons are self-hosted or inline SVG.

## Backup and recovery

| What | How | Frequency |
|---|---|---|
| Content and code | Git history | Every publish |
| Admin database | SQLite backup to a separate disk | Daily |
| Media | Git or VPS backup | Every publish plus daily |
| Secrets | Password manager held by the owners | On change |

Test a restore at least once before the admin goes live.

## Incident response

1. Take the admin offline or rotate its credentials.
2. Roll the public site back to the last good Cloudflare deployment.
3. Check git for unexpected commits, links or files.
4. Rotate session, deploy and GitHub secrets if compromise is possible.
5. Restore content and database from the last good backup.
6. Record what happened in `docs/CHANGELOG.md` and update this document.

## Pre-launch checklist

Public:

- [ ] Security headers present and verified.
- [ ] HTTPS enforced, `www` redirect works.
- [ ] No secrets in the repo or the client bundle.
- [ ] 2FA on GitHub, Cloudflare and the registrar.
- [ ] Registrar lock enabled.
- [ ] No unexpected third-party requests in the network tab.
- [ ] CSP does not block required assets.

Admin, when it goes live:

- [ ] Admin host is not reachable from the public domain and is `noindex`.
- [ ] Cookies are HttpOnly, Secure and SameSite=Lax.
- [ ] CSRF rejection tested.
- [ ] Login rate limit tested.
- [ ] Role checks tested for editor.
- [ ] Upload type checks tested with a renamed file.
- [ ] Publish failure leaves the last build live.
- [ ] Backups run and one restore has been tested.
- [ ] Secrets are only in the host environment.

## Related documents

- [Architecture](architecture.md)
- [Backend API](backend-api.md)
- [Content Model and Admin](content-model-and-admin.md)
- [Launch Runbook](../05-delivery/launch-runbook.md)
- [Analytics and Events](analytics-and-events.md)
