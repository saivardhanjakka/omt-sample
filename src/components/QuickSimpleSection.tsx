"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import quick1 from "../../public/assets/quick1.png"
import quick2 from "../../public/assets/quick2.png"
import quick3 from "../../public/assets/quick3.png"
import quick4 from "../../public/assets/quick4.png"
import quick5 from "../../public/assets/quick5.png"
import quick6 from "../../public/assets/quick6.png"
export default function QuickSimpleSection() {
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
          <h1 className="	lg:text-5xl  md:text-4xl text-2xl sm:text-2xl font-bold leading-tight text-gray-900 mb-6">Quick. Simple. Powerful. Everything You Need in a POS.</h1>
          <p className="	text-xl sm:text-xl text-gray-600 font-normal">
           Easily integrate Ordermatic billing software into your current setup — simple, smooth, and efficient.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Main Image */}
          <div className="flex justify-center" >
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
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-10 md:gap-y-12 lg:gap-y-14 ">            {/* Each Feature */}
            {[
              { src: quick1, alt: "Satellite icon", label: "Always stay online even with your mobile data" },
              { src: quick2, alt: "Hardware icon", label: "Works on any hardware" },
              { src: quick3, alt: "OS icon", label: "Simple POS" },
              { src: quick4, alt: "Touchscreen icon", label: "Keyboard / touchscreen view" },
              { src: quick5, alt: "QR icon", label: "QR scan & order" },
              { src: quick6, alt: "E-bill icon", label: "Followups" },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4  animate-slide-in-from-bottom" data-aos="scroll-animation">
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
