'use client';

import Image from 'next/image';
import callsupport from '../../public/images/Call-Support (1).svg';
import accuracy from '../../public/images/Accuracy.svg';
import ContinuouslyEvolving from '../../public/images/Continuously-Evolving.svg';
import houseaimodel from '../../public/images/house-AI-Models.svg';

const features = [
  { image: callsupport, title: '24x7 ', subtitle: ' Support' },
  { image: accuracy, title: '100% ', subtitle: 'Accuracy' },
  { image: ContinuouslyEvolving, title: 'Continuously', subtitle: 'Evolving' },
  { image: houseaimodel, title: 'Powered by', subtitle: 'In-house AI Models' },
];

export default function PurchaseWhyUs() {
  return (
    <section className="text-white py-16 bg-[#EECB4D]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:mt-10 md:mt-4 lg:text-6xl font-semibold text-black">
          Why choose us?
        </h2>
      </div>

      <div className="mx-auto max-w-6xl px-2 sm:px-4 md:px-6 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-x-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex lg:mt-10 flex-col items-center text-center">
            <div className="mb-4">
              <div className="relative h-[80px] w-[80px] md:h-[110px] md:w-[110px] lg:h-[140px] lg:w-[140px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="lg:text-2xl md:text-xl text-black sm:text-lg">{feature.title}</p>
            <p className="lg:text-2xl md:text-xl text-black sm:text-lg lg:mb-6">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
