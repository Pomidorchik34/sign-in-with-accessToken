import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Video from "../../Components/vid";
import Navbar from "../../Components/navbar";
function Register() {
  let nav = useNavigate();
  const [abled, setAbled] = useState(false);
  let username = useRef("");
  let email = useRef("");
  let password = useRef("");

  function clicked(event) {
    if (
      username.current.value == "" ||
      email.current.value == "" ||
      password.current.value == ""
    ) {
      alert("please fill in all inputs");
      return;
    }
    if (username.current.value.length <= 3) {
      alert("name is too short name must be more than three characters");
      return;
    }
    if (email.current.value.includes("@")) {
    } else {
      alert("please corect your email");
      return false;
    }

    setAbled(true);
    fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Failed! Username is already in use!") {
          return;
        }
        if (data.message == "Failed! Email is already in use!") {
          return;
        }
        alert(JSON.stringify(data.message));
        nav("/login");
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
      <Navbar></Navbar>
      <div className="container inputs">
        {/* <Video></Video> */}
        <h1 className="heading">Sign in</h1>
        <input ref={username} type="text" placeholder="Username" />
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="Password" />
        <Link to="/login">I have acc</Link>
        <button disabled={abled} className="btn" onClick={clicked}>
          Sign in
        </button>
      </div>
    </>
  );
}

export default Register;
