/* My Psychic Edge — research/affiliate site project detail page */
import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import MyPsychicEdgeCard from "./MyPsychicEdgeCard";

function MyPsychicEdge() {
    return (
        <>
            <Particle />
            <Container fluid className="about-section">

                <Container>
                    <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                        <strong className="white">My Psychic Edge</strong>
                    </h1>
                </Container>
                <div style={{ padding: "0 12px" }}>
                    <MyPsychicEdgeCard />
                </div>


            </Container>
        </>
    );
}

export default MyPsychicEdge;
