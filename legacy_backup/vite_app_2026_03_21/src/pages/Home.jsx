import React from 'react'
import { motion } from 'framer-motion'
import { bioData } from '../data/bio'
import { postsData } from '../data/posts'
import { Link } from 'react-router-dom'
import '../styles/global.css'

const Home = () => {
    const featuredPosts = [...postsData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2)

    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="hero section">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">{bioData.name}</h1>
                    <p className="hero-subtitle">{bioData.title}</p>
                    <p style={{ fontSize: '1.05rem' }}>
                        I am a senior geomechanics engineer focused on reservoir behavior under depletion
                        and CO2 injection. This digital garden captures research notes, project updates,
                        and long-form reflections across geomechanics, modeling, and decision-making.
                    </p>

                    <div className="hero-actions" style={{ marginTop: '28px' }}>
                        <Link to="/blog" className="button">Read the Journal</Link>
                        <Link to="/research" className="button secondary">Explore Research</Link>
                    </div>

                    <div className="social-row">
                        {bioData.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mono-link"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <div className="hero-card">
                    <h3 style={{ marginBottom: '10px' }}>Now</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Current focus: reservoir geomechanics, wellbore stability, and compaction-driven subsidence.
                        I translate field data and lab insights into robust poromechanical and plasticity models.
                    </p>
                    <div className="stat-grid">
                        <div className="stat-item">
                            <span className="stat-label">Focus Areas</span>
                            <span className="stat-value">{bioData.interests.length}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Recent Posts</span>
                            <span className="stat-value">{postsData.length}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Approach</span>
                            <span className="stat-value">Model + Data</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="content-width" style={{ textAlign: 'center', marginBottom: '36px' }}>
                    <h2 className="section-title">Research Interests</h2>
                    <p className="section-subtitle">What I investigate across materials and mechanics.</p>
                </div>
                <div className="interest-grid">
                    {bioData.interests.map((interest) => (
                        <div key={interest.title} className="interest-card">
                            <h3>{interest.title}</h3>
                            <p>{interest.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}>
                    <div>
                        <h2 className="section-title">Latest Writing</h2>
                        <p className="section-subtitle">Selected entries from the journal.</p>
                    </div>
                    <Link to="/blog" className="mono-link">View all posts</Link>
                </div>

                <div className="post-grid" style={{ marginTop: '28px' }}>
                    {featuredPosts.map((post) => (
                        <article key={post.slug} className="post-card">
                            <div className="post-meta">
                                <span>{post.date}</span>
                                {post.tags?.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <h3 style={{ marginBottom: '0' }}>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="mono-link">Continue reading</Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
