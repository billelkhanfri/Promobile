import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import PropTypes from "prop-types";
import "../Home.scss";

function NavBar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid="md">
        <Navbar.Brand className="custom-nav" href="#">
          <img
            className="custom-logo"
            src="/images/web.png"
            alt="Third slide"
          />
          <span
            style={{
              color: "orange",
              fontWeight: "bolder",
              fontSize: "16px",
              textTransform: "uppercase",
            }}
          >
            {" "}
            Expert Soudure
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex  custom-links"
            style={{ maxHeight: "190px", overflowX: "auto" }}
            navbarScroll
          >
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              activeclassname="active-link"
              className="home-link"
            >
              ACCUEIL
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/reparation"
              activeclassname="active-link"
            >
              REPARATION
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/microsoudure"
              activeclassname="active-link"
            >
              MICROSOUDURE
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/accessoire"
              activeclassname="active-link"
            >
              ACCESSOIRE
            </Nav.Link>
          </Nav>
          <div className="call-location">
            <Button
              variant="outline-primary"
              className="button-with-icon d-flex"
            >
              {" "}
              <IoIosCall className="icon" /> 10204412258
            </Button>{" "}
            <Button variant="primary" className="button-with-icon d-flex">
              <ImLocation className="icon" />
              <span className="text">Localisation</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {};

export default NavBar;
