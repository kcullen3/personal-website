import React from "react";
import { Row, Col } from "react-bootstrap";

import nbrrAction from "../../../Assets/Robotics/NBRRAction.mp4";
import event1 from "../../../Assets/Robotics/event1.png";
import event2 from "../../../Assets/Robotics/event2.png";
import eventTimelapse from "../../../Assets/Robotics/eventtimelapse.mp4";
import nbrrBooth from "../../../Assets/Robotics/nbrrbooth.png";

const HIGHLIGHTS = [
    "3D Design & Rapid Prototyping",
    "AI Development & Implementation",
    "K-12 STEM Education & Intern Mentorship",
    "Grant Writing & Community Engagement",
    "Startup Facilitation & Project Management",
    "Robotics Engineering & Assembly",
];

const CONTENT = {
    subtitle: "Intern → Research Assistant → Research Engineer & Educator",
    date: "Jul 2023 – Apr 2025",
};

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
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
};

function NBRRCard() {
    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "16px",
            marginBottom: "40px",
        }}>

            {/* Row 1: description left, video right */}
            <Row className="align-items-center g-3" style={{ marginBottom: "16px" }}>
                <Col md={5}>
                    <h4 style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", marginBottom: "4px" }}>
                        {CONTENT.subtitle}
                    </h4>
                    <p style={{ color: "var(--accent1)", fontSize: "var(--font-sm)", marginBottom: "16px" }}>
                        {CONTENT.date}
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: "12px" }}>
                        <a
                            href="https://researchandrobotics.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                        >
                            New Bedford Research & Robotics
                        </a>
                        {" "}is a non-profit that builds community through robotics, research, and
                        technology. It runs a professional lab, hosts educational programs, and supports
                        startups and R&D projects. I joined as an intern in the summer of 2023 and quickly
                        became one of the core members of the team.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: "20px" }}>
                        As one of the organization's first hires, I helped build the infrastructure the
                        non-profit needed from the ground up. The job asked for a lot of range: wiring and
                        assembly, CAD design, research analysis, project management, AI development, K-12
                        education, grant writing, and startup facilitation. No two days looked the same.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: "0" }}>
                        NBRR moved fast and stayed hands-on, and it gave me room to grow across a lot of
                        disciplines at once, sharpening my technical work while building my ability to lead,
                        teach, and build things from scratch. I left in April 2025 to pursue my own ventures,
                        but the experience changed how I think as an engineer, educator, and builder.
                    </p>
                </Col>

                <Col md={7}>
                    <video
                        controls
                        style={{
                            width: "100%",
                            borderRadius: "8px",
                            display: "block",
                        }}
                    >
                        <source src={nbrrAction} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>

            {/* Row 2: highlights */}
            <div className="robotics-highlights" style={{ marginBottom: "16px" }}>
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>

            {/* Row 3: collage — nbrrbooth | timelapse | event1 | event2 */}
            <div className="nbrr-collage">
                <img src={nbrrBooth} alt="NBRR booth" style={collageStyle} />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={collageStyle}
                >
                    <source src={eventTimelapse} type="video/mp4" />
                </video>
                <img src={event1} alt="NBRR event" style={collageStyle} />
                <img src={event2} alt="NBRR event" style={collageStyle} />
            </div>

        </div>
    );
}

export default NBRRCard;
