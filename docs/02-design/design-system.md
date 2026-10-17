---
title: Design System
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Design System

> Structure and rules are stable. Palette and type values are provisional until ADR 0005 selects a direction. Token names are final so the build can map them 1:1 to CSS custom properties. Values below use direction A, Hectic crimson, as the reference. They change only after design sign-off.

## Principles

- Mobile first. Design at 360px, then adapt.
- Dark first, high contrast, readable at arm's length on a phone.
- One accent family used with restraint. The live state is the only thing that pulses.
- Type does the work. Decoration is secondary.
- Every component has default, hover, active, focus-visible, disabled and loading states where relevant.
- Nothing moves unless it helps comprehension. `prefers-reduced-motion` disables non-essential motion.
- Every section earns its space. No dead zones and no oversized empty bands.
- The visual language is human made. No AI-template shortcuts.

## Color tokens

Define on `:root`. Direction A values are provisional.

| Token | Purpose | Direction A value |
|---|---|---|
| `--bg` | Page background | `#080506` |
| `--bg-elevated` | Alternating section background | `#0D0709` |
| `--surface` | Cards and panels | `#140A0D` |
| `--surface-raised` | Raised card | `#1D0D12` |
| `--surface-hover` | Card hover | `#241017` |
| `--border` | Default border | `#3A161D` |
| `--border-strong` | Focused or active border | `#69202C` |
| `--text` | Primary text | `#F7EFF1` |
| `--text-muted` | Secondary text | `#B9A0A6` |
| `--text-faint` | Metadata and footnotes | `#8D737A` |
| `--accent` | Primary brand accent | `#E11D2E` |
| `--accent-bright` | Hover and highlight | `#FF3B4E` |
| `--accent-contrast` | Text on accent | `#FFFFFF` |
| `--live` | Live status | `#22C55E` |
| `--live-contrast` | Text on live | `#04140A` |
| `--danger` | Errors and warnings | `#F59E0B` |
| `--focus` | Focus ring | `#FFB3BC` |

Rules:

- Body text on `--bg` is at least 7:1 where possible and never below 4.5:1.
- Never convey state by color alone. The live dot also has text. Errors also have text.
- Gradients only behind decorative elements, never behind body copy.
- No pure black `#000` or pure white `#FFF` for large areas.
- Red is not used for body copy.
- The red glow is a single brand device, not a default shadow on every card.

## Typography

| Role | Size, mobile to desktop | Weight | Line height |
|---|---|---|---|
| Display, H1 | clamp(2.5rem, 9vw, 5.5rem) | 700 to 800 | 0.95 to 1.05 |
| H2 | clamp(1.75rem, 4vw, 2.75rem) | 700 | 1.1 |
| H3 | 1.25rem to 1.5rem | 600 to 700 | 1.25 |
| Body large | 1.125rem | 400 | 1.6 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 to 500 | 1.5 |
| Micro label | 0.75rem | 600 to 700 | 1.3, letter spacing 0.08em, uppercase |

Rules:

- Maximum two font families. Self-hosted WOFF2, subset to Latin.
- `font-display: swap`. Preload the display face only.
- Display face direction A: a heavy condensed or wide grotesque. Body: Inter or Manrope.
- Do not use a stock font with a glow as the wordmark. The wordmark gets custom lettering or a deliberate treatment.
- Minimum body size on mobile is 16px.

## Spacing scale

4px base: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Token names `--space-1` to `--space-10`.

Rules:

- Section spacing: 48px mobile, 72px tablet, 96px desktop, tuned per section.
- Card padding: 16px to 24px mobile, 24px to 32px desktop.
- Gap between cards: 12px mobile, 16px tablet, 24px desktop.
- Do not use one giant vertical padding on every section. It creates dead zones.
- Dense is not cramped. Use grouping, rules and rhythm to separate ideas.

## Radius, borders and shadows

| Token | Value |
|---|---|
| `--radius-sm` | 6px |
| `--radius-md` | 12px |
| `--radius-lg` | 20px |
| `--radius-full` | 999px |
| `--border-width` | 1px |
| `--shadow-card` | soft and low opacity. No harsh drop shadows. |
| `--shadow-focus` | `0 0 0 3px color-mix(in srgb, var(--focus) 60%, transparent)` |
| `--glow-accent` | `0 0 48px color-mix(in srgb, var(--accent) 28%, transparent)` |

The glow token is used on the hero avatar and the live state only.

## Layout

- Breakpoints: 360, 390, 768, 1024, 1280.
- Container max width: 1120px.
- Gutters: 16px at 360, 24px at 768, 32px at 1440.
- Mobile: one column.
- Desktop: 12-column grid for sections that need it. The hero stays centered.
- Socials: one column at 360, two columns at 480, three at 768.
- Where I play and Support: stacked below 1024, two columns at 1024 and up.
- About: stacked, then two columns at 768 and up.
- No orphan card or empty column at any breakpoint.

## Components

### Button

| Variant | Use |
|---|---|
| Primary | Watch live, Join Discord, Subscribe on Kick |
| Secondary | Follow on X, Open Stake.com |
| Ghost | Nav, footer, tertiary |
| Code | Copy code |

States: default, hover, active, focus-visible, disabled, loading. Minimum height 44px. Icon optional at 16 to 20px. Label always states the action.

### Live badge and pill

- Live: dot, `LIVE NOW` and optional viewer count.
- Offline: neutral text, no pulse.
- Unknown: Watch on Kick. No live claim.
- Reserve width for the viewer count to avoid shift.
- `aria-live="polite"` for live and offline transitions only.
- The pill is allowed the accent glow. Nothing else competes with it.

### Card

- Surface background, 1px border, `--radius-md`, padding 16 to 32px.
- Hover lift optional at 2px. Disabled for touch and reduced motion.
- No nested cards.
- Cards fill their row. Do not leave one card alone in a three-column row.

### Code card

- The largest card after the hero.
- Code is selectable, in monospace or a display treatment, with high contrast.
- Copy button adjacent. Success is text, not color alone.
- Disclosure always visible in at least 12px muted text.
- Three states render different content, not hidden markup:
  - Active sponsored.
  - Active unsponsored.
  - Inactive.
- No disabled input. No countdown. No fake bonus.
- Stake.com link is separate from the copy action.

### Support card

- Two actions maximum.
- Hide an action when the link or eligibility is absent.
- No goal bars, progress meters or urgency.

### Sponsor block

- Plain text and one email button.
- Audience numbers only when real and dated.
- No rate card until chinnzz sets one.

### FAQ accordion

- Native `<details>` and `<summary>` where possible.
- Visible chevron and focus ring.
- Height animation optional and disabled under reduced motion.

### Navigation

- Sticky header. Opaque after scroll.
- Mobile menu is a full-width panel with a focus trap, Escape to close and body scroll lock.
- Active section highlight optional.
- No admin link.

### Footer

- Two columns at 768px and up, stacked below.
- Legal links are real destinations.
- Disclosure and age notice are visible.

## Admin UI

The admin shares color, type and spacing tokens but uses a calmer density.

- Mobile first at 360px. Single column. Tables become stacked cards.
- Sticky bottom bar with Save draft and Publish.
- Inputs at least 44px tall, with visible labels and error text.
- No hover-only actions.
- The offline banner is persistent and plain.
- The publish result is text, not an endless spinner.
- Admin screens do not use the red glow or marketing visuals. They are a tool.

## Iconography

- Simple 20 to 24px line icons for Kick, X, Discord, copy and chevron.
- Inline SVG with `currentColor`. No icon font.
- Decorative icons are `aria-hidden="true"`. Icon-only links need accessible names.
- No emoji as section icons.

## Motion

| Token | Value |
|---|---|
| `--duration-fast` | 150ms |
| `--duration-base` | 250ms |
| `--duration-slow` | 400ms |
| `--ease-out` | cubic-bezier(0.16, 1, 0.3, 1) |

Allowed: subtle fades, hover transitions, copy confirmation, live dot pulse, one hero glow.

Disallowed: parallax, autoplaying video with sound, infinite marquee, glow pulses on every card, scroll-jacking.

`@media (prefers-reduced-motion: reduce)` disables transforms, pulses, smooth scroll and looping animation.

## Accessibility checklist

- [ ] Landmarks: header, nav, main, footer.
- [ ] Skip link visible on focus.
- [ ] One H1 and headings in order.
- [ ] Focus-visible ring on every interactive element.
- [ ] Keyboard: nav, menu, FAQ and copy button all work.
- [ ] Contrast: AA minimum, AAA for body where possible.
- [ ] Touch targets at least 44x44px.
- [ ] `aria-live` for live status and copy confirmation.
- [ ] Images have alt text. Decorative images have empty alt.
- [ ] No information conveyed by color alone.
- [ ] `prefers-reduced-motion` respected.
- [ ] Zoom to 200 percent without loss of content.

## Content rules

- Buttons use verbs: Watch live on Kick, Join the Discord, Copy code, Email about sponsorship.
- No lorem ipsum in production.
- Placeholders are visibly marked until replaced.
- Legal and disclosure text is at least 12px and never hidden in a tooltip.
- No em dashes and no banned AI words. See [Voice and Tone](../01-brand/voice-and-tone.md).

## Related documents

- [Moodboard](moodboard.md)
- [Wireframe](wireframe.md)
- [Copy Deck](../01-brand/copy-deck.md)
- [Performance and Accessibility](../03-technical/performance-and-a11y.md)
- [Content Model and Admin](../03-technical/content-model-and-admin.md)
