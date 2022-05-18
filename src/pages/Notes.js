import React, { Component } from "react";

import Navbar from "../components/Navbar";
import ContentNotes from "../components/notes/ContentNotes";
import Banner from "../elements/Banner";
import Footer from "../components/Footer";

export default class Notes extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar path="/notes" />
        <Banner
          bannerText="Notes"
          paragraphText="access all records for life"
        />
        <ContentNotes />
        <Footer />
      </div>
    );
  }
}
