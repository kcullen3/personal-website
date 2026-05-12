/* Top navigation bar — fixed position, turns sticky/blurred on scroll */
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineBiotech } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { BiSolidConversation } from "react-icons/bi";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            {/* Home */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <span className="nav-icon-label">
                  <AiOutlineHome />
                  Home
                </span>
              </Nav.Link>
            </Nav.Item>

            {/* About */}
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <span className="nav-icon-label">
                  <AiOutlineUser />
                  About
                </span>
              </Nav.Link>
            </Nav.Item>

            {/* Projects Dropdown */}
            <Nav.Item>
              <NavDropdown
                title={
                  <span className="nav-icon-label">
                    <AiOutlineFundProjectionScreen />
                    Projects
                  </span>
                }
                id="projects-dropdown"
              >
                <NavDropdown.Item as={Link} to="/projects/backscratch" onClick={() => updateExpanded(false)}>
                  BackScratch
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/projects/robotics" onClick={() => updateExpanded(false)}>
                  Robotics
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/projects/coupkooreview" onClick={() => updateExpanded(false)}>
                  Coupkoo Review
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/projects/algotrade" onClick={() => updateExpanded(false)}>
                  Algorithmic Trading
                </NavDropdown.Item>

              </NavDropdown>
            </Nav.Item>

            {/* Research */}
            <Nav.Item>
              <NavDropdown
                title={
                  <span className="nav-icon-label">
                    <MdOutlineBiotech />
                    Research
                  </span>
                }
                id="research-dropdown"
              >
                <NavDropdown.Item as={Link} to="/research/gravitationalwaves" onClick={() => updateExpanded(false)}>
                  Gravitational Waves
                </NavDropdown.Item>

              </NavDropdown>
            </Nav.Item>

            {/* Services */}
            <Nav.Item>
              <Nav.Link as={Link} to="/services" onClick={() => updateExpanded(false)}>
                <span className="nav-icon-label">
                  <RiHandHeartLine />
                  Services
                </span>
              </Nav.Link>
            </Nav.Item>

            {/* Contact */}
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <span className="nav-icon-label">
                  <BiSolidConversation />
                  Contact
                </span>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
