import React from 'react'
import { tilsData } from '../data/tils'

const TIL = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="page-hero">
                <span className="kicker">TIL</span>
                <h1 className="section-title">Today I Learned</h1>
                <p className="lead">Short, frequent notes from the workbench.</p>
            </section>

            <div className="post-grid">
                {tilsData.map((til) => (
                    <article key={til.title} className="til-card">
                        <div className="post-meta">
                            <span>{til.date}</span>
                            <span className="tag">{til.tag}</span>
                        </div>
                        <h3 style={{ marginBottom: '0' }}>{til.title}</h3>
                        <p>{til.summary}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default TIL
