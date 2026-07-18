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
                        PETG using a 6-axis robotic arm, not a standard desktop 3D printer.
                        Eight individual parts, each massive by any standard. Inside: 40+ feet of
                        wirelessly controlled LED strip driven by a wireless microcontroller system.
                        Non-planar 3D printing on a robotic arm is already rare, and doing it at this
                        scale pushes it further. The hardware was one problem. Getting every system to
                        run at the same time was the real one: a ClearCore coordinating temperature
                        controllers, motors, and sensors through custom C++ code.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>
                        On the project management side, I was leading a team of four directly on the Torus while
                        simultaneously managing 12–15 interns across the broader lab. The logistics were easy
                        compared to actually getting people to see what we were building. Teaching people not
                        just the technical skills, but the difference between the research process and the
                        manufacturing process. I remember specific moments where an intern's face would just
                        light up because it finally clicked, what we were building and how to actually do it.
                        Those moments made the rest of it worth it.
                    </p>
                </Col>
                <Col md={6}>
                    <p style={bodyStyle}>
                        A torus is one of those shapes that's more interesting the longer you look at it, an
                        infinite surface that folds endlessly back into itself, with no inside and no outside.
                        In physics, it shows up describing the topology of spacetime under certain models and
                        the structure of planetary magnetic fields. It's also just a good-looking shape. That
                        combination, math that means something and a form that holds your attention, is why I
                        picked it.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: 0 }}>
                        The Torus wasn't just a cool print. It proved a small nonprofit in New Bedford could build
                        something most well-funded labs couldn't pull off. The day it went up, I held my breath
                        the entire time. It still hangs in the NBRR facility today, lit up and one of a kind.
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
