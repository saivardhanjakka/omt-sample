// components/AddOnsImageSection.tsx
"use client";

import Image from "next/image";
import image from "../../public/images/about-us-hero-new_xl.webp";
export default function AboutHero() {
  return (
    <section className="bg-white py-16 lg:mt-10 md:mt-8 px-4 md:px-20 text-center">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-md sm:text-md md:text-md font-bold text-[#c52031]">
          ABOUT US
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:mt-6 mt-4  font-bold text-gray-900 leading-snug sm:leading-tight">
          Hey! We’re Petpooja
          <br className="sm:hidden" /> and we help restaurant
        </h2>

       <p className="text-gray-600 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed max-w-md mx-auto lg:whitespace-nowrap lg:max-w-none">
  We deliver products that ensure revenue growth and the best customer experience for all types of restaurant partners
</p>

      </div>

      {/* Static Image Display */}
      <div className="w-full lg:mt-20 sm:mt-12 md:mt-20 max-w-6xl mx-auto">
        <Image
          src={image}
          alt="Add-ons to Supercharge POS"
          width={1500}
          height={800}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
