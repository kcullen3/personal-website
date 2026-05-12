import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import WaveformComparisons from "./WaveformComparisons";
import NeuralSHO from "./NeuralSHO";

function GravitationalWaves() {
    return (
        <>
            <Particle />
            <Container fluid className="about-section">

                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        <strong className="white">Waveform Model Comparison</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <WaveformComparisons />
                </div>

                <Container>
                    <hr style={{ borderColor: "rgba(155, 114, 207, 0.2)", margin: "60px 0" }} />
                    <h1 className="project-heading">
                        <strong className="white">Neural ODE: Simple Harmonic Oscillator</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <NeuralSHO />
                </div>

            </Container>
        </>
    );
}

export default GravitationalWaves;
