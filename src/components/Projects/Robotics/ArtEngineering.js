import React from "react";
import { Row, Col } from "react-bootstrap";

import artist1 from "../../../Assets/Robotics/artist1.png";
import artist2 from "../../../Assets/Robotics/artist2.png";
import clayPrint from "../../../Assets/Robotics/clayprint.mp4";
import { HIGHLIGHTS, CONTENT } from "../../../data/artEngineering";

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

const collageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    display: "block",
};

function CommunityCollaboration() {
    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "16px",
            marginBottom: "40px",
        }}>
            {/* Row 1: text left, collage right */}
            <Row className="align-items-center g-3" style={{ marginBottom: "24px" }}>
                <Col md={6}>
                    <h4 style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", marginBottom: "4px" }}>
                        {CONTENT.subtitle}
                    </h4>
                    <p style={{ ...bodyStyle, marginBottom: "16px" }}>{CONTENT.para1}</p>
                    <p style={{ ...bodyStyle, marginBottom: "16px" }}>
                        That's most of the work I did at NBRR. I was embedded in a live mix of artists,
                        engineers, and early-stage startups, and I ended up being the person who
                        translated between ambitious ideas and things that actually worked. I worked
                        directly alongside artists like{" "}
                        <a href="https://www.fallonnavarro.com/new-bedford-research--robotics.html" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}>Fallon Navarro</a>
                        {" "}and{" "}
                        <a href="https://www.procode-dress.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}>Lilach Porges</a>
                        {" "}integrating robotics into their residencies,
                        solving technical problems as they came up, and helping them think through
                        the money side of their practice. With startups, I worked as a technical
                        collaborator, showing teams ways robotics could solve problems they hadn't
                        thought to apply it to yet.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>{CONTENT.para3}</p>
                </Col>
                <Col md={6}>
                    <div className="art-collage" style={{ alignItems: "center" }}>
                        <img src={artist1} alt="Artist residency" style={collageStyle} />
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={collageStyle}
                        >
                            <source src={clayPrint} type="video/mp4" />
                        </video>

                        <img src={artist2} alt="Artist residency" style={collageStyle} />
                    </div>
                </Col>
            </Row>

            {/* Highlights */}
            <div className="robotics-highlights">
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommunityCollaboration;
