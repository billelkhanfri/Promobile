// export default devices;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Devices = () => {
  const images = [
    {
      src: "/images/repairs/kisspng-apple-10-5-inch-ipad-pro-apple-pencil-ipad-air-2-ipad-5ad6d45b45a306.2318749915240285072853.png",
      alt: "Image 1",
      name: "ipad",
    },
    {
      src: "/images/repairs/kisspng-apple-10-5-inch-ipad-pro-apple-pencil-ipad-air-2-ipad-5ad6d45b45a306.2318749915240285072853.png",
      alt: "Image 2",
      name: "ipad",
    },
    {
      src: "/images/repairs/kisspng-imac-desktop-computers-intel-core-i5-apple-macbook-5ac9584d905070.8287762915231447815911.png",
      alt: "Image 3",
      name: "imac",
    },
    {
      src: "/images/repairs/kisspng-iphone-8-plus-iphone-x-apple-facetime-telephone-iphone-x-5abb71e0d52224.827630021522233824873.png",
      alt: "Image 4",
      name: "iphone",
    },
    {
      src: "/images/repairs/kisspng-macbook-pro-laptop-macbook-air-apple-macbook-5ac71e3bdbedb2.3382700515229988439008.png",
      alt: "Image 5",
      name: "Macbook",
    },
  ];

  return (
    <Container>
      <h2 className="repair-title">Réparation d'appareils électroniques</h2>

      <div className="container">
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image.src} alt={image.alt} className="device-img" />
            <h3 className="device-name">{image.name}</h3>{" "}
            {/* Ajouter le titre h3 avec la classe device-name */}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Devices;
