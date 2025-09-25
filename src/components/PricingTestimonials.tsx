'use client';

import Image from 'next/image';
import samsPizzaLogo from '../../public/images/Sam_s_Pizza.png';
import unitedFarmersLogo from '../../public/images/United-farmers-creamery.png';
import jollyImage from '../../public/images/Jolly_christian_Sam_s_Pizza.png';
import jaipratapImage from '../../public/images/Jaipratap-Singh-cloud-kitchen.png';
import { useEffect } from 'react';
import Aos from 'aos';

const testimonials = [
  {
    logo: samsPizzaLogo,
    altLogo: "Sam's Pizza",
    text: `Petpooja has been the POS solution for our 90+ outlets for over two years. And these numbers are proof of how content we are with their services. Especially for a large chain like us, Petpooja is the one–point data bridge between all the outlets and the owner. Kudos to the team. Recommending Petpooja to everyone!`,
    personImage: jollyImage,
    personName: 'Jolly Christian',
    designation: 'General Manager',
    altPerson: 'Jolly Christian',
  },
  {
    logo: unitedFarmersLogo,
    altLogo: 'United Farmers',
    text: `Petpooja has helped me to manage inventory levels and food costs. I can track sales and expenses in real time, which helps me make informed decisions about purchasing and pricing. The system also provides detailed reports, which has helped me reduce waste and optimize my inventory. Overall, I am extremely satisfied with Petpooja and highly recommend it to anyone looking to streamline their operations and improve their bottom line.`,
    personImage: jaipratapImage,
    personName: 'Jaipratap Singh',
    designation: 'Managing Director',
    altPerson: 'Jaipratap Singh',
  },
];

export default function PricingTestimonials() {
  useEffect(() => {
            Aos.init({ once: true });
          }, []);
  return (
    <div className="py-12 px-4 lg:px-24">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center md:max-w-lg mx-auto mb-12">
        Trusted by some of the best restaurants
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-start gap-12 ml-4 sm:ml-6 md:mt-18 md:ml-12 animate-slide-in-from-left"  data-aos="scroll-animation">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-start text-left justify-start"
          >
            {/* Logo */}
            <div className="h-16 mb-6">
              <Image
                src={testimonial.logo}
                alt={testimonial.altLogo}
                className="h-full w-auto  object-contain"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 lg:mt-2 mb-8 text-lg leading-relaxed md:max-w-2xl">
              {testimonial.text}
            </p>

            {/* Person Info */}
            <div className="flex items-center lg:mt-4 gap-4 mt-auto">
              <Image
                src={testimonial.personImage}
                alt={testimonial.altPerson}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.personName}</p>
                <p className="text-gray-500 text-sm">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
