import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Timeline from "./Timeline";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import profilepic from "../../Assets/about.png";
import { socialLinks } from "../../data/social";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>

          {/* About Me Heading — outside the box */}
          <h1 style={{
            fontSize: "var(--font-2xl)",
            paddingBottom: "20px",
            paddingTop: "30px",
            textAlign: "center",
          }}>
            <strong className="cyan">About Me</strong>
          </h1>

          {/* Border wraps both card and image */}
          <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            padding: "20px",
            marginBottom: "50px",
          }}>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <Aboutcard />
              </Col>
              <Col
                md={5}
                style={{
                  paddingBottom: "50px",
                }}
                className="about-img"
              >
                <img src={profilepic} alt="about" className="img-fluid" />
              </Col>
            </Row>
          </div>

          {/* Timeline Section */}
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            My <strong className="cyan">Journey</strong>
          </h1>
          <Timeline />

          {/* Skills Section */}
          <h1 className="project-heading" style={{ paddingTop: "50px" }}>
            Technical <strong className="cyan">Skillset</strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="cyan">Tools</strong> I Use
          </h1>
          <Toolstack />

        </Container>
      </Container>

      {/* Social Links */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <p style={{ fontSize: "var(--font-2xl)" }}>
              <span className="cyan">Check me out </span> here too!
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <li className="social-icons" key={i}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul >
          </Col >
        </Row >
      </Container >
    </>
  );
}

export default About;