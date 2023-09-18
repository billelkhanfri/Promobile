import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Jumbotron } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "../Home.scss";

function Banner(props) {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col className="hero-left" md={6}>
            <Container>
              <h1
                className="w-100 fw-bold responsive-heading text-center"
                style={{ marginTop: "80px" }}
              >
                Expertise en Microsoudure
              </h1>
              <small style={{ color: "gray" }}>
                Spécialisés dans la réparation électronique, nous sommes
                également experts en microsoudure. Grâce à notre maîtrise de
                cette technique de pointe, nous sommes en mesure de résoudre les
                problèmes les plus complexes au niveau des circuits imprimés de
                vos smartphones, tablettes et ordinateurs, solution de
                réparation précise et fiable.{" "}
              </small>
            </Container>

            <Container className="text-center">
              <Button variant="warning" className=" mb-2" size="lg">
                Nous contacter
              </Button>
            </Container>
          </Col>
          <Col className="text-center" md={6}>
            <Image className="mt-5 mb-2" src="/images/hero.png" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

Banner.propTypes = {};

export default Banner;
