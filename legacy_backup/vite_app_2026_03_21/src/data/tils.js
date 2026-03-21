export const tilsData = [
    {
        title: "GEOSX boundary condition ordering fix",
        date: "2026-03-18",
        tag: "GEOSX",
        summary: "Resolved a convergence hiccup by reordering displacement constraints before pressure updates in a coupled poromechanics run."
    },
    {
        title: "MFront: consistent tangent for Modified Cam Clay",
        date: "2026-03-12",
        tag: "MFront",
        summary: "Added a verified consistent tangent to stabilize Newton iterations for stress paths close to the yield surface."
    },
    {
        title: "Petrel export sanity check",
        date: "2026-02-27",
        tag: "PETREL",
        summary: "Caught a unit mismatch in grid property export by comparing derived pore pressure gradients against log data."
    }
]
