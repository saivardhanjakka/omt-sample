"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import billingone from "../../public/assets/billing-one.png"
import billingtwo from "../../public/assets/billing-two.png"
import billingthree from "../../public/assets/billing-three.png"
import billingfour from "../../public/assets/billingfour.png"
import billingfive from "../../public/assets/billing-five.png"
const features = [
  {
    title: "Don’t lose even a single bill",
    description:
      "Ensure every transaction is accounted for with our automated billing and payment system.",
    image: {
      src:billingone,
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
    },
  },
  {
    title: "More Customers, Less Queues",
    description:
      "Optimize your customer flow and reduce wait times, making every visit a delight.",
    image: {
      src: billingtwo,
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
    },
  },
  {
    title: "Automate your Kitchen(s) with KOTs",
    description:
      "Enhance your kitchen efficiency with Kitchen Order Tickets that streamline order management.",
    image: {
      src: billingthree,
      alt: "Station-wise kot printing",
    },
  },
  {
    title: "Go Digital - Monitor everything",
    description:
      "Keep track of your entire operation from any device, anytime, anywhere.",
    image: {
      src: billingfour,
      alt: "Table and area management",
    },
  },
  {
    title: "Boost customer loyalty - Increase business",
    description:
      "Provide the convenience of ordering from home to returning customers. Offer scheduled takeaway and deliveries, enhancing your business’s reach and profitability.",
    image: {
      src: billingfive,
      alt: "Configure taxes & discounts",
    },
  },
];

export default function BillingSoftwareFeatures() {
  useEffect(() => {
      Aos.init({
        once: true,
      });
    }, []);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <div className="mb-18 text-center">
          <h3 className="text-4xl  md:text-4xl font-bold text-gray-900 ">
            An all-rounder restaurant billing software
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full max-w-2xl mx-auto text-left space-y-6"
            >
              {/* Image with same width as text */}
              <div className="w-full relative aspect-[4/3]  animate-slide-in-from-right"  data-aos="scroll-animation">
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
              <div className="text-left mt-12 animate-slide-in-from-left"  data-aos="scroll-animation">
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
