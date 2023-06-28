import React from "react";
import PropTypes from "prop-types";
import Devices from "../components/Devices";
import NavBar from "../../home/components/NavBar";
import Slider from "../components/Slider";

function reparation(props) {
  return (
    <>
      <NavBar></NavBar>
      <Slider></Slider>
      <Devices></Devices>
    </>
  );
}

reparation.propTypes = {};

export default reparation;
