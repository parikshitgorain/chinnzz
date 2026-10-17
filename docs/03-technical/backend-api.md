---
title: Backend API
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.0
---

# Backend API

## Purpose

The backend serves the admin panel only. It does not serve the public site, and the public site does not call it. The API contract is stable so the admin can switch from the local mock adapter to the VPS API without a rewrite.

## Runtime

| Item | Choice |
|---|---|
| Runtime | Node.js 22 LTS |
| Framework | Express |
| Templates | EJS, server rendered |
| Database | SQLite through `better-sqlite3` |
| Passwords | argon2id |
| Sessions | Server side, HttpOnly cookie |
| CSRF | Per-session token on every state-changing request |
| Reverse proxy | Caddy or Nginx with automatic HTTPS |
| Process manager | systemd, or Docker with a restart policy |

The admin listens on `127.0.0.1:4000` and is reached through the reverse proxy. It must not be exposed directly to the internet without TLS.

## Auth model

Roles in v1:

- `owner`: chinnzz. Can edit, publish, manage users and view audit history.
- `editor`: the developer. Can edit and publish, cannot manage users.

There is no public signup. Users are created by a CLI command on the server:

```bash
npm run admin:create-user -- --email you@example.com --role owner
```

Rules:

- Passwords are at least 12 characters and checked against a small common-password list.
- Failed logins are rate limited per IP and per account.
- Sessions expire after 12 hours of inactivity and 7 days absolute.
- Logout destroys the session server side.
- A password change destroys all other sessions for that user.
- Two-factor authentication is a later option. If enabled, use TOTP and recovery codes.

## Cookies

| Cookie | Purpose | Flags |
|---|---|---|
| `chz_sid` | Session id | `HttpOnly`, `Secure`, `SameSite=Lax`, `Path=/`, host only |
| `chz_csrf` | CSRF token, readable by the admin page | `Secure`, `SameSite=Lax`, not `HttpOnly` |

The API also accepts the CSRF token in the `X-CSRF-Token` header. A state-changing request without a matching token returns `403`.

## Endpoints

All endpoints are under `/api` and return JSON. Errors use:

```json
{
  "error": "validation_failed",
  "message": "One or more fields need attention.",
  "fields": {
    "site.stake.disclosure": "Disclosure is required when the code is active."
  }
}
```

### Auth

| Method | Path | Body | Result |
|---|---|---|---|
| `POST` | `/api/auth/login` | `{ email, password }` | Sets session cookie, returns `{ user, csrfToken }` |
| `POST` | `/api/auth/logout` | none | Destroys session |
| `GET` | `/api/auth/me` | none | Returns the current user or `401` |
| `POST` | `/api/auth/password` | `{ current, next }` | Changes password and rotates sessions |

### Content

| Method | Path | Body | Result |
|---|---|---|---|
| `GET` | `/api/content` | none | Published content plus the current draft and validation state |
| `PUT` | `/api/content/draft` | `{ section, values }` | Saves one section to the draft table |
| `DELETE` | `/api/content/draft` | none | Discards the draft |
| `POST` | `/api/content/validate` | none | Returns field errors and warnings |
| `GET` | `/api/content/history` | none | Last 20 git commits with author and time |

`section` is one of `site`, `hero`, `live`, `socials`, `play`, `support`, `sponsor`, `about`, `faq`, `seo`, `legal.privacy`, `legal.terms`, `legal.responsible-gambling`.

### Media

| Method | Path | Body | Result |
|---|---|---|---|
| `GET` | `/api/media` | none | List of media with dimensions, size, hash and usage |
| `POST` | `/api/media` | multipart file plus `alt` | Stored file and metadata |
| `PATCH` | `/api/media/:id` | `{ alt }` | Updates alt text |
| `DELETE` | `/api/media/:id` | none | Deletes only when unused, otherwise returns `409` |

Upload limits: 5 MB, one file per request. The server checks the file signature, not only the extension, and re-encodes the image before writing.

### Publish

| Method | Path | Body | Result |
|---|---|---|---|
| `POST` | `/api/publish` | `{ message }` | Starts a publish, returns `202` with a job id |
| `GET` | `/api/publish/status` | none | Current step, result, commit hash and deploy URL |
| `POST` | `/api/publish/rollback` | `{ commit }` | Reverts a commit and publishes the result |

Publish steps, in order:

1. Validate the draft.
2. Write draft values into `content/`.
3. Run the site build.
4. Commit with a message that names the changed sections.
5. Push to `main`.
6. Call the Cloudflare deploy hook.
7. Poll the deploy hook result when the provider supports it.

If a step fails, the job stops, the draft remains and the previous build stays live. A failed build does not push.

### Health

| Method | Path | Result |
|---|---|---|
| `GET` | `/api/health` | `{ ok, version, database, git, lastPublish }` |

Health does not require auth but returns no personal data. The VPS monitor uses it.

## Rate limits

| Scope | Limit |
|---|---|
| Login per IP | 10 attempts per 15 minutes |
| Login per account | 5 attempts per 15 minutes |
| State-changing requests per session | 60 per minute |
| Media uploads | 20 per hour |
| Publish | 10 per hour |

Limits are enforced in memory for the local build and via a small SQLite table on the VPS so they survive restarts.

## Database tables

| Table | Purpose |
|---|---|
| `users` | Email, password hash, role, created time, disabled flag |
| `sessions` | Session id hash, user id, CSRF hash, created, last seen, expires |
| `drafts` | Section key, JSON value, updated by, updated at |
| `audit_log` | User, action, target, IP, user agent, time |
| `media` | Filename, hash, dimensions, size, alt text, created by |
| `login_attempts` | IP hash, account hash, time, success |

No content lives in the database. Content lives in files. The database holds access and working state only.

## Publish security

- The GitHub token and deploy hook URL are environment secrets, never in the repository.
- The token is scoped to the single repository and needs contents write access.
- The deploy hook URL is treated as a secret. It is never rendered in the admin UI in full.
- The server runs the build in a subprocess with a fixed working directory and a timeout.
- User input is never passed to a shell command. File paths are generated by the server.
- Content values are escaped by the template layer. Legal Markdown is rendered with HTML disabled.

## Masking

The admin is not part of the public site.

- Cloudflare Pages builds only `site/` output. It does not include `admin/`, `server/` or `content/`.
- The public domain has no `/admin` route.
- The admin host is separate, for example `admin.chinnzz.com`.
- The admin host sends `X-Robots-Tag: noindex, nofollow` and `Cache-Control: no-store`.
- The public CSP does not allow the admin origin.
- Admin cookies are host-only and are not sent to `chinnzz.com`.

## VPS deployment

1. Create a non-root user for the app.
2. Install Node.js 22 LTS and build tools for `better-sqlite3`.
3. Put the app in `/srv/chinnzz-admin`.
4. Store secrets in `/etc/chinnzz-admin.env` with mode `600`.
5. Create the SQLite file in `/var/lib/chinnzz-admin/` and back it up nightly.
6. Run under systemd with `Restart=always` and a memory limit.
7. Put Caddy in front for automatic HTTPS and request size limits.
8. Allow only ports 80 and 443. Deny direct access to port 4000.
9. Enable unattended security updates.
10. Add uptime monitoring on `/api/health`.

Backups: nightly database copy plus the git repository. Media is in git, so the repository backup covers it.

## Local development

- `npm run admin` starts the admin on `http://localhost:4000`.
- The local adapter writes to `content/` and runs git commands against the working tree.
- A fake user is seeded only when `NODE_ENV=development`.
- No deploy hook is called locally unless `DEPLOY_HOOK_URL` is set.
- Publish in local mode commits but does not push unless `GIT_PUSH=true`.

## Related documents

- [Content model and admin](content-model-and-admin.md)
- [Architecture](architecture.md)
- [Security](security.md)
- [Handover](../05-delivery/handover.md)
- [Launch runbook](../05-delivery/launch-runbook.md)
