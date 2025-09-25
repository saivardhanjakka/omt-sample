// components/PayrollSection.tsx
"use client"

import Image from "next/image"
import deviceImage from "../../public/images/payroll-device-new (1).png" // Update path if needed
import PayrollFaq from "./PayrollFaq"

export default function PayrollSection() {
  return (
    <>
    <section className="relative lg:-mt-14">
      {/* Light blue bottom half for sm/md */}
    <div className="absolute bottom-0 w-full h-80 bg-[#EBF6FD] z-0 md:h-80"></div>

      <div className="relative z-10 px-4 py-20 md:px-12 md:py-32 lg:mx-20 lg:py-40 min-h-[750px] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-[#0D1B2A] rounded-3xl p-8 md:p-12">
  {/* ✅ Image on top (sm/md), right side on lg */}
  <div className="order-1 lg:mt-10 lg:order-2 flex justify-center lg:justify-end">
    <Image
      src={deviceImage}
      alt="Biometric Device"
      className="w-72 sm:w-80 md:w-96 object-contain md:ml-12 lg:ml-20 lg:mr-20"
      priority
    />
  </div>

  {/* ✅ Text below image on sm/md, left side on lg */}
  <div className="order-2 lg:order-1 text-white text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8 lg:leading-sung">
      Let's automate<br />what's slowing<br />you down.
    </h1>
    <p className="text-lg sm:text-xl lg:text-2xl text-[#D0D1D2] mb-4">
      Seamless biometric device & software solution for just <strong>₹7,000*</strong> for first year
    </p>
    <p className="text-base sm:text-lg text-[#D0D1D2] mb-2">
      + ₹2,500* renewal from next year
    </p>
    <p className="text-md sm:text-sm text-gray-400 mb-6">
      *exclusive of GST
    </p>

   <button
  onClick={() => {
    const form = document.getElementById("form")
    if (form) form.scrollIntoView({ behavior: "smooth" })
  }}
  className="btn__blue_payroll bg-[#2196F3] text-white text-sm px-6 py-3 rounded-lg transition hover:bg-[rgb(0,137,222)] focus:bg-[rgb(0,137,222)]"
>
  Get Started
</button>

  </div>
</div>

      </div>
    </section>
    <div className="relative z-30">
    <PayrollFaq/>
    </div>
    </>
  )
}
