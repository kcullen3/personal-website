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
        description: "Strategic advisory for startups, nonprofits, and purpose-driven organizations. A rare combination of scientific rigor, startup experience, and intuitive insight that most consultants simply can't offer.",
        img: consulting,
        url: "/contact",
        isExternal: false,
    },
    {
        title: "Web Design & Development",
        description: "Full-stack web presence built with intention — not just functional, but an authentic expression of your brand and vision.",
        img: website,
        url: "/contact",
        isExternal: false,
    },
    {
        title: "Technical Consulting",
        description: "Engineering and research expertise applied to real problems. Especially strong for organizations building at the edge of what's possible.",
        img: tech,
        url: "/contact",
        isExternal: false,
    },
    {
        title: "Earth Healing",
        description: "Professional energy healing and psychic services. A unique credibility bridge — a physicist and researcher who also genuinely heals.",
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
                    fontSize: "1.25em",
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
