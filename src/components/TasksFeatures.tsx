'use client';

import Image from 'next/image';

import img1 from '../../public/images/Cross-Platform Sync 1.svg';
import img2 from '../../public/images/Dependent Task 1.svg';
import img3 from '../../public/images/Centralized Administration 2.svg';
import img4 from '../../public/images/Task Delegation 1.svg';
import img5 from '../../public/images/SOP- Description Creation 1.svg';
import img6 from '../../public/images/Custom Forms 1.svg';
import TasksScroller from './TasksScroller';
import { useEffect } from 'react';
import Aos from 'aos';

const features = [
  {
    title: 'Cross-Platform Sync',
    desc: 'Stay perfectly in sync, your tasks, updates, and progress are instantly mirrored between the mobile app and web dashboard.',
    img: img1,
    large: true,
  },
  {
    title: 'Dependent Task',
    desc: 'Trigger tasks in a sequence by notifying users automatically, initiating the next action in the chain.',
    img: img2,
    large: false,
  },
  {
    title: 'Centralized Administration',
    desc: 'Flexible administrative controls that allow multiple admins across different locations to work and collaborate securely.',
    img: img3,
    large: false,
  },
  {
    title: 'Task Delegation',
    desc: 'Assign tasks directly to specific departments or groups, ensuring the right work gets to the right people.',
    img: img4,
    large: true,
  },
  {
    title: 'SOP/ Description Creation',
    desc: 'Create and attach detailed descriptions or Standard Operating Procedures (SOPs) directly within tasks.',
    img: img5,
    large: true,
  },
  {
    title: 'Customizable Workflow',
    desc: 'Organize, distribute, and monitor structured data and track progress across projects using customizable workflows.',
    img: img6,
    large: false,
  },
];

export default function FeatureGrid() {
   useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
  return (

    <section className=" py-16 text-white overflow-x-hidden "  style={{
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
      <div className="max-w-6xl mx-auto px-4 ">
        {/* Section Header */}
        <div className="text-center mb-10">
            <span className="bg-[#FFFFFF24]   text-[#FFFFFF] border border-[#A4D5BB21] text-xs lg:text-lg font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
             FEATURES
            </span>
          <h2 className="text-3xl md:text-4xl  lg:text-6xl font-bold mt-6  mb-4">Simplify the clutter</h2>
          <p className="text-sm text-[#D2D9D7] mb-16">
            Clean workspace to effortlessly organize and prioritize your tasks
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex flex-col gap-8">
          {Array.from({ length: features.length / 2 }).map((_, i) => {
            const idx = i * 2;
            const pair = [features[idx], features[idx + 1]];
  
            return (
              <div key={i} className="flex gap-6 lg:-mx-20">
                {pair.map((feature, j) => {
                  const isLarge = feature.large;
                  const imageOnLeft = j === 1;
                 const animationClass = j === 0 ? 'animate-slide-in-from-left' : 'animate-slide-in-from-right';

                  return (
                    <div
                      key={feature.title}
                      className={`
                        ${isLarge ? 'w-[60%]' : 'w-[40%]'}
                        h-[450px]
                        bg-[#D9E5DA] border border-[#FFFFFF0D] text-black rounded-2xl relative overflow-hidden
                      ${animationClass}`}
                        data-aos="scroll-animation"
                    >
                      {/* Text */}
                      <div
                        className={`
                          absolute top-8
                          ${imageOnLeft ? 'right-10 text-right items-end' : 'left-10 text-left items-start'}
                          flex flex-col gap-2 z-10 w-[17rem] xl:w-[19rem]
                        `}
                      >
                        <h3 className="text-xl text-[#212121]  font-bold leading-snug">{feature.title}</h3>
                        <p className="text-sm lg:text-lg  text-[#3D3D3D] leading-tight">
                          {feature.desc}
                        </p>
                      </div>

                      {/* Image */}
                      <div
                        className={`
                          absolute bottom-6
                          ${imageOnLeft ? 'left-6' : 'right-6'}
                          ${isLarge ? 'w-[25rem] h-[20rem]' : 'w-[20rem] h-[16rem] absolute bottom-2'}
                          z-0
                        `}
                      >
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

        {/* Mobile & md layout */}
<div className="lg:hidden flex flex-col gap-6">
  {features.map((feature) => (
    <div
      key={feature.title}
      className="bg-[#E6F0E6] text-black rounded-xl px-6 py-8 flex flex-col items-center text-center relative overflow-hidden min-h-[400px] w-full md:w-[90%] mx-auto"
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
{/* Divider Line Below Feature Cards */}
<div className="mt-24 mb-6 lg:mx-30 w-full h-[6px] bg-[#2d392e]  rounded-md mx-auto max-w-[85%]"></div>
<TasksScroller/>
    </section>
  );
}
