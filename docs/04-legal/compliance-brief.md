---
title: Compliance Brief
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# Compliance Brief: Streamer Hub with a Stake Link

> This is not legal advice. It is an internal checklist of issues to resolve with chinnzz and a qualified reviewer before launch. Requirements vary by jurisdiction and by platform.

## What the site actually is

chinnzz.com is a personal hub for a Kick streamer. It links to Kick, X, Discord and Stake.com. It may show a Stake code. It may accept support through Kick subscriptions and a tips provider. It may publish a sponsor contact email.

At launch:

- chinnzz has **no sponsor and no affiliate deal**.
- The code **CHINNZZ** exists but earns him nothing.
- The site does **not** operate a gambling service and does not take deposits.
- The site does **not** run giveaways, raffles, leaderboards or prize pools.

This changes the risk profile. The main duties are honest disclosure, age awareness, responsible-play information and accurate third-party links.

## Unknowns to resolve before launch

| # | Question | Why it matters | Owner |
|---|---|---|---|
| 1 | Which countries and states does the site target? | Drives age wording and restricted locations | chinnzz |
| 2 | Is the audience mostly US? Which states? | State rules differ | chinnzz |
| 3 | Is the age wording 18+ or 21+? | Must be accurate for the audience and Stake's terms | chinnzz |
| 4 | Is CHINNZZ a referral code, a display name, or neither? | Determines whether any compensation can exist | chinnzz and Stake |
| 5 | Does chinnzz have a Stake affiliate account? | If yes, a real disclosure is needed. If no, say so. | chinnzz |
| 6 | Is chinnzz eligible for Kick subscriptions? | A dead subscribe button is a trust and compliance issue | chinnzz |
| 7 | Which tips provider is used? | Its terms and privacy policy apply | chinnzz |
| 8 | What public email receives sponsor and legal mail? | Privacy and terms need a contact | chinnzz |
| 9 | What legal name or entity operates the site? | Privacy and terms must name a controller | chinnzz |
| 10 | Will analytics be enabled, and which tool? | Drives privacy disclosures | chinnzz |
| 11 | Does chinnzz hold any licence or registration? | Affects claims. Do not imply one. | chinnzz |
| 12 | What governing law applies? | Terms need a jurisdiction | chinnzz |

## Required elements

- [ ] Age notice visible in the hero or footer and accurate for the audience.
- [ ] Code disclosure visible next to the code in every state.
- [ ] A clear statement that chinnzz is not sponsored while that is true.
- [ ] Responsible-gambling link in the footer and FAQ.
- [ ] Privacy policy linked in the footer.
- [ ] Terms of use linked in the footer.
- [ ] No guaranteed-win, risk-free or free-money claims.
- [ ] No targeting of minors in copy, imagery or links.
- [ ] No fake sponsor, fake affiliate deal or fake bonus.
- [ ] Stake and support links are real, current and not cloaked.
- [ ] No fake testimonials, wins or balances.
- [ ] No third-party stream or partner assets used without permission.
- [ ] Legal drafts reviewed by a qualified professional before launch.

## The three code states

The admin toggle chooses one state. The site must not blur them.

| State | What the visitor sees | Compensation |
|---|---|---|
| Active, sponsored | Code, copy action, partner link and a commission disclosure | chinnzz may earn |
| Active, unsponsored | Code, copy action, a note that he is not sponsored and may earn nothing | none |
| Inactive | No code live right now, with a follow CTA | none |

Rules:

- Default to inactive until chinnzz confirms the code and its meaning.
- Never show the sponsored wording without a signed agreement.
- Never hide the unsponsored note to make the card look better.
- If a deal ends, switch back to unsponsored or inactive the same day.
- The disclosure text lives in `content/` and is editable in the admin.

See [Monetization and Partnerships](../01-brand/monetization-and-partnerships.md).

## Age notice

v1 uses a visible notice, not a blocking gate:

- Footer line: `18+ or 21+ depending on where you live. Play responsibly.`
- Code card: a short age line with the disclosure.
- FAQ: an answer that covers age and responsible play.

Use a blocking age gate only if Stake, a future partner or a target jurisdiction requires it. A blocking gate hurts first impressions and link previews, so do not add one by default.

Geo blocking is out of scope for v1. If chinnzz later targets restricted regions, revisit with counsel.

## Sponsorship and affiliate onboarding

When a real deal exists, capture in writing:

- [ ] Signed terms and commission structure.
- [ ] Approved tracking link and whether sub-IDs are supported.
- [ ] Required disclosure wording, verbatim if mandated.
- [ ] Age requirement and restricted countries or states.
- [ ] Approved logos and usage rules.
- [ ] Prohibited claims and channels.
- [ ] Responsible-gambling requirements.
- [ ] Who handles customer support and complaints.
- [ ] Start date and end date.

Then update `content/site.json` `stake.state`, the disclosure copy, the FAQ and [Affiliate Disclosure](affiliate-disclosure.md). Do not switch the state before the paperwork is signed.

## Tips and subscriptions

- Kick subscriptions are handled by Kick. Its terms and refund policy apply.
- Tips go through the chosen provider. The site says so and does not process payment.
- Do not promise perks, prizes or influence in exchange for a tip unless chinnzz can actually deliver them and the terms say so.
- Do not accept tips from minors. The age notice covers the site, and the provider covers payment.
- Do not describe tips as an investment or as a way to make money.

## Prohibited claims

- Guaranteed wins, risk-free, free money, easy money, beat the system.
- Fabricated win screenshots, balances or payouts.
- A promise to fund an account or return money.
- Implying chinnzz is the operator, casino or a licensed provider.
- Targeting or appealing to minors.
- Presenting gambling as a way to solve financial problems.
- Presenting a sponsorship that does not exist.

## Jurisdiction notes (non-exhaustive, verify with counsel)

- **United States:** gambling and social casino rules vary by state. Age is often 18+ or 21+ depending on the product. Some states restrict affiliate marketing.
- **United Kingdom:** gambling affiliate advertising is regulated. Strong age and responsible-gambling requirements apply.
- **European Union:** consumer and advertising rules vary by member state.
- **Elsewhere:** do not assume. Confirm before targeting.

The site is informational and links out. It does not offer gambling services.

## Platform terms

- Kick, X and Discord each set rules for links, promotion and affiliate content. Read them before a paid promotion.
- Do not use Kick branding in a way that suggests endorsement.
- Do not use Discord to mass-post the link. Follow each server's rules.

## Review cadence

- Before launch: full review of copy, disclosure, age wording and links.
- When a code or sponsor changes: recheck disclosure and the code state.
- Quarterly: check links, legal text and responsible-gambling resources.
- On a regulatory change: update affected docs and site copy.

## Deliverables in this folder

- [Affiliate Disclosure](affiliate-disclosure.md)
- [Privacy Policy](privacy-policy.md)
- [Terms of Use](terms-of-use.md)
- [Responsible Gambling](responsible-gambling.md)

## Related documents

- [Project Brief](../00-project/brief.md)
- [Monetization and Partnerships](../01-brand/monetization-and-partnerships.md)
- [Content and Assets Checklist](../01-brand/content-assets-checklist.md)
- [Copy Deck](../01-brand/copy-deck.md)
- [Content Model and Admin](../03-technical/content-model-and-admin.md)
