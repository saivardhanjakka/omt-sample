// import Image from "next/image"

// export default function MultiTerminalBillingBar() {
//   return (
//     <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
//       <div className="text-center">
//   <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
//   Get error-free billing & reports for your bar
//   </h2>

//   <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
//  Simplify customer management during happy hours with a quick & easy-to-use billing software
//   </p>
// </div>

//       <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//         {/* Left image */}
//         <div className="w-full lg:w-1/2">
//           <Image
//             src="/assets/multi-billing-software_lg.avif"
//             alt="table-management-pos-software"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
//           />
//         </div>

//         {/* Right content */}
//         <div className="w-full lg:w-1/2">
//           <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
//             <span className="text-gray-800">Multi-terminal billing</span>
//           </h3>

//           <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
//          Petpooja restaurant billing software runs smoothly on multiple billing counters. This way you can take the bar order from one counter & food from another
//           </p>

//           <div className="mt-6 space-y-4">
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
//                 <div className="w-2 h-2 bg-red-600 rounded-full"></div>
//               </div>
//               <p className="text-gray-700 text-base md:text-lg">
//         Smooth operations during the rush hours
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
//                 <div className="w-2 h-2 bg-red-600 rounded-full"></div>
//               </div>
//               <p className="text-gray-700 text-base md:text-lg">
//              Print & record station-wise KOTs to avoid overlapping of orders
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }
"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import image from "../../public/images/list-icon.avif"
const features = [
  {
    id: "multi-terminal",
    heading: "Multi-terminal billing",
    title: "Get error-free billing & reports for your bar",
    description:
      "Simplify customer management during happy hours with a quick & easy-to-use billing software",
    detail:
      "Petpooja restaurant billing software runs smoothly on multiple billing counters. This way you can take the bar order from one counter & food from another",
    points: [
      "Smooth operations during the rush hours",
      "Print & record station-wise KOTs to avoid overlapping of orders",
    ],
    image: "/assets/multi-billing-software_lg.avif",
    
  },
  {
    id: "alcohol-inventory",
    heading: "Alcohol Inventory Management",
    title: "",
    description:
      "Your nightmare of recording & managing inventory manually gets completely automated with Petpooja bar POS!",
    detail: "",
    points: [
      "Record liquor stock in an item-wise inventory",
      "Track consumption rate, pilferage and other expenses",
    ],
    image: "/assets/alcohol-inventory-management_lg.avif",
    
  },
  {
    id: "bill-modifications",
    heading: "Bill Modifactions",
    title: "",
    description:
      "Your customers might want to split their bills in different ways. Whether they are going dutch or have a common tab. Petpooja bar POS will customize bill as requested!",
    detail: "",
    points: [
      "Split bills either by percentage, price or proportions",
      "Create separate bills for all the customers, their food and drinks",
    ],
    image: "/assets/bill-modifactions_lg.avif",
   
  },
];

export default function BarFeatureSections() {
  useEffect(() => {
      Aos.init({ once: true });
    }, []);
  return (
     <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
        <div className="mx-auto px-6 sm:px-10 lg:px-16 xl:px-28 max-w-[1400px] space-y-16 lg:space-y-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Get error-free billing & reports for your bar
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Simplify customer management during happy hours with a quick &
          easy-to-use billing software
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
