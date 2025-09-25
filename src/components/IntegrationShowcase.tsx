"use client";

import Image from "next/image";
import upilogo from "../../public/images/UPI.png";
import dashboard from "../../public/images/Single-Dashboard.png";
import b2b from "../../public/images/B2B-Delivery.png";
import loyalty from "../../public/images/Loyalty.png";
import crm from "../../public/images/CRM-tools.png";
import accounting from "../../public/images/Accounting-large-chains.png";
import gpay from "../../public/images/Gpay_sm.png";
import invoicebazaar from "../../public/images/invoice-bazaar_sm.png";
import paytm from "../../public/images/paytm_sm.png";
import razorpay from "../../public/images/razorpay_sm.png";
import upi from "../../public/images/upi_sm.png";
import zomato from "../../public/images/zomato.png";
import peppo from "../../public/images/peppo_sm.png";
import dotpe from "../../public/images/dotpe_sm.png";
import magicpin from "../../public/images/magicpin_sm.png";
import talabat from "../../public/images/tabalat.png";
import easydiner from "../../public/images/eazydiner_sm.png";
import swiggy from "../../public/images/swiggy_sm.png";
import thrive from "../../public/images/thrive.png";
import yumzy from "../../public/images/yumzy.png";
import jungleworks from "../../public/images/jungleworks_sm.png";
import edge from "../../public/images/Edge-ONDC.png";
import flash from "../../public/images/flash.png"
import pidge from "../../public/images/pidge.png"
import unzo from "../../public/images/unzo.png"
import ele from "../../public/images/ele.png"
import shadowfax from "../../public/images/shadofax.png"
const features = [
  {
    title: "Multiple UPI Integrations for quick payment",
    description: "Accept payments from anywhere and everywhere",
    illustration: upilogo,
    logos: [
      { src: gpay, alt: "Google Pay" },
      { src: invoicebazaar, alt: "Invoice Bazaar" },
      { src: paytm, alt: "Paytm" },
      { src: razorpay, alt: "Razorpay" },
      { src: upi, alt: "UPI" },
    ],
  },
  {
    title: "Manage all food aggregators from a single dashboard",
    description: "Accept online orders on the fly",
    illustration: dashboard,
    logos: [
      { src: zomato, alt: "Zomato" },
      { src: peppo, alt: "peppos" },
      { src: dotpe, alt: "dotpe" },
      { src: magicpin, alt: "magicpin" },
      { src: talabat, alt: "talabat" },
      { src: easydiner, alt: "easydiner" },
      { src:swiggy, alt: "swiggy" },
      { src: thrive, alt: "thrive" },
      { src: yumzy, alt: "yumyz" },
      { src: jungleworks, alt: "jungleworks" },
      { src: edge, alt: "edge" },
    ],
  },
  {
    title: "Easy accessibility to B2B delivery agents",
    description: "Super-fast deliveries at a button click",
    illustration: b2b,
    logos: [
    
      { src: pidge, alt: "pidge" },
      { src: shadowfax, alt: "shadowfax" },
    { src: unzo, alt: "unzo" },
       { src: ele, alt: "ele" },
          { src:flash, alt: "flash" },
    ],
  },
//   {
//     title: "Simple integrations of various loyalty programs",
//     description: "Reward your customers with extra joy",
//     illustration: loyalty,
//     logos: [
//       { src: "/images/features/accounting/tally.png", alt: "Tally" },
//       { src: "/images/features/accounting/zoho.png", alt: "Zoho Books" },
//     ],
// //   },
//   {
//     title: "CRM tools to keep track of your customer data",
//     description: "Know your customers better",
//     illustration: crm,
//     logos: [
//       { src: "/images/features/crm/loyaltyfox.png", alt: "LoyaltyFox" },
//       { src: "/images/features/crm/epsilon.png", alt: "Epsilon" },
//     ],
//   },
//   {
//     title: "Integrations to simplify accounting for large chains",
//     description: "Integrations to simplify accounting for large chains",
//     illustration: accounting,
//     logos: [
//       { src: "/images/features/crm/loyaltyfox.png", alt: "LoyaltyFox" },
//       { src: "/images/features/crm/epsilon.png", alt: "Epsilon" },
//     ],
//   },
];

export default function IntegrationShowcase() {
return (
    <div className="w-full bg-white">
      {features.map((feature, index) => (
        <section key={index} className="w-full px-10 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Top: Text + Illustration */}
            <div className="flex flex-col lg:ml-6 md:ml-10 md:flex-row items-center gap-10 lg:gap-14">
              {/* Text */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-8 text-center md:text-left">
                  {feature.description}
                </p>
              </div>

              {/* Illustration */}
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <Image
                  src={feature.illustration}
                  alt="Feature illustration"
                  width={320}
                  height={240}
                  className="w-90 lg:w-[300px] sm:w-72 md:w-[200px] h-auto"
                />
              </div>
            </div>

            {/* Logos: full width, aligned with section */}
            <div className="mt-10 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {feature.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-xl p-5 flex justify-center items-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={70}
                      className="h-10 sm:h-12 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
