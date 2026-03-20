import React from 'react'
import { caseStudiesData } from '../data/caseStudies'

const CaseStudies = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="page-hero">
                <span className="kicker">Case Studies</span>
                <h1 className="section-title">Project decisions, tradeoffs, and lessons learned.</h1>
                <p className="lead">
                    These are not just project summaries. They focus on the reasoning behind the tools, models, and
                    workflows I chose.
                </p>
            </section>

            <div className="post-grid">
                {caseStudiesData.map((study) => (
                    <article key={study.title} className="post-card">
                        <h3>{study.title}</h3>
                        <p><span className="pill">Focus</span> {study.focus}</p>
                        <p><span className="pill">Decision</span> {study.decision}</p>
                        <p><span className="pill">Hardest Challenge</span> {study.challenge}</p>
                        <p><span className="pill">Outcome</span> {study.outcome}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default CaseStudies
