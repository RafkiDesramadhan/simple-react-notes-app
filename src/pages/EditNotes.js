import React from "react";
import Navbar from "../components/Navbar";
import Form from "../elements/Form";
import Footer from "../components/Footer";

export default function AddNotes() {
  return (
    <div className="container-fluid">
      <Navbar path="/notes" />
      <Form type="edit" />
      <Footer />
    </div>
  );
}
