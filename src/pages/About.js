import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ContentAbout from "../components/about/ContentAbout";
import Footer from "../components/Footer";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar path="/about" />
        <ContentAbout />
        <Footer />
      </div>
    );
  }
}
