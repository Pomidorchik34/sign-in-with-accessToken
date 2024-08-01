import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar";

function Err() {
  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <h1>404</h1>
        <h2>page not found</h2>
        <Link to={"/"}>back to home page</Link>
      </div>
    </>
  );
}
export default Err;
