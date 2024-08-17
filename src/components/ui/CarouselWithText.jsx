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
      image: "/assets/image/Savane.jpg",
      text: "Événement 1",
    },
    {
      image: "/assets/image/Desert.jpg",
      text: "Événement 2",
    },
    {
      image: "/assets/image/Montagne.jpg",
      text: "Événement 3",
    },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="carousel-slide relative">
            <div className="relative h-full w-full">
              <Image
                src={event.image}
                alt={`Événement ${index + 1}`}
                fill // Use fill instead of layout="fill"
                className="object-cover" // Apply object-fit via CSS
              />
            </div>
            <h1 className="carousel-text">
              {event.text}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselWithText;
