"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import integrated1 from "../../public/assets/integratedapp1.png"
import integarted2 from "../../public/assets/integratedapp2.png"
import integarted3 from "../../public/assets/integratedapp3.png"
import integarted4 from "../../public/assets/integratedapp4.png"
const features = [
  {
    title: "Integrated Merchant Payment QR",
    description:
      "Simplify the way your customers pay with Ordermatic’s Integrated Merchant Payment QR. Accept instant digital payments directly at the counter, table, or during delivery",
    image: {
      src: integrated1,
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
    },
  },
  {
    title: "Home Ordering system",
    description:
      "Let Customers Order From Home. Comfort Meets Convenience. With Ordermatic’s Home Ordering system, your restaurant stays just a tap away. Accept and manage online orders directly from your own branded link or website—no third-party commissions, no hassle",
    image: {
      src: integarted2,
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
    },
  },
  {
    title: "Streamline Deliveries. Satisfy Customers. Grow Smarter.",
    description:
      "Simplify and optimize your entire delivery process with Ordermatic’s Delivery Module. From order dispatch to doorstep delivery, manage it all in one place—faster, smarter, and more efficiently.",
    image: {
      src: integarted3,
      alt: "Station-wise kot printing",
    },
  },
  {
    title: "CRM",
    description:
      "The Bill Isn’t the End — It’s Just the Beginning With Ordermatic CRM, understand your customers beyond the transaction. Build lasting relationships through smart tools that help you personalize experiences, earn trust, and drive loyalty.",
    image: {
      src: integarted4,
      alt: "Table and area management",
    },
  },
 
];

export default function AddOnSection() {
  useEffect(() => {
      Aos.init({
        once: true,
      });
    }, []);
  return (
    <div className="min-h-screen bg-white  -mt-24 overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <div className="mb-18 text-center">
          <h3 className="text-4xl  md:text-4xl font-bold text-gray-900 ">
           Integrated App Ecosystem
          </h3>
           <p className="text-md  lg:max-w-3xl  font-bold text-gray-900 mt-4 mx-auto">
            Seamlessly connect essential tools and services — from payments to
            delivery and beyond — all within the Ordermatic platform. One
            ecosystem, endless possibilities.
          </p>
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
