'use client';

import Image from 'next/image';
import workingImage from '../../public/images/purchase-how-work.svg';
import { useEffect } from 'react';
import Aos from 'aos';

export default function PurchaseHowWorks() {
   useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
  return (
    <section className="relative">
      {/* Yellow background starting from ~30% height */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-[#EECB4D] z-0" />

      {/* Card Content on top */}
      <div className="relative z-10 max-w-7xl mx-auto bg-[#262729] text-white shadow-lg 
                      rounded-t-[2rem] rounded-b-[2rem] p-6 pb-10 lg:p-16">
        {/* Capsule + Heading + Description */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="border border-white rounded-full px-4 py-1 text-sm font-medium mb-4">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2">How does it work?</h2>
          <p className="text-lg text-[#D0D1D2]">Digitize your invoices using these simple steps</p>
        </div>

        {/* Image + Steps */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10  animate-slide-in-from-bottom"  data-aos="scroll-animation">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-full">
              <Image
                src={workingImage}
                alt="How it works illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Steps */}
                      {/* Bullet Points */}
             <ul className="w-full lg:w-1/2 text-[#D0D1D2] text-sm sm:text-base lg:text-lg space-y-4 
                            flex flex-col items-start text-left mt-6 md:ml-50 lg:ml-20 lg:mt-10 mb-12 lg:mb-0 md:mx-auto">
               <li className="flex items-start gap-x-3 max-w-xl">
                 <span className="pt-1 text-lg">👉</span>
                <span>Scan your purchase invoice and verify line by line</span>
             </li>
              <li className="flex items-start gap-x-3 max-w-xl">
                <span className="pt-1 text-lg">👉</span>
                 <span>The machine auto-extracts invoice details</span>
               </li>
               <li className="flex items-start gap-x-3 max-w-xl">
                 <span className="pt-1 text-lg">👉</span>
                 <span>Review and save the extracted details</span>
               </li>
               <li className="flex items-start gap-x-3 max-w-xl">
                 <span className="pt-1 text-lg">👉</span>
                 <span>Tag items/suppliers for easy categorization</span>
               </li>
               <li className="flex items-start gap-x-3 max-w-xl">
                 <span className="pt-1 text-lg">👉</span>
                 <span>Push data to Tally/Petpooja POSS/Petpooja Invoice</span>
               </li>
               <li className="flex items-start gap-x-3 max-w-xl">
                 <span className="pt-1 text-lg">👉</span>
                 <span>Make vendor or utility bill payouts</span>
               </li>
             </ul>
        </div>
      </div>
    </section>
  );
}
