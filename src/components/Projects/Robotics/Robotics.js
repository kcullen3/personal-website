import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import NBRRCard from "./NBRRCard";
import Splinter from "./Splinter";
import Torus from "./Torus";
import CommunityCollaboration from "./ArtEngineering";

function Robotics() {
    return (
        <>
            <Particle />
            <Container fluid className="about-section">

                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        <strong className="white">New Bedford Research & Robotics</strong>
                    </h1>
                </Container>
                {/* NBRR box - full viewport width, minimal side padding */}
                <div style={{ padding: "0 12px" }}>
                    <NBRRCard />
                </div>

                <Container>
                    <hr style={{ borderColor: "rgba(155, 114, 207, 0.2)", margin: "60px 0" }} />
                    <h1 className="project-heading">
                        <strong className="white">The Torus Project</strong>
                    </h1>
                </Container>
                {/* Torus box - full viewport width, minimal side padding */}
                <div style={{ padding: "0 12px" }}>
                    <Torus />
                </div>



                <Container>
                    <hr style={{ borderColor: "rgba(155, 114, 207, 0.2)", margin: "60px 0" }} />
                    <h1 className="project-heading">
                        <strong className="white">From Vision to Viable</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <CommunityCollaboration />
                </div>

                <Container>
                    <hr style={{ borderColor: "rgba(155, 114, 207, 0.2)", margin: "60px 0" }} />
                    <h1 className="project-heading">
                        <strong className="white">Splinter</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <Splinter />
                </div>





            </Container>
        </>
    );
}

export default Robotics;
