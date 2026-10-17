---
title: Moodboard
status: review
owner: Parik
updated: 2026-10-17
audience: client
version: 2.0
---

# Moodboard: Four Directions

> The client chooses after seeing all four as high-fidelity mockups on the same mobile-first wireframe at M5. This document captures the intent behind each direction.

## Shared foundation

Whatever the direction:

- Dark first. Streamers and gambling audiences expect it, and it is easier on the eyes at night.
- Mobile first. The page is designed at 360px before desktop.
- One display face and one body face at most.
- AA contrast minimum, AAA for body where possible.
- Motion is subtle and optional under `prefers-reduced-motion`.
- Tap targets are at least 44px.
- No clutter, popups or fake offers.
- No dead zones, oversized empty sections or orphan cards.
- No AI-template signals: no purple-blue default gradients, no glassmorphism, no generic three-card feature grid, no emoji section icons.

---

## A. Hectic crimson

**Feel:** the client reference. Near black, deep red glow, centered avatar and wordmark, red-bordered rounded cards, white body text.

| Token | Value |
|---|---|
| Background | `#080506` |
| Surface | `#140A0D` |
| Surface raised | `#1D0D12` |
| Border | `#3A161D` |
| Text | `#F7EFF1` |
| Muted text | `#B9A0A6` |
| Accent | `#E11D2E` |
| Accent bright | `#FF3B4E` |
| Live | `#22C55E` |
| Warning | `#F59E0B` |

**Typography:** Display in a heavy condensed or wide grotesque. Body in Inter or Manrope. The wordmark is custom lettering, not a stock font with a glow.

**Imagery:** a real portrait or stream still, dark and high contrast. Red glow behind the avatar only. Subtle noise on large surfaces.

**Motion:** a slow live dot pulse and one soft glow behind the avatar. No drifting gradients everywhere.

**Pros:** closest to the client reference, immediate streamer fit, strong on mobile.

**Cons:** easy to look like every other gambling affiliate. Red on black can hurt readability if overused.

**Risk controls:** red is for accents, borders and the live state, not body copy. Keep surfaces nearly neutral. Limit glow to the hero and live state.

---

## B. Dark neon gaming

**Feel:** live stream energy. Violet and cyan, condensed display type, fast and current.

| Token | Value |
|---|---|
| Background | `#07070B` |
| Surface | `#0E0E16` |
| Border | `#232336` |
| Text | `#F5F5FF` |
| Muted text | `#A1A1B5` |
| Accent 1 | `#7C5CFF` |
| Accent 2 | `#22D3EE` |
| Live | `#22C55E` |
| Warning | `#EF4444` |

**Typography:** Barlow Condensed 700 or 800 for display, uppercase with tight tracking. Inter or Manrope for body.

**Imagery:** high-contrast stream stills, glow edges, subtle noise. Live badge with a pulsing dot.

**Motion:** one hero motion moment, a live pulse and restrained hover transitions.

**Pros:** immediate streamer fit. The live state pops. Strong mobile impact.

**Cons:** the violet and cyan palette is the default AI look and is easy to overuse. Date sensitive.

**Risk controls:** use one accent as the main color and the second only for small details. Keep body text neutral. No gradient orbs.

---

## C. Casino luxury

**Feel:** premium and confident. Closer to a high-roller room than a Twitch page.

| Token | Value |
|---|---|
| Background | `#0B0908` |
| Surface | `#151210` |
| Border | `#2A231C` |
| Text | `#F7F1E6` |
| Muted text | `#B8AA96` |
| Gold | `#D4AF37` |
| Crimson | `#C1121F` |
| Deep green | `#0F5132` |

**Typography:** Cormorant Garamond or a sharp modern serif for display. Inter for body.

**Imagery:** rich dark photography, thin gold rules, restrained art deco geometry.

**Motion:** elegant hover lifts and a slow shine on the code card. No bouncing.

**Pros:** premium and different. Ages better than neon. Fits gambling without shouting.

**Cons:** can feel older and less streamer. Gold and red is a crowded casino cliché. Easy to make tacky.

**Risk controls:** gold for lines and small accents only, never large fills. Strong modern body type. No fake marble or felt textures.

---

## D. Clean minimal dark

**Feel:** modern creator brand. Quiet, confident and content first. The stream and the person carry the page.

| Token | Value |
|---|---|
| Background | `#0B0D10` |
| Surface | `#12151A` |
| Border | `#232830` |
| Text | `#F2F4F7` |
| Muted text | `#98A2B3` |
| Accent | `#B6F09C` or a single warm red |
| Live | `#22C55E` |

**Typography:** Space Grotesk or Manrope for display. Inter for body.

**Imagery:** clean stream stills, one strong portrait, thin borders. Space is used with purpose, not as a default.

**Motion:** fades, underline reveals and state changes. No glow and no marquee.

**Pros:** timeless, readable and easy to extend. Lowest risk of looking cheap.

**Cons:** least immediately streamer. Depends on strong photography or a strong wordmark.

**Risk controls:** use a distinctive display face and one bold accent. If the assets are weak, build a strong typographic hero rather than filling space with decoration.

---

## Comparison

| Criterion | A. Hectic | B. Neon | C. Luxury | D. Minimal |
|---|---|---|---|---|
| Streamer energy | High | High | Medium | Medium low |
| Gambling fit | High | High | High | Medium |
| Premium feel | Medium | Medium | High | Medium high |
| Originality risk | Medium | High | Medium | Low |
| Asset dependency | Medium | Medium | High | High |
| Longevity | Medium | Low | High | High |
| Mobile impact | High | High | Medium | Medium |

## Human-craft review questions

1. Which feels most like chinnzz on a stream?
2. Which would he be comfortable keeping for two years?
3. Which direction should the wordmark follow?
4. Does the page have any dead zones or oversized empty sections?
5. Does it look like a person made it, or like a template generator?
6. Is the code card honest and clear in every state?

## Reference links

- Hectic: https://hecticgambles.com/
- TZBETZ: https://tzbetz.com/
- chinnzz Kick: https://kick.com/chinnzz
- Kick: https://kick.com/

Visual references are for direction only. No assets are copied.

## Decision

Pending. See [Mockup Review](mockup-review.md) and [ADR 0005](../00-project/decisions/0005-design-direction.md).

## Related documents

- [Wireframe](wireframe.md)
- [Mockup Review](mockup-review.md)
- [Design System](design-system.md)
- [Brand Brief](../01-brand/brand-brief.md)
