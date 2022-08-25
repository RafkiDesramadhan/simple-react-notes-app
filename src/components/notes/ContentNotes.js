import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, deleteNotes, noteSelector } from "../../features/noteSlice";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";
import TimeAgo from "../../elements/TimeAgo";

const URL = process.env.REACT_APP_API_URL;

export default function ContentNotes() {
  const [msg, setMsg] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notes = useSelector(noteSelector.selectAll);

  useEffect(() => {
    refreshToken();
    dispatch(getNotes({ axiosJWT, token }));
  }, [dispatch]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${URL}/token`);
      setToken(response.data.accessToken);

      const decode = jwt_decode(response.data.accessToken);
      setExpire(decode.exp);
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

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteNotes({ token, id }));
          dispatch(getNotes({ axiosJWT, token }));
          setInterval(() => {
            setMsg("Success delete Notes!");
            navigate("/notes");
          }, 1000);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-2">
      <div className="row mb-2">
        <div className="col-md-4">
          {msg !== "" ? <div className="alert alert-success">{msg}</div> : null}
          <Button type="link" href="/notes/add" className="btn" isPrimary>
            <i className="fas fa-plus-square"></i> Add Notes
          </Button>
        </div>
      </div>
      <div className="row">
        {notes.length === 0 ? (
          <div className="col">
            <h5 className="display-5">Notes Empty!</h5>
          </div>
        ) : (
          notes.map((note) => (
            <div className="col-md-3 mt-3" key={note._id}>
              <div className="card">
                <div className="card-body">
                  <div className="notes">{note.notes}</div>
                  <div className="date mt-3" style={{ fontSize: "12px" }}>
                    <TimeAgo timestamp={note.date} />
                  </div>
                  <hr />
                  <Button
                    type="link"
                    href={`/notes/edit/${note._id}`}
                    className="btn"
                    isSecondary
                    isSmall
                  >
                    <i className="fas fa-edit"></i> Edit
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    type="button"
                    className="btn"
                    isSmall
                    isDanger
                    onClick={() => handleDelete(note._id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
