"use client"
import Image from "next/image";
import image1 from "../../public/images/Barcode-Scanning.svg";
import image2 from "../../public/images/Ai-Inventory.svg";
import image3 from "../../public/images/Track-GST.svg";
import image4 from "../../public/images/Effortless-Payments.svg";
import { useEffect } from "react";
import Aos from "aos";

const features = [
  {
    title: "Barcode Scanning",
    description:
      "Streamline your checkout process and reduce wait times with our advanced barcode scanning capabilities.",
    image: image1,
    alt: "Innovation",
  },
  {
    title: "AI Inventory Agent",
    description:
      "With our AI inventory agent, inventory levels are automatically updated without the need for manual entry.",
    image: image2,
    alt: "Pricing",
  },
  {
    title: "Track GST",
    description:
      "Get real-time visibility into your GST liability, including tax payable, input tax credit, and cash ledger balance.",
    image: image3,
    alt: "Simplicity",
  },
  {
    title: "Effortless Payment",
    description:
      "Comprehensive integration with secure and reliable payment providers, offering multiple payment options.",
    image: image4,
    alt: "Support",
  },
];

// ... (imports and other code)

export default function InvoiceFeatures() {
   useEffect(() => {
      Aos.init({
        once: true,
      });
    }, []);
  return (
    <section className="py-16 px-4 sm:mt-6 sm:px-6 lg:px-8 overflow-x-hidden rounded-b-3xl pt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 pt-8">
          <span className="bg-[#E4E7FB] text-[#080D2D] border border-[#B8C0F5] text-xs lg:text-md mb-4 font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
            FEATURES
          </span>

          <h2 className="text-4xl md:text-4xl mt-6 lg:text-5xl font-semibold text-black mb-4">
            Get powerful business insights
          </h2>

          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Make informed decisions with real-time analytics
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mt-16">
          {features.map((feature, index) => {
            // Cards 0 & 3 get bg1, 1 & 2 get bg2 — pattern repeats every 4
            const group = index % 4;
            const bgClass =
              group === 0 || group === 3 ? "bg-[#EFF0FB]" : "bg-[#F2F4F8]";

            return (
              <div
                key={feature.title}
                className={`${bgClass} rounded-2xl p-6 lg:p-8 flex flex-col lg:h-[400px] 
                ${  index % 2 === 0  ? "animate-slide-in-from-left" : "animate-slide-in-from-right" }`}
                   data-aos="scroll-animation"
              >
                <div className="flex flex-col lg:flex-row justify-between h-full">
                  {/* Text Section */}
                  <div className="lg:w-1/2 w-full text-center lg:text-left mt-4 sm:mt-6 lg:mt-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image Section aligned bottom right, now centered for md and up */}
                  <div className="lg:w-1/2 w-full flex items-end justify-end mt-6 lg:mt-0 md:justify-center md:items-center">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full max-w-[400px] sm:max-w-[420px] h-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
