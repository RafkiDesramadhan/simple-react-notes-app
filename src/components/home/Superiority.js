import React from "react";
import Flip from "react-reveal";

export default function Superiority() {
  return (
    <section>
      <h5 className="display-5 text-center mt-5">Superiority</h5>
      <div className="container">
        <div className="row align-items-center">
          <div className="offset-md-1 offset-lg-2 col-md-6 col-lg-4">
            <img
              src="./images/illustration-superiority.svg"
              alt="Illustration"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <Flip left>
              <p className="fw-bold">Easy To Use</p>
              <p className="lead">
                Minimalist design and not too complicated, very easy to
                understand for users, just a few clicks and having an account we
                can access all existing applications.
              </p>
            </Flip>
          </div>
        </div>
        <div className="row mt-2 align-items-center">
          <div className="offset-md-1 offset-lg-2 col-md-6 col-lg-4">
            <img
              src="./images/illustration-superiority-2.svg"
              alt="Illustration"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
          <div className="col-md-4">
            <Flip left>
              <p className="fw-bold">Easy To Access</p>
              <p className="lead">
                Very convenient, easy to access anywhere and anytime. With super
                fast optimization.
              </p>
            </Flip>
          </div>
        </div>
      </div>
    </section>
  );
}
