"use client"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function RestaurantInventoryHeroSection() {
  const handleScrollToForm = () => {
    const target = document.getElementById("ScheduleForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }}
  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-12 xl:py-16 min-h-[400px] lg:min-h-[500px]">
         
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10 animate-slide-in-from-left">
            {/* Mobile heading */}
            <h1 className="block md:hidden text-[1.75rem] font-semibold leading-tight text-gray-800">
              The simplest restaurant inventory management software
            </h1>

            {/* Mobile paragraph */}
            <p className="mt-4 text-sm text-gray-600 text-center max-w-xs mx-auto leading-relaxed md:hidden">
              With Petpooja, you can complete stock-keeping in under 15 minutes!
            </p>

            {/* Mobile button */}
            <div className=" flex justify-center md:hidden mt-6">
              <Button
              onClick={handleScrollToForm}
                size="default"
                className="btn-primary text-white hover:bg-[#F47537] h-10 px-6 text-sm font-semibold"
              >
                Take a free demo
              </Button>
            </div>

            {/* Medium heading */}
            <h1 className="hidden md:block px-16 lg:hidden text-4xl font-bold leading-tight text-gray-800">
              The simplest restaurant inventory management software
            </h1>

            {/* Medium paragraph */}
            <p className="hidden md:block lg:hidden mt-4 text-base text-gray-600 max-w-sm mx-auto text-center leading-relaxed">
              With Petpooja, you can complete stock-keeping in under 15 minutes!
            </p>

            <div className="hidden md:flex lg:hidden mt-5 justify-center">
              <Button
              onClick={handleScrollToForm}
                size="default"
                className="btn-primary text-white hover:bg-[#F47537] h-10 px-6 text-sm font-semibold"
              >
                Take a free demo
              </Button>
            </div>

            {/* Large heading */}
            <h1 className="hidden lg:block text-[4.125rem] font-bold leading-tight text-gray-800">
              The simplest
              <br />
              restaurant inventory
              <br />
              management software
            </h1>

            {/* Large paragraph */}
            <p className="hidden lg:block mt-5 text-xl text-gray-600 max-w-lg leading-relaxed">
              With Petpooja, you can complete stock-keeping in under 15 minutes!
            </p>

            <div className="mt-5  hidden lg:mt-6  lg:flex justify-center lg:justify-start">
              <Button
              onClick={handleScrollToForm}
                size="default"
                className="btn-primary text-white hover:bg-[#F47537] h-10 lg:h-11 xl:h-12 px-6 lg:px-6 xl:px-8 text-sm lg:text-sm xl:text-base font-semibold"
              >
                Take a free demo
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-10 md:mt-16 lg:mt-0 animate-slide-in-from-right sm:mt-8">
            <img
              src="/assets/inventory-hero.avif"
              alt="Restaurant staff managing inventory with Petpooja software"
              className="relative z-10 w-80 sm:w-90 md:w-[32rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
