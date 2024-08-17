import Image from "next/image";
import { Navbar } from "@/src/components";
import custom from "@/src/styles/custom.css";
import CarouselWithText from "@/src/components/ui/CarouselWithText";
import { Carousel } from "@/src/components/ui/apple-cards-carousel";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import CARD_CONTENT from "@/src/constants/index";
import { Hero } from "@/src/components";
import { Footer } from "@/src/components";
import { CardDemo } from "@/src/components/ui/content_card";

const items = [
  { src: "/assets/image/savane.jpg", title: "OEUVRES DE MISERICORDES" },
  { src: "/assets/image/montagne.jpg", title: "VENDREDI DU PRO" },
  { src: "/assets/image/femme_africaine.jpg", title: "FORMATION SUR L'AMOUR" },
  { src: "/assets/image/desert.jpg", title: "VIE DE FOI" },
  { src: "/assets/image/coucher_de_soleil.jpg", title: "DIVERTISSEMENT" },
  { src: "/assets/image/champs_de_fleurs.jpg", title: "AUTRES" },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <CardDemo items={items} />

      <Footer />
    </div>
  );
}
