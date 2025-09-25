"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../public/images/GST-Invoicing.png";
import image2 from "../../public/images/Centralized-Inventory-Management.png";
import image3 from "../../public/images/Business-Intelligence-Reports.png";
import image4 from "../../public/images/Finance-Accounting.png";

const sectionTitle = "Simplify your finances, Amplify your business?";
const sectionDescription =
  "Easy, efficient, and secure retail POS billing software for SMBs.";

const features = [
  {
    title: "GST Invoicing",
    description:
      "Accurate and automatic GST calculations on every invoice generated. Detailed breakdown of tax components with easy generation of GST reports for compliance and auditing purposes.",
    points: [
      "PayrollTrack GST credits",
      "Generate invoices that adhere to the latest GST laws",
      "Easy integration with your accounting system",
    ],
    image: image1,
  },
  {
    title: "Centralized Inventory Management",
    description:
      "Simplified and automated live inventory management to make informed decisions. Identify underperforming items to prevent overstock situations, ensure your inventory is always balanced to meet demand.",
    points: [
      "Real-time stock tracking.",
      "Product categorization with custom categories and subcategories.",
      "Barcode scanning to reduce manual data entry.",
    ],
    image: image2,
  },
  {
    title: "Business Intelligence Reports",
    description:
      "Turn raw sales data into actionable insights with intuitive dashboards and custom reports. Analyze sales trends and make data-driven decisions. View detailed profit & loss statements to identify areas of improvement.",
    points: [
      "Sales performance analysis. ",
      "Category and product level insights.  ",
      "Export and share data in various formats.",
    ],
    image: image3,
  },
  {
    title: "Finance and Accounting",
    description:
      "Gain a comprehensive financial overview by effortlessly monitoring revenue, expenses, and profits. Automate key tasks and get detailed P&L statements.",
    points: [
      "Real-time financial insights.",
      "Expense categorization. ",
      "Accurate bookkeeping & Records.",
    ],
    image: image4,
  },
];

export default function InvoiceStrenghts() {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#EDF5FD] py-16 overflow-x-hidden">
      <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] lg:space-y-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" >
          <div className="mb-3">
            <span className="bg-[#E4E7FB] text-[#080D2D] border border-[#B8C0F5] text-xs lg:text-lg font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
              STRENGTHS
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl mt-4 font-bold text-gray-800 mb-3 lg:leading-snug">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 mt-2 md:max-w-xl mx-auto md:leading-snug">
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
              } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14`}
              data-aos="scroll-animation"
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