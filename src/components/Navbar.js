import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const URL = "https://notes-application-2.herokuapp.com/api/v1";

export default function Navbar(props) {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "you will be logged out of this account!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${URL}/logout`);
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container-fluid">
        <span className="navbar-brand">RD Blog</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  props.path === "/home" ? "nav-link active" : "nav-link"
                }
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  props.path === "/notes" ? "nav-link active" : "nav-link"
                }
                href="/notes"
              >
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  props.path === "/about" ? "nav-link active" : "nav-link"
                }
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <button
                style={{ border: 0, backgroundColor: "#f9a826" }}
                className="nav-link"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  path: propTypes.string,
};
