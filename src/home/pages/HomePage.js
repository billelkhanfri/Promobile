import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

function homePage(props) {
  return (
    <>
      <NavBar></NavBar>
      <Slider></Slider>
    </>
  );
}

homePage.propTypes = {};

export default homePage;
