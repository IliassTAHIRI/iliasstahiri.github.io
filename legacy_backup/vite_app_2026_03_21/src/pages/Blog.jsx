import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { postsData } from '../data/posts'

const getReadingTime = (markdown) => {
    const words = markdown
        .replace(/[#>*_`\-]/g, ' ')
        .split(/\s+/)
        .filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
}

const Blog = () => {
    const [query, setQuery] = useState('')
    const [activeTag, setActiveTag] = useState('All')

    const sortedPosts = useMemo(
        () => [...postsData].sort((a, b) => new Date(b.date) - new Date(a.date)),
        []
    )

    const tags = useMemo(() => {
        const tagSet = new Set()
        postsData.forEach((post) => (post.tags || []).forEach((tag) => tagSet.add(tag)))
        return ['All', ...Array.from(tagSet)]
    }, [])

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
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            className="post-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="post-meta">
                                <span>{post.date}</span>
                                <span>{getReadingTime(post.content)} min read</span>
                                {(post.tags || []).map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <Link to={`/blog/${post.slug}`}>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{post.title}</h2>
                            </Link>
                            <p>{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="mono-link">Continue reading</Link>
                        </motion.article>
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
