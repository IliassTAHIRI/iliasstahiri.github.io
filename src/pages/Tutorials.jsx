import React from 'react'
import { tutorialsData } from '../data/tutorials'

const Tutorials = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="page-hero">
                <span className="kicker">Tutorials</span>
                <h1 className="section-title">Niche, practical guides for real workflows.</h1>
                <p className="lead">Focused how-to guides for problems that are under-documented.</p>
            </section>

            <div className="post-grid">
                {tutorialsData.map((tutorial) => (
                    <article key={tutorial.title} className="post-card">
                        <h3>{tutorial.title}</h3>
                        <p><span className="pill">Niche</span> {tutorial.niche}</p>
                        <p>{tutorial.summary}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Tutorials
