'use client';

import Image from 'next/image';
import phoneIcon from "../../public/images/Web-Mobile App.svg";
import calendarIcon from "../../public/images/Free Templates.svg";
import syncIcon from "../../public/images/24x7 Support.svg";
import accessIcon from "../../public/images/AI-robo.svg";

const features = [
  {
    image: phoneIcon,
    title: 'Web + Mobile ',
    subtitle: 'App',
  },
  {
    image: calendarIcon,
    title: 'Free',
    subtitle: 'Templates',
  },
  {
    image: syncIcon,
    title: '24x7',
    subtitle: 'Support',
  },
  {
    image: accessIcon,
    title: 'AI-Powered',
    subtitle: 'Analysis',
  },
];

export default function TasksWhyUs() {
  return (
    <section className="text-white py-16" style={{
      backgroundImage: `linear-gradient(180deg,
        #0b1c0d,
        #0a1b0c,
        #0a1a0c,
        #0b190d,
        #0b180c,
        #0b170c,
        #0b150c,
        #0a140c,
        #0b130c
      )`,
    }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:mb-4 lg:text-5xl font-bold">Why choose us?</h2>
      </div>

      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="relative h-[80px] w-[80px] md:h-[110px] md:w-[110px] lg:h-[120px] lg:w-[120px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="lg:text-2xl md:text-xl sm:text-lg">{feature.title}</p>
            <p className="lg:text-2xl md:text-xl sm:text-lg lg:mb-2">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
