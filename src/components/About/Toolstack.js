import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Office from "../../Assets/TechIcons/MicrosoftOffice.svg";
import Workspace from "../../Assets/TechIcons/GoogleWorkspace.svg";
import Claude from "../../Assets/TechIcons/Claude.svg";
import Rhino from "../../Assets/TechIcons/Rhino 8.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Office} alt="Office" className="tech-icon-images" />
        <div className="tech-icons-text"> Microsoft Office</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Workspace} alt="Workspace" className="tech-icon-images" />
        <div className="tech-icons-text">Google Workspace</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Claude} alt="Claude" className="tech-icon-images" />
        <div className="tech-icons-text">Claude</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Rhino} alt="Rhino" className="tech-icon-images" />
        <div className="tech-icons-text">Rhino 8</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
