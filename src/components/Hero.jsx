"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';

// Install necessary Swiper components
SwiperCore.use([EffectFade, Autoplay]);

const images = ['/assets/image/Champs_de_fleurs.jpg', '/assets/image/Desert.jpg'];
const textPhrases = ['BIENVENUE DANS NOTRE ASSOCIATION', 'VOTRE SUCCÈS EST NOTRE MISSION'];

function Hero() {
  return (
    <div className="relative w-full h-1/3">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false
        }}
        className="h-full">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className="w-full h-full object-cover" alt="Dynamic Image" />
            <div className="absolute inset-x-0 top-1/3 p-4">
              <p className="text-white text-5xl font-serif font-bold leading-tight text-left shadow-lg">
                {textPhrases[index]}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-black opacity-50" style={{ backgroundColor: '#865439' }}></div>
    </div>
  );
}

export default Hero;



