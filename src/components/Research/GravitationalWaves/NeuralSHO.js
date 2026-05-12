import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import presentationFile from "../../../Assets/Research/NeuralSHO.pdf";
import { BsBoxArrowUpRight } from "react-icons/bs";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const HIGHLIGHTS = [
    "Scientific Machine Learning",
    "Neural ODEs",
    "Physics-Informed Neural Networks",
    "Framework Design",
    "High Performance Computing",
    "Cross-Domain Applicability",
];

const bodyStyle = {
    color: "var(--text)",
    fontFamily: "Lato, sans-serif",
    lineHeight: "1.9",
    fontSize: "1.25em",
    paddingLeft: "24px",
    paddingRight: "24px",
    textAlign: "left",
    textIndent: "2em",
};

function NeuralSHO() {
    const [numPages, setNumPages] = useState(null);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(900);

    useEffect(() => {
        function measure() {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        }
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "24px",
            marginBottom: "40px",
        }}>

            {/* Role / date */}
            <h4 style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", marginBottom: "4px" }}>
                Independent Research Project
            </h4>
            <p style={{ color: "var(--accent1)", fontSize: "0.9em", marginBottom: "20px" }}>
                UMass Dartmouth &bull; 2021-2022
            </p>

            {/* PDF left (2/3) + intro right (1/3) */}
            <Row className="g-3 align-items-start" style={{ marginBottom: "24px" }}>
                <Col md={8}>
                    <div
                        ref={containerRef}
                        style={{
                            width: "100%",
                            height: "600px",
                            overflowY: "auto",
                            overflowX: "hidden",
                            borderRadius: "12px",
                            border: "1px solid rgba(155, 114, 207, 0.3)",
                            background: "rgba(255, 255, 255, 0.02)",
                        }}
                    >
                        <Document
                            file={presentationFile}
                            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                            className="d-flex flex-column align-items-center"
                        >
                            {Array.from(new Array(numPages), (_, i) => (
                                <Page
                                    key={i + 1}
                                    pageNumber={i + 1}
                                    width={containerWidth - 4}
                                    style={{ display: "block" }}
                                />
                            ))}
                        </Document>
                    </div>
                </Col>
                <Col md={4}>
                    <p style={bodyStyle}>
                        Another exciting project I worked on was a Neural ODE framework in Julia that learns the governing dynamics
                        of a physical system from trajectory data alone — no equations handed to it, no physics assumed.
                        The simple harmonic oscillator was the chosen testbed deliberately: it is one of the most universal
                        models in all of science, appearing in everything from quantum mechanics and electrical circuits to
                        biological rhythms and economic cycles. If a framework can learn it from scratch, it can learn anything
                        shaped like it! A neural network replaces the analytic force term in the equations of motion and is
                        trained to recover the correct behavior purely from observation — unifying data-driven and
                        physics-based modeling into a single architecture. This framework served as the foundation for a
                        subsequent neural gravitational wave model for my research group. Built on
                        Julia's SciML ecosystem and designed for HPC execution. (
                        <a
                            href="https://github.com/kcullen3/neural-ode-harmonic-oscillator"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                        >
                            code <BsBoxArrowUpRight size={9} />
                        </a>
                        )
                    </p>
                </Col>
            </Row>

            {/* Highlights */}
            <div className="robotics-highlights" style={{ marginBottom: "24px" }}>
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default NeuralSHO;
