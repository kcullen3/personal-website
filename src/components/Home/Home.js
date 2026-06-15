/* Landing page — hero section with animated name scroll and profile image */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logomain.png";
import Particle from "../Particle";
import Scroll from "./Scroll";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 12 }} className="heading">
                Welcome!{" "}🙏
              </h1>

              <h1 className="heading-name">
                It's me, <strong className="main-name"> Keigan Cullen</strong>
              </h1>

              <div style={{ paddingTop: 33 }} className="scroll-container">
                <Scroll />
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ paddingTop: 33 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
