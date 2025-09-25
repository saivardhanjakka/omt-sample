"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    title: "Item category, variations and add-ons",
    description:
      "Customise your restaurant menu however you want! Create item-wise variations, and add-ons with separate pricing for each customisation and much more with Petpooja restaurant POS software",
    image: {
      src: "/assets/item-category.avif",
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
    },
  },
  {
    title: "Aggregator menu management",
    description:
      "Integrate your restaurant menu with any and all food delivery aggregators. Easily edit your menu items and their available time, the prices and switch any items ON/OFF directly from the POS in case of low inventory stock",
    image: {
      src: "/assets/aggregator-menu.avif",
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
    },
  },
  {
    title: "Create shortcodes for quick billing",
    description:
      "Assign item-wise shortcodes as per your convenience for faster billing, significantly increasing the rate of software adoption and the speed of checkout to save customers' and staff's time!",
    image: {
      src: "/assets/create-shortcodes.avif",
      alt: "Station-wise kot printing",
    },
  },
  {
    title: "Multiple menus",
    description:
      "Create different dine-in areas and a separate menu for each! Manage all the areas and their menus with one Petpooja restaurant POS software. In addition to that, you get complete pricing control over all your menus, whether physical or online!",
    image: {
      src: "/assets/multiple-menus.avif",
      alt: "Table and area management",
    },
  },
];

export default function MenuManagementFeatures() {
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
            Restaurant menu management made easier{" "}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full max-w-2xl mx-auto text-left space-y-6"
            >
           
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
