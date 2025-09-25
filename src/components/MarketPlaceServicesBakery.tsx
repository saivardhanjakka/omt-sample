"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    title: "Business website",
    description:
      "Build personal connection with your customers through your brand website. Accept orders directly from your website to POS system without third-party aggregator or commissions.",

    image: {
      src: "/assets/business-website_md.avif",
      alt: "online-order-reconcillation",
    },
  },
  {
    title: "Feedback",
    description:
      "Easily collect feedback from your customers via Feedback app for dine-in customer SMS link sent to customer QR code printed on the bill or delivery package",
    image: {
      src: "/assets/Feedback_md.avif",
      alt: "feedback",
    },
  },
];

export default function MarketPlaceServiceBakery() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#FEF0E9] overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <p className="text-[#F47537] text-center md:px-36 mb-4">
          MARKETPLACE SERVICES
        </p>
        <div className=" mb-18 text-center">
          <h3 className="text-4xl md:text-5xl  font-bold text-gray-900 ">
            Solutions to level-up your daily operations
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
