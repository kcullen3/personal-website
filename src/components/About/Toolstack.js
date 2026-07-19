import React from "react";
import { Col, Row } from "react-bootstrap";
import { toolIcons } from "../../data/toolstack";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolIcons.map((tool, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          <img src={tool.icon} alt={tool.alt} className="tech-icon-images" />
          <div className="tech-icons-text">{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
