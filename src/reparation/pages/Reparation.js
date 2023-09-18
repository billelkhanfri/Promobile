import React from "react";
import PropTypes from "prop-types";
import Devices from "../components/Devices";
import NavBar from "../../home/components/NavBar";
import Slider from "../components/Slider";
import Footer from "../../common/Footer";

function reparation(props) {
  return (
    <>
      <NavBar></NavBar>
      <Slider></Slider>
      <Devices></Devices>
      <Footer></Footer>
    </>
  );
}

reparation.propTypes = {};

export default reparation;
