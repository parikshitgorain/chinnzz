---
title: Content Model and Admin
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.0
---

# Content Model and Admin

## Purpose

This document defines what the site can store, how the admin edits it, and how a change moves from a draft to the live site. It is the contract between the public build, the admin UI and the backend.

## Content files

All editable content lives in `content/` and is committed to git.

```
content/
├── site.json
├── sections/
│   ├── hero.json
│   ├── live.json
│   ├── socials.json
│   ├── play.json
│   ├── support.json
│   ├── sponsor.json
│   ├── about.json
│   └── faq.json
├── legal/
│   ├── privacy.md
│   ├── terms.md
│   └── responsible-gambling.md
└── media/
    ├── avatar.webp
    ├── og.png
    └── ...
```

Markdown is used only for long legal pages. Everything else is JSON with fixed fields so the admin can render safe forms.

## `site.json`

| Field | Type | Notes |
|---|---|---|
| `site.name` | string | Always `chinnzz` |
| `site.domain` | string | `https://chinnzz.com` once purchased |
| `site.locale` | string | `en` |
| `site.timezone` | string | IANA name, for example `America/New_York` |
| `seo.title` | string | 60 characters or fewer |
| `seo.description` | string | 155 characters or fewer |
| `seo.ogImage` | string | Path under `content/media/` |
| `kick.slug` | string | Fixed `chinnzz`. Not editable in the admin. |
| `kick.url` | string | Must match the slug |
| `stake.url` | string | Outbound Stake.com link |
| `stake.code` | string | `CHINNZZ` |
| `stake.state` | enum | `active_sponsored`, `active_unsponsored`, `inactive` |
| `stake.disclosure` | string | Must match the selected state |
| `support.kickLabel` | string | For example "Subscribe on Kick" |
| `support.kickUrl` | string | Kick channel or subscription URL |
| `support.tipsLabel` | string | For example "Tip on Ko-fi" |
| `support.tipsUrl` | string or null | Provider URL |
| `sponsor.email` | string | Public contact email |
| `sponsor.audience` | string or null | Real audience summary, no invented numbers |
| `schedule.enabled` | boolean | Hides the block when false |
| `schedule.label` | string | Timezone label shown to visitors |
| `schedule.entries` | array | `{ day, time, what }` |
| `announcement.enabled` | boolean | Small site-wide notice |
| `announcement.text` | string | Empty when disabled |
| `legal.age` | string | `18+` or the confirmed wording |
| `legal.lastUpdated` | date | ISO date |

Never store secrets, API keys, private emails or payment details in `site.json`. It is committed and public through the built site.

## Section files

### `hero.json`

| Field | Type | Notes |
|---|---|---|
| `eyebrow` | string | Small label above the heading |
| `heading` | string | The one H1 |
| `subhead` | string | Short supporting line |
| `primaryLabel` | string | "Watch live on Kick" or "Watch on Kick" |
| `secondaryLabel` | string | "Join the Discord" |
| `avatarAlt` | string | Describes the real image |

### `live.json`

| Field | Type | Notes |
|---|---|---|
| `liveLabel` | string | Uses `{viewers}` only when a count exists |
| `offlineLabel` | string | Plain offline statement |
| `unknownLabel` | string | Neutral fallback, no live claim |
| `emptyTitle` | string | Used when Kick sends no title |
| `embedEnabled` | boolean | Default false. The player loads only after a click. |

### `socials.json`

An ordered array:

```json
[
  { "id": "kick", "label": "Kick", "url": "https://kick.com/chinnzz", "enabled": true },
  { "id": "x", "label": "X", "url": "https://x.com/lechinnzz", "enabled": true },
  { "id": "discord", "label": "Discord", "url": "https://discord.gg/T6Nx6fAMYk", "enabled": true }
]
```

Only real, active accounts are listed. `enabled` hides an item without deleting it. The build rejects an empty list.

### `play.json`

| Field | Type | Notes |
|---|---|---|
| `label` | string | Section label |
| `heading` | string | For example "Where I play" |
| `body` | string | Plain explanation |
| `activeHeading` | string | Shown with an active code |
| `inactiveHeading` | string | Shown when the code is off |
| `inactiveBody` | string | Honest "no code live" copy |
| `copyLabel` | string | "Copy code" |
| `copiedLabel` | string | "Copied" |

The visible card is driven by `site.json` `stake.state`, not by free text.

### `support.json`

| Field | Type | Notes |
|---|---|---|
| `label` | string | Section label |
| `heading` | string | For example "Support the stream" |
| `body` | string | One or two sentences |
| `showKick` | boolean | Hide when subscriptions are not available |
| `showTips` | boolean | Hide when no provider exists |

### `sponsor.json`

| Field | Type | Notes |
|---|---|---|
| `label` | string | Section label |
| `heading` | string | For example "Work with me" |
| `body` | string | What a sponsor can expect |
| `emailLabel` | string | For example "Email about sponsorship" |
| `showAudience` | boolean | Only enable with real numbers |
| `audienceHeading` | string | For example "Audience" |

### `about.json`

| Field | Type | Notes |
|---|---|---|
| `label` | string | Section label |
| `heading` | string | For example "About chinnzz" |
| `body` | string | Short bio in chinnzz's voice |
| `image` | string or null | Path under `content/media/` |
| `imageAlt` | string | Required when an image exists |

### `faq.json`

An ordered array of `{ question, answer }`. The build rejects empty questions or answers. Required topics: where to watch, schedule, code status, sponsorship, age, responsible play.

## Legal pages

Legal pages are Markdown with frontmatter:

```yaml
---
title: Privacy Policy
updated: 2026-10-17
---
```

The admin edits them in a plain text area with a preview. It does not allow raw HTML. Headings must start at level 2 because the page template provides the H1 and page title.

## Admin screens

| Screen | What it edits |
|---|---|
| Dashboard | Publish status, last deploy, draft warnings, quick links |
| Site settings | Name, domain, locale, timezone, announcement |
| Hero | Eyebrow, heading, subhead, CTA labels, avatar alt |
| Live | Live, offline and unknown labels, embed switch |
| Socials | Add, remove, reorder and enable links |
| Stake and code | URL, code, state, disclosure |
| Support | Kick subscription and tips links |
| Sponsorship | Email, body, audience block |
| About | Bio and image |
| FAQ | Questions and answers, order |
| SEO | Title, description, OG image |
| Media | Upload, alt text, replace, delete |
| Legal | Privacy, terms, responsible gambling |
| Publish | Diff summary, validation results, publish button, history |

## Draft and publish flow

1. **Edit.** The admin loads the last published values from `content/`.
2. **Save draft.** Values are written to a `drafts` table in SQLite. Nothing is committed and nothing is live.
3. **Preview.** The admin can render a local preview with the draft applied, or show a side-by-side field preview on mobile.
4. **Validate.** Required fields, URL formats, lengths, enum values, alt text, legal page presence and code-state disclosure are checked.
5. **Publish.** The backend writes the draft into `content/`, runs the site build, commits and pushes to `main`, then calls the Cloudflare deploy hook.
6. **Confirm.** The publish screen polls `/api/publish/status` and shows the deploy result. On failure the last successful build stays live and the draft remains.
7. **Discard.** The draft is deleted and the form reloads the published values.

Only one draft set exists at a time in v1. There is no multi-user editing and no merge UI.

## Revision history

- Every publish is a git commit. The commit message lists the changed screens and the admin user.
- The admin shows the last 20 commits with author, time and message.
- Rollback is a git revert followed by a publish, not a database operation.
- Deleted media stays in git history. The admin warns before deleting a file that is still referenced.

## Media

- Accepted types: JPEG, PNG, WebP, AVIF. SVG is rejected in v1.
- Maximum upload: 5 MB.
- The server strips metadata, resizes to a maximum of 2400px on the long edge and writes WebP.
- Filenames are slugged and hashed. Original filenames are stored in metadata only.
- Alt text is required for every image used in content.
- Uploads are written to `content/media/` and committed on publish.
- Unused media can be deleted. The admin shows where a file is used before deletion.

## Admin layout and mobile use

The admin is used on a phone as often as on desktop.

- Single column at 360px. Tables become stacked cards.
- Sticky bottom bar with Save draft and Publish on editing screens.
- Inputs are at least 44px tall and use the correct mobile keyboard types.
- The publish screen shows a plain result, not a spinner that never ends.
- A fixed offline banner appears when the API cannot be reached.
- No hover-only controls. Every action has a visible label.

## Validation rules

| Rule | Failure behavior |
|---|---|
| Required field empty | Block save and mark the field |
| URL is not `https` | Block save, except `mailto:` for email fields |
| Code active without a disclosure | Block publish |
| Code active as sponsored without a partner link | Block publish |
| Legal page missing | Block publish |
| FAQ entry empty | Block save |
| Image without alt text | Block save |
| SEO title over 60 characters | Warn, do not block |
| SEO description over 155 characters | Warn, do not block |
| `kick.slug` changed | Not possible in the UI. It is fixed in code. |

## Related documents

- [Backend API](backend-api.md)
- [Architecture](architecture.md)
- [ADR 0006: Admin backend](../00-project/decisions/0006-admin-backend.md)
- [ADR 0007: Static fallback](../00-project/decisions/0007-static-fallback.md)
- [Copy Deck](../01-brand/copy-deck.md)
