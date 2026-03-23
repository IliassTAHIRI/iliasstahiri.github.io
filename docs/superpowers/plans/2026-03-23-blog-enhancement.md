# Blog Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform iliasstahiri.github.io from a hard-to-maintain 5-post blog into a discoverable, professionally polished site that makes publishing easy and each post reach farther.

**Architecture:** Migrate content from inline JS objects to Astro Content Collections (MDX files), then layer in discoverability infrastructure (RSS, analytics, social sharing, newsletter), UX polish (dark mode toggle, nav overhaul, improved post experience), and homepage improvements.

**Tech Stack:** Astro 6, React 19, @astrojs/rss, Shiki (built-in to Astro), CSS custom properties (no Tailwind), GitHub Pages

**Spec:** `docs/superpowers/specs/2026-03-23-blog-enhancement-design.md`

---

## File Map

### Files to Create
- `src/content/config.ts` — Astro content collection schemas
- `src/content/blog/*.mdx` — 5 migrated blog posts
- `src/content/til/*.mdx` — 3 migrated TIL entries
- `src/content/perspectives/*.mdx` — 3 migrated perspective essays
- `src/content/tutorials/*.mdx` — 2 migrated tutorials
- `src/pages/rss.xml.js` — RSS feed endpoint
- `src/components/ShareButtons.jsx` — LinkedIn + Twitter share links
- `src/components/RelatedPosts.jsx` — Tag-matched related posts at post end

Note: `DarkModeToggle` is defined inline inside `Navbar.jsx` (not as a separate file) — see Task 5.

### Files to Modify
- `src/layouts/BaseLayout.astro` — Add dark mode init script, analytics snippet
- `src/components/Navbar.jsx` — Add "More" dropdown, dark mode toggle, hamburger menu
- `src/components/PostView.jsx` — Add read time in header, share buttons, next post link
- `src/components/Blog.jsx` — Accept posts from content collections format
- `src/pages/blog/index.astro` — Switch from `postsData` to `getCollection('blog')`
- `src/pages/blog/[slug].astro` — Switch to `getCollection`, pass related posts
- `src/pages/index.astro` — Add "Start Here" pinned section, newsletter CTA
- `src/pages/now/index.astro` — Add bookshelf display, last-updated timestamp
- `src/styles/global.css` — Add dropdown styles, hamburger styles, share button styles, newsletter CTA styles
- `astro.config.mjs` — Enable Shiki syntax highlighting, add RSS integration

### Files to Delete (after migration)
- `src/data/posts.js`
- `src/data/tils.js`
- `src/data/perspectives.js`
- `src/data/tutorials.js`

---

## Phase 1: Content Architecture Migration

### Task 1: Set up Astro Content Collections

**Files:**
- Create: `src/content/config.ts`

- [ ] **Step 1: Create the content collection config**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
})

const tilCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    summary: z.string(),
  }),
})

const perspectivesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    topic: z.string(),
    excerpt: z.string(),
  }),
})

const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    niche: z.string(),
    summary: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
  til: tilCollection,
  perspectives: perspectivesCollection,
  tutorials: tutorialsCollection,
}
```

- [ ] **Step 2: Verify Astro recognizes the config**

```bash
cd /Users/iliasstahiri/Documents/GitHub/iliasstahiri.github.io
npm run dev
```
Expected: Dev server starts with no TypeScript errors about content config.

- [ ] **Step 3: Commit**

```bash
git add src/content/config.ts
git commit -m "feat: add Astro content collection schemas"
```

---

### Task 2: Migrate blog posts to MDX

**Files:**
- Create: `src/content/blog/freeze-thaw-durability-pervious-concrete.mdx`
- Create: `src/content/blog/ai-in-material-science.mdx`
- Create: `src/content/blog/paper-oedometric-water-transport.mdx`
- Create: `src/content/blog/paper-salt-frost-pervious-concrete.mdx`
- Create: `src/content/blog/porous-concrete-state-of-the-art.mdx`

- [ ] **Step 1: Create the first MDX file (use as template)**

For each post in `src/data/posts.js`, create a corresponding MDX file. The frontmatter maps directly:

```mdx
---
title: "Freeze-Thaw Durability of Pervious Concrete: Lessons from My PhD"
date: "2026-03-19"
tags: ["Publications", "Concrete", "Durability", "Freeze-Thaw"]
excerpt: "Key lessons from my PhD on salt-frost damage in pervious concrete and how to design for better freeze-thaw durability."
featured: true
---

[copy the `content` string from posts.js verbatim here, without the backtick template literal wrapper]
```

- [ ] **Step 2: Create all 5 MDX files** using the same pattern (copy content from `src/data/posts.js`)

Note: The "AI in Material Science" post has incomplete content — leave it as-is for now, add `draft: true` to its frontmatter so it doesn't appear in listings.

- [ ] **Step 3: Verify MDX files are valid**

```bash
npm run dev
```
Navigate to `http://localhost:4321/blog` in your browser. If you see an error about content, check the frontmatter format of the failing file.

- [ ] **Step 4: Commit**

```bash
git add src/content/blog/
git commit -m "feat: migrate blog posts to MDX content collections"
```

---

### Task 3: Migrate TIL, perspectives, and tutorials to MDX

**Files:**
- Create: `src/content/til/*.mdx` (3 files from `src/data/tils.js`)
- Create: `src/content/perspectives/*.mdx` (3 files from `src/data/perspectives.js`)
- Create: `src/content/tutorials/*.mdx` (2 files from `src/data/tutorials.js`)

- [ ] **Step 1: Migrate TIL entries**

For each item in `src/data/tils.js`, create `src/content/til/<slugified-title>.mdx`:
```mdx
---
title: "TIL title here"
date: "YYYY-MM-DD"
tag: "TagName"
summary: "The one-line summary"
---

[expanded content or same as summary if no extra content]
```

- [ ] **Step 2: Migrate perspectives**

For each item in `src/data/perspectives.js`, create `src/content/perspectives/<slugified-title>.mdx`:
```mdx
---
title: "Perspective title"
date: "YYYY-MM-DD"
topic: "Topic"
excerpt: "Excerpt text"
---

[full content or excerpt if no extra content]
```

- [ ] **Step 3: Migrate tutorials**

For each item in `src/data/tutorials.js`, create `src/content/tutorials/<slugified-title>.mdx`:
```mdx
---
title: "Tutorial title"
niche: "Niche description"
summary: "Summary text"
---

[full content or summary if no extra content]
```

- [ ] **Step 4: Commit**

```bash
git add src/content/
git commit -m "feat: migrate TIL, perspectives, tutorials to MDX collections"
```

---

### Task 4: Update blog pages to use content collections

**Files:**
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/blog/[slug].astro`

- [ ] **Step 1: Update blog listing page**

Replace `src/pages/blog/index.astro`:
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro'
import Blog from '../../components/Blog.jsx'
import { getCollection } from 'astro:content'

const allPosts = await getCollection('blog', ({ data }) => !data.draft)
const posts = allPosts
  .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
  .map((post) => ({
    slug: post.slug,
    title: post.data.title,
    date: post.data.date,
    tags: post.data.tags,
    excerpt: post.data.excerpt,
    body: post.body,
  }))
---
<BaseLayout title="Blog | Iliass Tahiri" description="Journal entries and research notes">
  <Blog posts={posts} client:load />
</BaseLayout>
```

- [ ] **Step 2: Update blog post page**

Replace `src/pages/blog/[slug].astro`:
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro'
import PostView from '../../components/PostView.jsx'
import { getCollection } from 'astro:content'

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}

const { entry } = Astro.props
const post = {
  slug: entry.slug,
  title: entry.data.title,
  date: entry.data.date,
  tags: entry.data.tags,
  excerpt: entry.data.excerpt,
  content: entry.body,
  featured: entry.data.featured,
}

// For related posts: get all non-draft posts and filter by shared tags
const allPosts = await getCollection('blog', ({ data }) => !data.draft)
const relatedPosts = allPosts
  .filter((p) => p.slug !== entry.slug && p.data.tags.some((t) => entry.data.tags.includes(t)))
  .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
  .slice(0, 3)
  .map((p) => ({ slug: p.slug, title: p.data.title, excerpt: p.data.excerpt, date: p.data.date }))

const sortedPosts = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
const currentIndex = sortedPosts.findIndex((p) => p.slug === entry.slug)
const nextPost = currentIndex < sortedPosts.length - 1
  ? { slug: sortedPosts[currentIndex + 1].slug, title: sortedPosts[currentIndex + 1].data.title }
  : null

const site = Astro.site?.href || 'https://iliasstahiri.github.io'
const canonical = new URL(`/blog/${entry.slug}`, site).href
const structuredData = [{
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { '@type': 'Person', name: 'Iliass Tahiri' },
  mainEntityOfPage: canonical,
}]
---
<BaseLayout
  title={`${post.title} | Iliass Tahiri`}
  description={post.excerpt}
  ogType="article"
  canonical={canonical}
  structuredData={structuredData}
>
  <PostView post={post} relatedPosts={relatedPosts} nextPost={nextPost} client:load />
</BaseLayout>
```

- [ ] **Step 3: Update homepage to use content collections**

In `src/pages/index.astro`, replace the postsData import:
```astro
// Replace:
import { postsData } from '../data/posts'
const featuredPosts = [...postsData].sort(...).slice(0, 2)

// With:
import { getCollection } from 'astro:content'
const allPosts = await getCollection('blog', ({ data }) => !data.draft)
const featuredPosts = allPosts
  .filter((p) => p.data.featured)
  .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
  .slice(0, 3)
  .map((p) => ({ slug: p.slug, title: p.data.title, date: p.data.date, tags: p.data.tags, excerpt: p.data.excerpt }))
```

- [ ] **Step 4: Update TIL, perspectives, tutorials pages similarly**

For each of these pages, replace the import from `../../data/...` with `getCollection('collectionName')`. The mapping pattern is the same as above.

- [ ] **Step 5: Build to verify no errors**

```bash
npm run build
```
Expected: Build completes successfully. Check `docs/` output. If there are TypeScript errors about unknown imports, verify your `src/content/config.ts` matches the frontmatter in each MDX file.

- [ ] **Step 6: Delete old data files**

```bash
rm src/data/posts.js src/data/tils.js src/data/perspectives.js src/data/tutorials.js
npm run build
```
Expected: Build still succeeds (all references replaced).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: switch all pages to Astro content collections, remove legacy data files"
```

---

## Phase 2: Quick Wins (Navbar + Dark Mode)

### Task 5: Navbar overhaul — collapse to 5 links + More dropdown

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Rewrite Navbar.jsx**

```jsx
// src/components/Navbar.jsx
import React, { useState } from 'react'

const primaryLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/now', label: 'Now' },
]

const moreLinks = [
  { href: '/til', label: 'TIL' },
  { href: '/research', label: 'Research' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/non-tech', label: 'Non-Tech' },
  { href: '/perspectives', label: 'Perspectives' },
]

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-logo">Iliass Tahiri</a>

        {/* Desktop nav */}
        <div className="nav-links">
          {primaryLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
          <div className="nav-dropdown">
            <button
              className="nav-link nav-more-btn"
              onClick={() => setMoreOpen((o) => !o)}
              aria-expanded={moreOpen}
            >
              More ▾
            </button>
            {moreOpen && (
              <div className="nav-dropdown-menu">
                {moreLinks.map((link) => (
                  <a key={link.href} href={link.href} className="nav-dropdown-item">{link.label}</a>
                ))}
              </div>
            )}
          </div>
          <DarkModeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {[...primaryLinks, ...moreLinks].map((link) => (
            <a key={link.href} href={link.href} className="nav-mobile-link"
               onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// Inline for now — will be extracted in Task 6
const DarkModeToggle = () => {
  const toggle = () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
  return (
    <button className="nav-theme-btn" onClick={toggle} aria-label="Toggle dark mode">
      <span className="theme-icon-sun">☀</span>
      <span className="theme-icon-moon">☾</span>
    </button>
  )
}

export default Navbar
```

- [ ] **Step 2: Add new styles to global.css**

Add these styles at the end of `src/styles/global.css`:

```css
/* Navbar dropdown */
.nav-dropdown {
  position: relative;
}

.nav-more-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  color: var(--text-secondary);
}

.nav-more-btn:hover {
  color: var(--text-primary);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--surface-color);
  border: 1px solid var(--bg-contrast);
  border-radius: 12px;
  padding: 8px;
  min-width: 140px;
  box-shadow: var(--shadow-card);
  z-index: 100;
}

.nav-dropdown-item {
  display: block;
  padding: 8px 12px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
}

.nav-dropdown-item:hover {
  background: var(--bg-contrast);
  color: var(--text-primary);
}

/* Dark mode toggle */
.nav-theme-btn {
  background: none;
  border: 1px solid var(--bg-contrast);
  border-radius: 999px;
  padding: 4px 10px;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: border-color 0.2s;
}

.nav-theme-btn:hover {
  border-color: var(--primary-color);
}

[data-theme="dark"] .theme-icon-sun { display: none; }
[data-theme="light"] .theme-icon-moon,
:root:not([data-theme="dark"]) .theme-icon-moon { display: none; }

/* Hamburger */
.nav-hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  color: var(--text-primary);
  padding: 4px 8px;
}

/* Mobile menu */
.nav-mobile-menu {
  display: none;
  flex-direction: column;
  padding: 12px 24px 16px;
  background: var(--surface-color);
  border-top: 1px solid var(--bg-contrast);
}

.nav-mobile-link {
  padding: 10px 0;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 1px solid var(--bg-contrast);
}

.nav-mobile-link:last-child { border-bottom: none; }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-hamburger { display: block; }
  .nav-mobile-menu { display: flex; }
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```
Open `http://localhost:4321`. Check: desktop shows 5 links + More dropdown + toggle. Resize to mobile — hamburger appears, click opens full menu.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/styles/global.css
git commit -m "feat: collapse navbar to 5 links with More dropdown and mobile hamburger"
```

---

### Task 6: Dark mode toggle — persist to localStorage

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Add theme init script to BaseLayout.astro**

Add this `<script>` block immediately after `<html lang="en">` in `src/layouts/BaseLayout.astro`, before `<head>`:

```html
<script is:inline>
  (function() {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = stored || (prefersDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', theme)
  })()
</script>
```

The `is:inline` directive ensures Astro doesn't process this script — it runs synchronously before page paint to prevent flash of wrong theme.

- [ ] **Step 2: Verify no theme flash**

```bash
npm run dev
```
Open `http://localhost:4321`. Toggle to dark mode. Refresh page. Verify it stays dark (no flash of light mode on reload).

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: persist dark mode preference to localStorage, prevent FOUC"
```

---

## Phase 3: RSS Feed

### Task 7: Add RSS feed

**Files:**
- Modify: `astro.config.mjs`
- Create: `src/pages/rss.xml.js`

- [ ] **Step 1: Install @astrojs/rss**

```bash
npm install @astrojs/rss
```

- [ ] **Step 2: Create the RSS endpoint**

```javascript
// src/pages/rss.xml.js
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  const sorted = posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))

  return rss({
    title: 'Iliass Tahiri — Geomechanics & Materials',
    description: 'Research notes, engineering insights, and practical guides on geomechanics, concrete durability, and AI tools for engineers.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
```

- [ ] **Step 3: Add RSS link to BaseLayout.astro head**

Inside the `<head>` block in `src/layouts/BaseLayout.astro`, add:
```html
<link rel="alternate" type="application/rss+xml" title="Iliass Tahiri" href="/rss.xml" />
```

- [ ] **Step 4: Add RSS icon to Footer**

In `src/components/Footer.jsx`, add an RSS link:
```jsx
<a href="/rss.xml" className="mono-link" aria-label="RSS Feed">RSS</a>
```

- [ ] **Step 5: Verify feed**

```bash
npm run build && npm run preview
```
Open `http://localhost:4321/rss.xml`. Verify it returns valid XML with 4 posts (the draft "AI in Material Science" should be excluded).

- [ ] **Step 6: Commit**

```bash
git add src/pages/rss.xml.js src/layouts/BaseLayout.astro src/components/Footer.jsx package.json package-lock.json
git commit -m "feat: add RSS feed at /rss.xml"
```

---

## Phase 4: Post Reading Experience

### Task 8: Syntax highlighting, post meta, share buttons, next post

**Files:**
- Modify: `astro.config.mjs`
- Modify: `src/components/PostView.jsx`
- Modify: `src/styles/global.css`

Note: PostView currently renders markdown with `react-markdown`. Shiki highlighting works at build time in Astro `.astro` files using `<Content />`. Since PostView is a React component rendering raw markdown strings client-side, we'll add Shiki config to the Astro markdown settings (for any MDX-rendered content) and add a lightweight client-side highlight via `highlight.js` for the React component.

**Actually:** Because content is rendered via `react-markdown` in a React component (not via Astro's `<Content />`), Shiki won't apply automatically. The cleaner path is to render the post content server-side in `[slug].astro` using the Astro `<Content />` component, passing rendered HTML to PostView. This is a bigger refactor — flag it.

**Pragmatic approach for now:** Add `rehype-highlight` (CSS-based) to react-markdown for code blocks. This is the minimal change.

- [ ] **Step 1: Install rehype-highlight**

```bash
npm install rehype-highlight highlight.js
```

- [ ] **Step 2: Update PostView.jsx to use syntax highlighting**

At the top of `src/components/PostView.jsx`, add:
```javascript
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
```

Update the `<ReactMarkdown>` call to include the plugin:
```jsx
<ReactMarkdown rehypePlugins={[rehypeHighlight]}>
  {post.content}
</ReactMarkdown>
```

- [ ] **Step 3: Add read time + date to post header in PostView.jsx**

Find the post header section in PostView and add:
```jsx
<div className="post-header-meta">
  <span>{post.date}</span>
  <span>·</span>
  <span>{readingTime} min read</span>
  {post.tags?.map((tag) => <span key={tag} className="tag">{tag}</span>)}
</div>
```
(The `readingTime` variable is already computed from `getReadingTime(post.content)` — just surface it.)

- [ ] **Step 4: Create ShareButtons component**

```jsx
// src/components/ShareButtons.jsx
import React from 'react'

const ShareButtons = ({ title, url }) => {
  const encoded = encodeURIComponent(url)
  const titleEncoded = encodeURIComponent(title)

  return (
    <div className="share-buttons">
      <span className="share-label">Share</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-linkedin"
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${titleEncoded}&url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-twitter"
      >
        Twitter
      </a>
    </div>
  )
}

export default ShareButtons
```

- [ ] **Step 5: Create RelatedPosts component**

```jsx
// src/components/RelatedPosts.jsx
import React from 'react'

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null
  return (
    <div className="related-posts">
      <h3 className="related-posts-title">Related posts</h3>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="related-post-card">
            <span className="related-post-date">{post.date}</span>
            <span className="related-post-title">{post.title}</span>
            <span className="related-post-excerpt">{post.excerpt}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
```

- [ ] **Step 6: Add NextPost link to PostView.jsx**

After the post content and share buttons, add:
```jsx
{nextPost && (
  <a href={`/blog/${nextPost.slug}`} className="next-post-link">
    <span className="next-post-label">Next post</span>
    <span className="next-post-title">{nextPost.title} →</span>
  </a>
)}
```

- [ ] **Step 7: Import and use ShareButtons + RelatedPosts + next post link in PostView.jsx**

```javascript
import ShareButtons from './ShareButtons'
import RelatedPosts from './RelatedPosts'
```

Update `PostView` props: `const PostView = ({ post, relatedPosts = [], nextPost = null }) => {`

Place at the bottom of the post content area (use the inline JSX pattern from Step 6 — there is no separate `NextPostLink` component):
```jsx
<ShareButtons title={post.title} url={typeof window !== 'undefined' ? window.location.href : ''} />
<RelatedPosts posts={relatedPosts} />
{nextPost && (
  <a href={`/blog/${nextPost.slug}`} className="next-post-link">
    <span className="next-post-label">Next post</span>
    <span className="next-post-title">{nextPost.title} →</span>
  </a>
)}
```

- [ ] **Step 8: Add styles to global.css**

```css
/* Share buttons */
.share-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 48px 0 32px;
  padding-top: 32px;
  border-top: 1px solid var(--bg-contrast);
}

.share-label {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.share-btn {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  text-decoration: none;
  border: 1px solid var(--bg-contrast);
  color: var(--text-secondary);
  transition: border-color 0.2s, color 0.2s;
}

.share-btn:hover { border-color: var(--primary-color); color: var(--primary-color); }

/* Related posts */
.related-posts { margin: 32px 0; }
.related-posts-title { font-size: 1rem; margin-bottom: 16px; color: var(--text-secondary); }
.related-posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }

.related-post-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  background: var(--bg-contrast);
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.2s;
}

.related-post-card:hover { background: var(--surface-color); }
.related-post-date { font-size: 0.75rem; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace; }
.related-post-title { font-size: 0.95rem; font-weight: 600; color: var(--text-primary); }
.related-post-excerpt { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; }

/* Next post link */
.next-post-link {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 24px;
  background: var(--bg-contrast);
  border-radius: 16px;
  text-decoration: none;
  margin: 24px 0 48px;
  transition: background 0.2s;
}

.next-post-link:hover { background: var(--surface-color); }
.next-post-label { font-size: 0.75rem; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.05em; }
.next-post-title { font-size: 1rem; font-weight: 600; color: var(--primary-color); }
```

- [ ] **Step 9: Verify in browser**

```bash
npm run dev
```
Open a blog post. Verify: read time + date in header, syntax highlighting in code blocks, share buttons at bottom, related posts (if any share tags), next post link.

- [ ] **Step 10: Commit**

```bash
git add src/components/ src/styles/global.css package.json package-lock.json
git commit -m "feat: add syntax highlighting, share buttons, related posts, next post link"
```

---

## Phase 5: Homepage & Newsletter CTA

### Task 9: Homepage "Start Here" section + newsletter CTA

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add tagline + "Start Here" section to index.astro**

After the hero section and before the Research Interests section, insert:

```astro
<!-- Start Here: pinned featured posts -->
{featuredPosts.length > 0 && (
  <section class="section">
    <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 24px; flex-wrap: wrap; margin-bottom: 28px;">
      <div>
        <h2 class="section-title">Start Here</h2>
        <p class="section-subtitle">Best place to begin if you're new.</p>
      </div>
      <a href="/blog" class="mono-link">All posts</a>
    </div>
    <div class="post-grid">
      {featuredPosts.map((post) => (
        <article class="post-card">
          <div class="post-meta">
            <span>{post.date}</span>
            {(post.tags || []).map((tag) => (
              <span class="tag">{tag}</span>
            ))}
          </div>
          <h3 style="margin-bottom: 0;">{post.title}</h3>
          <p>{post.excerpt}</p>
          <a href={`/blog/${post.slug}`} class="mono-link">Continue reading</a>
        </article>
      ))}
    </div>
  </section>
)}
```

Also update the hero paragraph to be clearer for industry engineers:
```astro
<!-- Replace the existing hero description paragraph with: -->
<p style="font-size: 1.05rem;">
  Practical notes on concrete durability, geomechanics, and AI tools for engineers.
  I write for people who want to understand the mechanics and apply the findings.
</p>
```

- [ ] **Step 2: Add newsletter CTA block above footer**

Add at the bottom of `src/pages/index.astro`, before the closing `</div>`:

```astro
<section class="section newsletter-cta">
  <div class="newsletter-cta-inner">
    <h2>Stay in the loop</h2>
    <p>New posts on concrete durability, geomechanics, and engineering tools — roughly twice a month. No spam.</p>
    <a href="https://buttondown.com/iliasstahiri" target="_blank" rel="noopener noreferrer" class="button">
      Subscribe via email
    </a>
    <span style="font-size: 0.85rem; color: var(--text-tertiary);">or <a href="/rss.xml" class="mono-link">RSS</a></span>
  </div>
</section>
```

Note: Replace `https://buttondown.com/iliasstahiri` with your actual Buttondown/Beehiiv URL once you create the account.

- [ ] **Step 3: Add newsletter CTA styles**

```css
.newsletter-cta {
  text-align: center;
}

.newsletter-cta-inner {
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 32px;
  background: var(--bg-contrast);
  border-radius: 24px;
}

.newsletter-cta-inner h2 { margin: 0; }
.newsletter-cta-inner p { margin: 0; color: var(--text-secondary); }
```

- [ ] **Step 4: Verify**

```bash
npm run dev
```
Open homepage. Verify "Start Here" section shows featured posts (make sure at least 1-2 posts have `featured: true` in their frontmatter). Verify newsletter CTA appears at the bottom.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro src/styles/global.css
git commit -m "feat: add Start Here section and newsletter CTA to homepage"
```

---

## Phase 6: Analytics & Bookshelf

### Task 10: Add Umami analytics

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

Note: You'll need to create a free Umami Cloud account at umami.is. After creating your site there, you'll get a `data-website-id` and script URL.

- [ ] **Step 1: Sign up for Umami Cloud** at https://umami.is

Add your site URL (`https://iliasstahiri.github.io`). Copy the tracking script snippet — it looks like:
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR-ID-HERE"></script>
```

- [ ] **Step 2: Add tracking script to BaseLayout.astro**

Inside the frontmatter block (between the `---` fences), add:
```javascript
const isProd = import.meta.env.PROD
```

Then inside the `<head>` block, add the Umami script conditionally:
```astro
{isProd && <script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR-ID-HERE"></script>}
```

Replace `YOUR-ID-HERE` with your actual Umami website ID. Using a frontmatter variable (not `import.meta.env.PROD` inline in the template) is required because Astro doesn't support `import.meta` expressions directly inside template `{}` expressions.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add Umami analytics (production only)"
```

---

### Task 11: Display bookshelf on /now page

**Files:**
- Modify: `src/pages/now/index.astro`
- Modify: `src/data/bio.js` (confirm bookshelf field structure)

- [ ] **Step 1: Check bio.js bookshelf structure**

Open `src/data/bio.js` and note the `bookshelf` field format. It likely looks like:
```javascript
bookshelf: {
  current: [{ title: '...', author: '...' }],
  recent: [{ title: '...', author: '...' }],
}
```

- [ ] **Step 2: Update /now page**

In `src/pages/now/index.astro`, import `bioData` and add:

```astro
import { bioData } from '../../data/bio'

// Add "last updated" date near the top of the page content:
<p class="mono-link" style="margin-bottom: 32px;">Last updated: March 21, 2026</p>

// Add bookshelf section at the bottom:
{bioData.bookshelf && (
  <section>
    <h2 class="section-title">Reading</h2>
    {bioData.bookshelf.current?.length > 0 && (
      <>
        <h3>Currently reading</h3>
        <ul>
          {bioData.bookshelf.current.map((book) => (
            <li><strong>{book.title}</strong> — {book.author}</li>
          ))}
        </ul>
      </>
    )}
    {bioData.bookshelf.recent?.length > 0 && (
      <>
        <h3>Recently finished</h3>
        <ul>
          {bioData.bookshelf.recent.map((book) => (
            <li><strong>{book.title}</strong> — {book.author}</li>
          ))}
        </ul>
      </>
    )}
  </section>
)}
```

Adjust the import path and data structure to match the actual `bio.js` shape.

- [ ] **Step 3: Verify**

```bash
npm run dev
```
Open `/now`. Verify "Last updated" timestamp appears and bookshelf section renders.

- [ ] **Step 4: Commit**

```bash
git add src/pages/now/index.astro
git commit -m "feat: add bookshelf and last-updated to /now page"
```

---

## Phase 7: Final Build & Deploy

### Task 12: Full build verification and deploy

- [ ] **Step 1: Clean build**

```bash
npm run build
```
Expected: No errors. Check that `docs/` is updated.

- [ ] **Step 2: Preview locally**

```bash
npm run preview
```
Manually verify:
- [ ] Homepage loads with Start Here section and newsletter CTA
- [ ] Nav shows 5 links + More dropdown + dark mode toggle
- [ ] Mobile view shows hamburger menu
- [ ] Dark mode toggle works and persists on refresh
- [ ] `/blog` listing loads all non-draft posts
- [ ] Individual post shows read time, share buttons, related posts, next post
- [ ] `/rss.xml` returns valid XML
- [ ] `/now` shows bookshelf section

- [ ] **Step 3: Check .gitignore includes .superpowers/**

```bash
grep -q '.superpowers' .gitignore || echo '.superpowers/' >> .gitignore
```

- [ ] **Step 4: Final commit and push**

```bash
git add -A
git commit -m "chore: final build verification and cleanup"
git push origin main
```

Expected: GitHub Pages deploys from `docs/` automatically.

---

## Deferred (Phase 8+)

These are out of scope for this plan but worth tracking:

- **OG Images per post** — Use Satori to generate dynamic social preview images. High effort, do after publishing rhythm is established.
- **Newsletter platform decision** — Pick Buttondown vs. Beehiiv, create account, replace placeholder URL in Task 9.
- **Analytics self-hosting** — If Umami Cloud free tier is limiting, self-host on a $5/mo VPS.
- **Complete "AI in Material Science" post** — Remove `draft: true` and publish when ready.
- **Pagination** — Add when post count exceeds ~30.
