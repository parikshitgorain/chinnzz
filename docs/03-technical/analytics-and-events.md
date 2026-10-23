---
title: Analytics and Events
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Analytics and Events

## Principle

Measure the few actions the site exists to produce: watch, join, copy, support and sponsor inquiry. Collect the minimum. No advertising pixels, no cross-site tracking and no data that identifies a person.

## Setup

| Layer | Tool | Cost | Notes |
|---|---|---|---|
| Page views | Cloudflare Web Analytics | Free | Cookieless and automatic with Pages |
| Custom events | Umami Cloud or Plausible | Small monthly cost | Add only if the client wants click counts |
| Sponsor and affiliate attribution | Partner dashboards | Free | Sub-IDs or UTM where supported |
| Admin activity | SQLite audit log | Included | Admin only, never public |

Cloudflare Web Analytics does not support custom events. If chinnzz wants click counts, enable one privacy-friendly tool and update the privacy policy and CSP. Do not add Google Analytics, Meta Pixel or ad-tech pixels.

Decision on custom events is open. The code should call a small `track()` wrapper so a provider can be attached later without touching every component.

## Event taxonomy

| Event | Trigger | Properties |
|---|---|---|
| `page_view` | Page load, from the analytics provider | `path`, `referrer` |
| `watch_live_click` | Watch live CTA | `location` (hero, stream, footer), `live_state` |
| `discord_join_click` | Any Discord CTA | `location` |
| `x_follow_click` | Any X CTA | `location` |
| `stake_click` | Outbound Stake.com link | `location`, `code_state` |
| `code_copy` | Successful copy | `code_state` |
| `support_click` | Kick subscription or tips link | `location`, `method` (kick, tips) |
| `sponsor_inquiry_click` | Sponsor email link | `location` |
| `faq_open` | FAQ item opened | `question` (short key, optional) |

Rules:

- Snake case, verb first.
- No names, emails, Discord IDs, IPs or free text.
- No viewer counts or stream titles in events.
- Analytics failures must never affect the page. Wrap calls in try and catch.
- Events fire on real activation. Do not count prefetch, hover or scroll.

## What each event answers

| Question | Events |
|---|---|
| Are visitors going to Kick? | `watch_live_click` |
| Is the Discord the main community action? | `discord_join_click` |
| Do people copy the code, or only open Stake? | `code_copy`, `stake_click` |
| Does anyone use the support links? | `support_click` |
| Are sponsors finding the contact? | `sponsor_inquiry_click` |
| Which FAQ answers do people need? | `faq_open` |

## KPIs

| Goal | Metric | Source |
|---|---|---|
| Watch | Watch-live clicks and Kick viewer counts | Analytics and Kick dashboard |
| Community | Discord click-through and joins | Analytics and Discord insights |
| Code | Code copies and Stake outbound clicks | Analytics and partner dashboard |
| Support | Support clicks and Kick subscription count | Analytics and Kick dashboard |
| Sponsorship | Sponsor inquiries received | Email |
| Reach | Visits, referrers, countries | Cloudflare Web Analytics |

Set a 30 day baseline after launch. Do not optimize against small numbers.

## UTM convention

For links from X, Discord or Kick to the site:

```
?utm_source=x|discord|kick&utm_medium=social&utm_campaign=launch
```

Use lowercase values and keep the list short. Do not add UTMs to outbound links unless the partner supports them.

## Implementation notes

- Load the analytics script only in production. Never in local or preview.
- If a provider is added, update the CSP `script-src` and `connect-src` for that origin only.
- Keep the wrapper in `site/src/js/analytics.js`. Components call named helpers, not the provider.
- Respect `Do Not Track` if the chosen provider supports it.
- Record every tracking change in this document and in the privacy policy.
- The admin has no public analytics. It logs sign in, publish, rollback and content changes to SQLite.

## Privacy

- Cloudflare Web Analytics is cookieless and does not fingerprint visitors.
- The site sets no first-party cookies. The admin session cookie is scoped to the admin host only.
- Stake.com and other destinations may set their own cookies after a click. The privacy policy and disclosure say so.
- Analytics data is aggregate. It is not joined to any account.
- If a law requires consent for the chosen provider, ask for it before loading the script.

## Open questions

- [ ] Does chinnzz want custom click events, or only page views?
- [ ] Is a small paid analytics tool acceptable?
- [x] Sponsor email is business@chinnzz.com, the tracked address for sponsor inquiries. Mailbox pending domain purchase.

## Related documents

- [Privacy Policy](../04-legal/privacy-policy.md)
- [Affiliate Disclosure](../04-legal/affiliate-disclosure.md)
- [Security](security.md)
- [Architecture](architecture.md)
