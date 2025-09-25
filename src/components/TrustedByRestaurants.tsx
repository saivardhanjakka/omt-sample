"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import BagaraBuvvaKodiKoora from "../../public/assets/Bagara Buvva Kodi Koora.png";
import DesiKitchen from "../../public/assets/Desi Kitchen 2.png";
import IdealKitchen from "../../public/assets/Ideal Kitchen (kbhp) 5.png";
import KadapaDosaHouse from "../../public/assets/Kadapa Dosa House 4.png";
import KshatriyaFoods from "../../public/assets/Kshatriya Foods 1.png";
import LubbDubbCafe from "../../public/assets/Lubb Dubb Cafe (Nizampet) 7.png";
import PersisBarbeque from "../../public/assets/Persis Barbeque 8.png";
import RoyalSriDeviVegandNonVeg from "../../public/assets/Royal Sridevi Veg and Non-Veg (Bhagya Nagar).png";
import TheGoldenCave from "../../public/assets/The Golden Cave Restaurant & Bar 3.png";
import lassistory from "../../public/assets/lassi-story(KPHB).png"
import chilli from "../../public/assets/New-Chillies-Restaurant.png"
import terra from "../../public/assets/terra-cafe-bistro(Jubile Hills).png"
const logos = [
  { src: KshatriyaFoods, alt: "KshatriyaFoods" },
  { src: DesiKitchen, alt: "DesiKitchen" },
  { src: TheGoldenCave, alt: "TheGoldenCave" },
  { src: KadapaDosaHouse, alt: "KadapaDosaHouse" },
  { src: IdealKitchen, alt: "IdealKitchen" },
  { src: BagaraBuvvaKodiKoora, alt: "BagaraBuvvaKodiKoora" },
  { src: LubbDubbCafe, alt: "LubbDubbCafe" },
  { src: PersisBarbeque, alt: "PersisBarbeque" },
  { src: RoyalSriDeviVegandNonVeg, alt: "RoyalSriDeviVegandNonVeg" },
  { src: chilli, alt: "chilli" },
  { src: lassistory, alt: "lassistory" },
   { src: terra, alt: "terra" },
  // { src: "/assets/apsara.webp", alt: "Apsara Ice Creams" },
  // { src: "/assets/bercos.webp", alt: "Bercos" },
  // { src: "/assets/kailash-parbat.webp", alt: "Kailash Parbat" },
];

export default function TrustedByRestaurants() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-20 overflow-x-hidden">
      <h2 className="text-center text-4xl md:text-4xl font-medium text-gray-700 leading-snug">
        Trusted by {""}
        <span className="font-bold text-gray-700">1000+</span>
        <br className="block md:hidden" />
        <span className="font-bold text-gray-700 md:ml-2">restaurants</span>
      </h2>

      <div
        className="lg:mt-16 mt-10  mx-0 lg:mx-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center items-center animate-slide-in-from-bottom"
        data-aos="scroll-animation"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[150px] h-[110px] lg:w-[120px] relative"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
