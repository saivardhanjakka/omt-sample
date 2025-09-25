"use client"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function ReportsAnalyticsHeroSection() {
  const handleScrollToForm = () => {
    const target = document.getElementById("ScheduleForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }}
  return (
    <section className="w-full bg-white overflow-x-hidden mt-10">
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-12 xl:py-16 min-h-[400px] lg:min-h-[500px]">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-10 xl:pr-12 lg:ml-20  animate-slide-in-from-left">
            {/* Mobile heading with breaks */}
            <h1 className="block md:hidden text-3xl sm:text-2xl font-bold leading-tight text-gray-800">
              Real-time insightful reports of your restaurant
            </h1>

            {/* Medium heading without breaks */}
            <h1 className="hidden md:block px-16 lg:hidden text-4xl font-bold leading-tight text-gray-800">
              Real-time insightful reports of your restaurant
            </h1>

            {/* Large heading with breaks */}
            <h1 className="hidden lg:block text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight text-gray-800">
              Real-time
              <br />
              insightful reports <br />
              of your restaurant
            </h1>

            <p className="mt-4 lg:mt-5 text-lg sm:text-base lg:text-base xl:text-lg text-gray-600 max-w-sm lg:max-w-md mx-auto lg:mx-0 leading-relaxed">
              With Petpooja, you can complete stock-keeping in under 15 minutes!
            </p>

            <div className="mt-5 lg:mt-6 flex justify-center lg:justify-start">
              <Button
              onClick={handleScrollToForm}
                size="default"
                className="bg-[#F47537] text-white hover:bg-[#F47537] h-10 lg:h-11 xl:h-12 px-6 lg:px-6 xl:px-8 text-sm lg:text-sm xl:text-base font-semibold"
              >
                Take a free demo
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative w-full lg:w-1/2  lg:mr-20 flex justify-center items-center mt-10 lg:mt-0  animate-slide-in-from-right">
            <img
              src="/assets/report-hero.avif"
              alt="Restaurant staff managing inventory with Petpooja software"
              className="relative z-10 w-80 sm:w-90 md:w-[32rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
