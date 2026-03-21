import React, { useMemo, useState } from 'react'

const getReadingTime = (markdown) => {
  const words = markdown
    .replace(/[#>*_`\-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

const Blog = ({ posts = [] }) => {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [posts]
  )

  const tags = useMemo(() => {
    const tagSet = new Set()
    posts.forEach((post) => (post.tags || []).forEach((tag) => tagSet.add(tag)))
    return ['All', ...Array.from(tagSet)]
  }, [posts])

  const filteredPosts = useMemo(() => {
    const normalized = query.toLowerCase().trim()
    return sortedPosts.filter((post) => {
      const matchesTag = activeTag === 'All' || post.tags?.includes(activeTag)
      const matchesQuery = !normalized ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.content.toLowerCase().includes(normalized)
      return matchesTag && matchesQuery
    })
  }, [sortedPosts, query, activeTag])

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <section className="section">
        <div className="content-width" style={{ textAlign: 'center' }}>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>The Journal</h1>
          <p className="section-subtitle">Thoughts on material science, modeling, and research craft.</p>
        </div>
      </section>

      <section className="section">
        <div className="search-wrap">
          <input
            className="search-input"
            placeholder="Search posts, keywords, or methods..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search blog posts"
          />
          <div className="filters">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ marginBottom: '0' }}>
        <div className="post-grid">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="post-card">
              <div className="post-meta">
                <span>{post.date}</span>
                <span>{getReadingTime(post.content)} min read</span>
                {(post.tags || []).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={`/blog/${post.slug}`}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{post.title}</h2>
              </a>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="mono-link">Continue reading</a>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="card" style={{ marginTop: '32px', textAlign: 'center' }}>
            <p>No posts match that search yet. Try another keyword or tag.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Blog
