import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <Link to="/register">
        <Navbar titleBtn={"Register"} />
      </Link>
  
    </div>
  );
}

export default Login;
