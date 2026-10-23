---
title: Maintenance
status: review
owner: Parik
updated: 2026-10-17
audience: client
version: 2.0
---

# Maintenance

## Philosophy

The public site is static, so most maintenance is content accuracy. The expensive failures are dead links, an expired Discord invite, a stale schedule, a code card that claims the wrong thing and outdated legal copy.

The admin adds a small server to look after: updates, backups, certificates and access. It does not affect the public site when it is down.

## Monthly

- [ ] Kick live badge works while live and while offline.
- [ ] Discord invite is valid and set to never expire.
- [ ] Kick, X, Discord, Stake and tips links resolve.
- [ ] Code card state matches reality: sponsored, unsponsored or inactive.
- [ ] Disclosure text matches the state.
- [ ] business@chinnzz.com mailbox receives mail (after domain purchase and mail setup).
- [ ] Schedule matches actual streams.
- [ ] No broken images or 404s.
- [ ] `/api/live` responds. Check for upstream changes.
- [ ] Cloudflare deployment history has no unexpected deploys.
- [ ] Domain auto-renew and certificate are healthy.
- [ ] Admin dependencies reviewed and `npm audit` clean.
- [ ] Admin database backup exists.
- [ ] VPS OS security updates applied.

## Quarterly

- [ ] Responsible-gambling resources and numbers verified.
- [ ] Stake terms and age requirements rechecked.
- [ ] Legal pages reviewed. Update the last updated date.
- [ ] Lighthouse spot check on mobile.
- [ ] Security headers still present.
- [ ] Review analytics: traffic sources, outbound clicks and support clicks.
- [ ] Content freshness: bio, FAQ, portrait, schedule.
- [ ] Dead zone and 360px layout check after any content change.
- [ ] Test one database restore.
- [ ] Backlog review with chinnzz.

## Annually

- [ ] Full legal and compliance review with a qualified professional.
- [ ] Domain renewal confirmed.
- [ ] Brand and design review. Does it still fit chinnzz?
- [ ] Dependency and tooling review.
- [ ] Decide whether phase 2 features are still wanted.
- [ ] Rotate admin credentials if there has been any staff change.

## Event driven

| Event | Action |
|---|---|
| New sponsor or affiliate deal | Update the code state, disclosure, FAQ and terms. Test the link. Log the start date. |
| Deal ends | Switch to unsponsored or inactive the same day. Remove the paid disclosure. |
| Code changes | Update `stake.code` and the disclosure. Rebuild. |
| Schedule change | Update the schedule fields. Check the timezone label. |
| New Discord invite | Update the link. Revoke or let the old invite expire. |
| New portrait or logo | Upload, check the aspect ratio on mobile, update the OG image if needed. |
| Rebrand | Change request. Update brand brief, design system, assets and metadata. |
| Kick API breaks | Swap provider or move to an official API. Update the integration doc. |
| Legal or regulatory change | Update the compliance brief, policies and site copy. |
| Security incident | Follow [incident response](../03-technical/security.md#incident-response). |
| Domain or DNS change | Follow the DNS section of the [launch runbook](launch-runbook.md). |
| Admin host move | Update DNS, TLS, secrets and the deploy hook. Test a publish. |

## Backup routine

| What | How | When |
|---|---|---|
| Content and code | Git history | Every publish |
| Admin database | SQLite backup to a separate disk | Daily, 14 day retention |
| Media | Git plus VPS backup | Every publish and daily |
| Secrets | Password manager | On change |

Test a restore once a quarter. A backup that has never been restored is a guess.

## Health indicators

| Signal | Healthy | If not |
|---|---|---|
| Live badge | Matches Kick | Check `/api/live`, upstream and cache |
| Link health | No 404s | Fix or remove the link |
| Code card | Matches the current deal and disclosure | Change the state in the admin |
| Lighthouse mobile | 95 or above | Investigate the regression |
| Console errors | None | Fix before the next deploy |
| Deploy frequency | Only intentional publishes | Review access and security |
| Domain expiry | More than 60 days | Renew and check auto-renew |
| Admin backup | Present and recent | Fix the backup job and test a restore |
| Certificate expiry | More than 30 days | Renew or fix the proxy |

## Change process

1. Describe the change with the [change request template](../templates/change-request.md).
2. Assess the effect on docs, design, code, legal and timeline.
3. Approve before starting.
4. Update the affected docs.
5. Implement. Test on preview, then deploy.
6. Log it in [CHANGELOG.md](../CHANGELOG.md).

## Related documents

- [Handover](handover.md)
- [QA Checklist](qa-checklist.md)
- [Launch Runbook](launch-runbook.md)
- [Compliance Brief](../04-legal/compliance-brief.md)
- [Security](../03-technical/security.md)
