import React from "react";
import video from "../vid/video.mp4";
import "./inde.css";
function Video() {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default Video;
