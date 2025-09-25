"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const logos = [
  { src: "/assets/1944logo_sm.avif", alt: "La Pinoz Pizza" },
  { src: "/assets/THE-RASODA.avif", alt: "Moti Mahal" },
  { src: "/assets/banana-leaf_sm.avif", alt: "Jumboking" },
  { src: "/assets/Ishaara.avif", alt: "HOCCO Eatery" },
  { src: "/assets/KHYBER.avif", alt: "Yum Yum Cha" },
  { src: "/assets/hocco.avif", alt: "TGI Fridays" },
  { src: "/assets/lollo-rose_sm.avif", alt: "Gianis" },
  { src: "/assets/kailash-parbat.avif", alt: "Yangkiez" },
  { src: "/assets/bercos-new-logo_sm.avif", alt: "Kabhi B" },
  { src: "/assets/koko-Logo_sm.avif", alt: "Apsara Ice Creams" },
  { src: "/assets/kakapo_sm.avif", alt: "Bercos" },
  { src: "/assets/mauve.avif", alt: "Kailash Parbat" },
];

export default function TrustedByRestaurantsBakery() {
  useEffect(() => {
      Aos.init({ once: true });
    }, []);
  
  return (
    <section className="bg-white py-16 px-4 md:px-16 overflow-x-hidden">
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center animate-slide-in-from-bottom"  data-aos="scroll-animation">
        {logos.map((logo, index) => (
          <div key={index} className="w-[150px] h-[120px] relative">
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
