import React from "react";
import { Row, Col } from "react-bootstrap";
import landing from "../../../Assets/BackScratch/landing.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

const CONTENT = {
    subtitle: "I scratch yours, you scratch mine.",
    date: "2026 – Present",
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
                        {" "}is a community-first platform connecting small businesses and individuals for jobs, services, and bartering,
                        built for local economies instead of an algorithm. Think of an old-school neighborhood bulletin board,
                        but with a social layer and a built-in trading system. It's for the mom-and-pop shops, the side hustlers,
                        the tradespeople, and the neighbors that mainstream platforms overlook. Using it is simple:
                        <em className="cyan"> Post what you need. Post what you offer. Make a deal. Build something real with the people around you.
                        </em>
                    </p>
                    <p style={{ ...bodyStyle, marginBottom: "12px" }}>
                        Small businesses and freelancers don't need another platform with enterprise pricing and a learning curve.
                        They need a way to work with the people already around them. Bartering matters even when money isn't tight:
                        trading skills, goods, and services gives a local economy some give when cash flow gets unpredictable.
                        BackScratch also works for the other side of that trade, anyone who'd rather hire a local tradesperson,
                        find a neighborhood service, or support a small shop instead of a chain. And there's something that happens
                        when a neighborhood bakery trades with a local graphic designer, or a freelance photographer swaps sessions with a
                        massage therapist, that's just community forming the old way. Built by a systems engineer and startup consultant
                        who thinks local economies work better when the tools get out of the way.
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
