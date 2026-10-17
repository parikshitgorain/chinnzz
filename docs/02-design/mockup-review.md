---
title: Mockup Review
status: review
owner: chinnzz
updated: 2026-10-17
audience: client
version: 2.0
---

# Mockup Review: Four Directions

> M5 gate. The mockup is `mockup.html` at the repository root: one page, real layout, placeholder assets and a floating switcher to compare directions A, B, C and D. Open it locally in a browser.

## What is being reviewed

| Direction | Name | What to look at |
|---|---|---|
| A | Hectic crimson | Red and black balance, centered avatar and wordmark, code card, live state |
| B | Dark neon gaming | Energy, accent discipline, display type, live badge |
| C | Casino luxury | Gold and serif treatment, premium feel, code card |
| D | Clean minimal dark | Typography, density, restraint, longevity |

All four use the same mobile-first wireframe and copy, so the comparison is about look and feel, not content.

## How to review

1. Open `mockup.html` in Chrome, Edge or Safari.
2. Use the direction switcher to compare A, B, C and D.
3. Start at 360px wide. Then check 390px, 768px and 1440px.
4. Open it on a real phone if possible.
5. Check the code card in all three states using the state switcher.
6. Ask: does this feel like chinnzz, would he keep it for two years, and does it look human made?
7. Write one consolidated feedback pass below. Do not send scattered messages.

## Feedback template

| Direction | What works | What does not | Specific changes |
|---|---|---|---|
| A. Hectic crimson | | | |
| B. Neon | | | |
| C. Luxury | | | |
| D. Minimal | | | |

Then answer:

- **Chosen direction:** A, B, C, D or a named hybrid
- **Must-change items before build:**
  1.
  2.
  3.
- **Anything that must not appear:** colors, imagery, language
- **Wordmark direction:** typographic, emblem, mascot or TBD

## Scorecard

Rate 1 to 5.

| Criterion | A | B | C | D |
|---|---|---|---|---|
| Feels like chinnzz | | | | |
| Streamer energy | | | | |
| Trust and premium feel | | | | |
| Mobile readability | | | | |
| Layout density, no dead zones | | | | |
| Longevity | | | | |
| Distinctiveness from templates | | | | |
| Total | | | | |

## Mobile-first audit

| Check | A | B | C | D |
|---|---|---|---|---|
| 320px: no horizontal scroll | | | | |
| 360px: hero fits without crowding | | | | |
| 390px: no orphan cards | | | | |
| Tap targets at least 44px | | | | |
| Primary actions in thumb reach | | | | |
| No hover-only content | | | | |
| Sticky action bar, if used, does not cover content | | | | |
| Images and embeds keep their aspect ratio | | | | |
| Text is at least 16px body | | | | |
| Header and menu work one handed | | | | |

## Dead-zone and overflow audit

| Check | A | B | C | D |
|---|---|---|---|---|
| No section with only a heading and empty space | | | | |
| No oversized hero that hides the content | | | | |
| Section spacing feels deliberate, not default | | | | |
| Cards fill their rows | | | | |
| No ragged or unused column | | | | |
| No overflow at 320px | | | | |
| No clipped text or button labels | | | | |
| Footer is compact and useful | | | | |

## Human-craft checklist

- [ ] Starts from the Hectic structure, not a generic SaaS or dashboard template.
- [ ] Wordmark is custom lettering or a deliberate typographic treatment.
- [ ] Real portrait or a strong typographic fallback. No AI-generated hero art.
- [ ] No purple-blue AI gradient default.
- [ ] No glassmorphism.
- [ ] No generic three-card feature grid.
- [ ] No emoji section icons.
- [ ] No stock dashboard visuals.
- [ ] Red glow is limited to the hero and live state in direction A.
- [ ] Body text is neutral and readable.
- [ ] Spacing and type are tuned per breakpoint.
- [ ] The code card looks trustworthy in every state.
- [ ] The page looks like a person made it for chinnzz.

## Copy audit

- [ ] No em dashes.
- [ ] No banned AI words: seamless, elevate, unleash, robust, curated, empower, game-changing, cutting-edge, delve, dive into, landscape, realm, transform your, not just X but Y.
- [ ] No stacked triples such as fast, simple, reliable.
- [ ] No fake stats, fake urgency or fake scarcity.
- [ ] No claim of a sponsor or affiliate deal that does not exist.
- [ ] Every button label states its action.
- [ ] Code state copy matches the selected state.

## Decision

- **Chosen direction:** ____
- **Rationale:** ____
- **Approved by:** chinnzz
- **Date:** ____
- **Revision round:** 1 of 2

After sign-off:

- [ ] Fill [ADR 0005](../00-project/decisions/0005-design-direction.md).
- [ ] Fill final tokens and type in [Design System](design-system.md).
- [ ] Move `mockup.html` to `design/archive/` or delete it. It is not deployed.
- [ ] Update statuses in [docs/README.md](../README.md).

## Notes

- Mockup placeholders are expected: portrait, logo, bio, schedule, code state and audience numbers are not final.
- The mockup is not production code and is not copied directly into the site.
- Two revision rounds are included. See [SOW](../00-project/scope-and-sow.md).

## Related documents

- [Moodboard](moodboard.md)
- [Wireframe](wireframe.md)
- [Design System](design-system.md)
- [ADR 0005](../00-project/decisions/0005-design-direction.md)
