import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../../Components/vid";
import Navbar from "../../Components/navbar";

function Home() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (token == null) {
      alert("token not found");
      navigate("/login");
    }
  });
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("./login");
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        {/* <Video></Video> */}
        <h1>Home page</h1>
        <button onClick={logOut}>Log out</button>
      </div>
    </>
  );
}

export default Home;
