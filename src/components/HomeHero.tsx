"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import image from "../../public/images/poss.webp"
import PagesOptionComponent from "./PageOption"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";
export  default function HomeHero() {
  const handleScrollToForm = () => {
    const target = document.getElementById("HomePageForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
  useEffect(() => {
      Aos.init({
        once: true,
      });
    }, []);
  return (
    <>
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#17161E]">
      
        <div className="text-center max-w-4xl animate-slide-in-from-bottom  mx-auto" >
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  text-white leading-tight mb-4 sm:mb-6 lg:mb-8">
            All-in-One Software
            <br />
            Powering SME Growth
            <br />
            At Every Step
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            Stay ahead of the curve with solutions that are designed for tomorrow's challenges, flexible tools that
            adapt to your unique needs.
          </p>
.
          <Button   onClick={handleScrollToForm}
          className="btn-primary  text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-md mb-12 sm:mb-16 lg:mb-20">
            Get Started
          </Button>
        </div>
      </div>
   <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 overflow-hidden">
  
  <div className="absolute top-0 inset-x-0 h-1/2 bg-[#17161E] z-0 rounded-b-3xl" />

 
  <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 animate-slide-in-from-bottom "  >
    <Image
      src={image}
      alt="Product showcase showing laptop and mobile interface"
      width={1200}
      height={800}
      className="w-full h-auto object-contain"
      priority
    />
  </div>

</div>

<PagesOptionComponent/>

    </>
  )
}

