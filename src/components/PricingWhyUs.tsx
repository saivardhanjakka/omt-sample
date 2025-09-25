'use client';

import Image from 'next/image';
import phoneIcon from "../../public/images/Clients.png";
import calendarIcon from "../../public/images/Online-order-volume (1).png";
import syncIcon from "../../public/images/Bills-processed.png";
import accessIcon from "../../public/images/24_7.png";
import { useEffect } from 'react';
import Aos from 'aos';

const features = [
  {
    image: phoneIcon,
    title: '90,000+',
    subtitle: <><span className="text-[#F47537] font-semibold">Clients</span> across globe.</>,
  },
  {
    image: calendarIcon,
    title: '40%',
    subtitle: <><span className="text-[#F47537] font-semibold">Online order volume</span> on Zomato & Swiggy orders processed by Petpooja</>,
  },
  {
    image: syncIcon,
    title: '60L+',
    subtitle: <><span className="text-[#F47537] font-semibold">Bills processed</span> everyday hassle free with Petpooja POS</>,
  },
  {
    image: accessIcon,
    title: '24/7',
    subtitle: <><span className="text-[#F47537] font-semibold">On-call</span> and on-site support</>,
  },
];

export default function PricingWhyUs() {
  useEffect(() => {
          Aos.init({ once: true });
        }, []);
  return (
    <section className="text-black py-16 lg:mt-40">
      <div className="text-center mb-12">
       <h2 className="text-2xl md:text-4xl md:mt-10 lg:mb-4 lg:text-4xl font-semibold max-w-xl md:max-w-2xl mx-auto text-center">
  Simple and reliable POS for all your restaurant needs
</h2>

      </div>

      <div className="mx-auto lg:mt-18 max-w-6xl px-1sm:px-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8 gap-x-6 lg:max-w-[1380px] md:gap-x-2   lg:gap-x-28 lg:gap-y-12">
        {features.map((feature, idx) => (
          <div
  key={idx}
  className="flex flex-col items-center text-center  md:mt-10  space-y-2 lg:space-y-3 lg:max-w-[280px] lg:mx-auto px-4 sm:px-10 sm:mx-2"
>

            <div className="relative h-[140px] w-[140px] md:h-[140px] md:w-[140px] lg:h-[140px] lg:w-[140px] animate-slide-in-from-left" data-aos="scroll-animation">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div >
            <div className=" animate-slide-in-from-bottom" data-aos="scroll-animation">
            <p className="text-[#F47537] font-bold text-3xl md:text-3xl ">{feature.title}</p>
         <p
  className="text-sm md:text-base text-[#0c1d36] leading-relaxed overflow-hidden"
  style={{ maxHeight: '4.8rem' }} 
>
  {feature.subtitle}
</p>
</div>
          </div>
        ))}
      </div>
    </section>
  );
}
