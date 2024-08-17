// Explicitly mark this file as a Client Component
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScrollability = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="flex overflow-x-auto snap-mandatory snap-x py-10 md:py-20 scroll-smooth" ref={carouselRef}>
        <div className="flex flex-nowrap gap-4 justify-center mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } }}
              className="shrink-0"
            >
              <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
            </motion.div>
          ))}
        </div>
      </div>
      <button onClick={scrollLeft} disabled={!canScrollLeft} className="absolute left-0 z-10 p-2">
        <IconArrowNarrowLeft />
      </button>
      <button onClick={scrollRight} disabled={!canScrollRight} className="absolute right-0 z-10 p-2">
        <IconArrowNarrowRight />
      </button>
    </div>
  );
};

export default Carousel;
