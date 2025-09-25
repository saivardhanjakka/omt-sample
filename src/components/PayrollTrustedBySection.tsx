'use client'

import Image from 'next/image'
import partner1 from "../../public/images/partner1.webp"
import partner2 from "../../public/images/partner2.webp"
import partner3 from "../../public/images/partner3.webp"
import partner4 from "../../public/images/partner4.webp"
import partner5 from "../../public/images/partner5.webp"
import partner6 from "../../public/images/partner6.webp"

const logos = [
  { src: partner1, alt: 'TVS' },
  { src: partner2, alt: 'Zepto' },
  { src: partner3, alt: 'HICKS' },
  { src: partner4, alt: 'Logo 4' },
  { src: partner5, alt: 'AROMA' },
  { src: partner6, alt: 'Logo 6' },
]

export default function PayrollTrustedBySection() {
  return (
    <section className="bg-[#DBEBFA7D] border border-[#CDE3F9] rounded-2xl min-h-[200px] p-4 lg:p-8 mx-4 lg:mx-[120px] my-10 lg:my-20 overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:py-2 lg:gap-4 w-full relative">
        
        {/* Left Text */}
        <div className="w-full lg:max-w-[320px] text-center lg:text-left lg:pl-4">
          <p className="text-[#0D6AC0] text-sm  sm:mt-4 font-semibold uppercase mb-1">Trusted By</p>
          <h2 className="text-2xl sm:text-xl lg:text-3xl md:text-3xl font-semibold text-[#173552] leading-snug">
            20K+ Businesses &<br />400K+ Employees
          </h2>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#CDE3F9] my-4 block lg:hidden"></div>
        <div className="hidden lg:block absolute left-[336px] top-0 bottom-0 w-px bg-[#CDE3F9] z-20 pointer-events-none" />

        {/* Logo Carousel */}
        <div className="w-full lg:flex-1 overflow-hidden">
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-marquee gap-12">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={170}
                    height={170}
                    className="object-contain h-25 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
