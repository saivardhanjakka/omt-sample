"use client"
import { Button } from "@/components/ui/button";

export function BarAndBreweryHeroSection() {
   const handleScrollToForm = () => {
    const target = document.getElementById("ScheduleForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:pl-36">
        <div className="flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-12 xl:py-16 min-h-[400px] lg:min-h-[500px]">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10 animate-slide-in-from-left">
            {/* Mobile heading with breaks */}
            <h1 className="block md:hidden text-3xl sm:text-2xl font-bold leading-tight text-gray-800">
              Brew higher profits with
              <br />
            Petpooja bar POS
             
            </h1>

            {/* Medium heading without breaks */}
            <h1 className="hidden md:block px-16 lg:hidden text-4xl font-bold leading-tight text-gray-800">
            Brew higher profits with Petpooja bar POS
            </h1>
            <p className="font-bold mt-4 lg:mt-5 text-lg sm:text-base lg:text-lg xl:text-lg text-[#F47537] max-w-sm lg:max-w-md mx-auto lg:mx-0 leading-relaxed">
              BAR & BREWERY
            </p>

            {/* Large heading with breaks */}
            <h1 className="hidden lg:block text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight text-gray-800">
            Brew higher profits with
              <br />
            Petpooja bar POS
            </h1>

            <p className="mt-4 lg:mt-5 text-lg sm:text-base lg:text-base xl:text-lg text-gray-600 max-w-sm lg:max-w-md mx-auto lg:mx-0 leading-relaxed">
           Efficiently manage sales, customise bills, keep tabs on alcohol inventory and much more{" "}
            </p>

            <div className="mt-5 lg:mt-6 flex justify-center lg:justify-start">
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
          <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0 animate-slide-in-from-right">
            <img
              src="/assets/Bar-Brewery_md.avif"
              alt=""
              className="relative z-10 w-80 sm:w-90 md:w-[32rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
