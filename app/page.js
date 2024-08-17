import Image from "next/image";
import { Navbar } from "@/src/components";
import CarouselWithText from "@/src/components/ui/CarouselWithText";
import { Carousel } from "@/src/components/ui/apple-cards-carousel";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import CARD_CONTENT from "@/src/constants/index";
import { Hero } from "@/src/components";
import { Footer } from "@/src/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      {/* <Carousel items={CARD_CONTENT} /> Passer directement CARD_CONTENT */}

      <HoverEffect items={CARD_CONTENT} />

      <Footer/>
    </div>
    

    

     


    
  );
}
