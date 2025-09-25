// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import ownerImg from "../../public/images/owner-payroll-new.svg" // update with actual path
// import employeeImg from "../../public/images/employee-payroll-new.svg" // update with actual path
// import TickIcon from "../../public/images/check-round.svg"
// export default function PayrollSection() {
//   const [activeTab, setActiveTab] = useState<"Owner" | "Employee">("Owner")

//   const content = {
//     Owner: {
//       heading: "Payroll management simplified for all!",
//       subheading: "Effortless operations for owners with Owner App",
//       features: [
//         "Staff onboarding & biometric registration is only possible from the app",
//         "Helps you keep tabs on staff activity & operations at anytime, from anywhere",
//         "Graphical representation of daily attendance & activities of multiple locations",
//         "Easily track the status of your biometric device",
//         "Hassle-free approvals of leave & attendance adjustments",
//       ],
//       image: ownerImg,
//     },
//     Employee: {
//       heading: "Easy attendance, leave & payroll tracking!",
//       subheading: "Empowering employees with a seamless experience",
//       features: [
//         "Allows flexibility to your employees to punch from their phones directly",
//         "Easily apply for leave & check approval status",
//         "View real-time salary and work summary reports",
//         "Get notifications for shift timings & payroll",
//         "Access pay slips and work history on the go",
//       ],
//       image: employeeImg,
//     },
//   }

//   const { heading, subheading, features, image } = content[activeTab]

//   return (
//     <section className="bg-[#EBF6FD] text-[#003459] pt-16 pb-0">
//       {/* Title & Subtitle */}
//      {/* Capsule + Title & Subtitle */}
// <div className="max-w-3xl mx-auto text-center px-6 mb-6">
//   <p className="uppercase text-sm lg:text-base font-semibold mb-5 bg-[#E3F1FF] text-[#0D6AC0] border border-[#C6E2F8] px-7 py-1.5 inline-block rounded-full shadow">
//   Effortless operations
// </p>

//   <h2 className="text-3xl text-[#173552] sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//     {heading}
//   </h2>
//   <p className="text-lg">Effortless usage for employees with Employee App</p>
// </div>

// <div className="flex justify-center mb-10">
//   <div className="inline-flex items-center bg-white border border-[#cce0ed] rounded-full px-2 py-2 shadow-md">
//     {(["Owner", "Employee"] as const).map((tab) => (
//       <button
//         key={tab}
//         onClick={() => setActiveTab(tab)}
//         className={`px-8 py-2 text-lg font-semibold rounded-full transition-all duration-200 ${
//           activeTab === tab
//             ? "bg-[rgb(0,137,222)] text-white"
//             : "text-[#173552] bg-transparent"
//         }`}
//       >
//         {tab}
//       </button>
//     ))}
//   </div>
// </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start lg:items-end">
//       {/* Features */}
// <div className="pb-4 lg:ml-20  lg:pb-24">
//   <ul className="space-y-6">
//   {features.map((item, idx) => (
//     <li key={idx} className="flex items-start gap-4">
//       <div className="w-8 h-8 rounded-full  flex items-center justify-center mt-1 shrink-0">
//         <Image
//           src={TickIcon}
//           alt="tick"
//           width={20}
//           height={20}
//         />
//       </div>
//       <p className="lg:text-lg text-md leading-relaxed max-w-lg">{item}</p>
//     </li>
//   ))}
// </ul>
// </div>

// {/* Image */}
// <div className="w-full h-[450px] lg:ml-10 sm:h-[500px] lg:h-[520px] relative">
//   <Image
//     src={image}
//     alt={`${activeTab} Illustration`}
//     fill
//     className="object-contain sm:object-bottom lg:object-contain"
//     priority
//   />
// </div>

//               </div>
//     </section>
//   )
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ownerImg from "../../public/images/owner-payroll-new.svg";
import employeeImg from "../../public/images/employee-payroll-new.svg";
import TickIcon from "../../public/images/check-round.svg";
import Aos from "aos";

export default function PayrollSection() {
  const [activeTab, setActiveTab] = useState<"Owner" | "Employee">("Owner");

  const content = {
    Owner: {
      heading: "Payroll management simplified for all!",
      subheading: "Effortless operations for owners with Owner App",
      features: [
        "Staff onboarding & biometric registration is only possible from the app",
        "Helps you keep tabs on staff activity & operations at anytime, from anywhere",
        "Graphical representation of daily attendance & activities of multiple locations",
        "Easily track the status of your biometric device",
        "Hassle-free approvals of leave & attendance adjustments",
      ],
      image: ownerImg,
    },
    Employee: {
      heading: "Easy attendance, leave & payroll tracking!",
      subheading: "Empowering employees with a seamless experience",
      features: [
        "Allows flexibility to your employees to punch from their phones directly",
        "Easily apply for leave & check approval status",
        "View real-time salary and work summary reports",
        "Get notifications for shift timings & payroll",
        "Access pay slips and work history on the go",
      ],
      image: employeeImg,
    },
  };

  const { heading, features, image } = content[activeTab];
 useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
  return (
    <section className="bg-[#EBF6FD] text-[#003459] pt-16 pb-0 overflow-x-hidden">
      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-6">
        <p className="uppercase text-sm lg:text-base font-semibold mb-5 bg-[#E3F1FF] text-[#0D6AC0] border border-[#C6E2F8] px-7 py-1.5 inline-block rounded-full shadow">
          Effortless operations
        </p>

        <h2 className="text-3xl text-[#173552] sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {heading}
        </h2>
        <p className="text-lg">
          Effortless usage for employees with Employee App
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center bg-white border border-[#cce0ed] rounded-full px-2 py-2 shadow-md">
          {(["Owner", "Employee"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 text-lg font-semibold rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[rgb(0,137,222)] text-white"
                  : "text-[#173552] bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start lg:items-end"> */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-end">
        {/* Features with Animation */}
        <div
          key={`features-${activeTab}`}
          className="pb-4 lg:ml-20 lg:pb-24 animate-slide-in-from-left" data-aos="scroll-animation"
        >
          <ul className="space-y-6">
            {features.map((item, idx) => (
           <li key={idx} className="flex items-start ml-0 md:ml-8 lg:ml-0 gap-4">

                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1 shrink-0">
                  <Image src={TickIcon} alt="tick" width={20} height={20} />
                </div>
                <p className="lg:text-lg text-md leading-relaxed max-w-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image with Animation */}
        <div
          key={`image-${activeTab}`}
          className="w-full h-[450px] sm:h-[500px] lg:h-[520px] relative animate-slide-in-from-right md:ml-8 lg:ml-10" data-aos="scroll-animation"
        >
          <Image
            src={image}
            alt={`${activeTab} Illustration`}
            fill
            className="object-contain sm:object-bottom lg:object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
