"use client"

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    title: "Single dashboard monitoring",
    description:
      "Don’t crush yourself and your restaurant business under stacks of paper files and complicated excel sheets. Switch to Petpooja restaurant billing software and get all your data and more at one single screen!",
    image: {
      src: "/assets/single-dashboard-monitoring.avif",
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
    },
  },
  {
    title: "Easy tax reporting",
    description:
      "Confused about how to simplify the taxation process for your business? Let Petpooja POS software prepare downloadable reports for simpler and exact taxation! Single or chain outlet, the POS keeps track of every income and allows you to file taxes in a jiffy",
    image: {
      src: "/assets/easy-tax-reporting.avif",
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
    },
  },
  {
    title: "User rights management",
    description:
      "Regulate staff access and controls what they see or do in your absence. Get detailed reports on bill modifications, discounted/cancelled orders, cash drawer operations, and much more to maintain centralised control over your outlet’s operations.",
    image: {
      src: "/assets/user-rights-management.avif",
      alt: "Station-wise kot printing",
    },
  },
  {
    title: "Head office module",
    description:
      "With Petpooja, data from all your outlets can be monitored on a single dashboard. City-wise and Zone-wise groupings allow you to aggregate data the way you want. Head-office module also allows you to centrally manage all your menus and raw material masters seamlessly.",
    image: {
      src: "/assets/head-office-module.avif",
      alt: "Table and area management",
    },
  },
];

export default function ReportsAndAnalyticsFeatures() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <div className=" mb-18  text-center">
          <h3 className="text-4xl md:text-4xl  font-bold text-gray-900 ">
            Restaurant business reports made simpler{" "}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full max-w-2xl mx-auto text-left space-y-6"
            >
              {/* Image with same width as text */}
              <div
                className="w-full relative aspect-[4/3]  animate-slide-in-from-right"
                data-aos="scroll-animation"
              >
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Text */}
              <div
                className="text-left mt-12 animate-slide-in-from-left"
                data-aos="scroll-animation"
              >
                <h2 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-lg sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
