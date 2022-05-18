import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addNotes, updateNotes, getNotesById } from "../../features/noteSlice";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import propTypes from "prop-types";
import Button from "../Button";

export default function Form(props) {
  const [note, setNote] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const URL = "https://notes-application-2.herokuapp.com/api/v1";

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    if (props.type === "edit") {
      const response = dispatch(getNotesById({ axiosJWT, token, id }));
      response.then((resolve) => {
        setNote(resolve.payload.notes);
      });
    }
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${URL}/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${URL}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleAdd = async (e) => {
    try {
      e.preventDefault();
      await dispatch(addNotes({ token, note }));
      navigate("/notes");
      Swal.fire("Success", "Success Add Notes!", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateNotes({ token, id, note }));
      navigate("/notes");
      Swal.fire("Success", "Success Edit Notes!", "success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-4 col-lg-6">
          <form onSubmit={props.type === "add" ? handleAdd : handleEdit}>
            <div className="form-group">
              <label htmlFor="">Notes</label>
              <textarea
                className="form-control"
                cols="30"
                rows="10"
                placeholder="Please type here..."
                required
                maxLength={200}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
              <p className="text-end mb-0">{note.length}/200</p>
            </div>
            <Button type="button" className="btn" isPrimary>
              {props.type === "add" ? "Add Notes" : "Edit Notes"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  type: propTypes.oneOf(["add", "edit"]),
};
