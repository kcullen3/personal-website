import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Slideshow from "./Slideshow";

import splinter from "../../../Assets/Robotics/splinter.png";
import splinterGuts from "../../../Assets/Robotics/splinter_guts.png";
import splinterExplosion from "../../../Assets/Robotics/splinter_explosion.png";
import splinter1 from "../../../Assets/Robotics/splinter1.png";
import splinter2 from "../../../Assets/Robotics/splinter2.png";
import splinter3 from "../../../Assets/Robotics/splinter3.png";
import splinter4 from "../../../Assets/Robotics/splinter4.png";
import splinter5 from "../../../Assets/Robotics/splinter5.png";
import splinter6 from "../../../Assets/Robotics/splinter6.png";
import splinter7 from "../../../Assets/Robotics/splinter7.png";
import splinter8 from "../../../Assets/Robotics/splinter8.png";
import splinterExcel from "../../../Assets/Robotics/SplinterCablesConnectorsIOs.pdf";
import splinterDoc from "../../../Assets/Robotics/SplinterToolheads.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SLIDES = [
    { img: splinter, caption: "Me 'n Splinter hanging out" },
    { img: splinter1, caption: "Splinter's control panel" },
    { img: splinter2, caption: "ABB's I/Os" },
    { img: splinter3, caption: "ClearCore microcontroller setup" },
    { img: splinter4, caption: "Custom 3D printed house for temp. controllers" },
    { img: splinter5, caption: "Top-mounted clay extruder" },
    { img: splinter6, caption: "Custom front-mounted thermoplastic extruder" },
    { img: splinter7, caption: "Front-mounted clay extruder" },
    { img: splinter8, caption: "Custom machined wiring harness" },
    { img: splinterGuts, caption: "Me messing with Splinter's insides" },
    { img: splinterExplosion, caption: "A perfectly timed photo - of my new clay extruder hose exploding!" },
];

const HIGHLIGHTS = [
    "Systems Engineering & Multi-System Integration",
    "Electrical Systems Design (120V AC / 24V DC / Signals)",
    "Technical Documentation & SOPs",
    "Custom C++ Firmware & Motor Control",
    "Custom Toolhead Design & Fabrication",
];

const CONTENT = {
    para1: `"Splinter" was one of my best friend's at NBRR, he is an ABB brand 6-axis robotic arm 
    capable of printing with both thermoplastic pellets and ceramic clay — two completely different materials, 
    two completely different electrical systems, one machine. Each toolhead required its own custom 3D printed parts and
    wiring architecture spanning 120V AC, 24V DC, and low-voltage signal lines across three custom connectors, all coordinated
    through a layered control stack: ABB I/Os, solid state relays, temperature controllers, and a Teknic ClearCore running 
    custom C++ code I wrote from scratch.`,
    para2: `The real challenge wasn't any single system — it was making all of them coexist without burning anything down. 
    That meant designing fault-tolerant switching logic to prevent one toolhead from accidentally frying the other, 
    writing two entirely separate motor control scripts for two motors that couldn't be more different, and documenting 
    everything clearly enough that someone else could operate it safely. Splinter is the kind of project that teaches 
    you what you're actually made of as an engineer — because the consequences of getting it wrong are immediate, 
    expensive, and very loud.`,
    excelLabel: "Cables, Connectors & IOs",
    excelCaption: "Full wiring reference for Splinter's electrical systems.",
    docLabel: "Splinter Toolheads SOP",
    docCaption: "Standard operating procedure & design documentation for Splinter's modular toolhead system.",
};

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

function SmallPdf({ file, label, caption }) {
    const [numPages, setNumPages] = useState(null);

    return (
        <div style={{ textAlign: "center" }}>
            <h5 style={{
                color: "var(--primary)",
                fontFamily: "Nunito, sans-serif",
                marginBottom: "10px",
            }}>
                {label}
            </h5>
            <div style={{
                overflow: "auto",
                borderRadius: "8px",
                border: "1px solid rgba(155,114,207,0.3)",
                maxHeight: "360px",
                marginBottom: "10px",
            }}>
                <Document
                    file={file}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    className="d-flex flex-column align-items-center"
                >
                    {Array.from(new Array(numPages), (_, i) => (
                        <Page key={i + 1} pageNumber={i + 1} scale={0.5} />
                    ))}
                </Document>
            </div>
            <p style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "Lato, sans-serif",
                fontSize: "0.9em",
                fontStyle: "italic",
                marginBottom: "10px",
            }}>
                {caption}
            </p>
            <Button variant="primary" href={file} target="_blank" size="sm">
                <AiOutlineDownload /> &nbsp;Download
            </Button>
        </div>
    );
}

function Splinter() {
    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "16px",
            marginBottom: "40px",
        }}>
            {/* Row 1: slideshow left, text right */}
            <Row className="align-items-center g-3" style={{ marginBottom: "24px" }}>
                <Col md={6}>
                    <Slideshow slides={SLIDES} noBorder />
                </Col>
                <Col md={6}>
                    <p style={{ ...bodyStyle, marginBottom: "16px" }}>
                        "Splinter" was one of my best friend's at NBRR, he is an ABB brand 6-axis robotic arm capable of printing with both thermoplastic pellets and ceramic clay — two completely different materials, two completely different electrical systems, one machine. Each toolhead required its own wiring architecture spanning 120V AC, 24V DC, and low-voltage signal lines across three custom connectors, all coordinated through a layered control stack: ABB I/Os, solid state relays, temperature controllers, and a Teknic ClearCore running{" "}
                        <a
                            href="https://github.com/kcullen3/robotic-arm-toolhead-control"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                        >
                            custom C++ code
                        </a>
                        {" "}I wrote from scratch.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>{CONTENT.para2}</p>
                </Col>
            </Row>

            <div className="robotics-highlights" style={{ marginBottom: "24px" }}>
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>

            {/* Row 2: two small PDFs side by side */}
            <Row className="g-4">
                <Col md={6}>
                    <SmallPdf
                        file={splinterExcel}
                        label={CONTENT.excelLabel}
                        caption={CONTENT.excelCaption}
                    />
                </Col>
                <Col md={6}>
                    <SmallPdf
                        file={splinterDoc}
                        label={CONTENT.docLabel}
                        caption={CONTENT.docCaption}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Splinter;
