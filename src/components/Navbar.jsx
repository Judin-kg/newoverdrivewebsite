import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="logo">
        <img src="/brandlogo.png" alt="logo" />
      </div>

      {/* LINKS */}
      <div
        className={`nav-links ${open ? "open" : ""}`}
        ref={menuRef}
      >
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#products" onClick={() => setOpen(false)}>Products</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        ref={buttonRef}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}
