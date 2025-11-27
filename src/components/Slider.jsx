import React, { useEffect, useState } from "react";
import "./Slider.css";

// 2 images per card
const cards = [
  {
    title: "Modification",
    subtitle: "Personalize Your Car",
    images: [
      require("../assets/modification.JPG"),
      require("../assets/mod1.JPG")
    ]
  },
  {
    title: "Accessories",
    subtitle: "Premium Car Accessories",
    images: [
      require("../assets/acc.JPG"),
      require("../assets/acc1.JPG")
    ]
  },
  {
    title: "Luxury Seats",
    subtitle: "Comfort Redefined",
    images: [
      require("../assets/lax.JPG"),
      require("../assets/seat.JPG")
    ]
  },
  {
    title: "Ceramic + PPF",
    subtitle: "Ultimate Protection",
    images: [
      require("../assets/ppf.jpeg"),
      require("../assets/ppf1.jpeg")
    ]
  }
];

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 2); // switch between 0 & 1
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container"id="services">
      <h2 className="slider-heading">
        Our <span className="red-text">Services</span>
      </h2>

      <div className="four-card-wrapper">
        {cards.map((card, idx) => (
          <div className="service-card" key={idx}>
            <div className="image-box">
              <img
                src={card.images[imageIndex]}
                alt={card.title}
                className="fade-image"
              />
            </div>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
