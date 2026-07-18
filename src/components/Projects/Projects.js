/* Index page listing all projects with links to detail pages */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const PROJECTS = [
    {
        title: "BackScratch",
        subtitle: "I scratch yours, you scratch mine.",
        description:
            "A local services marketplace connecting neighbors who need a hand with neighbors who can help — built and shipped as a live web app.",
        link: "/projects/backscratch",
        available: true,
    },
    {
        title: "New Bedford Research & Robotics",
        subtitle: "Robotics Engineering, Rapid Prototyping & STEM Education",
        description:
            "3D design and rapid prototyping, AI development, and K-12 STEM education and mentorship — spanning the NBRR robotics program, the Torus project, and the Splinter toolhead system.",
        link: "/projects/robotics",
        available: true,
    },
    {
        title: "Algorithmic Trading",
        subtitle: "Systematic Strategy Research & Backtesting",
        description:
            "Signal research, backtesting, and execution tooling for systematic trading strategies.",
        link: "/projects/algotrade",
        available: true,
    },
];

function Projects() {
    return (
        <>
            <Particle />
            <Container fluid className="about-section">
                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        My <strong className="cyan">Projects</strong>
                    </h1>
                    <p style={{
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "var(--font-base)",
                        marginTop: "-6px",
                        marginBottom: "40px",
                    }}>
                        Selected projects — from full-stack apps to robotics and research engineering.
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
                                        <p style={{ color: "var(--primary)", fontSize: "var(--font-sm)", fontFamily: "Lato, sans-serif", marginBottom: "16px" }}>
                                            {proj.subtitle}
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

export default Projects;
