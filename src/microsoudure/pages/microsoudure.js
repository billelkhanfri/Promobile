import React from "react";
import PropTypes from "prop-types";
import CardMicros from "../components/CardMicros";
import NavBar from "../../home/components/NavBar";

function microsoudure(props) {
  return (
    <>
      <NavBar></NavBar>
      <CardMicros></CardMicros>;
    </>
  );
}

microsoudure.propTypes = {};

export default microsoudure;
