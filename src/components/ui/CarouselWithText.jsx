"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CarouselWithText = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const events = [
    {
      image: "/path/to/image1.jpg",
      text: "Événement 1",
    },
    {
      image: "/path/to/image2.jpg",
      text: "Événement 2",
    },
    {
      image: "/path/to/image3.jpg",
      text: "Événement 3",
    },
  ];

  return (
    <div className="carousel-container" style={{ position: "relative" }}>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index}>
            <img
              src={event.image}
              alt={`Événement ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
      <h1
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        {events[currentSlide].text}
      </h1>
    </div>
  );
};

export default CarouselWithText;
