import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import MultiMAEnsemble from "./MultiMAEnsembleCard";

function AlgoTrade() {
    return (
        <>
        <Particle static />
        <Container fluid className="about-section">
            <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        <strong className="white">Multi-MA Ensemble</strong>
                    </h1>
                </Container>
                {/* Multi-MA Ensemble - full viewport width, minimal side padding */}
                <div style={{ padding: "0 12px" }}>
                    <MultiMAEnsemble />
                </div>
        </Container>
        </>
    );
}

export default AlgoTrade;