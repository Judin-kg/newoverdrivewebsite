import React, { useState, useEffect } from "react";
import "./About.css";

export default function About() {
  const images = [
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const queueImages = [
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
    images[(index + 3) % images.length],
    images[(index + 4) % images.length],
  ];

  return (
    <div className="about-container">

      {/* LEFT IMAGE SECTION */}
      <div className="about-left">
        <div className="main-image-wrapper">
          <img src={images[index]} alt="Main" className="main-image" />
        </div>

        <div className="image-queue">
          {queueImages.map((img, i) => (
            <img key={i} src={img} alt="Queue" className="queue-img" />
          ))}
        </div>
      </div>

      {/* RIGHT TEXT SECTION */}
      <div className="about-right">
        <h1 className="about-title">
          <span className="white">ABOUT </span>
          <span className="red">US</span>
        </h1>

        <p className="about-text">
         New Overdrive Car Accessories in Thalassery is dedicated to meeting the needs of its valued customers with excellence. Conveniently located at Hindhustan Tower, near the Old RTO Office, Town Hall Road, Thalassery-670101, the store is easily accessible, with the Old RTO Office serving as a well-known landmark in the area.
The business is committed to delivering a seamless experience, offering high-quality products and services that elevate every drive. With cash payment options available, transactions are simple, smooth, and hassle-free.<br /><br />
At the heart of New Overdrive Car Accessories is a strong focus on customer satisfaction. This customer-first approach has helped the business build lasting relationships, earning the trust and loyalty of its clientele. By consistently providing premium products and exceptional service, the store ensures every visit is a positive and memorable experience.

        </p>

        {/* NEW CONTACT BUTTON */}
        <button className="contact-btn">Contact Us</button>
      </div>

    </div>
  );
}
