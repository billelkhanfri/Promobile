import React from "react";
import PropTypes from "prop-types";
import CardAccesso from "../components/CardAccesso";
import NavBar from "../../home/components/NavBar";

function Accessoire(props) {
  return (
    <>
      <NavBar></NavBar>
      <CardAccesso></CardAccesso>;
    </>
  );
}

Accessoire.propTypes = {};

export default Accessoire;
