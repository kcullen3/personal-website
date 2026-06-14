import React from "react";
import { Row, Col } from "react-bootstrap";
import Slideshow from "./Slideshow";

import torus1 from "../../../Assets/Robotics/torus1.jpg";
import torus2 from "../../../Assets/Robotics/torus2.JPEG";
import torus3 from "../../../Assets/Robotics/torus3.jpg";
import torus4 from "../../../Assets/Robotics/torus4.JPG";
import torusVideo from "../../../Assets/Robotics/TorusVideo_web.mp4";

const SLIDES = [
    { img: torus1 },
    { img: torus2 },
    { img: torus3 },
    { img: torus4 },
];

const HIGHLIGHTS = [
    "Non-Planar 3D Printing on a 6-Axis Robotic Arm",
    "Microcontroller Integration",
    "Large-Scale Fabrication",
    "Wireless LED System Design & Control",
    "Team Leadership & Intern Management",
    "Art Installation Design & Engineering",
];

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
                    <p style={bodyStyle}>
                        At 12.5 feet in diameter, "The Torus" is a triangular-twisted torus ring printed in clear
                        PETG using a 6-axis robotic arm — not your a standard desktop 3D printer.
                        Eight individual parts, each massive by any standard. Inside: 40+ feet of
                        wirelessly controlled LED strip driven by a wireless microcontroller system.
                        Non-planar 3D printing on a robotic arm is rare. Doing it at this scale is rarer still.
                        The challenge wasn't just the hardware — it was getting every system to work simultaneously:
                        a ClearCore coordinating temperature controllers, motors, and sensors through entirely custom
                        C++ code.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>
                        On the project management side, I was leading a team of four directly on the Torus while
                        simultaneously managing 12–15 interns across the broader lab. The hardest part wasn't the
                        logistics — it was transferring the vision. Teaching people not just the technical skills,
                        but the difference between the research process and the manufacturing process. The moment an intern's
                        face lit up because they came to understand what we were building and how to do it — that was its own reward.
                    </p>
                </Col>
                <Col md={6}>
                    <p style={bodyStyle}>
                        The torus is one of the most mathematically compelling shapes in existence — an infinite
                        surface that folds endlessly back into itself, with no inside and no outside. In physics,
                        it describes the topology of spacetime under certain models and the structure of planetary
                        magnetic fields. Beyond the mathematical signifigance, it's visually stunning too.
                        It's one of those things that makes you stop and think — and that's exactly why I chose it.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>
                        The Torus was never just a cool print. It was a demonstration that a small nonprofit in New
                        Bedford could produce something most well-funded labs couldn't. The day it went up, I held
                        my breath the entire time. It still hangs in the NBRR facility today — lit, permanent, and
                        entirely unique.
                    </p>
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
