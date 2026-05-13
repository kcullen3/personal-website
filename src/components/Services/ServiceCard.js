import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const titleStyle = {
    color: "var(--primary)",
    fontFamily: "Nunito, sans-serif",
    marginBottom: "4px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
};

const bodyStyle = {
    color: "var(--text)",
    fontFamily: "Lato, sans-serif",
    lineHeight: "1.9",
    fontSize: "var(--font-md)",
    paddingLeft: "24px",
    paddingRight: "24px",
    textAlign: "left",
    textIndent: "0",
};

function ServiceCard({ title, description, img, imgAlt, url, isExternal }) {
    const linkProps = { href: url, target: "_blank", rel: "noopener noreferrer" };

    return (
        <Card className="project-card-view" style={{ height: "100%" }}>
            {img && (
                <Card.Img
                    variant="top"
                    src={img}
                    alt={imgAlt || title}
                    style={{ width: "100%", height: "auto" }}
                />
            )}
            <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={titleStyle}>
                    {title}
                    {url && (
                        isExternal
                            ? <a {...linkProps} style={{ color: "var(--accent1_dull)", lineHeight: 1 }}><BsBoxArrowUpRight size={14} /></a>
                            : <Link to={url} style={{ color: "var(--accent1_dull)", lineHeight: 1 }}><BsBoxArrowUpRight size={14} /></Link>
                    )}
                </h4>
                <p style={bodyStyle}>{description}</p>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard;
