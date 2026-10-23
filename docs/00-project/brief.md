---
title: Project Brief
status: review
owner: Parik
updated: 2026-10-17
audience: client
version: 2.0
---

# Project Brief: chinnzz.com

## Client

**chinnzz**, Kick streamer and community builder.

| Channel | Link |
|---|---|
| Kick | https://kick.com/chinnzz |
| X | https://x.com/lechinnzz |
| Discord | https://discord.gg/T6Nx6fAMYk |
| Domain | `chinnzz.com`, available but not purchased yet |

## The opportunity

chinnzz has an audience on Kick, X and Discord, but no owned home on the web. He needs one page he can link from every profile. The page should answer four questions fast:

1. Who is this?
2. Where do I watch?
3. How do I join the community?
4. What is the code, and is it sponsored?

The reference is Hectic (hecticgambles.com): dark red and black, a centered avatar and wordmark, live stream cards, social icons and a responsible-gambling footer. chinnzz wants that type of hub, not a copy of Hectic's leaderboard, raffle or deposit pages.

## Current business reality

- chinnzz has **no sponsor and no affiliate deal**.
- He plays on **Stake.com**.
- The code **`CHINNZZ`** exists, but it is **not sponsored**.
- Monetization at launch is Kick subscriptions, tips and donations, and sponsorship inquiries through a public email.
- An affiliate application can run in parallel. The site has a code slot that stays inactive until a real agreement exists.

The site must never imply a partnership that does not exist.

## What chinnzz asked for

- A clean, good-looking site in the spirit of Hectic.
- A Stake.com code card.
- Links to Kick, X and Discord.
- A live status cue so visitors know when he is streaming.
- An admin panel where all settings and content can be changed.
- A backend that can be masked or mocked now and moved to a VPS later, with a clean fallback.
- A design that looks human made, not like an AI template.

## Goals and success metrics

| Priority | Goal | How we measure |
|---|---|---|
| 1 | Send viewers to the Kick stream | Watch-live clicks and Kick channel analytics |
| 2 | Grow the Discord and X following | Discord join clicks, X clicks and platform insights |
| 3 | Support the stream | Kick subscription clicks, tips clicks and provider dashboards |
| 4 | Start sponsor conversations | Sponsor email clicks and inbound messages |
| 5 | Present the code honestly | Code copies and outbound Stake clicks when active |
| 6 | Establish a credible home base | Visits from X, Kick and Discord, plus return visits |

No numbers are promised. Baseline data does not exist yet. Real audience figures will be added only after they are measured.

## Audience

- Kick viewers, Discord members and X followers.
- People arriving from social bios, stream overlays and chat.
- Mostly on a phone, often inside the Kick, X or Discord in-app browser.
- Age 18+ or 21+ depending on jurisdiction and the sites linked. The exact wording is still to be confirmed.

## References

- **Hectic / hecticgambles.com**: structure, community framing, dark red visual language.
- **TZBETZ / tzbetz.com**: a future reference for rewards and leaderboards, not v1.
- **Kick channel page**: live status conventions and stream energy.
- **Stake.com**: the site chinnzz plays on. The site does not claim to operate or represent Stake.

## Constraints

- The code is unsponsored. The default state is inactive until the Stake relationship and terms are confirmed.
- The public site must not depend on the backend at runtime. See [ADR 0007](../00-project/decisions/0007-static-fallback.md).
- The admin runs locally at first. The VPS deploy is a separate milestone.
- The domain is not purchased. Production launch waits on it.
- No logo, hero image, bio, schedule or real audience data has been supplied yet.
- Legal copy is a draft and needs review by a qualified person.
- The design must be mobile-first and must avoid an AI-generated look.

## Scope at a glance

**In scope for v1:**

- Modular documentation and change control.
- Brand, voice, copy and content planning.
- Four visual directions, a mobile-first wireframe and a design system.
- One responsive public page built with Eleventy.
- Kick live status through `/api/live`.
- Stake.com card with three honest code states.
- Kick subscription, tips and sponsorship inquiry sections.
- Admin panel with full content control.
- Local admin and mock API in M9.
- Cloudflare Pages launch with static content.
- VPS backend and admin deploy in M11.
- SEO, legal drafts, QA, launch and handover.

**Out of scope for v1:**

- Leaderboard, raffle, deposits, prize pool and giveaways.
- User accounts for visitors, payments on the site or a public database.
- Affiliate partner recruitment and deal negotiation.
- Email capture, newsletter and CRM.
- Paid advertising and social media management.
- Legal advice and regulatory filings.
- Domain fees and VPS costs.

## Assumptions

- chinnzz controls the Kick, X and Discord accounts and keeps the Discord invite valid.
- Content is supplied or approved by chinnzz.
- Cloudflare Pages remains free for the public site.
- The VPS is paid for by chinnzz and owned by chinnzz.
- Changes go through the change request process.

## Open questions

- [ ] Confirm the Stake.com profile URL and whether `CHINNZZ` is a referral code.
- [ ] Confirm the default code state. Inactive is recommended until terms are clear.
- [x] Confirm the public sponsor email. business@chinnzz.com, approved 2026-10-23. Mailbox pending domain purchase.
- [ ] Confirm Kick subscription eligibility.
- [ ] Choose the tips provider.
- [ ] Provide real audience numbers for the sponsor section, or hide the block.
- [ ] Provide logo or wordmark, portrait and stream stills, bio, schedule and timezone.
- [ ] Confirm 18+ or 21+ and the target jurisdictions.
- [ ] Confirm the VPS provider, admin host and owner.
- [ ] Confirm admin login emails and whether 2FA is needed at launch.
- [ ] Confirm whether the admin is required at public launch or can follow in M11.
- [ ] Confirm the analytics choice.

## Related documents

- [Scope and SOW](scope-and-sow.md)
- [Stakeholders and Roles](stakeholders-and-roles.md)
- [Monetization and Partnerships](../01-brand/monetization-and-partnerships.md)
- [Content and Assets Checklist](../01-brand/content-assets-checklist.md)
- [Roadmap](../05-delivery/roadmap.md)
