import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import propTypes from "prop-types";

export default function StartForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRegist, setUserRegist] = useState("");
  const [pwRegist, setPwRegist] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const URL = "https://notes-application-2.herokuapp.com/api/v1";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}/login`, {
        username,
        password,
      });
      navigate("/home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}/register`, {
        username: userRegist,
        password: pwRegist,
        confPassword,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  if (props.isLogin)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            {msg ? <div className="alert alert-danger">{msg}</div> : undefined}
            <div className="card">
              <div className="card-header bg-card-custom">
                <h5 className="text-center text-white">Login</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="" className="col-form-label text-warning">
                        <i className="fas fa-user"></i>
                      </label>
                    </div>
                    <div className="col-9 col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username or Email"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-0 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="" className="col-form-label text-warning">
                        <i className="fas fa-unlock"></i>
                      </label>
                    </div>
                    <div className="col-9 col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <p className="lead mt-3" style={{ fontSize: "18px" }}>
                    Don't have an account yet?{" "}
                    <a href="/register"> Sign Up Here!</a>
                  </p>
                  <Button className="btn" type="button" isSecondary hasShadow>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/images/illustration-login.svg"
              alt="illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="/images/illustration-register.svg"
            alt="Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleRegister}>
            <div className="card">
              {msg ? (
                <div className="alert alert-danger">{msg}</div>
              ) : undefined}
              <div className="card-header bg-card-custom text-center text-white">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userRegist}
                    onChange={(e) => setUserRegist(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={pwRegist}
                    onChange={(e) => setPwRegist(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    required
                  />
                </div>
                <p className="lead">
                  Already have an account?{" "}
                  <Button type="link" href="/">
                    Sign In Here!
                  </Button>
                </p>
                <Button className="btn mt-2" isSecondary hasShadow>
                  <i className="fas fa-registered"></i> Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

StartForm.propTypes = {
  isLogin: propTypes.bool,
  isRegister: propTypes.bool,
};
