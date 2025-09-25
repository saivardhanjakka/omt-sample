"use client";

import Image from "next/image";

import biometricIcon from "../../public/images/biomatric-device.svg";
import syncIcon from "../../public/images/no-sync.svg";
import supportIcon from "../../public/images/24x7-call.svg";
import whatsappIcon from "../../public/images/whatsapp-noti.svg";
import locationIcon from "../../public/images/location-light.svg";
import fingerprintIcon from "../../public/images/fingerprint.svg";

// Original features (for lg and above)
const features = [
  {
    icon: biometricIcon,
    title: "Robust biometric device.",
    description: "Built for rugged use.",
  },
  {
    icon: syncIcon,
    title: "No sync-in or integration issues.",
    description: "Like ever.",
  },
  {
    icon: supportIcon,
    title: "24x7 support & physical installation.",
    description: "Guaranteed.",
  },
  {
    icon: fingerprintIcon,
    title: "Accepts & registers oily,",
    description: "wet & greasy fingerprints.",
  },
  {
    icon: whatsappIcon,
    title: "WhatsApp alerts about staff activities.",
    description: "Everyday.",
  },
  {
    icon: locationIcon,
    title: "Supports multi-location",
    description: "operations.",
  },
];

// Custom short text for sm/md
const smTexts = [
  "Robust biometric device",
  "No sync-in issues",
  "24x7 support",
  "Registers oily or wet fingerprints",
  "WhatsApp alerts",
  "Supports multi-location operations",
];

export default function PayrollPerksSection() {
  return (
    <section
      className=" text-white px-4 py-16 sm:py-12 md:py-16 lg:py-24"
      style={{
        background: "linear-gradient(123.41deg, #12415d 3.51%, #0b2332)",
      }}
    >
      <div className="max-w-7xl mx-auto lg:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left heading section */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <span className="inline-block lg:ml-4 lg:mt-10 bg-[#E3F1FF] text-[#0D6AC0] border border-[#81b9e3]  text-sm lg:mx-2 md:py-2 lg:px-6 lg:py-1 lg:text-md px-4 py-2 rounded-full mb-4">
              WHAT MAKES US SPECIAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight text-white text-center lg:text-left lg:ml-4">
              <span className="hidden md:inline">
                Perks aren’t just limited to salaries
              </span>
              <span className="hidden md:block"> anymore</span>

  <span className="block md:hidden">Perks aren’t just</span>
  <span className="block md:hidden">limited to salaries anymore</span>

</h2>


          </div>

          {/* Right features grid */}
          <div className="lg:w-1/2 mt-10 lg:mt-1  grid grid-cols-2 lg:gap-x-20 lg:mr-10  md:gap-x-30  lg:gap-y-8 gap-4 md:mx-40 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={85}
                  height={85}
                  className="mb-4 h-[85px] w-auto md:h-[90px] lg:h-[105px]"
                />

                {/* sm/md short text */}
                <p className="text-sm font-medium block lg:hidden">
                  {smTexts[index]}
                </p>

                {/* lg+ full text */}
                <div className="hidden lg:block">
                  <p className=" text-md leading-snug">
                    {feature.title}
                    <span className="text-md text-white">
                      &nbsp;{feature.description}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
