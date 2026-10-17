---
title: QA Checklist
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# QA Checklist

Run before every production deploy. Check off only what was actually verified. Record the date and device.

## Content

- [ ] Copy matches the approved [Copy Deck](../01-brand/copy-deck.md).
- [ ] No lorem ipsum, `TODO` or unreplaced `{PLACEHOLDER}` values.
- [ ] Bio, schedule, timezone and FAQ answers are final.
- [ ] Kick, X and Discord links point to the right places.
- [ ] The Discord invite works and is set to never expire.
- [ ] The code card state matches the admin setting: sponsored, unsponsored or inactive.
- [ ] The unsponsored note is present when there is no deal.
- [ ] No claim of a sponsor, affiliate deal, bonus or payout that does not exist.
- [ ] Age notice and responsible-gambling link are visible.
- [ ] Privacy and Terms links resolve.
- [ ] Copyright year is current.

## Copy audit

- [ ] No em dashes anywhere in site copy or docs.
- [ ] No banned AI words: seamless, elevate, unleash, robust, curated, empower, game-changing, cutting-edge, delve, dive into, landscape, realm, transform your, not just X but Y.
- [ ] No stacked parallel triples such as fast, simple, reliable.
- [ ] No fake stats, fake urgency or fake scarcity.
- [ ] Every button label states its action.
- [ ] Sentences read like a person wrote them for chinnzz.
- [ ] Placeholder text is marked as placeholder.

## Links and behavior

- [ ] Header anchors scroll to the right sections.
- [ ] Mobile menu opens and closes. Escape closes it. Focus returns to the toggle.
- [ ] Watch live opens Kick.
- [ ] Discord and X open correctly.
- [ ] Copy code copies the exact string and shows success text.
- [ ] Copy fallback works when the Clipboard API is blocked.
- [ ] FAQ opens and closes with touch, mouse and keyboard.
- [ ] No 404s or redirect chains on internal or external links.
- [ ] `mailto:` links open the mail app with the right address.
- [ ] External links use `rel="noopener noreferrer"`.
- [ ] Stake link and code copy are separate actions.
- [ ] A hidden action stays hidden. No dead buttons.

## Live status

- [ ] Offline state renders correctly.
- [ ] Live state renders during a real stream with viewers and title.
- [ ] API failure renders the neutral Watch on Kick state.
- [ ] Polling pauses when the tab is hidden and resumes when it returns.
- [ ] No layout shift when the status changes.
- [ ] Live and offline transitions are announced politely.
- [ ] Data older than 3 minutes falls back to neutral.
- [ ] The page works with JavaScript disabled.

## Mobile first layout

- [ ] 320px: no horizontal scroll, text readable, actions fit.
- [ ] 360px: primary design width. Header, hero and actions fit without crowding.
- [ ] 390px: no orphan card or ragged row.
- [ ] 412px: Android check.
- [ ] 768px: two column sections balance. Nav fits.
- [ ] 1024px and 1440px: container capped, no wide empty inner margins.
- [ ] Touch targets are at least 44 by 44px.
- [ ] Primary actions sit in thumb reach.
- [ ] No hover-only content.
- [ ] Sticky bar, if used, does not cover content or the footer.
- [ ] Images and embeds keep their aspect ratio.
- [ ] Header is readable when scrolled.
- [ ] Safe area insets respected on notched phones.
- [ ] Tested in a real in-app browser from Kick, X and Discord.

## Dead zone and overflow audit

- [ ] No section with only a heading and empty space.
- [ ] No oversized hero that pushes all content out of view.
- [ ] Section spacing is tuned per section, not one repeated giant gap.
- [ ] Cards fill their rows. No orphan card.
- [ ] No unused column at any breakpoint.
- [ ] No clipped text or cut off button labels.
- [ ] No accidental horizontal scrollbar.
- [ ] Footer is compact and useful.
- [ ] The page has no large empty band between sections.

## Accessibility

- [ ] Lighthouse Accessibility 95 or above.
- [ ] axe DevTools: zero critical or serious issues.
- [ ] Keyboard-only pass: everything reachable and usable.
- [ ] Visible focus ring on every interactive element.
- [ ] Skip link works.
- [ ] Landmarks and heading order are correct.
- [ ] Alt text is meaningful. Decorative images use an empty alt.
- [ ] Contrast: body at least 4.5:1, large text at least 3:1.
- [ ] `prefers-reduced-motion` disables non-essential motion.
- [ ] 200 percent zoom loses no content.
- [ ] Screen reader spot check with VoiceOver or NVDA.

## Performance

- [ ] Lighthouse mobile Performance, Best Practices and SEO at 95 or above.
- [ ] LCP 2.5 seconds or less, CLS 0.1 or less, INP 200 ms or less on throttled mobile.
- [ ] Initial transfer 500 KB or less.
- [ ] Fonts are preloaded and swap correctly.
- [ ] Hero image has `fetchpriority="high"`. Below-fold images are lazy.
- [ ] No console errors or warnings.
- [ ] No unexpected third-party requests.

## SEO and sharing

- [ ] Title and description come from `content/site.json`.
- [ ] Canonical points to the live domain.
- [ ] OG and X tags render. Preview checked in Discord and X.
- [ ] OG image is 1200 by 630 and readable small.
- [ ] JSON-LD validates.
- [ ] `robots.txt` and `sitemap.xml` are correct.
- [ ] Preview deployments are `noindex`.
- [ ] One H1.
- [ ] No em dashes in metadata.

## Security, public

- [ ] HTTPS enforced and HTTP redirects.
- [ ] `www` redirect is consistent.
- [ ] Security headers present: CSP, HSTS, nosniff, referrer, permissions.
- [ ] No secrets in the repo or the client bundle.
- [ ] External links are expected and disclosed.
- [ ] No cloaking or hidden redirects.
- [ ] The admin host is not linked from the public site.

## Admin

- [ ] Login works and logout destroys the session.
- [ ] Wrong password gives a plain error with no account hint.
- [ ] Rate limit blocks repeated failures.
- [ ] Session expiry warns before unsaved work is lost.
- [ ] CSRF rejection is tested.
- [ ] Editor role cannot publish or change users.
- [ ] Every content field can be edited and saved as a draft.
- [ ] Preview matches the built page.
- [ ] Validation blocks publish with a missing required field.
- [ ] Publish writes content, builds, commits and triggers the deploy.
- [ ] A failed push leaves the last build live and shows a plain error.
- [ ] Code state toggle changes the public card after publish.
- [ ] Media upload rejects a renamed non-image file.
- [ ] Media upload strips EXIF.
- [ ] Audit log records login, publish and rollback.
- [ ] Admin works at 360px and can publish from a phone.
- [ ] API down shows an offline banner and does not lose the draft.

## Fallback

- [ ] Stop the backend. The public site still serves.
- [ ] Admin shows offline. No silent data loss.
- [ ] A manual edit in `content/` plus a push produces the same result.
- [ ] Rollback to a previous commit restores the previous content.
- [ ] `/api/live` failure shows the neutral state.

## Browser and device

- [ ] Chrome desktop and Android.
- [ ] Safari desktop and iOS.
- [ ] Firefox desktop.
- [ ] Edge desktop.
- [ ] In-app browsers from Kick, X and Discord.
- [ ] Throttled 3G load is usable.

## Deployment

- [ ] Production deploy succeeded from `main`.
- [ ] Custom domain attached and certificate valid.
- [ ] Last known good deployment identified.
- [ ] Analytics, if enabled, is receiving data.
- [ ] Post-deploy smoke test on the real domain.
- [ ] Admin, if live, is on its own host with HTTPS and auth.

## Sign-off

| Check | Name | Date |
|---|---|---|
| QA completed | | |
| Design acceptance | chinnzz | |
| Client acceptance | chinnzz | |
