"use client"
import Image from "next/image";
import image1 from "../../public/images/who-we-are-1.svg";
import image2 from "../../public/images/who-we-are-2.svg";
import image3 from "../../public/images/who-we-are-3.svg";
import image4 from "../../public/images/who-we-are-4.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// ... (imports) ...

export default function WhoWeAre() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <section className="bg-[#17161E] py-16 px-4 sm:px-6 lg:px-8 rounded-t-3xl rounded-b-3xl pt-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 pt-8">
          {/* Top Badge Text */}
          <span className="inline-block px-6 py-2 bg-[#213C53] text-sm font-medium text-white border border-gray-600 rounded-full mb-6">
            <span className="block sm:hidden">WHY US</span>
            <span className="hidden sm:block">WHY OUR CLIENTS LOVE US</span>
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="block sm:hidden">Simplicity and Power</span>
            <span className="hidden sm:block">Simplicity meets excellence</span>
          </h2>

          {/* Subheading: hide on small screens */}
          <h3 className="hidden sm:block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            our products excel in every aspect
          </h3>

          {/* Paragraph Text */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            <span className="block sm:hidden">
              We craft top-quality, user-friendly products for peak performance.
            </span>
            <span className="hidden sm:block">
              We design our products to be the best in every way, so you get the
              most out of them. We focus on quality, ease of use, and great
              performance to make your life easier.
            </span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6 mt-16">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Large Card */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 lg:col-span-3 flex flex-col justify-between animate-slide-in-from-left
              transition-transform duration-300 ease-in-out hover:scale-105" /* Added Tailwind transition classes directly */
              data-aos="scroll-animation">
              <div className="flex flex-col lg:flex-row items-center justify-between md:gap-8 gap-6">
                <div className="flex-1 text-center mt-4 lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 whitespace-nowrap">
                    Continuous Innovation
                  </h3>
                  <p className="text-gray-300 text-base md:text-md leading-relaxed">
                    We continuously research and develop our solutions and
                    provide regular updates with new features to improve
                    performance.
                  </p>
                </div>

                <div className="lg:w-[320px] w-full flex justify-center lg:justify-end">
                  <Image
                    src={image1}
                    alt="Innovation"
                    className="w-full h-auto max-w-[320px]"
                  />
                </div>
              </div>
            </div>

            {/* Small Card */}
            <div className="bg-[#1F1E26] rounded-2xl p-6 border border-slate-700/50 lg:col-span-2 flex flex-col justify-between animate-slide-in-from-right
              transition-transform duration-300 ease-in-out hover:scale-105" /* Added Tailwind transition classes directly */
              data-aos="scroll-animation">
              <div className="text-center lg:text-left ">
                <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                  Pricing
                </h3>
                <p className="text-gray-300 text-sm md:text-md leading-relaxed">
                  Industry-low, transparent pricing models designed to scale
                  your business.
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Image
                  src={image2}
                  alt="Pricing"
                  className="w-full h-auto max-w-[280px]"
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Small Card */}
            <div className="bg-[#1F1E26] rounded-2xl p-6 border border-slate-700/50 lg:col-span-2 flex flex-col justify-between animate-slide-in-from-left
              transition-transform duration-300 ease-in-out hover:scale-105" /* Added Tailwind transition classes directly */
              data-aos="scroll-animation">
              <div className="text-center">
                <h3 className="text-2xl font-bold lg:text-left text-white mt-4 mb-4">
                  Simplicity
                </h3>
                <p className="text-gray-300 lg:text-left text-sm md:text-md leading-relaxed">
                  User-centric design with creative interfaces to help you
                  quickly learn and leverage the full potential of our
                  solutions.
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Image
                  src={image3}
                  alt="Simplicity"
                  className="w-full h-auto max-w-[280px]"
                />
              </div>
            </div>

            {/* Large Card */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 lg:col-span-3 flex flex-col justify-between animate-slide-in-from-right
              transition-transform duration-300 ease-in-out hover:scale-105" /* Added Tailwind transition classes directly */
              data-aos="scroll-animation">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    24x7 Support
                  </h3>
                  <p className="text-gray-300 text-base md:text-md leading-relaxed">
                    Our dedicated support team is always ready to help you, you
                    can reach out to us via call or email anytime.
                  </p>
                </div>
                <div className="lg:w-[320px] w-full flex justify-center lg:justify-end">
                  <Image
                    src={image4}
                    alt="Support"
                    className="w-full h-auto max-w-[320px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
