---
title: Information Architecture
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Information Architecture

## Sitemap

v1 is one public page. Legal content ships as separate lightweight pages linked from the footer. The admin lives on a separate host and is not part of the public sitemap.

```
/                         Public page
├── #home                 Hero and live status
├── #stream               Live stream card
├── #socials              Kick, X and Discord
├── #play                 Stake.com and code states
├── #support              Kick subscriptions and tips
├── #sponsor              Work with me
├── #about                Community and bio
├── #faq                  FAQ
├── /privacy              Privacy policy
├── /terms                Terms of use
└── /responsible-gambling Responsible play and support

Reserved for later, not built in v1:
├── /leaderboard
└── /rewards
```

`admin.chinnzz.com` is a separate service. It is never linked from the public site and never appears in the sitemap or robots file.

## Section order and purpose

| # | Section | Purpose | Primary CTA | Content source |
|---|---|---|---|---|
| 0 | Header | Navigation and persistent community CTA | Join Discord | `content/site.json` and `content/sections/socials.json` |
| 1 | Hero | Identify chinnzz, show live status, send to Kick | Watch live on Kick | `content/sections/hero.json` plus `/api/live` |
| 2 | Stream | Give the live state a clear home | Watch on Kick | `content/sections/live.json` |
| 3 | Socials | Make every real account easy to reach | Join Discord | `content/sections/socials.json` |
| 4 | Where I play | Present Stake.com and the code honestly | Copy code or open Stake | `content/site.json` and `content/sections/play.json` |
| 5 | Support the stream | Convert goodwill into Kick subs or tips | Subscribe on Kick or tip | `content/sections/support.json` and `content/site.json` |
| 6 | Work with me | Start sponsor conversations | Email about sponsorship | `content/sections/sponsor.json` |
| 7 | Community and About | Build trust and personality | Join the Discord | `content/sections/about.json` |
| 8 | FAQ | Answer objections and compliance questions | None | `content/sections/faq.json` |
| 9 | Final CTA | Last conversion opportunity | Join the Discord | `content/sections/hero.json` labels |
| 10 | Footer | Socials, disclosure, age, legal | Legal links | `content/site.json` and legal files |

**Why this order:** a visitor from a live link sees the stream and the watch action first. A cold visitor gets identity, community and support in a logical order. The code sits after the social proof and before the support ask. The sponsor section is clearly separated from fan actions so it does not read as a fan offer.

## Navigation

- Desktop: wordmark left, anchor links center or right, Join Discord button far right.
- Mobile: wordmark and menu button. The panel contains anchors and the Discord CTA.
- Nav items: Home · Stream · Socials · Support · Work with me · FAQ.
- The header is sticky. It becomes opaque on scroll for readability.
- A skip link goes to main content.
- The header CTA never claims a live state. The hero owns that.

## Conversion paths

**Path 1: live viewer, highest intent**
Kick, X or Discord link, hero live pill, Watch live on Kick, Kick channel.

**Path 2: community joiner**
Hero, socials, Discord card, Join the Discord.

**Path 3: supporter**
Hero, support section, Kick subscription or tips provider.

**Path 4: sponsor**
Hero, work with me, sponsor email.

**Path 5: player**
Hero, socials, where I play, copy code or open Stake.com.

**Path 6: returning visitor**
Hero live state, stream card, schedule or Discord.

## Content priority on a 360px screen

1. Wordmark and identity.
2. Live state.
3. Watch CTA.
4. Discord CTA.
5. Avatar or real stream image if the layout supports it without pushing the CTAs below the fold.
6. Social links.
7. Everything else below the fold.

The hero must not become a full-screen empty poster. It carries the avatar, wordmark, live state and actions.

## States

| State | Behavior |
|---|---|
| Kick live | Live pill, stream title, viewer count, primary CTA says Watch live on Kick. |
| Kick offline | Neutral offline copy. Primary CTA still links to Kick. |
| Kick API failure | Never show an error. Show Watch on Kick with no live claim. |
| Code active and sponsored | Show code, code copy and a disclosure that chinnzz may earn a commission. |
| Code active and unsponsored | Show code and a clear note that chinnzz is not sponsored and may earn nothing. |
| Code inactive | Show No code live right now with a follow CTA. No disabled input. |
| Kick subscriptions unavailable | Hide the Kick subscription button. Do not show a dead button. |
| No tips provider | Hide the tips button. Keep the community CTA. |
| Missing portrait | Use a strong typographic hero, not a broken image or generic AI art. |
| Discord invite expired | Remove or replace it before shipping. Never ship a dead invite. |
| Admin or backend offline | The public site is unaffected. It is static. |

## Content ownership

- All copy and settings live in `content/` and are edited in the admin.
- Templates hold structure only. No marketing copy is hardcoded in a template.
- Legal pages live in `content/legal/`.
- Media lives in `content/media/`.
- The admin writes drafts, validates them and publishes with a git commit.
- Manual file editing remains available as an emergency path.

## Analytics hooks

| User action | Event |
|---|---|
| Click watch-live CTA | `watch_live_click` |
| Click Discord CTA | `discord_join_click` |
| Click X CTA | `x_follow_click` |
| Click Stake link | `stake_click` |
| Copy code | `code_copy` |
| Click Kick subscription or tips link | `support_click` |
| Click sponsor email | `sponsor_inquiry_click` |
| Open a FAQ item | `faq_open`, optional |

See [Analytics and Events](../03-technical/analytics-and-events.md).

## SEO structure

- One `h1`, the hero heading.
- One `h2` per section, `h3` inside cards and FAQ.
- Anchor IDs match nav labels.
- Legal pages have their own titles and descriptions.
- No keyword stuffing. The brand name plus "Kick streamer" is the core phrase.
- The admin host is `noindex` and is not linked from the public site.

## Related documents

- [Wireframe](wireframe.md)
- [Copy Deck](../01-brand/copy-deck.md)
- [Content Model and Admin](../03-technical/content-model-and-admin.md)
- [SEO and Metadata](../03-technical/seo-and-metadata.md)
