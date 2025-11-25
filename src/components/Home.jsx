import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* LEFT CONTENT */}
      <div className="left-content">

        {/* NEW IMAGE IN PLACE OF HEADING */}
        <img 
          src="/brandlogo.png"   // ← replace with your image file
          alt="Brand Logo"
          className="brand-image"
        />

        {/* SLIDING TEXT BELOW IMAGE */}
        <div className="slide-text">
          <span>Car Accessories • Premium Quality • Modern Style •</span>
        </div>

      </div>

      {/* RIGHT VIDEO */}
      <div className="video-section">
        <video 
          src="/carvideo.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
        ></video>
      </div>

    </div>
  );
}
