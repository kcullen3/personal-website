/* Technical skills grid — displays programming languages and frameworks as icon+label tiles */
import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Terminal from "../../Assets/TechIcons/Terminal.svg";
import Julia from "../../Assets/TechIcons/Julia.svg";
import CSS from "../../Assets/TechIcons/Css.svg";
import Pandas from "../../Assets/TechIcons/Pandas.svg";
import Latex from "../../Assets/TechIcons/Latex.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import numpy from "../../Assets/TechIcons/numpy.svg";
import matplotlib from "../../Assets/TechIcons/graph.svg";
import MATLAB from "../../Assets/TechIcons/Matlab.svg";
import Typescript from "../../Assets/TechIcons/typescript.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={numpy} alt="numpy" className="tech-icon-images" />
        <div className="tech-icons-text">numpy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={matplotlib} alt="Matplotlib" className="tech-icon-images" />
        <div className="tech-icons-text">Matplotlib</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Pandas} alt="Pandas" className="tech-icon-images" />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Julia} alt="julia" className="tech-icon-images" />
        <div className="tech-icons-text">Julia</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Terminal} alt="terminal" className="tech-icon-images" />
        <div className="tech-icons-text">CLI/bash/SSH</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Latex} alt="latex" className="tech-icon-images" />
        <div className="tech-icons-text">LaTeX</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" className="tech-icon-images" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="Typescript" className="tech-icon-images" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MATLAB} alt="MATLAB" className="tech-icon-images" />
        <div className="tech-icons-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" className="tech-icon-images" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" className="tech-icon-images" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" className="tech-icon-images" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="sql" className="tech-icon-images" />
        <div className="tech-icons-text">SQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
