import React from 'react'
import { caseStudiesData } from '../data/caseStudies'

const CaseStudies = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="section" style={{ textAlign: 'center' }}>
                <h1 className="section-title">Case Studies</h1>
                <p className="section-subtitle">Project decisions, tradeoffs, and lessons learned.</p>
            </section>

            <div className="post-grid">
                {caseStudiesData.map((study) => (
                    <article key={study.title} className="post-card">
                        <h3>{study.title}</h3>
                        <p><strong>Focus:</strong> {study.focus}</p>
                        <p><strong>Decision:</strong> {study.decision}</p>
                        <p><strong>Hardest Challenge:</strong> {study.challenge}</p>
                        <p><strong>Outcome:</strong> {study.outcome}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default CaseStudies
