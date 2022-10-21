import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  return (
    <div>
      <Link to="/login">
        <Navbar titleBtn="Login" />
      </Link>
    </div>
  );
}

export default Register;
