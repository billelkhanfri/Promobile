import React, { Component } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

function homePage(props) {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    </>
  );
}

homePage.propTypes = {};

export default homePage;
