---
title: Stakeholders and Roles
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Stakeholders and Roles

## People

| Person | Role | Responsibilities | Contact |
|---|---|---|---|
| chinnzz | Client, final approver, content owner, admin owner | Brand story, assets, links, code status, sponsor email, tips link, schedule, domain, VPS and account ownership, sign-off | Discord (`lechinnzz`) or X |
| Parik | Designer, developer, documentation lead | Brief, docs, design, build, admin, backend, deployment, QA, handover | Discord |
| VPS provider | External service | Server, network, snapshots and uptime | Client account |
| Tips provider | External service | Donation processing and payouts | Client account |
| Stake.com | Third-party platform | Code terms and affiliate program | Client account |
| Affiliate partners | External, future | Terms, tracking links and creative rules | Partner dashboards |
| Legal reviewer | External, future | Review of privacy, terms and disclosures | TBD |

## Decision rights

| Decision | Recommends | Approves |
|---|---|---|
| Project scope | Parik | chinnzz |
| Brand story and voice | Parik draft | chinnzz |
| Design direction | Parik, four options | chinnzz |
| Layout and wireframe | Parik | chinnzz |
| Public stack and hosting | Parik | Parik, inform chinnzz |
| Admin stack | Parik | chinnzz |
| VPS provider and admin host | Parik | chinnzz, who pays and owns it |
| Legal and compliance wording | Parik draft | chinnzz and a qualified reviewer |
| Stake code state | Parik recommendation | chinnzz |
| Affiliate partners and codes | chinnzz | chinnzz |
| Launch go-live | Parik | chinnzz |
| Post-launch changes | Either | Both, through a change request |

## Responsibilities by phase

| Phase | chinnzz | Parik |
|---|---|---|
| Project definition | Confirm goals, answer open questions, sign SOW | Write brief, SOW, roles, ADRs and CR |
| Brand and content | Provide story, assets, links, code status, sponsor email, tips link, schedule and bio | Draft brand brief, voice, copy deck, monetization plan and checklist |
| Design | Choose direction, give consolidated feedback | Moodboard, IA, mobile-first wireframe, four mockups and design system |
| Technical and legal | Confirm age and jurisdiction, review legal drafts | Architecture, content model, API, Kick integration, SEO, performance, security and legal drafts |
| Build | Review preview builds on a phone | Implement public site, interactions and Kick badge |
| Admin | Test editing and publishing | Build admin UI, local API, auth and publish flow |
| Public launch | Buy domain, provide DNS and account access | Deploy, connect domain, QA and handover |
| VPS phase | Provide VPS and admin host access | Deploy backend, auth, HTTPS, backups and monitoring |
| Maintenance | Request changes and keep content current | Optional maintenance agreement |

## Working agreement

- **Single approver:** chinnzz is the only person whose sign-off counts, to avoid conflicting feedback.
- **Consolidated feedback:** one written feedback round per phase, not scattered messages.
- **Channel:** Discord. Decisions that affect scope are recorded in `docs/`, not only in chat.
- **Response window:** agree a window per phase, suggested 48 to 72 hours, so gates do not stall silently.
- **No surprise scope:** new ideas go into the change request backlog and do not enter the current milestone.
- **No fake claims:** no sponsor, code, audience number or offer is published unless it is real and approved.
- **Human copy:** plain language, no em dashes and no AI-sounding filler.

## Access and ownership

chinnzz owns or controls:

- The `chinnzz.com` domain and registrar account.
- The Cloudflare account and Pages project.
- The VPS account, billing and snapshots.
- The Kick, X and Discord accounts.
- The Stake.com account and any affiliate account.

Parik gets delegated access only where needed. Access is removed at handover unless a maintenance agreement says otherwise.

## Related documents

- [Scope and SOW](scope-and-sow.md)
- [Roadmap](../05-delivery/roadmap.md)
- [Handover](../05-delivery/handover.md)
