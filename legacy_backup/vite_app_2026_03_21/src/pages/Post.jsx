import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import { postsData } from '../data/posts'

const getReadingTime = (markdown) => {
    const words = markdown
        .replace(/[#>*_`\-]/g, ' ')
        .split(/\s+/)
        .filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
}

const slugify = (value) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

const extractHeadings = (markdown) => {
    const regex = /^(##|###)\s+(.+)$/gm
    const headings = []
    const seen = new Map()
    let match
    while ((match = regex.exec(markdown)) !== null) {
        const level = match[1] === '##' ? 2 : 3
        const text = match[2].trim()
        const baseId = slugify(text)
        const count = seen.get(baseId) || 0
        const id = count ? `${baseId}-${count + 1}` : baseId
        seen.set(baseId, count + 1)
        headings.push({ level, text, id })
    }
    return headings
}

const Post = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const post = postsData.find(p => p.slug === slug)
    const [progress, setProgress] = useState(0)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (!post) {
            navigate('/blog')
        }
        window.scrollTo(0, 0)
    }, [post, navigate])

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            setProgress(total > 0 ? Math.min(1, scrolled / total) : 0)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!post) return null

    const headings = useMemo(() => extractHeadings(post.content), [post.content])
    const readingTime = getReadingTime(post.content)
    let headingIndex = 0

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            setCopied(false)
        }
    }

    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            <div className="reading-progress" style={{ width: `${progress * 100}%` }} />

            <div className="post-header">
                <Link to="/blog" className="mono-link">← Back to Journal</Link>
                <h1 style={{ fontSize: '2.8rem', marginTop: '16px' }}>{post.title}</h1>
                <div className="meta-row" style={{ justifyContent: 'center' }}>
                    <span>{post.date}</span>
                    <span>{readingTime} min read</span>
                    {(post.tags || []).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="post-actions" style={{ justifyContent: 'center' }}>
                    <button type="button" className="copy-button" onClick={handleCopyLink}>
                        {copied ? 'Link copied' : 'Copy link'}
                    </button>
                </div>
            </div>

            <div className="post-layout">
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="markdown-content">
                        <ReactMarkdown
                            components={{
                                h2: ({ node, ...props }) => {
                                    const current = headings[headingIndex++]
                                    return <h2 id={current?.id || slugify(String(props.children))} {...props} />
                                },
                                h3: ({ node, ...props }) => {
                                    const current = headings[headingIndex++]
                                    return <h3 id={current?.id || slugify(String(props.children))} {...props} />
                                },
                                p: ({ node, ...props }) => <p {...props} />,
                                a: ({ node, ...props }) => <a {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote {...props} />,
                                ul: ({ node, ...props }) => <ul style={{ marginLeft: '20px', marginBottom: '24px' }} {...props} />,
                                li: ({ node, ...props }) => <li style={{ marginBottom: '10px' }} {...props} />
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    <div style={{ marginTop: '80px', textAlign: 'center' }}>
                        <Link to="/blog" className="mono-link">Back to Journal</Link>
                    </div>
                </motion.article>

                {headings.length > 0 && (
                    <aside className="toc">
                        <span className="toc-title">On this page</span>
                        {headings.map((heading) => (
                            <a
                                key={heading.id}
                                href={`#${heading.id}`}
                                className="toc-link"
                                style={{ marginLeft: heading.level === 3 ? '12px' : '0' }}
                            >
                                {heading.text}
                            </a>
                        ))}
                    </aside>
                )}
            </div>
        </div>
    )
}

export default Post
