import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="row mt-5">
        <div className="col text-center">
          <a
            href="https://www.instagram.com/rafki.de/"
            className="text-warning"
          >
            <i className="fa-brands fa-instagram fa-2x mx-3"></i>
          </a>
          <a href="https://web.facebook.com/desra.ada" className="text-warning">
            <i className="fa-brands fa-facebook fa-2x mx-3"></i>
          </a>
          <a
            href="https://github.com/RafkiDesramadhan"
            className="text-warning"
          >
            <i className="fa-brands fa-github fa-2x mx-3"></i>
          </a>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          &copy; Rafki Desramadhan - {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
