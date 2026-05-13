import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const PROJECTS = [
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

function Research() {
    return (
        <>
            <Particle />
            <Container fluid className="about-section">
                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        My <strong className="cyan">Research</strong>
                    </h1>
                    <p style={{
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "var(--font-base)",
                        marginTop: "-6px",
                        marginBottom: "40px",
                    }}>
                        Undergraduate physics research — waveform modeling, machine learning, and scientific computing.
                    </p>
                </Container>

                <div style={{ padding: "0 12px" }}>
                    <Row className="g-4" style={{ marginBottom: "60px" }}>
                        {PROJECTS.map((proj, i) => (
                            <Col md={6} key={i}>
                                <div style={{
                                    border: "1px solid var(--primary)",
                                    borderRadius: "16px",
                                    boxShadow: "0 0 20px rgba(155, 114, 207, 0.15)",
                                    backgroundColor: "var(--background)",
                                    padding: "28px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                                }}>
                                    <div>
                                        <h2 style={{
                                            color: "white",
                                            fontFamily: "Nunito, sans-serif",
                                            fontSize: "var(--font-xl)",
                                            marginBottom: "4px",
                                        }}>
                                            {proj.title}
                                        </h2>
                                        <p style={{ color: "var(--primary)", fontSize: "var(--font-sm)", fontFamily: "Lato, sans-serif", marginBottom: "2px" }}>
                                            {proj.subtitle}
                                        </p>
                                        <p style={{ color: "var(--accent1)", fontSize: "var(--font-sm)", fontFamily: "Lato, sans-serif", marginBottom: "16px" }}>
                                            {proj.date}
                                        </p>

                                        <p style={{
                                            color: "rgba(255,255,255,0.82)",
                                            fontFamily: "Lato, sans-serif",
                                            fontSize: "var(--font-base)",
                                            lineHeight: "1.75",
                                            marginBottom: "20px",
                                        }}>
                                            {proj.description}
                                        </p>

                                        <div className="robotics-highlights" style={{ marginBottom: "20px" }}>
                                            {proj.tags.map((tag, j) => (
                                                <span key={j} className="robotics-highlight-item">
                                                    <span className="cyan">✦</span> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        {proj.available ? (
                                            <Link
                                                to={proj.link}
                                                className="robotics-download-btn"
                                                style={{ display: "inline-flex", textDecoration: "none" }}
                                            >
                                                View Project <AiOutlineArrowRight style={{ marginLeft: "6px" }} />
                                            </Link>
                                        ) : (
                                            <span style={{
                                                color: "rgba(255,255,255,0.35)",
                                                fontFamily: "Nunito, sans-serif",
                                                fontSize: "var(--font-sm)",
                                                fontStyle: "italic",
                                            }}>
                                                Full page coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Research;
