import React from "react";
import { Row, Col } from "react-bootstrap";
import Slideshow from "./Slideshow";

import torusVideo from "../../../Assets/Robotics/TorusVideo_web.mp4";
import { SLIDES, HIGHLIGHTS, leftParagraphs, rightParagraphs } from "../../../data/torus";

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

function Torus() {
    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "16px",
            marginBottom: "40px",
        }}>
            <Row className="align-items-start g-3" style={{ marginBottom: "24px" }}>
                <Col md={6} className="text-center">
                    <video
                        controls
                        className="torus-video"
                        style={{
                            width: "100%",
                            objectFit: "contain",
                            borderRadius: "12px",
                            display: "block",
                        }}
                    >
                        <source src={torusVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
                <Col md={6}>
                    <Slideshow slides={SLIDES} noBorder />
                </Col>
            </Row>



            <Row className="g-3">
                <Col md={6}>
                    {leftParagraphs.map((paragraph, i) => (
                        <p
                            key={i}
                            style={i === leftParagraphs.length - 1 ? { ...bodyStyle, marginBottom: 0 } : bodyStyle}
                        >
                            {paragraph}
                        </p>
                    ))}
                </Col>
                <Col md={6}>
                    {rightParagraphs.map((paragraph, i) => (
                        <p
                            key={i}
                            style={i === rightParagraphs.length - 1 ? { ...bodyStyle, marginBottom: 0 } : bodyStyle}
                        >
                            {paragraph}
                        </p>
                    ))}
                </Col>
            </Row>

            <div className="robotics-highlights" style={{ marginTop: "16px" }}>
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Torus;
