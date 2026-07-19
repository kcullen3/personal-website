/* Technical skills grid — displays programming languages and frameworks as icon+label tiles */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { techIcons } from "../../data/techstack";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          <img src={tech.icon} alt={tech.alt} className="tech-icon-images" />
          <div className="tech-icons-text">{tech.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
