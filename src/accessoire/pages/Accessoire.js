import React from "react";
import PropTypes from "prop-types";
import CardAccesso from "../components/CardAccesso";
import NavBar from "../../home/components/NavBar";
import Footer from "../../common/Footer";

function Accessoire(props) {
  return (
    <>
      <NavBar></NavBar>
      <CardAccesso></CardAccesso>;<Footer></Footer>
    </>
  );
}

Accessoire.propTypes = {};

export default Accessoire;
