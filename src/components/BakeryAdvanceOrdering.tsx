// import Image from "next/image";

// export default function BakeryAdvanceOrdering() {
//   return (
//     <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
//       <div className="text-center">
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
//        A bakery POS for all your kneads
//         </h2>

//         <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
//         Manage high order volumes while keeping track of customers’ needs and requests with our POS
//         </p>
//       </div>

//       <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//         {/* Left image */}
//         <div className="w-full lg:w-1/2">
//           <Image
//             src="/assets/advanced-ordering_lg.avif"
//             alt="quick-billing"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
//           />
//         </div>

//         {/* Right content */}
//         <div className="w-full lg:w-1/2">
//           <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
//             <span className="text-gray-800">Advanced Ordering</span>
//           </h3>

//           <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
//            Easily accept & manage advance orders while keeping track of the delivery date so that no customers & their special dates are missed
//           </p>

//           <div className="mt-6 space-y-4">
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
//                 <div className="w-2 h-2 bg-red-600 rounded-full"></div>
//               </div>
//               <p className="text-gray-700 text-base md:text-lg">
//               Take large orders in advance and deliver on time
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
//                 <div className="w-2 h-2 bg-red-600 rounded-full"></div>
//               </div>
//               <p className="text-gray-700 text-base md:text-lg">
//               Keep track of the orders, delivery dates and customer details, all in one place!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import image from "../../public/images/list-icon.avif"

const sectionTitle = "Run your entire bakery effortlessly";
const sectionDescription =
  "From order management to inventory tracking – power your bakery operations with one POS.";

const features = [
  {
    title: "Advanced Ordering",
    description:
      "Easily accept & manage advance orders while keeping track of the delivery date so that no customers & their special dates are missed.",
    image: "/assets/advanced-ordering_lg.avif",
    alt: "advanced-ordering",
    points: [
      "Take large orders in advance and deliver on time",
      "Keep track of the orders, delivery dates and customer details, all in one place!",
    ],
  },
  {
    title: "Inventory Management",
    description:
      "Petpooja's inventory management system records item-wise inventory and tracks the consumption rate so that you never run out of your secret ingredients.",
    image: "/assets/inventory-management-bakery_lg.avif",
    alt: "inventory-management",
    points: [
      "The POS tracks your inventory expiry dates, wastage and pilferage",
      "Analyse inventory consumption data with detailed Petpooja bakery POS reports",
    ],
  },
  {
    title: "Central Kitchen Management",
    description:
      "Manage all your bakery outlets from one central kitchen for free! Control inventory needs and purchase orders for all outlets from a single screen in a few simple clicks.",
    image: "/assets/central-kitchen-management_lg.avif",
    alt: "central-kitchen-management",
    points: [
      "With a centralised kitchen, restock your inventory without paying any additional cost",
      "You can manage raw material stock levels, item conversion costs and delivery route plan, etc.",
    ],
  },
];

export default function BakeryHighlight() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
        A bakery POS for all your kneads
         </h2>

        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
        Manage high order volumes while keeping track of customers’ needs and requests with our POS
         </p>
      </div>

        {/* Features */}
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
                    alt={feature.alt}
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
