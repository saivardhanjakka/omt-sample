'use client';

import Image from 'next/image';
import image1 from "../../public/images/Integrations-hero-dk.png"
import image2 from "../../public/images/Integrations-hero-mb_md.png"
export default function IntegrationHero() {
  return (
    <section className="bg-white mt-10 py-12 px-4 text-center">
      <h4 className="text-[#F47537] font-semibold uppercase mb-6">Integrations</h4>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4">
        Single dashboard – Multiple <br className="hidden sm:block" />
        restaurant integrations
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Smooth integrations that connects your restaurant to more profits
      </p>
      <button className="btn-primary hover:bg-[#F47537] sm:mb-6 text-white px-6 py-3 rounded-sm font-medium  transition">
        Take a free demo
      </button>

      {/* Image container */}
      <div className="mt-6 sm:mt-15 md:mt-6 lg:mt-6">
        {/* Desktop Image */}
        <div className="hidden sm:block ">
          <Image
            src={image1}
            alt="Integrations Desktop"
            width={1000}
            height={600}
            className="mx-auto h-[200px] md:h-[300px] lg:h-[350px]"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden">
          <Image
            src={image2}
            alt="Integrations Mobile"
            width={360}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
