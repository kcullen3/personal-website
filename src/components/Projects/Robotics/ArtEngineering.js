import React from "react";
import { Row, Col } from "react-bootstrap";

import artist1 from "../../../Assets/Robotics/artist1.png";
import artist2 from "../../../Assets/Robotics/artist2.png";
import clayPrint from "../../../Assets/Robotics/clayprint.mp4";

const HIGHLIGHTS = [
    "Startup Strategy & Consulting",
    "Cross-Disciplinary Communication & Collaboration",
    "Cost Analysis & Financial Planning",
    "Real-time Problem Solving",

];

const CONTENT = {
    subtitle: "Creative Vision → Technical Execution → Business Reality",
    para1: `Some people understand technology. Others understand people. 
    Rarely do you find someone who can sit across from an artist mid-residency, 
    understand exactly what they're trying to create, and then build the technical 
    bridge to get them there — while also helping them understand the economics of making it last.`,
    para2:
        `That's more of the work I did at NBRR. Embedded in a live ecosystem of artists, 
    engineers and early-stage startups, I became the connective tissue between 
    ambitious ideas and functional outcomes. I worked directly alongside artists 
    like Fallon Navarro and Lilach Porges — integrating robotics into their residencies, 
    solving technical challenges in real time, and helping them think through the financial 
    architecture of their practice. For startups, I served as a strategic and technical collaborator,
     identifying how emerging robotics technology could be applied in ways their teams hadn't yet imagined.`,
    para3: `What I learned is that the gap between a great idea and a sustainable one is almost
     always a mix of planning, execution and clarity — and that's exactly where I operate best.`,
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
                        That's more of the work I did at NBRR. Embedded in a live ecosystem of artists,
                        engineers and early-stage startups, I became the connective tissue between
                        ambitious ideas and functional outcomes. I worked directly alongside artists
                        like{" "}
                        <a href="https://www.fallonnavarro.com/new-bedford-research--robotics.html" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}>Fallon Navarro</a>
                        {" "}and{" "}
                        <a href="https://www.procode-dress.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}>Lilach Porges</a>
                        {" "}— integrating robotics into their residencies,
                        solving technical challenges in real time, and helping them think through the financial
                        architecture of their practice. For startups, I served as a strategic and technical collaborator,
                        identifying how emerging robotics technology could be applied in ways their teams hadn't yet imagined.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>{CONTENT.para3}</p>
                </Col>
                <Col md={6}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "8px",
                        alignItems: "center",
                    }}>
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
