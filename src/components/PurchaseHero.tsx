'use client';

import Image from 'next/image';
import invoiceImage from '../../public/images/HeroSection.svg';
import logo from "../../public/images/purchase_logo.webp";

export default function PurchaseHero() {
  
   const handleScrollToForm = () => {
    const target = document.getElementById("PurchaseForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="bg-[#FFF9E3] text-black py-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto lg:mt-16 md:mb-6 lg:mb-10 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:mr-4 lg:text-left flex flex-col items-center lg:items-start animate-slide-in-from-left">
          
          {/* Logo */}
          <div className="mb-6 ">
            <Image
              src={logo}
              alt="Petpooja Purchase Logo"
              width={500}
              height={70}
              className="h-auto w-auto mx-auto lg:mx-0"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 lg:max-w-[28ch]">
            All–in–one AI tool for <br />
            Inventory, purchase <br />
            & payables
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-[#3D3D3D] mb-8 max-w-md">
            An end–to–end solution that digitizes your invoices and enables you to manage your payables.
          </p>

          {/* CTA Button */}
          <button onClick={handleScrollToForm} className="bg-[#EBB901] hover:bg-[#d4a500] text-black  font-semibold px-6 py-3 rounded-md transition">
            Get Started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-from-right">
          <Image
            src={invoiceImage}
            alt="Invoice Illustration"
            width={600}
            height={600}
            className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
