---
title: "ADR 0001: Modular documentation system"
status: approved
owner: Parik
updated: 2026-10-17
audience: internal
version: 1.1
---

# ADR 0001: Modular documentation system

- **Status:** approved
- **Date:** 2026-10-17
- **Decision owner:** Parik
- **Supersedes:** none

## Context

The project will not be built once and frozen. v1 is intentionally small, and features such as sponsorships, rewards and partner offers are expected later. The client's explicit guidance: do not put everything in one document, because future rebuilds need the documentation to be updated piece by piece. "Documents ready means 90 percent of the work is ready."

A single master document rots quickly. Unrelated sections change at different rates, approval status is unclear, and future projects cannot reuse pieces.

## Decision

Adopt a modular documentation system under `/docs`:

- One topic per file, grouped by project stage from `00-project` to `05-delivery`.
- Frontmatter on every document: `title`, `status`, `owner`, `updated`, `audience`, `version`.
- `docs/README.md` is a live index of every doc and its status.
- Decisions are captured as ADRs in `00-project/decisions/`.
- Scope and feature changes go through a change request template before work starts.
- A `templates/` folder holds reusable skeletons so the system can seed future client projects.
- `CHANGELOG.md` records meaningful documentation and scope changes.
- Revised docs use plain language, no em dashes and no AI-sounding filler.

## Consequences

Easier:

- Independent updates.
- Clear approval gates.
- Reusable for future projects.
- Traceable decisions.
- Fast onboarding for a collaborator.

Harder:

- Requires discipline to keep the index and frontmatter current.
- More files to navigate than a single doc.

Now true:

- The index is the dashboard.
- No document is authoritative without a status.
- Chat decisions must be promoted into docs.

## Alternatives considered

| Option | Why not chosen |
|---|---|
| One master project document | Rots fast, unclear approvals, cannot reuse pieces. |
| Notion or Google Docs only | Not versioned next to code. The client chose repo `/docs`. |
| No documentation | Guarantees rework and lost decisions. |
| Wiki with ad-hoc pages | No enforced structure or status model. |

## Follow-up

- [x] Create the `/docs` structure, templates and index. Owner: Parik. Date: 2026-10-17.
- [ ] Keep the index status current at each gate. Owner: both. Ongoing.
- [ ] Remove em dashes and AI filler from any revised doc. Owner: both. Ongoing.

## Related documents

- [Documentation index](../../README.md)
- [Change request template](../../templates/change-request.md)
- [ADR 0008: Build step](0008-build-step.md)
