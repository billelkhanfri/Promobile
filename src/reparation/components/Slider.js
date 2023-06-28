import React from "react";
import PropTypes from "prop-types";
import "../Reparation.scss";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <div className="carousel-overlay"> </div>
          <img
            className="d-block w-100 custom-height"
            src="/images/nikolai-chernichenko-4DLzZXyC8_k-unsplash.jpg"
            alt="First"
          />

          <Carousel.Caption className="animate-caption">
            <h1 className="orange-bg">First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay"> </div>
          <img
            className="d-block w-100 custom-height"
            src="/images/revendo-DnLhg2eiozc-unsplash (1).jpg"
            alt="First"
          />

          <Carousel.Caption className="animate-caption">
            <h1 className="orange-bg">First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-overlay"> </div>
          <img
            className="d-block w-100 custom-height"
            src="/images/insung-yoon-dRUqU4RpeOE-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="animate-caption">
            <h1 className="orange-bg">Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay"> </div>
          <img
            className="d-block w-100 custom-height"
            src="/images/kilian-seiler-PZLgTUAhxMM-unsplash.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="animate-caption">
            <h1 className="orange-bg">Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
Slider.propTypes = {};

export default Slider;
