'use client';

import Image from 'next/image';
import imageLg from '../../public/images/templates form.svg'; // lg image
import imageDefault from '../../public/images/templates form2.svg'; // sm and md image
import { useEffect } from 'react';
import Aos from 'aos';

export default function Templates() {
    useEffect(() => {
          Aos.init({
            once: true,
          });
        }, []);
  return (
    <section className=" w-full px-4 lg:my-24 md:mt-20 lg:px-0 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start animate-slide-in-from-left" data-aos="scroll-animation">
        {/* ✅ Text Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-16 pt-12 lg:mt-16 lg:ml-20 flex justify-center lg:justify-start"   >
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-block px-4 py-1 lg:py-2 lg:px-6 mb-4 bg-[#EBF7ED] border border-[#A4D5BB] rounded-full text-[#008745] font-semibold text-sm">
              TEMPLATES
            </div>
 
            {/* ✅ Heading: 4 lines for lg, 1 block for sm/md */}
            <h2 className="text-4xl lg:text-6xl sm:text-5xl md:mt-4 md:mb-4 font-bold mb-4 leading-tight">
              <span className="hidden lg:inline">
                150+ free<br />
                online<br />
                templates,<br />
                just for You!
              </span>
              <span className="lg:hidden">
                150+ free online templates, just for You!
              </span>
            </h2>

            {/* ✅ Description: 2 lines on lg, block on sm/md */}
            <p className="text-gray-600 text-lg md:mt-12  md:mb-14 leading-snug">
              <span className="hidden lg:inline">
                One app to manage, monitor,<br />
                and validate all your staff’s tasks — effortlessly!
              </span>
              <span className="lg:hidden">
                One app to manage, monitor, and validate all your staff’s tasks — effortlessly!
              </span>
            </p>
          </div>
        </div>

        {/* ✅ Image for sm & md (full width, auto height) */}
        <div className="block lg:hidden mt-20 w-full">
          <Image
            src={imageDefault}
            alt="Templates Preview Mobile"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ✅ Image for lg only */}
        <div className="hidden lg:block w-full lg:w-1/2 animate-slide-in-from-right">
          <Image
            src={imageLg}
            alt="Templates Preview Desktop"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
