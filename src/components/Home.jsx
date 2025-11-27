import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* BOXICONS CDN */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <div className="home-container" id="home">

        {/* LEFT CONTENT */}
        <div className="left-content">

          {/* LOGO */}
          <img 
            src="/brandlogo.png"
            alt="Brand Logo"
            className="brand-image"
          />

          {/* SLIDING TEXT */}
          <div className="slide-text">
            <span>Car Accessories • Premium Quality • Modern Style •</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="tel:+919745507607" className="icon">
              <i className='bx bxs-phone-call'></i>
            </a>

            <a href="https://www.instagram.com/new_overdrive?igsh=MWs1aG0ydnR4anB0dA==" target="_blank" className="icon">
              <i className='bx bxl-instagram'></i>
            </a>

            <a href="https://facebook.com" target="_blank" className="icon">
              <i className='bx bxl-facebook-circle'></i>
            </a>
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
    </>
  );
}
