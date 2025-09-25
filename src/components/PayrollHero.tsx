"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import logo from "../../public/images/new-payroll-logo-new.svg"
import image from "../../public/images/payroll-preview.svg"
export default function PayrollForm() {
  
   const handleScrollToForm = () => {
    const target = document.getElementById("PayrollForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="min-h-screen md:min-h-0 sm:min-h-0 bg-[linear-gradient(113.91deg,_#4aa9e3_-2.93%,_#047ec9_109.75%)] relative  overflow-hidden">
      {/* Logo */}
     <div className="flex justify-center pt-6 sm:pt-8 sm:mt-10 md:pt-10 lg:pt-20">
            <div className=" rounded-lg px-4 py-2 animate-slide-in-from-bottom ">
          <Image src={logo} alt="Logo" width={400} height={300}   className="w-[clamp(135px,_calc(118px+5.3125vw),_220px)] h-auto block"/>
        </div>
      </div>

     
<div className="flex flex-col items-center justify-center px-4 md:px-8 pt-3 lg:-mt-4 mt-0 md:pt-10 animate-slide-in-from-bottom">
 <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-center max-w-4xl mx-auto leading-[1.1]">
    Make your payroll management problems disappear.
  </h1>



        <p className="lg:text-2xl md:text-md text-white/90 mb-8 text-center mt-3 sm:text-sm">
          Software + biometric device combo for simplified Payroll, Attendance, Leave & Shift management.
        </p>
    <Button onClick={handleScrollToForm} className="bg-white mt-3 hover:bg-gray-100 px-8 h-12 flex items-center justify-center text-lg font-semibold rounded-lg shadow-lg">
  <span className="bg-[linear-gradient(113.91deg,_#4aa9e3_-2.93%,_#047ec9_109.75%)] bg-clip-text text-transparent">
    Take A FREE Demo
  </span>
</Button>




        {/* Static Image Below */}
 <div className="mt-10 w-full max-w-lg mx-auto mb-6 md:mb-15 sm:mb-4  lg:mb-20">
  <Image
    src={image}
    alt="Payroll Dashboard"
    width={600}
    height={400}
    className="rounded-xl w-full h-auto"
  />
</div>

      </div>
    </div>
  )
}
