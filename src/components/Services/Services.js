import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ServiceCard from "./ServiceCard";

import healing from "../../Assets/Services/healing.jpg";
import consulting from "../../Assets/Services/consulting.jpg";
import website from "../../Assets/Services/website.jpg";
import art from "../../Assets/Services/art.jpg";
import tech from "../../Assets/Services/tech.jpg";

const SERVICES = [
    {
        title: "Business Consulting",
        description: `Physics training, startup experience, genuine psychic ability. 
        Most consultants offer one. I bring all three to the problems your current strategy can't crack`,
        img: consulting,
        url: "/contact",
        isExternal: false,
    },
    {
        title: "Web Design & Development",
        description: `Your website should feel like you — not a template with your logo on it. 
        I build web presence that's functional, distinctive, and actually yours.`,
        img: website,
        url: "/contact",
        isExternal: false,
    },
    {
        title: "Technical Consulting",
        description: `The gap between 'we need this technology' and 'this technology actually 
        works for us' is where most teams get stuck. I close that gap — from AI implementation 
        to full systems engineering — without the chaos of figuring it out alone.`,
        img: tech,
        url: "/contact",
        isExternal: false,
    },
    {
        title: "Earth Healing",
        description: `Energy and trauma stay stuck in the body long after the mind has moved on — 
        as a certified Reiki practitioner and intuitive reader with a physics background, 
        I work at the level where most healing methods can't reach.`,
        img: healing,
        url: "https://earthhealing.life/",
        isExternal: true,
    },
    {
        title: "Project Collaboration",
        description: "For artists, creators and builders who need someone who speaks both languages — turning vision into reality and reality into a sustainable practice.",
        img: art,
        url: "/contact",
        isExternal: false,
    },
];

function Services() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                    My <strong className="cyan">Services</strong>
                </h1>
                <p style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "var(--font-lg)",
                    marginBottom: "40px",
                }}>
                    What I bring to the table — and how I can help you.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "40px", rowGap: "24px" }}>
                    {SERVICES.map((service, i) => (
                        <Col key={i} md={4} className="project-card">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                img={service.img}
                                url={service.url}
                                isExternal={service.isExternal}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Services;
