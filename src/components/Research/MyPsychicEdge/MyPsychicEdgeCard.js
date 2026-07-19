/* My Psychic Edge project card — site screenshot, body copy, and pull quote */
import React from "react";
import { Row, Col } from "react-bootstrap";
import landing from "../../../Assets/MPE/mpe.PNG";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CONTENT } from "../../../data/myPsychicEdgeCard";

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

function MyPsychicEdgeCard() {
    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "16px",
            marginBottom: "40px",
        }}>

            {/* Row 1: description left, image right */}
            <Row className="align-items-center g-3" style={{ marginBottom: "16px" }}>
                <Col md={5}>
                    <h3 style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", marginBottom: "16px" }}>
                        {CONTENT.subtitle}
                    </h3>
                    <p style={{ ...bodyStyle, marginBottom: "12px" }}>
                        <a
                            href="https://mypsychicedge.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                        >
                            My Psychic Edge<BsBoxArrowUpRight size={9} />
                        </a>
                        {" "}is a content site built around SEO optimized articles and research summaries regarding
                        parapsychology and consciousness studies. It sits between two camps that both fail to capture 
                        the essence of the phenomena. Academics reject anything psychic-adjacent as a research topic
                        on principle, before the data gets a fair look, which is itself unscientific. While believers 
                        borrow the language of science, cite studies out of context, and stretch findings past what 
                        they actually show. <em className="cyan"> Parapsychology is an excellent lense in which to study consciousness,
                        as it presents "edge cases" of conscious phenomena - experiences outside the norm  of conscious occurances - 
                        that could provide valuable context to how consciousness operates in accordance to physical laws.</em>{" "}
                        Though neither community, spiritual or scientific, is giving effective attention to these phenomena.
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: "12px" }}>
                        The site runs on "curiosity over certainty." While the possibility of things like 
                        telepathy, reincarnation, or energy healing are exciting ideas for human potential,
                        science has to document them, work with them and study them properly. 
                        Taking a question seriously means not deciding the answer in advance.
                        My Psychic Edge exists to raise awareness of the phenomenon that already have solid
                        research behind them, and to open up honest conversation about the rest. It's the
                        middle ground: a place genuinely exploring the edge of consciousness and human
                        potential, for people who think that's worth doing whether they already believe or
                        not.
                    </p>
                </Col>
                <Col md={7}>
                    <img
                        src={landing}
                        alt="My Psychic Edge landing page"
                        style={{ width: "100%", borderRadius: "16px", objectFit: "cover" }}
                    />
                </Col>
            </Row>

            {/* Row 2: pull quote */}
            <blockquote className="blockquote mb-0" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <p style={{ color: "var(--accent2)", fontFamily: "Lato, sans-serif" }}>
                    <em>"Consciousness is a singular of which the plural is unknown."</em>
                </p>
                <footer className="blockquote-footer">Erwin Schrödinger, physicist, Nobel laureate</footer>
            </blockquote>

        </div>
    );
}

export default MyPsychicEdgeCard;
