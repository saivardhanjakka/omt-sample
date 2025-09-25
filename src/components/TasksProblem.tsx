'use client'

import Image from 'next/image'
import trackingIcon from '../../public/images/Tracking.svg'
import efficiencyIcon from '../../public/images/Efficiency.svg'
import followupIcon from '../../public/images/Follow Up.svg'
import implementationIcon from '../../public/images/Easy Implementation.svg'
import { useEffect } from 'react'
import Aos from 'aos'

const problems = [
  {
    title: 'Tracking',
    description: 'Effortlessly track task progress for complete oversight.',
    icon: trackingIcon,
  },
  {
    title: 'Efficiency',
    description:
      'Enhance efficiency with built-in task review and timely completion features.',
    icon: efficiencyIcon,
  },
  {
    title: 'Follow Up',
    description:
      'Automate follow-ups and communication to keep tasks on schedule.',
    icon: followupIcon,
  },
  {
    title: 'Implementation',
    description:
      'Easy implementation ensures rapid adoption by the entire team.',
    icon: implementationIcon,
  },
]

export default function TasksProblem() {
    useEffect(() => {
            Aos.init({
              once: true,
            });
          }, []);
  return (
    <section className="py-16 px-4 lg:mt-16 md-mt-8 text-center overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4">
        Problems we help you solve
      </h2>
      <p className="mx-auto text-[#3D3D3D] text-base sm:text-lg lg:text-xl mb-12 max-w-[90%] sm:max-w-xl lg:max-w-[600px]">
        We tackle challenges of any size, simplifying complexities and delivering solutions
      </p>

    <div className="grid grid-cols-2 gap-4 lg:mt-10 mx-auto sm:gap-6 md:mx-2 lg:mx-auto lg:grid-cols-4 auto-rows-fr max-w-7xl ">

        {problems.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-[#F1F7F2] border border-[#CCE1CF] rounded-lg p-4 sm:p-6 flex flex-col items-start text-left min-w-0 h-full animate-slide-in-from-bottom"     data-aos="scroll-animation"
          >
            <Image
              src={icon}
              alt={title}
              className="w-10 h-10 md:w-14 md:h-14 sm:w-12 sm:h-12 lg:w-20 lg:h-20 mb-4"
            />
            <h3 className="text-sm sm:text-base lg:text-xl font-semibold mb-1 sm:mb-2 break-words">
              {title}
            </h3>
            <p className="text-[#555555] text-xs sm:text-sm lg:text-base leading-snug">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
