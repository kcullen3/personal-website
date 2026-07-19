/* Anomalous Perturbations research card — embeds Rhine Education Center coursework PDF with inline viewer and highlights */
import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import presentationFile from "../../../Assets/Research/AnomalousPerturbations.pdf";
import { HIGHLIGHTS, CAPTION_PRE, CAPTION_BOLD, CAPTION_POST } from "../../../data/anomalousPerturbations";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const bodyStyle = {
    color: "var(--text)",
    fontFamily: "Lato, sans-serif",
    lineHeight: "1.9",
    fontSize: "var(--font-lg)",
    paddingLeft: "24px",
    paddingRight: "24px",
    textAlign: "left",
    textIndent: "2em",
};

const linkStyle = {
    color: "var(--accent1_dull)",
    textDecoration: "underline",
};

const captionStyle = {
    background: "rgba(155, 114, 207, 0.08)",
    border: "1px solid rgba(155, 114, 207, 0.25)",
    borderRadius: "12px",
    padding: "16px 20px",
    marginTop: "16px",
    color: "var(--text)",
    fontFamily: "Lato, sans-serif",
    fontSize: "var(--font-base)",
    textAlign: "center",
};

function AnomalousPerturbations() {
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
                Rhine Education Center &mdash; Theories of Psi
            </h4>
            <p style={{ color: "var(--accent1)", fontSize: "var(--font-sm)", marginBottom: "20px" }}>
                Coursework &bull; April 2025
            </p>

            {/* PDF left + summary right, 50/50 */}
            <Row className="g-3 align-items-start" style={{ marginBottom: "24px" }}>
                <Col md={6}>
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

                    {/* Caption / peer-review disclosure */}
                    <p style={captionStyle}>
                        {CAPTION_PRE}<strong>{CAPTION_BOLD}</strong>{CAPTION_POST}
                    </p>
                </Col>
                <Col md={6}>
                    <p style={bodyStyle}>
                        The{" "}
                        <a
                            href="https://www.rhineonline.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                        >
                            Rhine Research Center
                        </a>{" "}
                        is the oldest continuously running parapsychology lab in the country, tracing back to J.B.
                        Rhine's work at Duke University in the 1930s. It treats psi phenomena as a real scientific
                        question instead of a fringe curiosity: research, peer-reviewed publication (the Journal of
                        Parapsychology has run since 1937), and methodological rigor are the actual point of the
                        place. The{" "}
                        <a
                            href="https://www.rhineedu.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                        >
                            Rhine Education Center
                        </a>{" "}
                        is its teaching arm, offering structured coursework for people who want to study
                        parapsychology seriously rather than pick it up secondhand. If psi phenomena are ever going
                        to get taken seriously by mainstream science, institutions like the Rhine Research Center are
                        where that groundwork gets laid.
                    </p>
                    <p style={bodyStyle}>
                        I wrote this paper for the Rhine Education Center's Theories of Psi course in April 2025. It
                        looks at anomalous perturbation, more commonly known as psychokinesis: the claim that mental
                        processes alone can influence physical matter, with no agreed-upon mechanism for how that
                        would actually work.
                    </p>
                    <p style={bodyStyle}>
                        The paper walks through the major theories that try to explain it, from Decision
                        Augmentation Theory's retrocausal model to James Carpenter's First Sight Theory to
                        quantum-consciousness approaches like Orchestrated Objective Reduction, developed in part by
                        the famous physicist Roger Penrose. It also covers more speculative ideas around subtle
                        energy and biophoton emission. From there it proposes concrete ways to test the mechanism
                        directly: Faraday cage isolation, pseudo-crisis conditions, and physical material analysis,
                        among others.
                    </p>
                </Col>
            </Row>

            {/* Highlights */}
            <div className="robotics-highlights" style={{ marginBottom: "0" }}>
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default AnomalousPerturbations;
