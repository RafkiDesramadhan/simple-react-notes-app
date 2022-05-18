import React, { Component } from "react";
import StartForm from "../elements/StartForm";
import Footer from "../components/Footer";

export default class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center display-4 mt-5">Notes Application</h1>
        <StartForm isLogin />
        <Footer />
      </div>
    );
  }
}
