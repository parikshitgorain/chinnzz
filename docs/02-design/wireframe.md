---
title: Wireframe
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Wireframe: Single Public Page

> Text wireframe and layout spec. Design at 360px first, then adapt to 768px and 1440px. Four high-fidelity mockups are produced from this structure at M5. Approve this layout before visual design.

## Layout system

- Design width order: 360, 390, 768, 1024, 1440.
- Content max width: 1120px.
- Page gutters: 16px at 360, 24px at 768, 32px at 1440.
- Mobile is one column. No horizontal scroll at 320px.
- Section spacing is tuned per section. Start at 48px mobile, 72px tablet and 96px desktop. Do not repeat one giant padding everywhere.
- Header height: 56px mobile, 64px desktop.
- All tap targets are at least 44x44px.
- Body text is at least 16px.
- Primary actions sit in thumb reach. A sticky bottom action bar is optional on long pages.
- Every section must carry content or an action. No section with only a heading and empty space.

## Mobile wireframe, 360px

```
┌─────────────────────────────────────┐
│ [avatar] CHINNZZ            [Menu]  │  header 56
├─────────────────────────────────────┤
│                                     │
│            [avatar]                 │
│          CHINNZZ wordmark           │
│      KICK STREAMER · COMMUNITY      │
│        chinnzz live on Kick         │
│   Pull up. Live streams, loud chat...   │
│                                     │
│   [ LIVE NOW · 1.2K watching ]      │
│   [ Watch live on Kick ]            │
│   [ Join the Discord ]              │
│                                     │
│   Kick · X · Discord                │
│                                     │
├─────────────────────────────────────┤
│ STREAM                              │
│ ┌─────────────────────────────────┐ │
│ │ live or offline card            │ │
│ │ title / neutral message         │ │
│ │ [ Watch on Kick ]               │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ FIND ME HERE                        │
│ Everywhere I post                   │
│ ┌───────────┬───────────┐           │
│ │ Kick      │ X         │           │
│ ├───────────┼───────────┤           │
│ │ Discord   │           │           │
│ └───────────┴───────────┘           │
├─────────────────────────────────────┤
│ WHERE I PLAY                        │
│ Stake.com                           │
│ ┌─────────────────────────────────┐ │
│ │ No code live right now          │ │
│ │ honest follow CTA               │ │
│ └─────────────────────────────────┘ │
│ disclosure                          │
├─────────────────────────────────────┤
│ SUPPORT THE STREAM                  │
│ Keep the stream going               │
│ [ Subscribe on Kick ]               │
│ [ Tip on Ko-fi ]                    │
├─────────────────────────────────────┤
│ WORK WITH ME                        │
│ Sponsor the stream                  │
│ [ Email about sponsorship ]         │
├─────────────────────────────────────┤
│ COMMUNITY                           │
│ More than a stream                  │
│ [ Join the Discord ]                │
├─────────────────────────────────────┤
│ ABOUT CHINNZZ                       │
│ [real portrait]                     │
│ short bio                           │
│ [ Follow on X ]                     │
├─────────────────────────────────────┤
│ FAQ                                 │
│ ▸ Where do you stream?              │
│ ▸ When are you live?                │
│ ▸ What is your code?                │
│ ▸ Are you sponsored?                │
├─────────────────────────────────────┤
│ Catch the next stream               │
│ [ Join the Discord ]                │
│ [ Follow on X ]                     │
├─────────────────────────────────────┤
│ Kick · X · Discord                  │
│ disclosure                          │
│ 18+ or 21+ · Responsible gambling   │
│ Privacy · Terms · © 2026 chinnzz    │
└─────────────────────────────────────┘
```

## Tablet wireframe, 768px

- Header shows the full nav and the Discord button.
- Hero stays centered. Avatar sits above the wordmark.
- Socials become a three-column row.
- Where I play and Support sit side by side, or stack if the copy is long.
- About uses a two-column layout with the portrait on the left.
- FAQ stays single column.

## Desktop wireframe, 1440px

```
┌───────────────────────────────────────────────────────────────────────┐
│ [avatar] CHINNZZ    Home Stream Socials Support Work with me FAQ  [Discord] │
├───────────────────────────────────────────────────────────────────────┤
│                                                                       │
│                         [avatar with red glow]                        │
│                            CHINNZZ wordmark                           │
│                         KICK STREAMER · COMMUNITY                     │
│                           chinnzz live on Kick                        │
│                Pull up. Live streams, loud chat and the people...    │
│                                                                       │
│                    [ LIVE NOW · 1.2K watching ]                       │
│          [ Watch live on Kick ]        [ Join the Discord ]           │
│                                                                       │
│                         Kick · X · Discord                            │
│                                                                       │
├───────────────────────────────────────────────────────────────────────┤
│ STREAM                                                                │
│ ┌───────────────────────────────────┐ ┌─────────────────────────────┐ │
│ │ stream card                       │ │ live info and watch CTA     │ │
│ └───────────────────────────────────┘ └─────────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────┤
│ FIND ME HERE                                                          │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                    │
│ │ Kick         │ │ X            │ │ Discord      │                    │
│ └──────────────┘ └──────────────┘ └──────────────┘                    │
├───────────────────────────────────────────────────────────────────────┤
│ WHERE I PLAY                             SUPPORT THE STREAM           │
│ ┌──────────────────────────────┐         ┌──────────────────────────┐ │
│ │ Stake.com and code card      │         │ Kick subs and tips       │ │
│ │ state and disclosure         │         │ two actions maximum      │ │
│ └──────────────────────────────┘         └──────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────┤
│ WORK WITH ME                                                          │
│ short sponsor copy, email CTA, optional real audience block           │
├───────────────────────────────────────────────────────────────────────┤
│ COMMUNITY and ABOUT                                                   │
│ ┌──────────────────────────┐  ┌────────────────────────────────────┐  │
│ │ Discord card             │  │ portrait and short bio              │  │
│ └──────────────────────────┘  └────────────────────────────────────┘  │
├───────────────────────────────────────────────────────────────────────┤
│ FAQ                                                                   │
│ questions in one column or two balanced columns                       │
├───────────────────────────────────────────────────────────────────────┤
│ Catch the next stream          [ Join the Discord ]  [ Follow on X ]  │
├───────────────────────────────────────────────────────────────────────┤
│ footer: socials, disclosure, age, responsible gambling, legal, year   │
└───────────────────────────────────────────────────────────────────────┘
```

## Section annotations

### Header
- Wordmark left. Anchors right. Discord button always visible on desktop.
- Mobile menu: full-width panel, focus trapped, closes on Escape.
- Sticky. The background becomes opaque on scroll.
- No live claim in the header.

### Hero
- Centered on all sizes, like Hectic. Avatar above the wordmark.
- The avatar has a red glow only in direction A. Other directions use their own accent.
- Eyebrow is small caps. The H1 is the largest type on the page.
- Live pill sits above the CTAs. Use `aria-live="polite"` for live and offline changes only.
- Primary CTA is filled. Secondary is outlined or ghost.
- Avatar uses a fixed square ratio. No layout shift.
- If there is no real portrait, use the wordmark and a plain surface. Do not use AI art.
- Social links use text or icons with accessible labels.
- The hero ends before a phone screen is filled with empty space. The stream card starts within reach.

### Stream
- Shows the live or offline state with the stream title when available.
- No autoplay iframe. If an embed is enabled later, it loads on click.
- The watch CTA is always present.
- The card reserves space for title and viewer count to avoid shift.

### Socials
- Three real accounts only. Add TikTok or YouTube only if chinnzz uses them.
- Each card is a single tap target with a visible label.
- Icons have accessible names if the text label is hidden.

### Where I play
- The code card has the highest contrast after the hero CTA.
- Code is selectable, in monospace or display type, with a copy button.
- The card is driven by `stake.state`. The other states do not render hidden markup.
- Disclosure is always visible, never in a tooltip and never below 12px.
- Inactive state has no disabled input and no fake countdown.
- Stake.com is a normal outbound link unless a tracked affiliate link exists.

### Support
- Two actions maximum: Kick subscription and tips.
- Hide an action when the link or eligibility is missing.
- No progress bars, goals or fake urgency.
- State that tips are handled by the provider.

### Work with me
- Direct, professional copy. No hype.
- Email button uses `mailto:`.
- Audience block only with real numbers and a last checked date.
- No rate card until chinnzz sets one.

### Community and About
- Discord is the second most prominent CTA on the page.
- Real portrait, real bio. No corporate language.
- Member count only if accurate.

### FAQ
- Use native `<details>` and `<summary>` where possible.
- Keyboard accessible with a visible focus ring.
- Covers stream location, schedule, code status, sponsorship, age and responsible play.

### Final CTA
- One band with strong contrast. Two buttons maximum.
- Does not repeat the whole hero.

### Footer
- Social links, disclosure, age notice, responsible-gambling link, privacy and terms, copyright.
- Legal links are real pages.
- No admin link.

## Interaction and state notes

- Copy button uses `navigator.clipboard.writeText`. On success, the label changes to Copied for two seconds. Announce with `aria-live`.
- If the Clipboard API fails, select the code and show a short instruction.
- Mobile menu: focus trap, Escape closes, focus returns to the toggle.
- FAQ: `aria-expanded` state is correct.
- Live pill: reserve width for the viewer count. Do not announce every count change.
- External links use `rel="noopener noreferrer"` and open in a new tab where appropriate.
- Reduced motion removes pulses, glows, marquees and smooth scroll.
- At 200 percent zoom, content reflows without loss.

## Responsive checks

| Width | What must be true |
|---|---|
| 320 | No horizontal scroll. Text readable. CTAs fit. |
| 360 | Primary design width. Header, hero and CTAs fit without crowding. |
| 390 | iPhone class. No orphan cards. |
| 768 | Two-column sections balance. Nav fits. |
| 1024 | Desktop grid starts. Hero still centered. |
| 1440 | Content capped at 1120px. No wide empty margins inside sections. |

## Approval

- [ ] Layout approved by chinnzz on a phone. Date: ____
- [ ] Proceed to four high-fidelity mockups.

## Related documents

- [Information Architecture](information-architecture.md)
- [Moodboard](moodboard.md)
- [Design System](design-system.md)
- [Mockup Review](mockup-review.md)
