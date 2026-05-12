/* Secondary home section — currently unused, reserved for future content */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.0em" }}>
              WEBSITE'S CURRENTLY UNDER <span className="cyan"> DEVELOPMENT </span>
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
