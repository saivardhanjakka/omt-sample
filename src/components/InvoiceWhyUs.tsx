'use client';

import Image from 'next/image';
import phoneIcon from "../../public/images/call-support.svg";
import calendarIcon from "../../public/images/regular-updates.svg";
import syncIcon from "../../public/images/sync-in-real-time.svg";
import accessIcon from "../../public/images/access-from-anywhere.svg";

const features = [
  {
    image: phoneIcon,
    title: '24x7',
    subtitle: 'Support',
  },
  {
    image: calendarIcon,
    title: 'Regular',
    subtitle: 'Updates',
  },
  {
    image: syncIcon,
    title: 'Sync in',
    subtitle: 'Real-time',
  },
  {
    image: accessIcon,
    title: 'Access from',
    subtitle: 'Anywhere',
  },
];

export default function InvoiceWhyUs() {
  return (
    <section className="bg-[linear-gradient(135deg,_#15227A,_#152279,_#172686,_#15237B,_#121E69)] text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Why choose us?</h2>
      </div>

      {/* ✅ Responsive Grid Layout */}
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="p-6 md:mx-16 mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                width={110}
                height={110}
                className="h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] md:h-[110px] md:w-[110px]"
              />
            </div>
            <p className="lg:text-2xl md:text-xl sm:text-lg">{feature.title}</p>
            <p className="lg:text-2xl md:text-xl sm:text-lg lg:mb-15 ">{feature.subtitle}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
}