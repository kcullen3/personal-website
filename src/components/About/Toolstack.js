import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Workspace from "../../Assets/TechIcons/GoogleWorkspace.svg";
import Claude from "../../Assets/TechIcons/Claude.svg";
import n8n from "../../Assets/TechIcons/n8n.svg";
import Rhino from "../../Assets/TechIcons/Rhino 8.svg";
import Supabase from "../../Assets/TechIcons/Supabase.png";
import Vercel from "../../Assets/TechIcons/Vercel.svg";
import Sentry from "../../Assets/TechIcons/sentry.svg";


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
      <Col xs={4} md={2} className="tech-icons ">
        <img src={n8n} alt="n8n" className="tech-icon-images" />
        <div className="tech-icons-text">n8n</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Rhino} alt="Rhino" className="tech-icon-images" />
        <div className="tech-icons-text">Rhino 8</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Vercel} alt="Vercel" className="tech-icon-images" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Supabase} alt="Supabase" className="tech-icon-images" />
        <div className="tech-icons-text">Supabase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Sentry} alt="Sentry" className="tech-icon-images" />
        <div className="tech-icons-text">Sentry</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
