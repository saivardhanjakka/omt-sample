"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    title: "Online ordering integrations",
    description:
      "Don’t shuffle between different screens to accept orders. Do all of it and more from a single screen easily with Petpooja restaurant PoS software! Seamlessly integrate your system with Swiggy, Zomato, Dineout, etc., to increase your restaurant sales",
    image: {
      src: "/assets/online-ordering-integrations.avif",
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
    },
  },
  {
    title: "Regulate menu availability",
    description:
      "Add store timing, packaging charges, and discounts. Easily manage the online menu for your single or chain outlets from one single screen. Cross-check the stock availability with your Petpooja POS system and toggle any online menu item On or Off as per your inventory!",
    image: {
      src: "/assets/regulate-menu-availability.avif",
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
    },
  },
  {
    title: "Menu updates & changes",
    description:
      "Easily add new menu items, offer different kinds of packaging and delicious add-ons, launch special offers or update menu prices across all your aggregators without hassles with your Petpooja restaurant billing software",
    image: {
      src: "/assets/menu-updates-changes.avif",
      alt: "Station-wise kot printing",
    },
  },
  {
    title: "Online order reconciliation",
    description:
      "Petpooja POS tracks and compiles platform-wise reconciled reports about your online orders, their commission rate, surplus charges, profit margins, taxes, etc., so that you don’t lose your hard-earned profits to wrongful payout reports",
    image: {
      src: "/assets/online-order-reconciliation.avif",
      alt: "Table and area management",
    },
  },
];

export default function OnlineOrderManagementFeatures() {
  useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden mt-10">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <div className=" mb-18  text-center">
          <h3 className="text-4xl md:text-4xl  font-bold text-gray-900 ">
            Make order management quicker & more efficient{" "}
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
