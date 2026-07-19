import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { socialLinks } from "../data/social";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Built by Keigan Cullen</h3>
         <p style={{ fontSize: "var(--font-xs)", opacity: 0.7 }}>
            Original design by{" "}
            <a href="https://github.com/soumyajit4419/Portfolio" 
            target="_blank" rel="noopener noreferrer">
            Soumyajit Behera
            </a>
         </p>
        </Col>
<Col md="4" className="footer-copywright">
  <h3>© {year} Keigan Cullen</h3>
</Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <li className="social-icons" key={i}>
                <a
                  href={href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
