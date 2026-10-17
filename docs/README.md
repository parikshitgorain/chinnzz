---
title: Documentation Index
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.2
---

# chinnzz.com Documentation Index

This folder is the single source of truth for the chinnzz.com project. It is deliberately modular: one topic per file so docs can be updated independently as the project evolves. Do not merge everything into one document.

## How to use this system

1. Start here. Every document is listed with its status.
2. Read only the docs relevant to the current phase.
3. Update a doc by editing its file and bumping `updated` and `version` in the frontmatter.
4. Record decisions as ADRs in `00-project/decisions/`. Do not bury them in chat.
5. Any scope or feature change goes through `templates/change-request.md` before work starts.
6. Log meaningful changes in [CHANGELOG.md](CHANGELOG.md).
7. Keep the public site and repo docs free of em dashes and AI-sounding filler.

## Status meanings

| Status | Meaning |
|---|---|
| `draft` | Written, not yet reviewed |
| `review` | Awaiting feedback or approval |
| `approved` | Signed off. Build may rely on it. |
| `superseded` | Replaced by a newer doc or ADR. Kept for history. |

## Project definition

| Document | Status | Owner | Updated |
|---|---|---|---|
| [Project Brief](00-project/brief.md) | review | Parik | 2026-10-17 |
| [Scope and SOW](00-project/scope-and-sow.md) | review | Parik | 2026-10-17 |
| [Stakeholders and Roles](00-project/stakeholders-and-roles.md) | review | Parik | 2026-10-17 |
| [CR 2026-10-17-01: Scope change](00-project/change-requests/CR-2026-10-17-01.md) | approved | chinnzz | 2026-10-17 |
| [ADR 0001: Modular docs](00-project/decisions/0001-modular-docs.md) | approved | Parik | 2026-10-17 |
| [ADR 0002: Static site](00-project/decisions/0002-static-site.md) | approved, partly superseded | Parik | 2026-10-17 |
| [ADR 0003: Cloudflare Pages](00-project/decisions/0003-cloudflare-pages.md) | approved | Parik | 2026-10-17 |
| [ADR 0004: Kick live proxy](00-project/decisions/0004-kick-live-proxy.md) | approved | Parik | 2026-10-17 |
| [ADR 0005: Design direction](00-project/decisions/0005-design-direction.md) | draft | chinnzz | 2026-10-17 |
| [ADR 0006: Admin backend](00-project/decisions/0006-admin-backend.md) | approved | chinnzz | 2026-10-17 |
| [ADR 0007: Static fallback](00-project/decisions/0007-static-fallback.md) | approved | chinnzz | 2026-10-17 |
| [ADR 0008: Build step](00-project/decisions/0008-build-step.md) | approved | Parik | 2026-10-17 |

## Brand and content

| Document | Status | Owner | Updated |
|---|---|---|---|
| [Brand Brief](01-brand/brand-brief.md) | review | Parik | 2026-10-17 |
| [Voice and Tone](01-brand/voice-and-tone.md) | review | Parik | 2026-10-17 |
| [Copy Deck](01-brand/copy-deck.md) | review | Parik | 2026-10-17 |
| [Content and Assets Checklist](01-brand/content-assets-checklist.md) | review | chinnzz | 2026-10-17 |
| [Monetization and Partnerships](01-brand/monetization-and-partnerships.md) | review | chinnzz | 2026-10-17 |

## Design

| Document | Status | Owner | Updated |
|---|---|---|---|
| [Moodboard](02-design/moodboard.md) | review | Parik | 2026-10-17 |
| [Information Architecture](02-design/information-architecture.md) | review | Parik | 2026-10-17 |
| [Wireframe](02-design/wireframe.md) | review | Parik | 2026-10-17 |
| [Mockup Review](02-design/mockup-review.md) | review | chinnzz | 2026-10-17 |
| [Design System](02-design/design-system.md) | review | Parik | 2026-10-17 |

## Technical

| Document | Status | Owner | Updated |
|---|---|---|---|
| [Architecture](03-technical/architecture.md) | review | Parik | 2026-10-17 |
| [Content Model and Admin](03-technical/content-model-and-admin.md) | review | Parik | 2026-10-17 |
| [Backend API](03-technical/backend-api.md) | review | Parik | 2026-10-17 |
| [Kick Live Integration](03-technical/kick-live-integration.md) | review | Parik | 2026-10-17 |
| [SEO and Metadata](03-technical/seo-and-metadata.md) | review | Parik | 2026-10-17 |
| [Performance and Accessibility](03-technical/performance-and-a11y.md) | review | Parik | 2026-10-17 |
| [Analytics and Events](03-technical/analytics-and-events.md) | review | Parik | 2026-10-17 |
| [Security](03-technical/security.md) | review | Parik | 2026-10-17 |

## Legal and compliance

Drafts only. Not legal advice. Must be reviewed before launch.

| Document | Status | Owner | Updated |
|---|---|---|---|
| [Compliance Brief](04-legal/compliance-brief.md) | review | Parik | 2026-10-17 |
| [Affiliate Disclosure](04-legal/affiliate-disclosure.md) | review | Parik | 2026-10-17 |
| [Privacy Policy](04-legal/privacy-policy.md) | review | Parik | 2026-10-17 |
| [Terms of Use](04-legal/terms-of-use.md) | review | Parik | 2026-10-17 |
| [Responsible Gambling](04-legal/responsible-gambling.md) | review | Parik | 2026-10-17 |

## Delivery

| Document | Status | Owner | Updated |
|---|---|---|---|
| [Roadmap](05-delivery/roadmap.md) | review | Parik | 2026-10-17 |
| [QA Checklist](05-delivery/qa-checklist.md) | review | Parik | 2026-10-17 |
| [Launch Runbook](05-delivery/launch-runbook.md) | review | Parik | 2026-10-17 |
| [Handover](05-delivery/handover.md) | review | Parik | 2026-10-17 |
| [Maintenance](05-delivery/maintenance.md) | review | Parik | 2026-10-17 |

## Templates

| Document | Purpose |
|---|---|
| [Document template](templates/document.md) | Standard structure for a new doc |
| [Decision record](templates/decision-record.md) | ADR skeleton |
| [Change request](templates/change-request.md) | Scope and feature change control |
| [Content item](templates/content-item.md) | Single asset or copy tracker |

## Open decisions

Tracked in the [Project Brief](00-project/brief.md#open-questions) and in each document's own open questions section. Client inputs that block launch are collected in the [Content and Assets Checklist](01-brand/content-assets-checklist.md).
