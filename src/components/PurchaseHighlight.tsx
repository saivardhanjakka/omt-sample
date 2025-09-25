"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import image1 from "../../public/images/Scan-Invoice.png";
import image2 from "../../public/images/Update-in-Tally.png";
import image3 from "../../public/images/Vendor-Payout.png";
import image4 from "../../public/images/Overdraft-Facility.png"
import Aos from "aos";
const sectionTitle = "Digitize Invoices, Update Inventory Manage Payables";
const sectionDescription =
  "Strengthen purchase decisions & optimize account payables.";

const features = [
  {
    title: "Scan Invoice",
    description:"Click a picture or upload an image of your invoice. Our advanced OCR (optical character recognition) technology will scan and extract key information from your invoices. Saving your data entry time and eliminating errors.",
     
    points: [
      "Easy to setup",
"Automated data capture",
"Boosts productivity by saving time and minimizing errors",

    ],
    image: image1,
  },
  {
    title: "Update in Tally",
    description:
      "Update invoices and transaction data into your Tally software with the least manual intervention. Smooth synchronization with Petpooja POSS and Petpooja Invoice.",
    points: [
      "No manual intervention required",
      "Auto update purchase data directly in Tally/Poss/Invoice, etc.",
      "Keeps your records up-to-date",
    ],
    image: image2,
  },
  {
    title: "Vendor Payout",
    description:
      "Seamless vendor payout process that replaces time-consuming traditional manual methods and pays your vendors directly.",
    points: [
      "PayrollPay your vendors on time, every time ",
      "Pay utility bills hassle-free ",
      "Secure payment method",
    ],
    image:image3,
  },
   {
    title: "Overdraft Facility",
    description:
      "Address your sudden need for cash with the overdraft facility. Ideal for handling sudden expenses.",
    points: [
      "Pay interest on the amount you utilize",
"Flexible auto-renewal", 
"Collateral free"
    ],
    image: image4,
  },
];

export default function PurchaseHighlight() {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);
 useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section className=" py-16 lg:mt-10 overflow-x-hidden">
      <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] lg:space-y-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-3 lg:mb-6">
            <span className="bg-[#FDF6DD] text-[#71632F] border border-[#D8C78B] text-xs lg:text-lg font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
           HIGHLIGHTS
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl mt-4 font-bold text-gray-800 mb-3 lg:leading-snug">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 mt-2 md:max-w-xl lg:mb-22 mx-auto md:leading-snug">
            {sectionDescription}
          </p>
        </div>

        {/* Feature Blocks */}
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          const showPoints = expandedIndex === index;

          return (
            <div
      key={index}
      className={`flex flex-col-reverse ${
        isEven ? "lg:flex-row animate-slide-in-from-left" : "lg:flex-row-reverse animate-slide-in-from-right"
      } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14`}  data-aos="scroll-animation"
    >
              {/* Text Section */}
              <div className={`w-full lg:w-1/2 text-left px-0 md:px-6 ${isEven ? "lg:pl-8" : ""}`}>
                <h3 className="lg:text-4xl text-2xl font-semibold text-gray-800 mb-4 lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 lg:mb-6 mb-4 text-lg whitespace-pre-line lg:max-w-2xl">
                  {feature.description}
                </p>

                {/* Desktop Points */}
                <ul className="hidden lg:block text-gray-600 list-disc list-outside pl-5 space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="text-lg">{point}</li>
                  ))}
                </ul>

                {/* Read More for Mobile */}
                <div className="block lg:hidden">
                  {!showPoints ? (
                    <button
                      onClick={() => setExpandedIndex(index)}
                      className="mt-2 text-[#0D6AC0] text-md font-medium underline"
                    >
                      Read more
                    </button>
                  ) : (
                    <ul className="text-gray-600 list-disc list-outside pl-5 space-y-1 mt-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="text-lg">{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="rounded-2xl w-full max-w-[520px] h-[360px] sm:h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
