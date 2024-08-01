import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signin">Sign in</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}

export default Navbar;
