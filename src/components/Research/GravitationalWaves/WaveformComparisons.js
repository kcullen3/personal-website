import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import presentationFile from "../../../Assets/Research/WaveformComparisons.pdf";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { HIGHLIGHTS } from "../../../data/waveformComparisons";

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

function WaveformComparisons() {
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
                Computational Physics Research
            </h4>
            <p style={{ color: "var(--accent1)", fontSize: "var(--font-sm)", marginBottom: "20px" }}>
                UMass Dartmouth &bull; 2020–2022
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
                        During my computational physics research position at UMass Dartmouth,
                        I developed a high-performance scientific computing pipeline to compare
                        gravitational wave models across thousands of simulated black hole mergers.
                        The framework was designed to be model-agnostic, applied here to the EMRI surrogate
                        and EOBNRv2HM approximant, but adaptable to any two waveform models. The work involved
                        waveform analysis, numerical error quantification, and tracking down a floating-point
                        precision bug in a widely used surrogate model that was producing non-physical artifacts
                        in computed mismatches. I reported the bug directly to the development team. Built on
                        Python, LALSuite, and the LIGO Scientific Collaboration's open-source toolchain, and run
                        on a university supercomputer. (
                        <a
                            href="https://github.com/kcullen3/gravitational-wave-model-comparisons"
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

export default WaveformComparisons;
