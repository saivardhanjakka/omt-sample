"use client"
import Image from "next/image";
import { useEffect } from "react";
import image from "../../public/images/list-icon.avif"
import Aos from "aos";
const features = [
  {
    title: "Table Management",
    image: "/assets/table-management-fine-dine_lg.avif",
    alt: "table-management-pos-software",
    description:
      "A big table for the large group. A single table for a family. Double seating for smaller groups. No sweat in table management with our restaurant POS that merges, moves and splits tables orders with ease",
    points: [
      "Record table-wise order & never serve the wrong orders on the wrong tables",
      "Easily manage large groups of customers and assign them tables as per availability",
    ],
    reverse: false,
  },
  {
    title: "Comprehensive Tax Reports",
    image: "/assets/comprehensive-tax-reports-fine-dine_lg.avif",
    alt: "comprehensive-tax-reports-pos",
    description:
      "Don't worry about cumbersome tax reports for your single or chain outlets. Get it all sorted with all-inclusive POS reports",
    points: [
      "Do tax recording, analysis and reporting without any expert help with our POS reports",
      "Focus on paying taxes while our restaurant POS manages all your finances",
    ],
    reverse: true,
  },
  {
    title: "Employee Management",
    image: "/assets/employee-management-fine-dine.avif",
    alt: "employee-management-fine-dine",
    description:
      "Keep tabs on your staff's performance with our restaurant POS staff reports so that their efforts never go unappreciated",
    points: [
      "Regulate billers' rights and task for systemic restaurant management",
      "Get reports of their sales data, tables assisted, cash register operations, and much more",
    ],
    reverse: true,
  },
  {
    title: "Inventory Management",
    image: "/assets/inventory-management-fine-dine_lg.avif",
    alt: "inventory-management-pos",
    description:
      "Butter chicken without chicken is a disaster! Petpooja's restaurant inventory system helps you take orders as per stock availability while monitoring the consumption rate of those expensive raw materials",
    points: [
      "Petpooja POS' smart stock alerts will automatically alert 'low stocks' on your billing screen",
      "The inventory management system calculates all your raw materials expenses and incurred costs",
    ],
    reverse: false,
  },
];

export default function FineDineFeaturesSection() {
  useEffect(() => {
        Aos.init({ once: true });
      }, []);
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
        <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] space-y-16 lg:space-y-20">
      <div className="text-center">
  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
    A 5-star restaurant POS experience awaits
  </h2>

  <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
  Make your dine-in operations super-smooth with our easy-to-use restaurant billing software
  </p>
</div>
      {features.map((feature, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col ${
                isEven ? "lg:flex-row animate-slide-in-from-left"  : "lg:flex-row-reverse animate-slide-in-from-right"
              } items-center gap-8 lg:gap-14`}
             data-aos="scroll-animation"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="rounded-2xl w-full max-w-[520px] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt="image"
                    width={600}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 lg:text-lg  mb-3 text-md lg:mb-5">{feature.description}</p>

                <ul className="space-y-3 mt-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-800 text-base lg:text-lg">
                      <Image
                        src={image}
                        alt="point icon"
                        width={20}
                        height={20}
                        className="mt-1"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
