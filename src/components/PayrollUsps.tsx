"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import flexibleImg from "../../public/images/Flexible-Shifts-new.svg";
import loansImg from "../../public/images/Loans-Advances-new.png";
import reportsImg from "../../public/images/Customisable-reports-new.png";
import Aos from "aos";

const sectionTitle = "Easy, detailed & accurate operations?";
const sectionDescription =
  "Our payroll platform brings flexibility, accuracy, and insight to your workforce operations.";

const features = [
  {
    title: "Flexible Shifts",
    description:
      "Overnight shifts? Whole-day working? Multiple shifts in a day? Or just the usual 9 to 5 – our shift module has you covered.",
    points: [
      "Multiple shift creation & assignment",
      "24-hour & overnight shifts timings",
      "Alternate week-off assignment",
    ],
    image: flexibleImg,
  },
  {
    title: "Loans & Advances",
    description:
      "Can’t track how much amount was given to which employee on which date? Well, now you can note down everything & adjust it against salary automatically.",
    points: [
      "Easily note loans/advance payment transactions against employees",
      "Auto-deduct advance payments from salary",
      "Easy access to debit/credit transaction logs of employees",
    ],
    image: loansImg,
  },
  {
    title: "Customisable Reports",
    description:
      "Avail reports as per your required format & get detailed insights about your staff operations & activities..",
    points: [
      "Easily download reports in excel or export to google sheets ",
      "6+ industry-standard reports & unlimited customisable reports as per requirement ",
      "Get employee, department, designation & overall organization-wise reports for better decision-making",
    ],
    image: reportsImg,
  },
];

export default function PayrollUsps() {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);
useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <section className="bg-[#EDF5FD] py-16 overflow-x-hidden">
      <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] lg:space-y-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-3">
            <span className="bg-[#E3F1FF] text-[#0D6AC0] border border-[#C6E2F8] text-xs lg:text-lg font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
              Our USPs
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
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4 lg:mb-6">
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
