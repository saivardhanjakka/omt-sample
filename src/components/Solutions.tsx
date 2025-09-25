'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import poss from '../../public/images/solution1.png';
import payroll from '../../public/images/owner-payroll-new.svg';
import tasks from '../../public/images/Dependent Task 1.png';
import invoice from '../../public/images/Barcode-Scanning.svg';
import purchase from '../../public/images/automateBusiness (1).svg';

const solutionsData = [
  {
    id: 'poss',
    title: 'Boost Restaurant Growth',
    description:
      'Streamline order management & increase the productivity of your restaurant',
    href: '/poss',
    imageSrc: poss,
    bgColor: 'bg-red-50',
  },
  {
    id: 'payroll',
    title: 'Manage Payroll',
    description:
      'Automate payroll calculations and attendance tracking for multiple shifts',
    href: '/payroll',
    imageSrc: payroll,
    bgColor: 'bg-blue-50',
  },
  {
    id: 'tasks',
    title: 'Simplify Task Management',
    description:
      'Stay organized and improve collaboration with a centralized system.',
    href: '/tasks',
    imageSrc: tasks,
    bgColor: 'bg-green-50',
  },
  {
    id: 'invoices',
    title: 'Digitize Invoices',
    description:
      'Reduce manual effort and automate the process of data entry of your invoice.',
    href: '/invoices',
    imageSrc: invoice,
    bgColor: 'bg-purple-50',
  },
  {
    id: 'purchase',
    title: 'Automate Business Operations',
    description:
      'Generate GST invoices easily & get a clear overview of your business.',
    href: '/purchase',
    imageSrc: purchase,
    bgColor: 'bg-yellow-50',
  },
];

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(solutionsData[0].id);
  const currentSolution = solutionsData.find((s) => s.id === activeSolution);

  return (
    <section className="hidden sm:block bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-[#FEF0E9] border border-[#FCD8C4] px-5 py-2 text-sm font-semibold text-[#F47537]">
            MEETING DIVERSE NEEDS
          </span>
          <h2 className="text-4xl leading-relaxed font-semibold lg:break-words text-black md:text-5xl">
            What our solutions can do for you
          </h2>
          <p className="mx-auto mt-2 max-w-3xl lg:text-md  text-lg text-gray-600">
            Tailored products for every industry. Our solution adapts to meet a
            wide range of needs, helping you achieve your goals.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* TEXT SECTION */}
          <div className="px-4 md:px-10 lg:pl-28">
            <ul>
              {solutionsData.map((solution) => {
                const isActive = activeSolution === solution.id;
                return (
                  <li key={solution.id} className="border-b border-gray-200">
                    <Link
                      href={solution.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setActiveSolution(solution.id)}
                      className="block cursor-pointer py-4 transition-all duration-300"
                    >
                      <h3 className="text-2xl md:text-3xl text-black">
                        {solution.title}
                      </h3>
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isActive ? 'grid-rows-[1fr] pt-2' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden max-w-md">
                          <p className="text-black text-base leading-relaxed">
                            {solution.description}
                          </p>
                          <span className="mt-2 inline-block font-semibold text-[#F47537] hover:underline text-sm">
                            Explore
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* IMAGE SECTION */}
          <div
            className={`relative w-full h-72 md:h-96 lg:h-[450px] lg:w-[90%] lg:ml-2  rounded-xl overflow-hidden  p-6 md:p-10 shadow-lg transition-colors duration-500 ease-in-out ${currentSolution?.bgColor}`}
          >
            {solutionsData.map((solution) => (
              <Image
                key={solution.id}
                src={solution.imageSrc}
                alt={`${solution.title} illustration`}
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
                className={`absolute top-0 left-0 object-contain transition-opacity duration-500 ease-in-out ${
                  activeSolution === solution.id
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0'
                }`}
                style={{ paddingTop: '20px', paddingBottom: '20px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
