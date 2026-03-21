import React from 'react'
import { perspectivesData } from '../data/perspectives'

const NonTech = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="page-hero">
                <span className="kicker">Non-Tech</span>
                <h1 className="section-title">Productivity, collaboration, and the journey behind the work.</h1>
                <p className="lead">Short reflections that keep the human side of the work visible.</p>
            </section>

            <div className="post-grid">
                {perspectivesData.map((entry) => (
                    <article key={entry.title} className="post-card">
                        <div className="post-meta">
                            <span>{entry.date}</span>
                            <span className="tag">{entry.topic}</span>
                        </div>
                        <h3 style={{ marginBottom: '0' }}>{entry.title}</h3>
                        <p>{entry.excerpt}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default NonTech
