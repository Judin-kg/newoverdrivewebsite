import React, { useState, useEffect } from "react";
import "./Slider.css";

import img1 from "../assets/modification.JPG";
import img2 from "../assets/acc.JPG";
import img3 from "../assets/lax.JPG";
import img4 from "../assets/car.png";

const cards = [
  { img: img1, title: "Modification", subtitle: "Personalize Your Car, Maximize Its Potential" },
  { img: img2, title: "Car Accessories", subtitle: "Experience Comfort Like Never Before" },
  { img: img3, title: "Laxury Seats", subtitle: "Style, Function, and Innovation" },
  { img: img4, title: "Ceramics and PPF", subtitle: "Shield Your Ride in Style" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <h2 className="slider-heading">
        Our <span className="red-text">Services</span>
      </h2>

      <div className="slider-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`slider-card ${index === currentIndex ? "active" : ""}`}
          >
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* ⬇️ Navigation Arrows */}
      <div className="slider-arrows">
        <button className="arrow-btn" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="arrow-btn" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider;
