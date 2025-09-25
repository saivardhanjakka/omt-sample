'use client';

import Image from 'next/image';
import invoiceImage from '../../public/images/Hero-Illustration.png';
import logo from "../../public/images/tasks_logo.webp";

export default function TasksHero() {
  
   const handleScrollToForm = () => {
    const target = document.getElementById("TaskForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="bg-[#0A1A0F] text-white py-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl mb-4 lg:mb-0 animate-slide-in-from-left">
          
          {/* Logo */}
          <div className="mb-4 sm:mb-5 flex justify-center lg:justify-start ">
            <Image
              src={logo}
              alt="Logo"
              width={500}
              height={400}
              className="w-[clamp(135px,_calc(118px+5.3125vw),_220px)] h-auto block"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-8">
          Automate your day-to-day business tasks
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D6D7D6] lg:leading-sung mb-5 sm:mb-8">
            Effortless task management with seamless collaboration to boost productivity and achieve your goals.
          </p>

          {/* Button */}
          <button onClick={handleScrollToForm} className="bg-[#008745] text-white font-semibold px-6 py-3 rounded-md  transition">
           Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full mx-auto flex justify-center lg:-mr-6 lg:justify-end animate-slide-in-from-right">
          <Image
            src={invoiceImage}
            alt="Petpooja Invoice Illustration"
            width={600}
            height={600}
            className="w-full h-auto max-w-sm lg:max-w-none lg:w-[800px] lg:h-[600px] object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
