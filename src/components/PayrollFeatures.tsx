// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import image1 from "../../public/images/attandance-timesheet-new.svg";
// import image2 from "../../public/images/leave-managment-new.svg";
// import image3 from "../../public/images/easy-payroll-new.svg";

// const features = [
//   {
//     id: 1,
//     title: "Attendance & Timesheet",
//     description:
//       "Fingerprint & location-based attendance to keep track of your staff's whereabouts",
//     points: [
//       "Robust hardware with a fast capacitive touch sensor for industrial–grade detection",
//       "Instant data sync with software",
//       "Easy revisions of attendance punch–in",
//     ],
//     image: image1,
//   },
//   {
//     id: 2,
//     title: "Easy Payroll",
//     description:
//       "Payroll calculations haunting you in your sleep? Not anymore. We will do the complex calculations for you so you can always disburse your salary payments on time!",
//     points: [
//       "Bifurcate monthly & hourly wage employees",
//       "Enforce overtime & late entry rules with a penalty",
//       "Easy breakdown of PF, ESIC and PT in employee salary",
//       "Single-page, editable & easy to understand payroll dashboard",
//       "Avail ready-to-download pay slips for each employee",
//     ],
//     image: image2,
//   },
//   {
//     id: 3,
//     title: "Simplified Leave Management",
//     description:
//       "Always rushing to fill last-minute absentees? Stay on top of your staff leaves & ensure you always have the required workforce!",
//     points: [
//       "Multiple types of available leave",
//       "Paid & unpaid leave",
//       "Leave approval mechanism",
//       "Leave balances and consumption reports",
//     ],
//     image: image3,
//   },
// ];

// export default function PayrollFeature() {
//   const [activeTab, setActiveTab] = useState(0);
//   const isLongText = (text: string) => text.length > 150;

//   return (
//     <div className="bg-[#004975] text-white px-6 py-12 lg:py-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <button className="bg-[#E3F1FF] rounded-full px-4 py-2 lg:px-5 lg:py-1 mb-4">
//             <span className="text-transparent bg-clip-text bg-[#0D6AC0] text-sm lg:text-lg font-semibold">
//               OUR FEATURES
//             </span>
//           </button>

//           <h2 className="sm:text-2xl md:text-4xl lg:text-6xl lg:mt-2 font-bold mb-4 leading-[1.2]">
//             Next-gen payroll solution for <br className="hidden lg:block" />
//             next-gen business owners
//           </h2>
//           <p className="text-white lg:mt-4 sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-normal max-w-xl mx-auto">
//             We provide an end-to-end solution for complete tracking of your staff, so you don’t have to!
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="hidden lg:flex items-center lg:mt-6 justify-center mb-16">
//           <div className="flex items-center gap-1">
//             {features.map((f, idx) => (
//               <div key={f.id} className="flex items-center">
//                 <button
//                   onClick={() => setActiveTab(idx)}
//                   className={`text-center transition px-4 ${
//                     activeTab === idx ? "text-white" : "text-white/60 hover:text-white"
//                   }`}
//                 >
//                   <div className="text-lg font-semibold">0{f.id}</div>
//                   <div className="text-lg font-medium mt-1 whitespace-nowrap">{f.title}</div>
//                 </button>

//                 {idx !== features.length - 1 && (
//                   <div
//                     className={`mx-6 w-50 transition-all duration-300 ${
//                       (activeTab === 1 && idx === 0) || (activeTab === 2 && idx <= 1)
//                         ? "bg-white h-[2px]"
//                         : "bg-white/30 h-[2px]"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* lg layout */}
//         <div className="hidden lg:flex items-start justify-between gap-8">
//           <div className={`w-[60%] animate-slide-in-from-left ${!isLongText(features[activeTab].description) ? "mt-24" : "mt-12"}`}>
//             <h3 className="text-4xl font-semibold mb-4 lg:ml-12">
//               {features[activeTab].title}
//             </h3>
//             <p className="text-sm text-white mb-6 lg:ml-12 max-w-md tracking-wide leading-relaxed">
//               {features[activeTab].description}
//             </p>
//             <ul className="space-y-4">
//               {features[activeTab].points.map((point, idx) => (
//                 <li key={idx} className="flex items-start gap-3 lg:ml-12 max-w-md">
//                   <span className="flex-shrink-0 w-6 h-6 bg-white text-[#004975] font-bold rounded-sm flex items-center justify-center text-sm mt-1">
//                     ✓
//                   </span>
//                   <span className="text-base leading-relaxed break-words">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-[45%] animate-slide-in-from-right lg:mr-20">
//             <Image
//               src={features[activeTab].image}
//               alt={features[activeTab].title}
//               className="w-full h-auto object-contain rounded-xl"
//             />
//           </div>
//         </div>

//         {/* Mobile & Medium layout */}
//         <div className="block lg:hidden space-y-16  mt-10">
//           {features.map((feature, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col px-4 sm:px-10  md:px-16 space-y-6 md:space-y-8"
//             >
//               {/* Image */}
//               <div className="w-full animate-slide-in-from-right">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-auto object-contain rounded-xl"
//                 />
//               </div>

//               {/* Text */}
//               <div className="w-full text-left  animate-slide-in-from-left md:max-w-2xl">
//                 <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
//                 <p className="text-sm md:text-base opacity-90 mb-4 leading-relaxed">
//                   {feature.description}
//                 </p>
//                 <ul className="space-y-3 mb-40">
//                   {feature.points.map((point, i) => (
//                     <li key={i} className="flex items-start text-left">
//                       <span className="w-5 h-5 min-w-[20px] bg-white text-[#004975] font-bold rounded-sm flex items-center justify-center text-xs mt-1 mr-2">
//                         ✓
//                       </span>
//                       <span className="text-sm leading-snug break-words">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../public/images/attandance-timesheet-new.svg";
import image2 from "../../public/images/leave-managment-new.svg";
import image3 from "../../public/images/easy-payroll-new.svg";
import Aos from "aos";

const features = [
  {
    id: 1,
    title: "Attendance & Timesheet",
    description:
      "Fingerprint & location-based attendance to keep track of your staff's whereabouts",
    points: [
      "Robust hardware with a fast capacitive touch sensor for industrial–grade detection",
      "Instant data sync with software",
      "Easy revisions of attendance punch–in",
    ],
    image: image1,
  },
  {
    id: 2,
    title: "Easy Payroll",
    description:
      "Payroll calculations haunting you in your sleep? Not anymore. We will do the complex calculations for you so you can always disburse your salary payments on time!",
    points: [
      "Bifurcate monthly & hourly wage employees",
      "Enforce overtime & late entry rules with a penalty",
      "Easy breakdown of PF, ESIC and PT in employee salary",
      "Single-page, editable & easy to understand payroll dashboard",
      "Avail ready-to-download pay slips for each employee",
    ],
    image: image2,
  },
  {
    id: 3,
    title: "Simplified Leave Management",
    description:
      "Always rushing to fill last-minute absentees? Stay on top of your staff leaves & ensure you always have the required workforce!",
    points: [
      "Multiple types of available leave",
      "Paid & unpaid leave",
      "Leave approval mechanism",
      "Leave balances and consumption reports",
    ],
    image: image3,
  },
];

export default function PayrollFeature() {
  const [activeTab, setActiveTab] = useState(0);
  const isLongText = (text: string) => text.length > 150;
 useEffect(() => {
       Aos.init({
         once: true,
       });
     }, []);
  return (
    <div className="bg-[#004975] text-white px-6 py-12 overflow-x-hidden lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <button className="bg-[#E3F1FF] rounded-full px-4 py-2 lg:px-5 lg:py-1 mb-4">
            <span className="text-transparent bg-clip-text bg-[#0D6AC0] text-sm lg:text-lg font-semibold">
              OUR FEATURES
            </span>
          </button>

          <h2 className="sm:text-2xl md:text-4xl lg:text-6xl lg:mt-2 font-bold mb-4 leading-[1.2]">
            Next-gen payroll solution for <br className="hidden lg:block" />
            next-gen business owners
          </h2>
          <p className="text-white lg:mt-4 sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-normal max-w-xl mx-auto">
            We provide an end-to-end solution for complete tracking of your staff, so you don’t have to!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="hidden lg:flex items-center lg:mt-6 justify-center mb-16">
          <div className="flex items-center gap-1">
            {features.map((f, idx) => (
              <div key={f.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`text-center transition px-4 ${activeTab === idx ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                >
                  <div className="text-lg font-semibold">0{f.id}</div>
                  <div className="text-lg font-medium mt-1 whitespace-nowrap">{f.title}</div>
                </button>

                {idx !== features.length - 1 && (
                  <div
                    className={`mx-6 w-50 transition-all duration-300 ${ (activeTab === 1 && idx === 0) || (activeTab === 2 && idx <= 1)
                        ? "bg-white h-[2px]"
                        : "bg-white/30 h-[2px]"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* lg layout */}
        <div className="hidden lg:flex items-start justify-between gap-8">
          {/* Text Section */}
          <div
            key={`text-${activeTab}`}
            className={`w-[60%] animate-slide-in-from-left ${!isLongText(features[activeTab].description) ? "mt-24" : "mt-12"}`}
            data-aos="scroll-animation"
          >
            <h3 className="text-4xl font-semibold mb-4 lg:ml-12">{features[activeTab].title}</h3>
            <p className="text-sm text-white mb-6 lg:ml-12 max-w-md tracking-wide leading-relaxed">
              {features[activeTab].description}
            </p>
            <ul className="space-y-4">
              {features[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 lg:ml-12 max-w-md">
                  <span className="flex-shrink-0 w-6 h-6 bg-white text-[#004975] font-bold rounded-sm flex items-center justify-center text-sm mt-1">
                    ✓
                  </span>
                  <span className="text-base leading-relaxed break-words">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div key={`image-${activeTab}`} className="w-[45%] animate-slide-in-from-right lg:mr-20" data-aos="scroll-animation">
            <Image
              src={features[activeTab].image}
              alt={features[activeTab].title}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Mobile & Medium layout */}
      <div className="block lg:hidden space-y-12  mt-8">


          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col px-4 sm:px-10 md:px-16 space-y-6 md:space-y-8">
              {/* Image */}
              <div className="w-full animate-slide-in-from-right" data-aos="scroll-animation">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="w-full text-left animate-slide-in-from-left md:max-w-2xl" data-aos="scroll-animation">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base opacity-90 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3 mb-10 ">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start text-left">
                      <span className="w-5 h-5 min-w-[20px] bg-white text-[#004975] font-bold rounded-sm flex items-center justify-center text-xs mt-1 mr-2">
                        ✓
                      </span>
                      <span className="text-sm leading-snug break-words">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
