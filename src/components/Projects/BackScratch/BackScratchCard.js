import React from "react";
import { Row, Col } from "react-bootstrap";
import landing from "../../../Assets/BackScratch/landing.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

const CONTENT = {
    subtitle: "Made by the little people, for the little people.",
    date: "2024 – Present",
};

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

const collageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
};

function BackScratchCard() {
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
                            href="https://backscratch.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                        >
                            BackScratch<BsBoxArrowUpRight size={9} />
                        </a>
                        {" "}is a community-first platform connecting small businesses and individuals for jobs, services, and bartering
                        — built for local economies, not the algorithm. Think of an old-school neighborhood bulletin board,
                        but with a social layer and a built-in trading system. BackScratch exists for the mom-and-pop shops, the side hustlers,
                        the tradespeople, and the neighbors that mainstream platforms overlook. Using it is simple:
                        <em className="cyan"> Post what you need. Post what you offer. Make a deal. Build something real with the people around you.
                        </em>
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: "12px" }}>
                        Small businesses and freelancers don't need another platform with enterprise pricing and a learning curve
                        — they need a way to work with the people already around them. Bartering isn't just a solution for when money is tight;
                        it's a more resilient model. When markets fluctuate and cash flow gets unpredictable, the ability to trade skills, goods,
                        and services creates stability that money alone can't. BackScratch is also for the people on the other side of that equation
                        — anyone who'd rather hire a local tradesperson, find a neighborhood service, or support a small shop can do so, investing in
                        their own community. Beyond the economics, there's something that happens when a neighborhood bakery trades
                        with a local graphic designer, or a freelance photographer helps a massage therapist in exchange for sessions — community forms.
                        BackScratch is the infrastructure for that. Built by a systems engineer and startup consultant who believes the right tools,
                        in the right hands, change how a local economy breathes.
                    </p>
                </Col>
                <Col md={7}>
                    <img
                        src={landing}
                        alt="BackScratch preview"
                        style={{ width: "100%", borderRadius: "16px", objectFit: "cover" }}
                    />
                </Col>
            </Row>

        </div>
    );
}

export default BackScratchCard;
