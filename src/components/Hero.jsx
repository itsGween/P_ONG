"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import { styles } from "../styles/styles";

// Install necessary Swiper components
SwiperCore.use([EffectFade, Autoplay]);

const images = ["/assets/image/Chemin_champs.jpg", "/assets/image/Zebre.jpg"];
const textPhrases = [
  "BIENVENUE DANS NOTRE ASSOCIATION",
  "VOTRE SUCCÈS EST NOTRE MISSION",
];

function Hero() {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[600px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="w-full h-full object-cover"
              alt="Dynamic Image"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
  <p className={`${styles.heroHeadText} text-center shadow-lg`}>
    {textPhrases[index]}
  </p>
</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backgroundColor: "#fff" }}
      ></div>
    </div>
  );
}

export default Hero;
