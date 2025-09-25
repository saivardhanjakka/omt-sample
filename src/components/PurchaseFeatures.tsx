

'use client';

import Image from 'next/image';

import img1 from '../../public/images/accurate.svg';
import img2 from '../../public/images/reduced-time-efforts.svg';
import img3 from '../../public/images/track-stock-FCR.svg';
import img4 from '../../public/images/utilise-your-credit.svg';
import { useEffect } from 'react';
import Aos from 'aos';

const features = [
  {
    title: 'Accurate',
    desc: 'AI-powered invoice digitization that eliminates manual data entry errors and ensures your financial records are always spot-on.',
    img: img1,
    large: true,
  },
  {
    title: 'Reduced Time & Efforts',
    desc: 'Save data entry time and minimize manual errors when recording your purchases.',
    img: img2,
    large: false,
  },
  {
    title: 'Utilise Your Credit',
    desc: 'Enjoy financial flexibility with an overdraft account facility.',
    img: img3,
    large: false,
  },
  {
    title: 'Track Stock & FCR',
    desc: 'Track inventory and fulfillment completion rates (FCR) effortlessly.',
    img: img4,
    large: true,
  },
];

export default function PurchaseFeatures() {
  useEffect(() => {
      Aos.init({
        once: true,
      });
    }, []);
  return (
    <section className="py-16 text-black overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="bg-[#FDF6DD] text-[#71632F] border border-[#D8C78B] text-xs lg:text-lg font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-6 mb-4">Secure - Simple - Efficient</h2>
          <p className="text-md lg:text-lg text-[#525866] mb-16">
            Simple tool that enables small and medium businesses to manage account payables efficiently
          </p>
        </div>

        {/* ✅ Desktop layout (updated) */}
        <div className="hidden lg:flex flex-col gap-8">
          {Array.from({ length: features.length / 2 }).map((_, i) => {
            const idx = i * 2;
            const pair = [features[idx], features[idx + 1]];

            return (
              <div key={i} className=" lg:-mx-30 flex gap-6">
                {pair.map((feature, idxInPair) => {
                  const isLarge = feature.large;
                  const bgColor = isLarge ? 'bg-[#f7edcd]' : 'bg-[#fbf5e3]';
                  const textAlign = isLarge ? 'left-10 text-left items-start' : 'right-10 text-right items-end';
                  const imageAlign = isLarge ? 'right-4' : 'left-4';
                  const imageSize = isLarge ? 'w-[25rem] h-[20rem]' : 'w-[20rem] h-[14rem]';
                 const animationClass = idxInPair === 0 ? 'animate-slide-in-from-left' : 'animate-slide-in-from-right';

                  return (
                    <div
                      key={feature.title}
                      className={`${bgColor} ${isLarge ? 'w-[60%]' : 'w-[40%]'} h-[380px] rounded-2xl relative overflow-hidden  ${animationClass}`}
                    data-aos="scroll-animation"
                   >
                      {/* Text */}
                     <div
  className={`absolute top-8 ${textAlign} flex flex-col gap-2 z-10 w-[17rem] xl:w-[19rem]`}
>
  <h3 className="text-xl lg:text-3xl text-[#212121] font-semibold leading-snug truncate whitespace-nowrap overflow-hidden">
    {feature.title}
  </h3>
  <p className="text-sm lg:text-lg text-[#646464] leading-tight">{feature.desc}</p>
</div>


                      {/* Image */}
                      <div className={`absolute bottom-6 ${imageAlign} ${imageSize} z-0`}>
                        <Image
                          src={feature.img}
                          alt={feature.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* 🔒 Mobile & Tablet layout — UNCHANGED */}
        <div className="lg:hidden flex flex-col gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#fbf5e3] text-black rounded-xl px-6 py-8 flex flex-col items-center text-center relative overflow-hidden min-h-[400px] w-full md:w-[90%] mx-auto"
            >
              <div className="mb-6 z-10">
                <h3 className="text-xl md:text-2xl text-[#212121] font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-[#3D3D3D] leading-relaxed">{feature.desc}</p>
              </div>
              <div className="w-60 h-60 md:w-64 md:h-64">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}