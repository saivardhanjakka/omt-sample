"use client";

import { useState } from "react";
import Image from "next/image";

export default function AddOnsSection() {
  const menuItems = [
    {
      title: "Ordermatic CRM",
      description:
        "The Bill Isn’t the End — It’s Just the Beginning With Ordermatic CRM, understand your customers beyond the transaction. Build lasting relationships through smart tools that help you personalize experiences, earn trust, and drive loyalty.",
      image: "/assets/addons-section-full.webp",
    },
    {
      title: "Delivery Module",
      description:
        "Know your business to grow your business with insightful 100+ downloadable reports about your sales, inventory, cancelled orders, payments, CRM, and much more.",
      image: "/assets/analytics_lg.avif",
    },
    {
      title: "Integrated Merchant Payment QR",
      description:
        "Use smart and easy-to-use technology that helps you offer premium service and the best hospitality to make your customers' experiences memorable.",
      image: "/assets/Customer-service_lg.avif",
    },
    {
      title: "Advanced Ordering",
      description:
        "Petpooja POS features that are built to simplify your staff's everyday operations, be it inside the kitchen or in the dining area or behind the billing counter, hassle-free.",
      image: "/assets/Operations_lg.avif",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("Ordermatic CRM");

  const activeItem = menuItems.find((item) => item.title === activeTab);

  return (
    <section className="bg-[#FEF0E9] py-12 px-4 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-15 lg:mb-20 md:mb-20 sm:mb-15">
          <h4 className="text-md font-semibold text-[#F47537] uppercase tracking-wide mb-2">
            Integrated App Ecosystem
          </h4>
          <p className="text-md text-center md:text-md sm:text-sm lg:max-w-2xl lg:text-xl font-bold text-gray-900 mt-2 mx-auto">
            Seamlessly connect essential tools and services — from payments to
            delivery and beyond — all within the Ordermatic platform. One
            ecosystem, endless possibilities.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Tabs */}
          <div className="lg:w-1/3">
            {menuItems.map((item) => (
              <div key={item.title} className="mb-6 lg:mb-10">
                <div
                  onClick={() => setActiveTab(item.title)}
                  className={`cursor-pointer border-l-2 pl-3 ${
                    activeTab === item.title
                      ? "border-[#F47537]"
                      : "border-gray-300"
                  }`}
                >
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      activeTab === item.title
                        ? "text-[#F47537]"
                        : "text-gray-900"
                    } mb-3`}
                  >
                    {item.title}
                  </h3>

                  {activeTab === item.title && (
                    <>
                      <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        {item.description}
                      </p>

                      {/* Mobile Only Image */}
                      <div className="mt-6 lg:hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} Preview`}
                          width={900}
                          height={700}
                          className="w-full h-auto rounded-xl shadow"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Image on Desktop */}
          <div className="hidden lg:flex lg:w-2/3 justify-center items-start">
            <div className="w-[75%]">
              {activeItem && (
                <Image
                  src={activeItem.image}
                  alt={`${activeItem.title} Preview`}
                  width={900}
                  height={700}
                  className="w-full h-auto rounded-xl shadow"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
