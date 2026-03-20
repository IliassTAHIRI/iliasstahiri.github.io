import React from 'react'
import { Link } from 'react-router-dom'
import { bioData } from '../data/bio'

const About = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="section" style={{ textAlign: 'center' }}>
                <h1 className="section-title">About</h1>
                <p className="section-subtitle">Geomechanics, modeling, and the decisions behind the simulations.</p>
            </section>

            <section className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Short Bio</h2>
                <p>{bioData.description}</p>
            </section>

            <section className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Current Focus</h2>
                <p>
                    I lead geomechanics work on reservoir depletion, CO2 injection, wellbore stability, and
                    compaction-driven subsidence. My day-to-day combines field data interpretation, constitutive
                    modeling, and scenario-based risk assessment for subsurface decisions.
                </p>
            </section>

            <section className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Tools & Platforms</h2>
                <div className="interest-grid" style={{ marginTop: '24px' }}>
                    <div className="interest-card">
                        <h3>Geoscience Tooling</h3>
                        <p>GEOLOG, PETREL, and domain workflows for subsurface characterization.</p>
                    </div>
                    <div className="interest-card">
                        <h3>Constitutive Modeling</h3>
                        <p>MFRONT and custom material models for plasticity and damage.</p>
                    </div>
                    <div className="interest-card">
                        <h3>Simulation Platforms</h3>
                        <p>GEOSX and in-house toolchains for coupled flow and geomechanics.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Modeling Approach</h2>
                <div className="post-grid" style={{ marginTop: '24px' }}>
                    <article className="post-card">
                        <h3>Poromechanics</h3>
                        <p>Coupled pressure-stress analysis to capture depletion and injection pathways.</p>
                    </article>
                    <article className="post-card">
                        <h3>Plasticity</h3>
                        <p>Modified Cam Clay, Delft Egg, and stress-path-dependent yielding.</p>
                    </article>
                    <article className="post-card">
                        <h3>Damage</h3>
                        <p>Progressive stiffness degradation to represent microcracking and compaction bands.</p>
                    </article>
                </div>
            </section>

            <section className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Background</h2>
                <p>
                    Before moving into reservoir geomechanics, I worked as an asphalt/bitumen research engineer
                    focused on durability and constitutive modeling. That experience still shapes how I validate
                    models against data and keep an experimental mindset in simulation-heavy work.
                </p>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Writing Tracks</h2>
                <p className="section-subtitle">Focused series on decisions, tools, and the human side of the work.</p>
                <div className="interest-grid" style={{ marginTop: '24px' }}>
                    <Link to="/til" className="interest-card">
                        <h3>Today I Learned</h3>
                        <p>Short notes on bugs fixed, model tweaks, and lessons from the week.</p>
                    </Link>
                    <Link to="/case-studies" className="interest-card">
                        <h3>Case Studies</h3>
                        <p>Decisions made, tradeoffs considered, and outcomes from real projects.</p>
                    </Link>
                    <Link to="/tutorials" className="interest-card">
                        <h3>Tutorials</h3>
                        <p>Guides to niche workflows that deserve better documentation.</p>
                    </Link>
                    <Link to="/non-tech" className="interest-card">
                        <h3>Non-Tech Perspective</h3>
                        <p>Notes on productivity, remote work, and the journey into geomechanics.</p>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
