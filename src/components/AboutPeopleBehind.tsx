"use client";

import Image from "next/image";
import teamImage from "../../public/images/growing-team.png"; // replace with actual path
import restaurantImage from "../../public/images/Support-from.png"; // replace with actual path
import partivImg from "../../public/images/Parthiv-Patel.png"; // placeholder
import apurvImg from "../../public/images/Apurv-Patel.png"; // placeholder

export default function AboutPeopleBehind() {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto text-center">
      {/* Person Section */}
      <div className="text-center px-4 md:px-0">
        <h2 className="text-[1.75rem] lg:text-5xl font-bold">
          People behind Petpooja
        </h2>
        <p className="text-gray-600 mt-2">
          Meet the masterminds that pulled all-nighters to make the dream happen
        </p>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
          <div className="text-center">
            <Image
              src={partivImg}
              alt="Parthiv Patel"
              className="mx-auto rounded-full w-32 h-32 md:w-40 md:h-40"
            />

            <p className="font-semibold mt-2 text-lg">Parthiv Patel</p>
            <p className="text-md text-gray-500">Co-founder & CEO</p>
          </div>
          <div className="text-center">
            <Image
              src={apurvImg}
              alt="Apurv Patel"
              className="mx-auto rounded-full md:w-40 md:h-40 w-34 h-34 "
            />
            <p className="font-semibold text-lg mt-2">Apurv Patel</p>
            <p className="text-md text-gray-500">Co-founder & CSO</p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-16 flex flex-col gap-16 md:gap-20 lg:gap-16 lg:flex-row md:px-14">
        {/* TEAM IMAGE BLOCK */}
        <div className="relative lg:w-1/2  overflow-visible">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={teamImage}
              alt="Team"
              className="w-full object-cover h-auto"
            />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 bg-white rounded-r-xl p-4 text-left shadow-md w-[90%] sm:w-[80%]">
            <p className="font-semibold text-lg">
              A growing team of 1300+ employees
            </p>
          </div>
        </div>

        {/* RESTAURANT IMAGE BLOCK */}
        <div className="relative lg:w-1/2  overflow-visible">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={restaurantImage}
              alt="Restaurants"
              className="w-full object-cover h-auto"
            />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 bg-white rounded-r-xl p-4 text-left shadow-md w-[90%] sm:w-[80%]">
            <p className="font-semibold text-lg">
              Support from 75,000+ restaurants
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
