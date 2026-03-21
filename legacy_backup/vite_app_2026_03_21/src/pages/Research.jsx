import React from 'react'
import { motion } from 'framer-motion'
import { bioData } from '../data/bio'

const Research = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="section" style={{ textAlign: 'center' }}>
                <h1 className="section-title">Research Topics</h1>
                <p className="section-subtitle">Areas of focus and investigation.</p>
            </section>

            <div className="interest-grid">
                {bioData.interests.map((interest, index) => (
                    <motion.div
                        key={interest.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="interest-card"
                    >
                        <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{interest.title}</h2>
                        <p>{interest.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Research
