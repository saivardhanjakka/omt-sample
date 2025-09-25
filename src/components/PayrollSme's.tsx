// 

"use client";

import Image from "next/image";
import image1 from "../../public/images/restaurants.svg"
import image2 from "../../public/images/workshop.svg"
import image3 from "../../public/images/clinic-new.svg"
import image4 from "../../public/images/hospital.svg"
import image5 from "../../public/images/education-insitute.svg"
import image6 from "../../public/images/salon.svg"
import image7 from "../../public/images/corporate-office.svg"
import image8 from "../../public/images/salon.svg"
const sectors = [
  { name: "Restaurants", icon: image1 },
  { name: "Office", icon: image2 },
  { name: "Factories", icon: image3 },
  { name: "Hospitals", icon: image4 },
  { name: "Educational Institutes", icon: image5 },
  { name: "Salons", icon: image6 },
  { name: "Clinics", icon: image7 },
  { name: "Workshops", icon: image8 },
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
                  {sector.name}
                </span>
                <div className={` ${iconPadding} rounded-full`}>
                  <Image src={sector.icon} alt={sector.name} width={iconSize} height={iconSize} />
                </div>
              </>
            ) : (
              <>
                <div className={` ${iconPadding} rounded-full`}>
                  <Image src={sector.icon} alt={sector.name} width={iconSize} height={iconSize} />
                </div>
                <span className="text-gray-800 text-lg font-semibold whitespace-nowrap">
                  {sector.name}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SmeScroller() {
  return (
    <div className="w-full bg-white sm:mt-10 sm:mb-10 lg:mt-5 lg:mb-5 py-12">
      <h2 className="text-3xl lg:text-6xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Built for SMEs in India
      </h2>
      <div className="space-y-8">
        <CapsuleRow reverse={false} duration={30} capsuleClass="py-1" iconSize={70} iconPadding="p-2" />
        <CapsuleRow reverse={true} duration={35} flipLayout={true} capsuleClass="py-1" iconSize={70} iconPadding="p-2" />
      </div>
    </div>
  );
}
