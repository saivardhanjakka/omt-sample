'use client'

import Image from 'next/image'
import partner1 from "../../public/images/partner1.webp"
import partner2 from "../../public/images/partner2.webp"
import partner3 from "../../public/images/partner3.webp"
import partner4 from "../../public/images/partner4.webp"
import partner5 from "../../public/images/partner5.webp"
import partner6 from "../../public/images/partner6.webp"
import partner7 from "../../public/images/partner7.webp"
import partner8 from "../../public/images/partner8.webp"
import partner9 from "../../public/images/partner9.webp"
import partner10 from "../../public/images/partner10.webp"
import partner11 from "../../public/images/partner11.webp"
import partner12 from "../../public/images/partner12.webp"

const logos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
]

export default function Partner() {
  return (
    <div className="bg-[#FEF0E9]  rounded-t-3xl py-4 px-2 sm:px-4 md:px-6 overflow-hidden pb-20">
      <h2 className="text-center pt-12 text-base sm:text-lg md:text-xl px-2 font-semibold   mb-4">
        TRUSTED BY <span className="text-[#F47537] ">1,00,000+</span> BUSINESSES ACROSS THE GLOBE
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll gap-6 pt-12 sm:gap-10 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
