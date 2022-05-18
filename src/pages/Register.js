import React, { Component } from "react";
import Footer from "../components/Footer";
import StartForm from "../elements/StartForm";

export default class Register extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center display-4 mt-5 text-bold">
          Free Registration
        </h1>
        <h4 className="text-center display-5">For Lifetime Access Notes</h4>
        <StartForm isRegister />
        <Footer />
      </div>
    );
  }
}
