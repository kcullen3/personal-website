/* Project cards for the Research index page */
export const PROJECTS = [
    {
        title: "Gravitational Waves",
        subtitle: "UMass Dartmouth Physics Research Group",
        date: "2020–2022",
        tags: ["Python", "LALSuite", "HPC Cluster", "LIGO Toolchain", "EMRIs"],
        description:
            "Developed a scientific computing pipeline to compare two gravitational wave models — the EMRI surrogate and the EOBNRv2HM approximant — across thousands of simulated black hole mergers. Identified and reported a float32 precision bug in the surrogate model that was producing non-physical artifacts in computed mismatches.",
        link: "/research/gravitationalwaves",
        available: true,
    },
    {
        title: "Neural ODE",
        subtitle: "UMass Dartmouth • Independent Research",
        date: "2022",
        tags: ["Julia", "SciML", "Neural Networks", "Runge-Kutta", "HPC"],
        description:
            "Built a Neural ODE in Julia that learns the governing dynamics of a simple harmonic oscillator without being given the physics. A neural network replaces the analytic force term in the equations of motion and is trained — using mini-batch gradient descent and 4th-order Runge-Kutta integration — to recover correct oscillatory behavior from simulated trajectory data alone.",
        link: null,
        available: false,
    },
];
