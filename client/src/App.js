import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Fourofour from "./pages/Fourofour";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="*" element={<Fourofour />}></Route>
    </Routes>
  );
}

export default App;
