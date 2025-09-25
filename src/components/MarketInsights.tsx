"use client";

import Image from "next/image";
import chartImage from "../../public/images/Orders-by-Hourly_md.webp"; // adjust path if needed

const MarketInsights = () => {
  return (
    <section className="bg-[#0D1117] w-full py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-2xl sm:text-3xl mb-8">
          More than 40+ insightful reports to boost your sales
        </h2>
        <div className="rounded-2xl p-4 w-full mb-10 max-w-md mx-auto mt-4 md:mt-12 lg:mt-16">
          <Image
            src={chartImage}
            alt="Orders by Hourly"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
