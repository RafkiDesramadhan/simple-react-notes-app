import React from "react";
import Bounce from "react-reveal/Bounce";

export default function ListsAbout() {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col text-center">
          <Bounce left>
            <h4 className="display-4">About</h4>
          </Bounce>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <Bounce left delay={500}>
            <img
              id="profile"
              src="./images/profile.jpg"
              alt="profile"
              className="img-fluid img-thumbnail rounded-circle"
              style={{ width: "200px", height: "200px" }}
            />
          </Bounce>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3 text-center">
          <Bounce left delay={800}>
            <p className="lead">
              Hello everyone, introduce my name is Rafki Desramadhan, I am a
              student of a private university in Jakarta, namely Universitas
              Indraprasta PGRI. I like the world of technology, especially in
              the field of websites. I am proficient in several programming
              languages ​​such as Javascript, Java, and PHP. My hobbies are
              traveling and playing game.
            </p>
          </Bounce>
        </div>
      </div>
    </div>
  );
}