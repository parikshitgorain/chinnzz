---
title: Performance and Accessibility
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Performance and Accessibility

## Performance budgets

| Metric | Budget |
|---|---|
| HTML | 40 KB or less uncompressed |
| CSS | 30 KB or less uncompressed |
| JS | 15 KB or less uncompressed |
| Fonts | 2 files maximum, 60 KB total, subset WOFF2 |
| Hero image | 250 KB or less, WebP or AVIF |
| Total initial transfer | 500 KB or less |
| LCP on mobile 4G | 2.5 seconds or less |
| CLS | 0.1 or less |
| INP | 200 ms or less |
| Lighthouse mobile | 95 or above in all four categories |

The page is static HTML. These budgets are generous because there is no framework, no hydration and no runtime content fetch.

## Techniques

- Eleventy builds plain HTML. One CSS file and one deferred script. No client framework.
- Self-hosted fonts, `font-display: swap`, preload the display face only, subset Latin.
- Hero image with explicit width and height, `fetchpriority="high"`, `decoding="async"`, modern format.
- Below-fold images use `loading="lazy"` and explicit dimensions.
- Fixed aspect ratios for every image and embed. No layout shift.
- No iframe at load. The Kick player is a link in v1.
- No third-party scripts except optional cookieless analytics.
- `/api/live` cached at the edge for 60 seconds. Client polls at most once a minute while visible.
- Avoid CSS `@import` and large filters on large elements.
- Cache headers set in `_headers`. HTML revalidates; fonts and images get a long max age because build output names can be versioned.
- The admin is not part of the public bundle.

## Mobile-first responsive rules

| Width | Behavior |
|---|---|
| 320 to 359 | Stress test. No horizontal scroll. Text readable. CTAs fit. |
| 360 to 479 | Primary design width. One column, 16px gutters, stacked hero, full-width primary actions |
| 480 to 767 | One column, slightly larger type, socials in two columns |
| 768 to 1023 | Two-column community and about, socials in three columns, header nav visible |
| 1024 to 1279 | Two-column play and support, 24px gutters |
| 1280 and up | 1120px container, full spacing scale, no wide empty inner margins |

- No horizontal scroll at any width.
- Body text is at least 16px on mobile.
- Line length is 45 to 75 characters on desktop.
- Primary actions are full width on mobile.
- Test at 200 percent zoom and at 320px.
- No section with only a heading and empty space. No orphan cards.

## Accessibility target: WCAG 2.2 AA

### Structure

- [ ] `<header>`, `<nav>`, `<main>`, `<footer>` landmarks.
- [ ] Skip link is the first focusable element.
- [ ] One `<h1>`, headings in order.
- [ ] `<html lang="en">`.
- [ ] Section anchors are reachable and have visible focus.

### Keyboard

- [ ] Every link and button works with Tab, Enter and Space.
- [ ] Visible `:focus-visible` ring on every interactive element.
- [ ] Mobile menu traps focus, closes on Escape and returns focus to the toggle.
- [ ] FAQ works by keyboard and reports `aria-expanded` correctly.
- [ ] Copy button works by keyboard and announces success.
- [ ] No keyboard traps.

### Screen readers

- [ ] Live status uses `aria-live="polite"` and announces transitions only.
- [ ] Copy confirmation is announced.
- [ ] Icon-only links have accessible names.
- [ ] Decorative SVGs are `aria-hidden="true"`.
- [ ] Images have meaningful alt text. Decorative images use `alt=""`.
- [ ] The code value is read as text, not as separate characters.

### Visual

- [ ] Body text contrast is at least 4.5:1. Large text at least 3:1.
- [ ] Focus indicator contrast is at least 3:1 against adjacent colors.
- [ ] State is never conveyed by color alone.
- [ ] Text remains readable at 200 percent zoom.
- [ ] Nothing flashes more than 3 times per second.

### Motion

- [ ] `prefers-reduced-motion: reduce` disables pulses, lifts, smooth scroll and looping animation.
- [ ] No autoplaying audio or video.
- [ ] The live dot pulse is the only looping animation, and it stops under reduced motion.

### Touch and mobile

- [ ] Touch targets are at least 44 by 44px.
- [ ] Spacing between targets is enough to avoid mis-taps.
- [ ] No hover-only content.
- [ ] Primary actions sit in thumb reach.
- [ ] Safe area insets are respected on notched phones.

### Forms (admin)

- [ ] Every input has a visible label.
- [ ] Errors are text, tied to the field and announced.
- [ ] Session expiry warns before it destroys unsaved work.
- [ ] The admin works at 360px.

## Testing

| Tool | What it checks |
|---|---|
| Lighthouse mobile | Scores and metrics |
| axe DevTools | Automated accessibility issues |
| Keyboard-only pass | Focus order, menu, FAQ, copy |
| VoiceOver or NVDA spot check | Landmarks, live region, labels |
| Throttled 4G test | Real world load |
| Responsive mode at 320, 360, 390, 768, 1440 | Layout, overflow, dead zones |
| Reduced motion emulation | Motion |
| 200 percent zoom | Reflow |
| Real phone pass | Touch, thumb reach, in-app browser |

## Acceptance

- Budgets met on a throttled mobile profile.
- Lighthouse 95 or above in all four categories.
- Zero critical or serious axe issues.
- Keyboard-only and reduced-motion passes complete.
- No horizontal scroll at 320px.
- No dead zone or orphan card at any tested width.

## Related documents

- [Design System](../02-design/design-system.md)
- [Wireframe](../02-design/wireframe.md)
- [Architecture](architecture.md)
- [QA Checklist](../05-delivery/qa-checklist.md)
