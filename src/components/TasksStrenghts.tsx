"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import image1 from "../../public/images/Track-progress.png";
import image2 from "../../public/images/Collaborate.png";
import image3 from "../../public/images/Ready-made-templates.png";
import image4 from "../../public/images/Real-time-validation.png"
import Aos from "aos";
const sectionTitle = "Keep your team aligned";
const sectionDescription =
  "Smart project management system with department-wise & dependency-wise task allocation.";

const features = [
  {
    title: "Track progress",
    description:"Stay on top of your goals with a seamless task tracker. With Petpooja's project tracking software, you can easily oversee individual tasks and large-scale projects and receive the right updates.",
     
    points: [
      "Visual progress dashboards",
"PayrollCustomizable reporting",
"PayrollAutomated progress updates",

    ],
    image: image1,
  },
  {
    title: "Collaborate with the team",
    description:
      "Share ideas, assign tasks, and provide feedback in a central platform designed for collaboration. A shared workspace ensures everyone is on the same page, no matter where they are.",
    points: [
      "Centralized communication",
      "Task assignment",
      "Role-based permissions",
    ],
    image: image2,
  },
  {
    title: "Ready-made templates",
    description:
      "Save time with professionally designed templates tailored to your industry. From project plans to reports, these templates streamline your workflow and maintain consistency. Customize them to fit your unique requirements or use them as-is for instant results.",
    points: [
      "Quick setup ",
      "Industry-specific template library  ",
      "Customizable templates",
    ],
    image:image3,
  },
   {
    title: "AI Auto-Review & Validation",
    description:
      "Eliminate errors before they happen with instant validation. Get immediate feedback, reduce revisions, and deliver flawless results faster. Validate data with Timestamps, ensuring accuracy and transparency.",
    points: [
      "Instant task verification",
"PayrollData consistency & accuracy", 
"PayrollReduced rework"
    ],
    image: image4,
  },
];

export default function TasksStrenghts() {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);
   useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
  return (
    <section className=" py-16 overflow-x-hidden">
      <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] lg:space-y-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-3">
            <span className="bg-[#EBF7ED] text-[#008745] border border-[#A4D5BB] text-xs lg:text-lg font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
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
