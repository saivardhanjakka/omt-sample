"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Business icons

import Logistics from "../../public/images/Logistics.svg";
import Education from "../../public/images/Education.svg";
import HealthCare from "../../public/images/Health Care.svg";
import Manufacturing from "../../public/images/Manufacturing.svg";
import Events from "../../public/images/Events.svg";
import retailshop from "../../public/images/Retail Store.svg";
import Hotel from "../../public/images/Hotel.svg"
import Finance from "../../public/images/Finance.svg"
import Construction from "../../public/images/Construction.svg"
const sectors = [
  { label: "Logistics", icon:Logistics },
  { label: "Retail Shop", icon: retailshop },
  { label: "Education", icon: Education },
  { label: "Health Care", icon: HealthCare },
  { label: "Manufacturing", icon:Manufacturing },
  { label: "Events", icon: Events },
  { label: "Hotel", icon: Hotel },
  { label: "Finance", icon: Finance },
  { label: "Construction", icon: Construction },
];

const CapsuleRow = ({
  reverse = false,
  duration = 30,
  flipLayout = false,
  capsuleClass = "",
  iconSize = 56,
  iconPadding = "p-4",
}: {
  reverse?: boolean;
  duration?: number;
  flipLayout?: boolean;
  capsuleClass?: string;
  iconSize?: number;
  iconPadding?: string;
}) => {
  const loopedSectors = [...sectors, ...sectors];
 const animationClass = reverse ? "animate-scroll-right" : "animate-scroll-left";
  return (
   <div className="relative w-full overflow-hidden">
         <div className={`flex gap-8 w-max py-4 ${animationClass}`} style={{ animationDuration: `${duration}s` }}>
           {loopedSectors.map((sector, index) => (
             <div
               key={index}
               className={`flex items-center gap-6 bg-white px-12 ${capsuleClass} rounded-full border border-white/70 shadow-md min-w-max`}
             >
               {flipLayout ? (
                 <>
                   <span className="text-gray-800 text-lg font-semibold whitespace-nowrap">
                     {sector.label}
                   </span>
                   <div className={` ${iconPadding} rounded-full`}>
                     <Image src={sector.icon} alt={sector.label} width={iconSize} height={iconSize} />
                   </div>
                 </>
               ) : (
                 <>
                   <div className={` ${iconPadding} rounded-full`}>
                     <Image src={sector.icon} alt={sector.label} width={iconSize} height={iconSize} />
                   </div>
                   <span className="text-gray-800 text-lg font-semibold whitespace-nowrap">
                     {sector.label}
                   </span>
                 </>
               )}
             </div>
           ))}
         </div>
       </div>
  );
};

export default function TasksScroller() {
  
  return (
    <div className="w-full  sm:mt-10 sm:mb-10  lg:mt-5 lg:mb-5 py-12">
      <h2 className="text-3xl lg:text-6xl md:text-4xl font-bold  text-center mb-12 text-white">
        Building for the Success of
      </h2>
      <div className="space-y-8">
        {/* First Line - Larger capsule, image first */}
        <CapsuleRow
          reverse={false}
          duration={30}
          capsuleClass="py-1"
          iconSize={70}
          iconPadding="p-2"
        />

        {/* Second Line - Text first, slightly smaller capsule, wider */}
        <CapsuleRow
          reverse={true}
          duration={35}
          flipLayout={true}
          capsuleClass="py-1"
          iconSize={70}
          iconPadding="p-2"
        />
      </div>
    </div>
  );
}
