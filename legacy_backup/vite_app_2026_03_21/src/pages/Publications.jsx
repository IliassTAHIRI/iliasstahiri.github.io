import React from 'react'
import { motion } from 'framer-motion'
import { publicationsData } from '../data/publications'

const Publications = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="section" style={{ textAlign: 'center' }}>
                <h1 className="section-title">Publications</h1>
                <p className="section-subtitle">Academic papers and contributions.</p>
            </section>

            <div className="post-grid">
                {publicationsData.map((pub, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="post-card"
                    >
                        <div className="post-meta">
                            <span>{pub.journal}</span>
                            <span>{pub.date.split('-')[0]}</span>
                        </div>
                        <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                            <a href={pub.url} target="_blank" rel="noopener noreferrer">
                                {pub.title} ↗
                            </a>
                        </h2>
                        <p>{pub.excerpt}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    )
}

export default Publications
