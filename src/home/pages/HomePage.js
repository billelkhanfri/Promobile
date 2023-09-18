import React, { Component } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Footer from "../../common/Footer";

function homePage(props) {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

homePage.propTypes = {};

export default homePage;
