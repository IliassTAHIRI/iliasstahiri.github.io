# Blog Enhancement Design

**Date:** 2026-03-23
**Author:** Ilias Stahiri
**Status:** Approved

---

## Context

iliasstahiri.github.io is a personal blog/portfolio built with Astro 6 + React. It targets **industry engineers** (concrete, construction, materials) and serves three goals simultaneously: academic visibility, technical thought leadership, and personal brand/career.

**Core problem:** Too few posts, no consistent publishing cadence.
**Time budget:** 3–5 hours/week (~1 solid post every 2 weeks).
**Approach:** Content + discoverability upgrade — fix infrastructure once, then go heads-down on content.

---

## Current State

- 5 blog posts (4 academic paper announcements + 1 overview article)
- 10 nav links (overwhelming for first-time visitors)
- No RSS feed, no analytics, no newsletter, no social sharing
- Posts stored as inline markdown strings in JS data files (doesn't scale)
- Dark mode CSS support exists but no UI toggle
- No mobile hamburger menu
- `bookshelf` field in `bio.js` not displayed anywhere
- Astro Content Collections not used

---

## Design

### 1. Content Architecture Migration

**Goal:** Make adding posts as easy as creating a new file.

- Migrate all content from `src/data/*.js` objects to Astro Content Collections
- Blog posts → `src/content/blog/*.mdx`
- TILs → `src/content/til/*.mdx`
- Perspectives → `src/content/perspectives/*.mdx`
- Tutorials → `src/content/tutorials/*.mdx`
- Case studies and publications remain as JS data (they're structured records, not prose)
- Each MDX file has frontmatter: `title`, `date`, `tags[]`, `excerpt`, `draft` (optional)
- Update `src/pages/blog/[slug].astro` and listing pages to use `getCollection()`
- Migrate existing 5 posts to MDX files as part of this change

**Why first:** Everything downstream (RSS, OG images, related posts) depends on a clean content layer.

---

### 2. Content Strategy

**Target reader:** Industry engineers in concrete, construction, materials.
**Framing shift:** From "what the theory says" → "what you do on Monday morning."

**Topic buckets:**

| Bucket | Example posts |
|--------|--------------|
| Practical durability | "How to spec pervious concrete for freeze-thaw zones", "When does salt-frost damage actually matter?" |
| Material selection | "Pervious vs. dense concrete: decision framework", "Porous concrete mix design tradeoffs" |
| AI tools for engineers | "How I use AI to speed up literature reviews", "Python for concrete durability modeling — a practical intro" |
| Research → practice | "What my PhD found that changes how I'd spec mixes", "3 findings from recent papers that industry ignores" |
| TIL / short wins | Short notes on tools, methods, observations |

**Publishing rhythm:**
- 1 long-form post every 2 weeks (~1,000–1,500 words)
- 1 TIL per week (~20 min to write)
- First action: complete the half-written "AI in Material Science" post

---

### 3. Discoverability Infrastructure

Added in priority order:

#### RSS Feed
- Add `@astrojs/rss` integration
- Expose at `/rss.xml`
- Include all blog posts (title, description, pub date, link)
- Add RSS icon link in footer and blog listing header

#### Analytics
- Add Umami (privacy-first, no cookies, GDPR-compliant)
- Use Umami Cloud free tier or self-hosted
- Inject tracking script in `BaseLayout.astro`
- Goal: know which posts get read and where traffic comes from

#### Social Sharing
- Add LinkedIn + Twitter/X share buttons at the end of each post
- Pure HTML links (no JS libraries): `https://www.linkedin.com/sharing/share-offsite/?url=...`
- Append post URL + title as query params

#### Newsletter Signup
- Embed Buttondown or Beehiiv signup form
- Placement: homepage (above footer) + end of each post
- Simple email input + subscribe button, matching existing design system

#### Related Posts
- At bottom of each post, show 2–3 posts sharing ≥1 tag
- Implemented as a utility function over the content collection
- Show as small cards (title + excerpt snippet)

#### Open Graph Images
- Generate per-post OG image with post title + site branding
- Use Satori (Astro community pattern) or static template images
- Ensures rich previews when shared on LinkedIn/Twitter

---

### 4. Navigation Overhaul

**Current:** 10 links in a flat navbar — overwhelming for first-time visitors.

**New primary nav (5 links):**
```
Blog  ·  Publications  ·  Case Studies  ·  About  ·  Now
```

**"More" dropdown** (secondary pages):
```
TIL  ·  Research  ·  Tutorials  ·  Non-Tech  ·  Perspectives
```

**Mobile:** Add hamburger menu (currently no mobile nav exists). Full-screen overlay or slide-in drawer. Existing navbar collapses on small screens with no replacement.

---

### 5. Visual & UX Polish

#### Dark Mode Toggle
- Add sun/moon icon button to navbar (right side)
- On click: toggle `data-theme="dark"` on `<html>` element
- Persist preference to `localStorage`
- On page load: read `localStorage` before render to avoid flash
- CSS already fully supports both themes — this is purely a JS + button addition

#### Homepage — "Start Here" Section
- Add a "Featured" or "Start Here" section between the hero and recent posts grid
- Show 2–3 manually pinned posts (add `featured: true` frontmatter field)
- Add a short 1–2 sentence tagline below the hero: what this blog is for and who it's for
- Add newsletter CTA block directly above the footer

#### Post Reading Experience
- **Post meta header:** Add read time estimate + formatted date inside the post (currently only shown in listing)
- **Syntax highlighting:** Enable Shiki in Astro config (`markdown.shikiConfig`) — zero extra dependencies, built-in
- **Post end block:** Social share buttons (LinkedIn + Twitter) + "Next post →" link (chronological)
- **Read time** already calculated from word count — surface it in the post header, not just the listing

#### Bookshelf on /now
- Display `bio.js` `bookshelf` data (current + recent reads) on the `/now` page
- Add "Last updated: [date]" timestamp to the `/now` page header
- Simple list with book title, author, and optional one-line note

---

## What's Out of Scope

- Comments system (Giscus, Disqus) — adds complexity, low ROI at current traffic
- CMS integration (Contentful, Sanity) — overkill for 1 author
- i18n / multi-language support
- Search overhaul (current search works fine)
- Pagination (5 posts don't need it; reconsider at 30+)

---

## Implementation Order

1. **Content architecture migration** (foundation — do this first)
2. **Navigation overhaul** (quick win, high visibility)
3. **Dark mode toggle** (quick win, ~1 hour)
4. **RSS feed** (high leverage, ~1 hour)
5. **Post reading experience** (syntax highlighting, meta, share buttons, next post)
6. **Homepage "Start Here" section + newsletter CTA**
7. **Analytics** (Umami)
8. **Related posts**
9. **Bookshelf on /now**
10. **OG images** (most effort, lowest urgency)

---

## Success Criteria

- Adding a new post takes <10 minutes (file creation, not JS editing)
- RSS feed live and valid
- Analytics showing traffic sources within 2 weeks of publishing
- First-time visitor on homepage understands the blog's purpose within 5 seconds
- Dark mode toggle works and persists
- Each post has share buttons, read time, and syntax-highlighted code
