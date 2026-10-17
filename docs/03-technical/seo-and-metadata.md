---
title: SEO and Metadata
status: review
owner: Parik
updated: 2026-10-17
audience: internal
version: 2.0
---

# SEO and Metadata

## Goals

- Rank for the brand name **chinnzz** and obvious intent phrases such as chinnzz Kick, chinnzz stream and chinnzz code once the domain is live.
- Produce clean link previews in Discord, X and Kick chat.
- Avoid spammy gambling SEO, cloaking or misleading metadata.
- Keep every metadata value editable in the admin, rendered at build time.

## Where metadata lives

| Value | Source |
|---|---|
| Page title and description | `content/site.json` `seo.title` and `seo.description` |
| Social preview image | `content/site.json` `seo.ogImage`, file in `content/media/` |
| Canonical host | `content/site.json` `site.domain` |
| Legal page titles and descriptions | Frontmatter in `content/legal/*.md` |
| Robots and sitemap | Build templates in `site/src/` |

Templates render these values. No metadata string is hardcoded in a template.

## Core metadata

```html
<title>chinnzz on Kick | Stream, Discord and Code</title>
<meta name="description" content="Watch chinnzz live on Kick, join the Discord and find the current Stake code. Schedule, support and sponsor contact in one place." />
<link rel="canonical" href="https://chinnzz.com/" />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#080506" />
```

Rules:

- Title at 60 characters or fewer where possible. Description at 155 or fewer.
- One H1, the hero heading.
- Brand spelling is **chinnzz**, lowercase in copy.
- Canonical only works once the domain is attached. Preview deployments are `noindex`.
- Do not promise winnings, free money or guaranteed returns.
- No em dashes in titles or descriptions.

## Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="chinnzz" />
<meta property="og:title" content="chinnzz on Kick" />
<meta property="og:description" content="Streams, Discord and the current code. Everything chinnzz, in one place." />
<meta property="og:url" content="https://chinnzz.com/" />
<meta property="og:image" content="https://chinnzz.com/media/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="chinnzz, Kick streamer" />
<meta property="og:locale" content="en_US" />
```

## X card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="chinnzz on Kick" />
<meta name="twitter:description" content="Streams, Discord and the current code. Everything chinnzz, in one place." />
<meta name="twitter:image" content="https://chinnzz.com/media/og-image.png" />
```

No `twitter:site` until a dedicated site account exists. Use the personal X handle only if chinnzz confirms it.

## Structured data

`Person` plus `WebSite`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://chinnzz.com/#person",
      "name": "chinnzz",
      "url": "https://chinnzz.com/",
      "sameAs": [
        "https://kick.com/chinnzz",
        "https://x.com/lechinnzz",
        "https://discord.gg/T6Nx6fAMYk"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://chinnzz.com/#website",
      "url": "https://chinnzz.com/",
      "name": "chinnzz",
      "publisher": { "@id": "https://chinnzz.com/#person" }
    }
  ]
}
```

Do not add `AggregateRating`, reviews or `Offer` markup. Do not mark up a sponsorship that does not exist. If a real affiliate deal is signed, update the disclosure page and only then add `affiliate` relationship details where they are accurate.

## Favicons and icons

- `favicon.svg`
- `favicon.ico` fallback at 32 by 32
- `apple-touch-icon.png` at 180 by 180
- `manifest.webmanifest` optional, not required for v1

## robots.txt

```
User-agent: *
Allow: /

Sitemap: https://chinnzz.com/sitemap.xml

# Admin is a separate host and is never crawled.
```

The admin host serves its own `robots.txt` with `Disallow: /` and sends `X-Robots-Tag: noindex`.

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://chinnzz.com/</loc><priority>1.0</priority></url>
  <url><loc>https://chinnzz.com/privacy</loc></url>
  <url><loc>https://chinnzz.com/terms</loc></url>
  <url><loc>https://chinnzz.com/responsible-gambling</loc></url>
</urlset>
```

## Headings and content

- H1 names chinnzz and the page purpose.
- One H2 per section, H3 inside cards and FAQ items.
- Anchor IDs match nav labels.
- FAQ answers are useful at a glance, not keyword padding.
- No hidden text, doorway pages or generated location pages.
- Alt text describes the image. Decorative images use an empty alt.

## Legal pages

Each legal page has its own title, description, canonical and `lastUpdated` value from frontmatter. Legal pages are indexed. They are linked from the footer, not from the main nav.

## Social preview testing

- [ ] Open Graph check via a preview tool.
- [ ] X card check, or post a private draft.
- [ ] Discord embed check in a test channel.
- [ ] OG image at 1200 by 630, under 300 KB, readable at small size.
- [ ] Preview image also looks correct in dark and light chat themes.

## Search Console and indexing

- Add the domain to Google Search Console and Bing Webmaster Tools after purchase.
- Submit the sitemap.
- Keep `*.pages.dev` previews `noindex`.
- Verify canonical, HTTPS and mobile usability.
- Recheck the title and description after the copy deck is final.

## Admin SEO screen

The admin exposes:

- Title and description with character counts and warnings.
- OG image picker from the media library.
- Canonical host, read-only unless the environment allows a change.
- A preview card for how the link looks.
- Validation that blocks publish when the title is empty or over 60 characters, or the description is over 155.

## Related documents

- [Copy Deck](../01-brand/copy-deck.md)
- [Information Architecture](../02-design/information-architecture.md)
- [Content Model and Admin](content-model-and-admin.md)
- [Launch Runbook](../05-delivery/launch-runbook.md)
