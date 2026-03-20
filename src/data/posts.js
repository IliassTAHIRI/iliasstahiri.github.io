export const postsData = [
    {
        slug: "freeze-thaw-durability-pervious-concrete",
        title: "Freeze-Thaw Durability of Pervious Concrete: Lessons from My PhD",
        date: "2026-03-19",
        tags: ["Publications", "Concrete", "Durability", "Freeze-Thaw"],
        excerpt: "Key lessons from my PhD on salt-frost damage in pervious concrete and how to design for better freeze-thaw durability.",
        content: `
Pervious concrete is designed to let water pass through, which is great for drainage but challenging for durability in cold climates. During my PhD, I focused on how frost attacks, especially in the presence of salt, initiate and propagate damage in pervious concrete. This article summarizes the motivation, modeling approach, and the key lessons that can help us design more durable mixes.

## Motivation

Freeze-thaw damage in pervious concrete does not behave like conventional concrete. The open pore network changes how water and ice interact with the skeleton, and deicing salts add another layer of complexity. The goal of this study was to identify the most critical stress locations and the governing parameters that accelerate damage during freeze-thaw cycling.

## Modeling Approach

To isolate the mechanisms, I used numerical simulations with a poroelastic model and simplified representative geometries at the aggregate scale. I studied three configurations:

- One aggregate coated with cement paste.
- One aggregate coated with a cracked layer of cement paste.
- Two aggregates coated and bonded with cement paste.

These geometries are minimal yet powerful. They allow us to see how stress concentrates locally and how cracks can develop at the interfaces under different thermal and hydraulic conditions.

## Key Findings

The simulations consistently show that damage is most likely to initiate at the contact between aggregates. Two observations are particularly important:

- Shear stress peaks near the paste-aggregate interface, making this region highly vulnerable during freezing.
- When aggregates are bonded by a thin paste bridge, the contact zone becomes a stress hotspot during freeze-thaw cycles.

In practice, this means that the micro-architecture of the paste at aggregate contacts strongly controls durability.

## Parametric Study Highlights

I ran a broad parametric study covering boundary conditions, initial conditions, and material properties. The main takeaways are:

- Boundary conditions (especially moisture and temperature histories) significantly influence stress levels.
- Initial saturation and salt concentration can shift the location and intensity of damage.
- Material parameters related to stiffness and permeability govern how stress builds during freezing.

These results help prioritize what to measure and control in both lab tests and field applications.

## Design Guidelines from the Study

Based on the simulations, several practical directions emerge:

- Strengthen the paste-aggregate interface to reduce shear stress localization.
- Control paste thickness and continuity at aggregate contacts to limit stress peaks.
- Optimize pore structure and saturation states to reduce freeze-thaw driving forces.

## Why This Matters

Understanding damage at the aggregate scale helps connect micro-level behavior to macro-level durability. The insights from this work can guide mix design, curing strategies, and exposure management for pervious concrete in cold regions.

The published version is available [here](https://www.sciencedirect.com/science/article/abs/pii/S0008884622002630).

## How to Cite

Tahiri, I., et al. (2022). *Numerical investigation of salt-frost damage of pervious concrete at the scale of a few aggregates*. Cement & Concrete Research.  
Link: https://www.sciencedirect.com/science/article/abs/pii/S0008884622002630
`
    },
    {
        slug: "ai-in-material-science",
        title: "AI in Material Science",
        date: "2025-06-26",
        tags: ["AI", "Materials", "Research Tools"],
        excerpt: "Views on the use of AI in material science and how LLMs can benefit research.",
        content: `
I in this article I want to share my views on the use of AI in material science.

How can LLM benefit the research in material science?
- Accelerating the coding of complex tasks
- Coding solutions for complex equations.

Accelerating material discovery using AI see [Nature Article](https://www.nature.com/articles/s41524-022-00765-z)

MatterGen: ...
`
    },
    {
        slug: "new-paper-oedometric-setup",
        title: "New Paper: Oedometric-like setup for water transport",
        date: "2023-01-09",
        tags: ["Publications", "Porous Media", "Neutron Scattering"],
        excerpt: "A paper I contributed to published in Review of Scientific Instruments.",
        content: `
A paper I contributed in is published in Review of Scientific Instruments. The title of the paper is "Oedometric-like setup for the study of water transport in porous media by quasi-elastic neutron scattering".
The abstract of the new paper is presented below.

> In comparison to condensed matter, soft matter is subject to several interplaying effects (surface heterogeneities and swelling effect) that influence transport at the nanoscale. In consequence, transport in soft and compliant materials is coupled to adsorption and deformation phenomena. The permeance of the material, i.e., the response of the material to a pressure gradient, is dependent on the temperature, the chemical potential, and the external constraint. Therefore, the characterization of water dynamics in soft porous materials, which we address here, becomes much more complex. In this paper, the development of an original setup for scattering measurements of a radiation in the transmitted geometry in oedometric conditions is described. A specially designed cell enables a uniaxial compression of the investigated material, PIM-1 (Polymers of Intrinsic Microporosity), in the direction perpendicular to the applied hydraulic pressure gradient (up to 120 bars). High pressure boosting of the circulating water is performed with a commercially available high-pressure pump Karcher. This particular setup is adapted to the quasi-elastic neutron scattering technique, which enables us to probe diffusion and relaxation phenomena with characteristic times of 10^-9 s – 10^-12 s. Moreover, it can easily be modified for other scattering techniques.

The published version is available [here](https://aip.scitation.org/doi/abs/10.1063/5.0030297).
`
    },
    {
        slug: "new-paper-salt-frost-damage",
        title: "New Paper: Salt-frost damage of pervious concrete",
        date: "2023-01-09",
        tags: ["Publications", "Concrete", "Durability"],
        excerpt: "My paper on numerical investigation of salt-frost damage was published in Cement & Concrete Research.",
        content: `
My paper "Numerical investigation of salt-frost damage of pervious concrete at the scale of a few aggregates" got published in Cement & Concrete Research (CCR).  
The abstract of the new paper is presented below.

> In this study, we aim to gain insight into the damage mechanisms of pervious concrete subject to frost attacks in the presence of salt. We perform numerical simulations using a poroelastic model on system geometries representing pervious concrete at the scale of one or a few aggregates: (1) one aggregate coated with cement paste, (2) one aggregated coated with a cracked layer of cement paste, and (3) two aggregates coated and bonded with cement paste. The numerical simulations indicate that the damage is more likely to occur at the contact between aggregates. Furthermore, we observe significant shear stress at the vicinity of the paste/aggregate interface. We undertake a thorough parametric study to evaluate the impact of various boundary conditions, initial conditions, and materials parameters on the stresses generated during one or several freeze–thaw cycles. The insights can provide guidelines to design pervious concretes with enhanced freeze–thaw durability.

The published version is available [here](https://www.sciencedirect.com/science/article/abs/pii/S0008884622002630).
`
    },
    {
        slug: "porous-concrete-state-of-art",
        title: "Porous concrete, a state of the art",
        date: "2018-08-03",
        tags: ["Concrete", "Porous Media", "Sustainability"],
        excerpt: "Improving the mix design of pervious concrete to resist freeze-thaw cycles.",
        content: `
## A recurrent question : Why porous concrete ?

Pervious concrete, also known as porous concrete or permeable concrete, is a type of concrete that allows water to pass through it, rather than running off of it like traditional concrete. This allows water to infiltrate the soil and recharge groundwater reserves, rather than running off into stormwater systems. The porosity also reduces the runoff volume and decrease the water treatment required, this can help to alleviate flooding and reduce the burden on stormwater systems.

## Pervious concrete durability challenges

**Freeze-thaw cycles**: Pervious concrete is particularly susceptible to damage from freeze-thaw cycles.
**Clogging**: Pervious concrete can become clogged with debris.
**Low resistance**: Pervious concrete typically has lower strength and durability compared to traditional concrete.

## Pervious concrete composition

This type of concrete, Pervious Concrete (PC), is similar to normal concrete, with the main difference being that PC contains little or no fine aggregate.
The porosity of pervious concrete ranges from 5-35%. The higher the porosity, the more water can pass through it.

Through this blog, I will try to provide a clear and comprehensive overview of my work, my ideas, and my findings.
`
    }
]
