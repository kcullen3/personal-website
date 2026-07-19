import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../data/services";

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
