import Savane from "../../public/assets/image/savane.jpg";
import Montagne from "../../public/assets/image/montagne.jpg";
import Femme_Africaine from "../../public/assets/image/femme_africaine.jpg";
import Desert from "../../public/assets/image/desert.jpg";
import coucher_de_soleil from "../../public/assets/image/coucher_de_soleil.jpg";
import Champs_de_fleurs from "../../public/assets/image/champs_de_fleurs.jpg";

const CARD_CONTENT = [
  {
    title: "Oeuvres De Misericordes",
    description: "Description de la carte 1.",
    src: Savane,
    link: "/card-1",
  },
  {
    title: "VENDREDI DU PRO",
    description: "Description de la carte 2.",
    src: Montagne,
    link: "/card-2",
  },
  {
    title: "FORMATION SUR L'AMOUR",
    description: "Description de la carte 3.",
    src: Femme_Africaine,
    link: "/card-3",
  },
  {
    title: "VIE DE FOI",
    description: "Description de la carte 4.",
    src: Champs_de_fleurs,
    link: "/card-4",
  },
  {
    title: "DIVERTISSEMENT",
    description: "Description de la carte 5.",
    src: coucher_de_soleil,
    link: "/card-5",
  },
  {
    title: "AUTRES",
    description: "Description de la carte 6.",
    src: Desert,
    link: "/card-6",
  },
];

export default CARD_CONTENT;
