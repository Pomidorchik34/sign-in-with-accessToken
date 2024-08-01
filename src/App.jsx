import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Err from "./pages/ErrorPage";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Register />}></Route>
        <Route path="*" element={<Err />}></Route>
      </Routes>
    </>
  );
}

export default App;
