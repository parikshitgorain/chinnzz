---
title: "ADR 0005: Design direction"
status: approved
owner: Parik
updated: 2026-10-23
audience: internal
version: 1.0
---

# ADR 0005: Design direction

- **Status:** approved
- **Date:** 2026-10-23
- **Decision owner:** chinnzz
- **Supersedes:** none

## Context

Four visual directions are proposed in the [Moodboard](../../02-design/moodboard.md). chinnzz supplied a gold-on-black logo with a serif CHINNZZ wordmark and chose the luxury direction to match it.

- **A. Hectic crimson**
- **B. Dark neon gaming**
- **C. Casino luxury**
- **D. Clean minimal dark**

The direction must feel credible for a Kick streamer, work at 360px first, meet AA contrast, leave room for future sponsor content, and avoid an AI-template look.

## Decision

**Direction C, Casino luxury, refined as "Gold Noir".** The supplied gold-on-black logo is the anchor, so the theme extends it rather than competing with it:

- Gold (`#D4AF37` family) is the **only** brand accent. It is used for thin rules, small accents, key CTAs, the code card shine and the hero glow. It never fills large areas.
- Crimson is reserved for error and danger semantics only. It is never a decorative brand color, which keeps the design out of the crowded gold-and-red casino cliche.
- The moodboard's deep green is dropped. It fought the gold.
- Display type is Cormorant Garamond (self-hosted WOFF2), echoing the logo's serif wordmark. Body type is Inter.
- Surfaces are warm near-black (`#0A0806` family), not neutral gray, so the gold reads as gold against them.
- The supplied logo is used as the hero avatar, header mark, social preview image and touch icon. No AI-generated hero art.

## Consequences

- The [Design System](../../02-design/design-system.md) carries the final Gold Noir tokens below. Token names are unchanged, so the build maps them 1:1 to CSS custom properties.
- Crimson and deep green leave the palette. Any component that used them is re-specified in gold or neutral.
- The code card, live pill and primary CTAs are gold or green (live) on near-black. Body copy is neutral warm white at AA or better.
- The supplied logo is the only brand mark. No AI hero art, no stock wordmark.

## Alternatives considered

| Option | Notes |
|---|---|
| A. Hectic crimson | Closest to the client reference. Near black, red glow, centered avatar and wordmark. Rejected: the client's own logo is gold, not red, and a red-led theme would fight it. |
| B. Dark neon gaming | Violet and cyan, condensed display type, high streamer energy. Rejected: the violet and cyan palette is the default AI look and dates fast. |
| C. Casino luxury | Black, gold and serif display, premium feel. **Chosen**, refined as Gold Noir. |
| D. Clean minimal dark | Neutral dark, one accent, typography led, restrained. Rejected: least immediately streamer, and it would orphan the supplied gold logo. |

## Follow-up

- [x] Direction chosen by chinnzz: C, Casino luxury, refined as Gold Noir. Owner: Parik. Milestone M5.
- [x] Final tokens and type recorded in [Design System](../../02-design/design-system.md).
- [x] Supplied logo added as brand mark. Owner: Parik. Milestone M5.
- [x] Mockup gate folded into the logo-led direction choice. `mockup.html` not required for v1.

## Related documents

- [Moodboard](../../02-design/moodboard.md)
- [Wireframe](../../02-design/wireframe.md)
- [Mockup Review](../../02-design/mockup-review.md)
- [Design System](../../02-design/design-system.md)
