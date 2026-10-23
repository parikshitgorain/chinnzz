---
title: Content and Assets Checklist
status: approved
owner: chinnzz
updated: 2026-10-23
audience: client
version: 3.0
---

# Content and Assets Checklist

Every item the site needs. Statuses: **have**, **needed**, **placeholder**, **approved**, **draft**.

## Confirmed

| Item | Value | Status |
|---|---|---|
| Kick channel | https://kick.com/chinnzz | have |
| Kick slug | `chinnzz` | have |
| X profile | https://x.com/lechinnzz | have |
| Discord invite | https://discord.gg/T6Nx6fAMYk | have, confirm never expire |
| Domain | chinnzz.com | needed, client to purchase |
| Stake.com platform | Stake.com | have |
| Code value | `CHINNZZ` | have, unsponsored |
| Sponsor email | business@chinnzz.com | approved, mailbox pending domain purchase and mail setup |
| Copy voice | Third-person "my boy" community voice | approved 2026-10-23 |
| Client approval contact | Discord (`lechinnzz`) | have |

## Brand and imagery

| Item | Spec | Owner | Status | Notes |
|---|---|---|---|---|
| Logo or wordmark | Supplied gold-on-black PNG, 640x640 | chinnzz | have | Used as hero avatar, header mark, favicon, OG image |
| Favicon source | Derived from the logo (SVG + ICO) | Parik | have | In `public/` |
| Portrait or hero image | Logo serves as the avatar | chinnzz | have | A real photo can replace it later. No AI art. |
| Avatar | Logo, 640x640 | chinnzz | have | Used in the hero and header |
| Hero alt text | "chinnzz logo" | Parik | have | |
| OG image | 1200x630 PNG, logo on near-black with gold frame | Parik | have | In `content/media/` |
| Channel banner | High-resolution original | chinnzz | needed | Used only if it helps the about section |
| Stream stills | Two or three real frames | chinnzz | needed | For the live and community sections |

## Copy

| Item | Owner | Status | Notes |
|---|---|---|---|
| Short bio, two or three sentences | chinnzz | draft | Draft written in the my-boy voice, waiting on chinnzz's own words |
| One-line community description | Parik | have | "Stream pings, chat and the people who make my boy's stream what it is. Pull up." |
| What he streams | chinnzz | needed | FAQ and about |
| Catchphrases or community slang | chinnzz | approved | "my boy" voice approved 2026-10-23 |
| Schedule, days and times, plus timezone | chinnzz | needed | Live status covers v1; schedule can follow |
| FAQ answers that need client input | Parik | have | Written in the my-boy voice, client approved the direction |
| Real audience numbers | chinnzz | needed | Only if the sponsor audience block is shown |

## Links and code

| Item | Owner | Status | Notes |
|---|---|---|---|
| Stake.com profile or referral URL | chinnzz | needed | Confirm the exact URL |
| Code `CHINNZZ` status | chinnzz and Stake | unsponsored | Do not claim a deal |
| Default code state | chinnzz | approved | Inactive until the Stake relationship and code terms are confirmed |
| Code terms | chinnzz and Stake | needed | Confirm whether the code tracks anything |
| Kick subscription eligibility | chinnzz | have | Button live, links to the Kick channel |
| Tips provider and URL | chinnzz | needed | Ko-fi, StreamElements or other |
| Sponsor email | chinnzz | approved | business@chinnzz.com, mailbox pending domain purchase and mail setup |
| Discord invite never-expire setting | chinnzz | needed | Check server invite settings |

## Legal and compliance inputs

| Item | Owner | Status | Notes |
|---|---|---|---|
| Target jurisdictions | chinnzz | needed | Determines age and wording |
| Age requirement, 18+ or 21+ | chinnzz and partners | needed | Confirm before launch |
| Legal entity or name for policies | chinnzz | needed | Privacy and Terms |
| Contact email for legal and privacy | chinnzz | needed | Placeholder until provided |
| Responsible-gambling resources | Parik draft | placeholder | Verify per region |
| Legal review of drafts | chinnzz | needed | Developer drafts are not legal advice |

## Accounts and infrastructure

| Item | Owner | Status | Notes |
|---|---|---|---|
| Domain purchase in client name | chinnzz | needed | Blocks production launch |
| Registrar, 2FA and lock | chinnzz | needed | Client owned |
| DNS access in Cloudflare | chinnzz or Parik | needed | Decide at M10 |
| GitHub repository access | Parik | have | Remote configured |
| Cloudflare Pages project | Parik | needed | At M10 |
| VPS provider and region | chinnzz | needed | At M11 |
| Admin host name | chinnzz and Parik | needed | For example `admin.chinnzz.com` |
| VPS SSH access | chinnzz or Parik | needed | At M11 |
| Admin login email for chinnzz | chinnzz | needed | At M9 |
| Admin login email for Parik | Parik | needed | At M9 |
| Two-factor authentication choice | chinnzz | needed | Now or later |
| Analytics preference | chinnzz | needed | Cloudflare Web Analytics or none |

## Asset delivery rules

- Send original files, not compressed screenshots from Discord.
- Images: WebP, AVIF or high-quality JPG or PNG. Avoid compression artifacts.
- Do not send media you do not have rights to use.
- No AI-generated portraits, hero art or fake stream screenshots.
- Every asset gets a row here before it ships.
- Alt text is required for every image used in content.

## Launch blockers

1. Domain purchased in chinnzz's name.
2. Mailbox created for business@chinnzz.com (after the domain purchase).
3. Code state confirmed. Inactive is the default.
4. Age and jurisdiction wording confirmed.
5. Legal drafts reviewed.
6. Bio: draft written, waiting on chinnzz's own words.
7. Discord invite confirmed as never expiring.
8. Admin login and VPS details confirmed for M11.

## Related documents

- [Copy Deck](copy-deck.md)
- [Brand Brief](brand-brief.md)
- [Monetization and Partnerships](monetization-and-partnerships.md)
- [Launch Runbook](../05-delivery/launch-runbook.md)
