"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import poss1 from "../../public/assets/poss1.png"
import poss2 from "../../public/assets/poss2.png"
import poss3 from "../../public/assets/poss3.png"
import poss4 from "../../public/assets/poss4.png"
const smartPosFeatures = [
  {
    title: "Automated Billing and Accounting",
    description:
      "Say goodbye to manual errors and hello to seamless payments. Ordermatic handles all billing, payments and accounting, giving you more time to focus on your customers. Offering credit to trusted customers? Follow up and collect all pending bills at their convenience.",
    href: "/pos/restaurant-billing-software",
    image: poss1,
    alt: "Billing software UI",
    linktext:" Explore all features →"
  },
  {
    title:"One Online Ordering System to Manage All Your Orders",
    description:
      "Accept online orders, manage menus, mark food ready, collect payments, and track revenue—all from a single screen",
    href: "#ScheduleForm",
    image: poss4,
    alt: "Real-time reports UI",
    linktext:"Book a Free Demo →"
  },
  
 
  {
    title:"Reporting and Insights",
    description:
      "Grow your business with data-driven insights provided by experts. Use comprehensive reports to make informed decisions and drive your food businesse’s success.",
    href: "#ScheduleForm",
    image: poss3,
    alt: "Real-time reports UI",
    linktext:"Book a Free Demo →"
  },
   {
    title: "Inventory Management",
    description:
      "Reduce losses and waste by efficiently tracking your inventory levels. Ordermatic helps you keep an eye on stock, predict needs, and prevent over-ordering, ultimately saving money and resources.",
    href: "#ScheduleForm",
    image: poss2,
    alt: "Billing software UI",
    linktext:"Book a Free Demo →"
  },
  
];

export default function SmartPos() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="bg-white px-6 md:px-14 lg:px-4 py-16 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-md font-semibold text-[#F47537] uppercase mb-4">ADVANCED POS & BILLING SOFTWARE FEATURES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            POS That Understands Your <br className="hidden lg:block" /> Restaurant Needs
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl lg:max-w-4xl">
            Discover our restaurant billing software, designed to effortlessly manage high order volumes with ease and precision. Experience seamless performance that simplifies your billing process, ensuring efficiency and accuracy every step of the way
          </p>
        </div>

        {/* Feature Sections */}
        {smartPosFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8 mb-20"
          >
            <div className="w-full lg:w-3/5 flex justify-center">
             <div className="w-full lg:w-[80%] xl:w-[80%] animate-slide-in-from-left" data-aos="scroll-animation">

                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            <div
              className="w-full lg:w-2/5 animate-slide-in-from-right"
              data-aos="scroll-animation"
            >
              <h3 className="text-2xl  sm:text-2xl lg:text-3xl  text-gray-900 leading-tight">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-700 text-md lg:text-base leading-relaxed lg:leading-7">
                {feature.description}
              </p>
              <a
                href={feature.href}
                className="inline-flex items-center mt-5 text-md font-semibold text-black hover:underline  hover:text-[#F47537]"
              >
               {feature.linktext}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
