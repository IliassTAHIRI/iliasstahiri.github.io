export const caseStudiesData = [
    {
        title: "CO2 Injection Geomechanics Workflow",
        focus: "Reservoir depletion to injection transition",
        decision: "Chose GEOSX for coupled flow-geomechanics to capture stress-path reversals under injection.",
        challenge: "Capturing plastic strain localization without over-softening the model.",
        outcome: "Calibrated a Delft Egg plasticity variant against lab triaxial data and matched field subsidence trends."
    },
    {
        title: "Wellbore Stability for Deep HPHT Section",
        focus: "Mud window and breakout risk",
        decision: "Used MFront to implement a custom yield surface for anisotropic stress paths rather than a default Mohr-Coulomb model.",
        challenge: "Reconciling contradictory log-derived stresses with leak-off tests.",
        outcome: "Introduced probabilistic stress bounds and reduced non-productive time in planning."
    }
]
