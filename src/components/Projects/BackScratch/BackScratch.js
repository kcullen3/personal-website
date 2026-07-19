import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import BackScratchCard from "./BackScratchCard";

function BackScratch() {
    return (
        <>
            <Particle static />
            <Container fluid className="about-section">

                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        <strong className="white">BackScratch</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <BackScratchCard />
                </div>


            </Container>
        </>
    );
}

export default BackScratch;