---
title: Roadmap
status: review
owner: Parik
updated: 2026-10-17
audience: client
version: 2.0
---

# Roadmap

## Current phase

**M0 and M1.** The documentation set is being revised for the current scope: a managed single page hub, an admin, no sponsor at launch, and mobile-first design. No site code is written until the revised docs and design gates are approved.

## Milestones

| # | Milestone | Output | Owner | Gate | Status |
|---|---|---|---|---|---|
| M0 | Docs system and templates | `docs/` structure, index, templates, changelog | Parik | Structure accepted | done |
| M1 | Revised scope | Brief, SOW, roles, ADRs 0006 to 0008, change request | Parik and chinnzz | **Client approves revised scope and SOW** | in review |
| M2 | Brand and content | Brand brief, voice, copy deck, monetization, asset checklist | Parik and chinnzz | Content approved or placeholders accepted | in review |
| M3 | Moodboard, four directions | Direction intent, palettes, human-craft rules | Parik | Shortlist approved | in review |
| M4 | IA and mobile wireframe | Section order, 360px first layout | Parik | Layout approved on a phone | review |
| M5 | Four mockups and design system | `mockup.html`, review, chosen direction, tokens | Parik and chinnzz | **Design sign-off** | not started |
| M6 | Technical and legal docs | Architecture, content model, API, SEO, performance, analytics, security, legal | Parik | Docs approved | in progress |
| M7 | Public build | Eleventy site from `content/` | Parik | Matches approved design | not started |
| M8 | Kick live | `/api/live` and the three states | Parik | Live, offline and failure verified | not started |
| M9 | Admin with local adapter | Express, EJS, SQLite, full content editing | Parik | Edit and publish from a phone | not started |
| M10 | Public launch | Domain, Cloudflare, QA, go live | Parik and chinnzz | Live on chinnzz.com | blocked on domain |
| M11 | VPS admin | Real admin host, auth, publish hook | Parik | Admin live, fallback verified | after launch |
| M12 | Handover | Training, access, documentation walkthrough | Parik | chinnzz can edit and publish alone | not started |

M10 does not depend on M11. The public site is static from the first deploy. The admin follows when the VPS is ready.

## Critical path

1. chinnzz approves the revised scope and SOW (M1).
2. chinnzz answers the open inputs or accepts placeholders (M2).
3. Mobile wireframe approved on a real phone (M4).
4. One direction chosen from the four mockups (M5).
5. Technical and legal docs approved (M6).
6. Build, live integration and admin local pass (M7 to M9).
7. Domain purchased and DNS access provided (M10).
8. VPS provisioned and admin deployed (M11).

The domain is the most likely launch blocker. The site can be verified on a `*.pages.dev` preview until it is purchased.

## Dependencies

| Dependency | Blocks | Owner |
|---|---|---|
| SOW sign-off | M2 onward | chinnzz |
| Design direction | M5 to M7 | chinnzz |
| Portrait, logo or wordmark, bio, schedule | Final build | chinnzz |
| Stake code meaning and default state | Code card | chinnzz |
| Sponsor email | Sponsor section | chinnzz |
| Tips provider | Support section | chinnzz |
| Kick subscription status | Support section | chinnzz |
| Age and jurisdiction | Legal pages | chinnzz |
| Domain in chinnzz's name | Public launch | chinnzz |
| Cloudflare and GitHub access | M10 | both |
| VPS and admin host | M11 | both |
| Legal review | Launch | chinnzz |

## What is intentionally not in v1

- Leaderboard, raffle, rewards, vault or deposits.
- Prize pool or giveaway mechanics.
- A sponsor claim or affiliate claim that does not exist.
- Public user accounts.
- A newsletter.
- A Kick player embed. It is a link for now.
- A blocking age gate, unless a partner or jurisdiction requires it.

## Phase 2 backlog, not committed

- Inline Kick player, loaded on click.
- Clips or highlights section.
- Schedule automation from chinnzz's calendar.
- Sponsor media kit with real, dated numbers.
- Affiliate or sponsor deal activation when signed.
- Discord member count.
- Custom event analytics.
- Merch or rewards, only with a real fulfilment plan.

Each backlog item needs a change request and an update to the affected docs.

## Change control

New requests use [Change Request](../templates/change-request.md). An approved request is added here as a milestone or backlog item. Dates move only when the change is accepted.

## Related documents

- [Scope and SOW](../00-project/scope-and-sow.md)
- [Stakeholders and Roles](../00-project/stakeholders-and-roles.md)
- [Change Request CR-2026-10-17-01](../00-project/change-requests/CR-2026-10-17-01.md)
- [Launch Runbook](launch-runbook.md)
