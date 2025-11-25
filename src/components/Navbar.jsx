import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      {/* LOGO NOW ON LEFT */}
      <div className="logo">
        <img src="/brandlogo.png" alt="logo" />
      </div>

      {/* BUTTONS NOW ON RIGHT */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}
