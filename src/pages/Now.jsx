import React from 'react'

const Now = () => {
    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <section className="page-hero">
                <span className="kicker">Now</span>
                <h1 className="section-title">What I am focused on right now.</h1>
                <p className="lead">A living snapshot of priorities, projects, and skills.</p>
            </section>

            <section className="section split">
                <div className="section-band stack">
                    <h2 style={{ marginBottom: '12px' }}>Current Focus</h2>
                    <p>
                        Reservoir geomechanics for depletion and CO2 injection, with an emphasis on wellbore
                        stability, compaction-driven subsidence, and stress-path sensitivity.
                    </p>
                    <span className="pill">Last updated: March 20, 2026</span>
                </div>
                <div className="stack">
                    <div className="note-card">
                        <span className="pill">Skills in Motion</span>
                        <p>Stress path interpretation, poromechanics calibration, and uncertainty framing.</p>
                    </div>
                    <div className="note-card">
                        <span className="pill">Collaborations</span>
                        <p>Working closely with reservoir engineers, drilling teams, and data science partners.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ maxWidth: '960px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Active Projects</h2>
                <div className="post-grid" style={{ marginTop: '24px' }}>
                    <article className="post-card">
                        <h3>CO2 Injection Geomechanics Playbook</h3>
                        <p>Standardizing workflows to evaluate stress reversals, fault reactivation, and caprock integrity.</p>
                    </article>
                    <article className="post-card">
                        <h3>Wellbore Stability Modeling</h3>
                        <p>Integrating log-derived stresses with calibrated plasticity models in MFront.</p>
                    </article>
                    <article className="post-card">
                        <h3>Subsidence Forecasting</h3>
                        <p>Coupling field monitoring with GEOSX runs to improve compaction predictions.</p>
                    </article>
                </div>
            </section>

            <section className="section" style={{ maxWidth: '960px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Learning & Reading</h2>
                <div className="card-grid" style={{ marginTop: '24px' }}>
                    <div className="interest-card">
                        <h3>Geomechanics Literature</h3>
                        <p>Deep-diving on compaction banding, poroplasticity, and caprock integrity studies.</p>
                    </div>
                    <div className="interest-card">
                        <h3>Tooling</h3>
                        <p>Refining GEOSX workflows and improving MFront constitutive libraries.</p>
                    </div>
                    <div className="interest-card">
                        <h3>Communication</h3>
                        <p>Building clear narratives around uncertainty, risk, and model limitations.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Now
