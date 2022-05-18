import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Superiority from "../components/home/Superiority";
import Banner from "../elements/Banner";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar path="/home" />
        <Banner
          bannerText="Home"
          paragraphText="A place to store notes where you can manage the records of each account you have"
        />
        <Superiority />
        <Footer />
      </div>
    );
  }
}
