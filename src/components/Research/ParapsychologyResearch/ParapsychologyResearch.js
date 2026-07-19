import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import AnomalousPerturbations from "./AnomalousPerturbations";

function ParapsychologyResearch() {
    return (
        <>
            <Particle static />
            <Container fluid className="about-section">
                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        <strong className="white">Parapsychology Research</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <AnomalousPerturbations />
                </div>
            </Container>
        </>
    );
}

export default ParapsychologyResearch;
