import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Video from "../../Components/vid";
import Navbar from "../../Components/navbar";
function Login() {
  const [abled, setAbled] = useState(false);
  let username = useRef("");
  let password = useRef("");
  let nav = useNavigate();
  function clicked(event) {
    if (username.current.value == "" || password.current.value == "") {
      alert("please fill in all inputs");
      return;
    }
    if (username.current.value.length <= 3) {
      alert("name is too short name must be more than three characters");
      return;
    }

    setAbled(true);
    fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          alert(data.message);
          return;
        }
        localStorage.setItem("token", data.accessToken);
        alert(JSON.stringify("succes"));
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAbled(false);
      });
  }
  return (
    <>
      <Navbar />
      <div className="container inputs">
        {/* <Video></Video> */}
        <h1 className="heading">Log in</h1>
        <input ref={username} type="text" placeholder="Username" />
        <input ref={password} type="password" placeholder="Password" />
        <Link to="/signin">I haven't acc</Link>
        <button disabled={abled} onClick={clicked}>
          Log in
        </button>
      </div>
    </>
  );
}

export default Login;
