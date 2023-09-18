import React from "react";
import PropTypes from "prop-types";
import CardMicros from "../components/CardMicros";
import NavBar from "../../home/components/NavBar";
import Footer from "../../common/Footer";

function microsoudure(props) {
  return (
    <>
      <NavBar></NavBar>
      <CardMicros></CardMicros>;<Footer></Footer>
    </>
  );
}

microsoudure.propTypes = {};

export default microsoudure;
