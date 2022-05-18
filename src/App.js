import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";

import AddNotes from "./pages/AddNotes";
import EditNotes from "./pages/EditNotes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/add" element={<AddNotes />} />
          <Route path="/notes/edit/:id" element={<EditNotes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
