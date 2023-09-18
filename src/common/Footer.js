import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container fluid="md" className="pt-4">
        <Row>
          <Col md={6}>
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
            <p>
              Spécialisés dans la réparation électronique, nous sommes également
              experts en microsoudure. Grâce à notre maîtrise de cette technique
              de pointe, nous sommes en mesure de résoudre les problèmes les
              plus complexes au niveau des circuits imprimés de vos smartphones,
              tablettes et ordinateurs, solution de réparation précise et
              fiable.{" "}
            </p>{" "}
          </Col>
          <Col md={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Contact</h5>
            <p>123 Street, City</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={2}>
            <h5>Contact</h5>
            <p>123 Street, City</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
