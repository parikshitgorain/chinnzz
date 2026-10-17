---
title: Scope and Statement of Work
status: review
owner: Parik
updated: 2026-10-17
audience: client
version: 2.0
---

# Scope and Statement of Work: chinnzz.com v1

> Draft for client review and signature. Not legal advice.

## Parties

- **Client:** chinnzz
- **Designer and developer:** Parik

## Engagement

Design and development of a managed single-page website for chinnzz.com, delivered documentation-first. The public site is static and mobile-first. A separate admin panel edits all site content. The admin runs locally during the build and moves to a VPS after the public launch.

Fees and dates marked **TBD** must be completed and agreed before M1.

## Deliverables

| # | Deliverable | Detail |
|---|---|---|
| D1 | Documentation system | Modular docs set with index, templates, ADRs and change control |
| D2 | Project definition | Brief, this SOW, roles, decision records and the approved change request |
| D3 | Brand and content docs | Brand brief, voice and tone, copy deck, asset checklist, monetization plan |
| D4 | Design package | Moodboard with four directions, mobile-first IA and wireframe, four high-fidelity mockups, chosen direction, design system |
| D5 | Public site | Responsive single page built with Eleventy from `content/` |
| D6 | Kick live status | `/api/live` Pages Function with live, offline and failure states |
| D7 | Code card | Stake.com card with active sponsored, active unsponsored and inactive states, controlled in the admin |
| D8 | Support and sponsor sections | Kick subscription link, tips link and sponsor email |
| D9 | Admin panel | Login, full content editing, media, legal pages, preview and publish |
| D10 | Backend | Express API with SQLite, sessions, CSRF, rate limits and audit log |
| D11 | SEO and sharing | Metadata, Open Graph and X cards, favicon, JSON-LD, robots and sitemap |
| D12 | Legal drafts | Affiliate and sponsor disclosure, privacy, terms and responsible gambling |
| D13 | Public launch | Cloudflare Pages deployment, domain connection, QA and launch runbook |
| D14 | VPS deploy | Backend and admin on the VPS, HTTPS, backups and monitoring |
| D15 | Handover | README, admin guide, manual fallback procedure and access checklist |

Deliverable detail lives in the [Roadmap](../05-delivery/roadmap.md). The documentation set is a deliverable in itself. Each doc has a status and an approval gate.

## Explicitly out of scope for v1

- Leaderboards, raffles, deposits, prize pools, giveaways or any prize mechanics.
- Visitor accounts, payments on chinnzz.com or a public user database.
- Affiliate partner recruitment, negotiation or deal management.
- Email capture, newsletters or CRM integrations.
- Paid advertising, SEO campaigns or social media management.
- Ongoing content updates after handover. These are available as maintenance.
- Legal advice, legal review fees or regulatory filings.
- Domain registration fees and VPS fees. These are paid by the Client.
- Two-factor authentication unless added by change request.
- Multi-user roles beyond owner and editor.

Anything outside this scope requires a signed [Change Request](../templates/change-request.md) before work begins.

## Milestones and gates

| Milestone | Deliverable | Gate |
|---|---|---|
| M0 | Docs system and templates | Structure accepted |
| M1 | Revised brief, SOW, roles, ADRs and CR | **Client signs this SOW** |
| M2 | Brand, voice, copy, monetization and asset checklist | Content approved or placeholders accepted |
| M3 | Moodboard with four directions | Direction shortlist approved |
| M4 | IA and mobile-first wireframe | Layout approved on a phone |
| M5 | Four high-fidelity mockups and design system | **Design sign-off** |
| M6 | Technical and legal docs | Docs approved |
| M7 | Public site build | Matches approved design |
| M8 | Kick live integration | Live, offline and failure states verified |
| M9 | Admin UI and local mock API | Admin edits and publishes content locally |
| M10 | Public launch on Cloudflare | Domain and QA pass |
| M11 | VPS backend and admin deploy | Admin live, fallback verified |
| M12 | Handover | Client can edit, publish and recover |

M10 can happen before M11. The public site is never blocked by the backend.

Dates are set after M1 sign-off. A missed client feedback window shifts dependent dates by the same amount.

## Acceptance criteria

v1 is accepted when:

1. The public page matches the approved mockup and design system at 320px, 360px, 390px, 768px and 1440px.
2. There is no horizontal scroll and no dead zone at any tested width.
3. All navigation, CTA, copy-code, FAQ and mobile menu interactions work with touch, keyboard and a screen reader.
4. The Kick live badge reflects live and offline states and degrades to a neutral watch link when the API fails.
5. The Stake.com card shows the selected state correctly and never claims a sponsorship that does not exist.
6. The public site keeps working when the admin and backend are stopped.
7. The admin can edit every section, upload media, manage legal pages and publish a change.
8. A failed publish leaves the previous build live and does not lose the draft.
9. All links resolve. No placeholder is presented as real content.
10. Lighthouse mobile scores at least 95 for Performance, Accessibility, Best Practices and SEO. There are no critical axe issues.
11. Legal copy is present and the client has confirmed age and jurisdiction wording.
12. `chinnzz.com` serves over HTTPS and `www` redirects to the apex domain.
13. The VPS admin is reachable only over HTTPS, is not indexed and is not linked from the public site.
14. Handover docs and repository, Cloudflare and VPS access are delivered.

## Revisions

- Two rounds of revisions per phase for M2 to M5. A round is one consolidated set of feedback.
- Additional rounds and scope changes go through a change request and may affect timeline or cost.
- Revisions after launch are maintenance unless separately agreed.

## Client responsibilities

- Provide content and assets on time: logo or wordmark, portrait and stream stills, bio, schedule, links, code status, sponsor email, tips link and Discord invite.
- Confirm the Kick slug and keep the Kick account live.
- Purchase `chinnzz.com` in the Client's own name and maintain ownership and 2FA.
- Provide access for deployment: GitHub, Cloudflare, domain DNS and the VPS.
- Give consolidated feedback within the agreed window.
- Confirm age and jurisdiction requirements for gambling-related content.
- Confirm the Stake.com link and code terms. Do not present the code as sponsored without an agreement.
- Obtain legal review of the legal drafts.
- Pay for the domain and VPS.

## Fees and payment

**TBD.** Complete this before M1 if the engagement is paid. If the engagement is unpaid or friendly, state that here and note cost sharing so expectations are clear.

| Item | Amount | Terms |
|---|---|---|
| Design and development | TBD | |
| Domain, paid by Client | At cost | Client owned |
| Public hosting | Free tier | Cloudflare Pages |
| VPS and backups | At cost | Client owned |
| Maintenance, optional | TBD | Post launch |

## Intellectual property and ownership

- The Client owns the domain, the chinnzz brand and all content and assets supplied by the Client.
- On final acceptance and payment, if any, the Client owns the site code, admin code and final approved deliverables for chinnzz.com.
- The Developer retains ownership of reusable templates, documentation structure and non-branded tooling, and may reuse them on other projects.
- Third-party assets must be licensed for use. The Client is responsible for rights to supplied media.
- The admin and content remain in the Client's repository and VPS account.

## Legal and compliance disclaimer

The Developer is not a lawyer. All legal and gambling-compliance documents are drafts provided as a starting point. A qualified professional must review them before launch. The Client is responsible for compliance with partner terms and applicable laws in the jurisdictions they target.

## Change control

Any addition or change to scope must be documented with the [Change Request template](../templates/change-request.md), assessed for impact and approved by both parties before implementation.

## Sign-off

By signing, both parties agree to the scope, gating process and responsibilities above.

| Role | Name | Signature | Date |
|---|---|---|---|
| Client | chinnzz | | |
| Developer | Parik | | |

## Related documents

- [Project Brief](brief.md)
- [Stakeholders and Roles](stakeholders-and-roles.md)
- [CR 2026-10-17-01](change-requests/CR-2026-10-17-01.md)
- [Roadmap](../05-delivery/roadmap.md)
- [Change Request template](../templates/change-request.md)
