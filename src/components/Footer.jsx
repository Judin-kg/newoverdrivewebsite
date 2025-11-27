import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* 🔥 Top Divider Line */}
      <div className="footer-divider"></div>

      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-about">
          <h2 className="footer-title">RJ ATLAS DIGITAL AI</h2>
          <p>
            We provide premium car modification, accessories, PPF, ceramic
            coating, and luxury custom solutions.
          </p>
        </div>

        {/* Middle Section – Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
        </div>

        {/* Right Section – Subscribe */}
        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>Get updates and offers directly to your inbox.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} RJ ATLAS DIGITAL AI — All Rights Reserved.
      </div>
    </footer>
  );
}
