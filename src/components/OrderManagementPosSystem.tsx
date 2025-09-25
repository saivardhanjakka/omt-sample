"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    title: "Restaurant Billing Software",
    description:
      "Take table or area-wise orders, print KOT and accept payment. Manage all online orders, deliveries, and more from one single screen.",
    image: "/assets/billing.avif",
    alt: "Billing icon",
    href: "/poss/restaurant-billing-software",
  },
  {
    title: "Restaurant Rights and Reports",
    description:
      "Access multiple restaurant business reports and regulate staff rights to avoid fraud and pilferage, all from a single restaurant POS",
    image: "/assets/reporting.avif",
    alt: "Restaurant Rights and Reports icon",
    href: "/poss/reports-and-analytics",
    isAbsolute: true,
  },
  {
    title: "Inventory Management",
    description:
      "Track your inventory purchases, recipe costs, and raw material price trends with Petpooja's restaurant inventory software",
    image: "/assets/inventory.avif",
    alt: "Inventory Management icon",
    href: "/poss/restaurant-inventory-management-software",
  },
  {
    title: "Menu Management",
    description:
      "Create and customise different online menus for your restaurant as per your needs! Toggle your menu ON/OFF basis of stock availability",
    image: "/assets/menu.avif",
    alt: "Menu Management icon",
    href: "/poss/restaurant-menu-management-software",
  },
  {
    title: "CRM",
    description:
      "Create customer data pools and provide customised customer experience to all of them! Earn their loyalty by providing reward points",
    image: "/assets/crm.avif",
    alt: "CRM icon",
    href: "/poss/restaurant-customer-management-software",
  },
];

export default function OrderManagementPosSystem() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Do a lot more with one restaurant billing software
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Petpooja is the all-in-one restaurant billing POS system that handles all your operations on a single
            screen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${
                feature.isAbsolute ? "relative" : ""
              } bg-white rounded-lg p-8 shadow-sm hover:shadow-md hover:bg-[#F47537] transition-all duration-300 group h-96 cursor-pointer animate-slide-in-from-bottom`}
              data-aos="scroll-animation"
            >
              <div className="mb-6 flex justify-start">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4 text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white text-lg leading-relaxed mb-6 text-left">
                {feature.description}
              </p>

              {/* Hover link with arrow */}
             <a
                href={feature.href}
                className="absolute bottom-8 left-8 no-underline group"
              >
                <span className="relative inline-block w-[210px] h-8">
                  {/* Text appears on hover */}
                  <span className="absolute top-1/2 left-0 -translate-y-1/2 text-lg text-white group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore all features
                  </span>

                  {/* Arrow always visible */}
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 left-0 group-hover:left-[188px] w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
