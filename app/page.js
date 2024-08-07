import Image from "next/image";
import { Navbar } from "@/src/components";
import CarouselWithText from "@/src/components/ui/CarouselWithText";
import { Carousel } from "@/src/components/ui/apple-cards-carousel";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import CARD_CONTENT from "@/src/constants/index";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselWithText />
      {/* <Carousel items={CARD_CONTENT} /> Passer directement CARD_CONTENT */}
      <HoverEffect items={CARD_CONTENT} />
    </div>
  );
}
