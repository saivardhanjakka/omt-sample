"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function QuickSimpleSectionInventory() {
  useEffect(() => {
          Aos.init({
            once: true,
          });
        }, []);
  return (
    <div className="bg-[#FEF0E9] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="	text-4xl sm:text-4xl font-bold text-gray-900 mb-6">Quick & simple</h1>
          <p className="	text-xl sm:text-xl text-gray-600 font-normal">
           An inventory management software that saves your time and money          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Main Image */}
          <div className="flex justify-center">
         <div className="relative w-full max-w-2xl 	h-[20rem] sm:h-[34rem]">

              <Image
                src="/assets/quick-simple.webp"
                alt="Person using POS terminal touchscreen in restaurant"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side - Features Grid */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-10 md:gap-y-12 lg:gap-y-14">            {/* Each Feature */}
            {[
              { src: "/assets/offline.webp", alt: "Satellite icon", label: "Works offline, cloud-based software" },
              { src: "/assets/any-hardware.webp", alt: "Hardware icon", label: "Works on any hardware" },
              { src: "/assets/core-modules-common.webp", alt: "OS icon", label: "Works on major Operating systems" },
              { src: "/assets/keyboard_touch.webp", alt: "Touchscreen icon", label: "Keyboard / touchscreen view" },
              { src: "/assets/qr-code.webp", alt: "QR icon", label: "QR scan & order" },
              { src: "/assets/e-bill.webp", alt: "E-bill icon", label: "E-bill receipts" },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4 animate-slide-in-from-bottom" data-aos="scroll-animation">
                <div className="flex justify-center">
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    width={70}
                    height={70}
                  />
                </div>
                <p className="text-gray-700 	text-lg  sm:text-lg font-medium leading-relaxed">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
