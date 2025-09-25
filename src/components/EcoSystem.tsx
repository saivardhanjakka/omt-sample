
"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

import payrollPreview from "../../public/images/payroll-preview.svg"
import invoicePreview from "../../public/images/invoice-preview.svg"
import posPreview from "../../public/images/poss-preview.svg"
import purchasePreview from "../../public/images/purchase-preview.svg"
import tasksPreview from "../../public/images/tasks-preview.png"
import payrolllogo from "../../public/images/payroll_logo.webp"
import invoicelogo from "../../public/images/invoice_logo.webp"
import posslogo from "../../public/images/poss_logo.webp"
import purchaselogo from "../../public/images/purchase_logo.webp"
import taskslogo from "../../public/images/tasks_logo.webp"

export default function EcoSystem() {
  const router = useRouter()

  const handleCardClick = (section: string) => {
    router.push(`/${section.toLowerCase()}`)
  }

  const logoBox = (src: any, alt: string) => (
  <div className="lg:-mb-10 sm:-mb-3 flex items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]">
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      className="object-contain w-full h-full"
      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
      priority
    />
  </div>
)



  const previewImage = (src: any, alt: string) => (
    <div className="flex justify-center items-end h-72 px-6 sm:px-10">
      <Image src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-contain" />
    </div>
  )

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FEF0E9] border border-[#FCD8C4] rounded-full px-4 py-2 mb-4">
            <p className="text-[#F47537] font-semibold text-sm uppercase tracking-wide">WHAT WE DO</p>
          </div>
          <h2 className="text-4xl sm:text-2xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
  Our ecosystem 
  <br className="sm:block md:hidden" />
  – empowering 
  <br className="sm:block md:hidden" />
  SMEs through integrated solutions
</h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine deep industry expertise with creative problem-solving to craft products that drive efficiency &
            unlock new possibilities.
          </p>
        </div>

        <div className="space-y-16">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payroll */}
            <div
              className="rounded-2xl shadow-lg overflow-hidden cursor-pointer  hover:bg-[#eef3f7]  relative group flex flex-col bg-[#F8F9FA] justify-between transition-transform duration-300 ease-in-out hover:scale-105 "
              onClick={() => handleCardClick("payroll")} >
              <div className="px-6 sm:px-10 pt-10 flex-1 flex flex-col justify-center items-center">
                {logoBox(payrolllogo, "Payroll Icon")}
                <p className="text-md text-gray-600 mb-3 leading-relaxed text-center">
                  Complete solution for easy attendance tracking, simplified payroll management, and a leave monitoring
                  system.
                </p>
                <p className="text-[#F47537] font-semibold lg:mb-3 md:mb-1 underline cursor-pointer  text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Know More
                </p>
              </div>
              {previewImage(payrollPreview, "Payroll Preview")}
            </div>

            {/* Invoice */}
            <div
              className="bg-[#F8F9FA] hover:bg-[#F0F2FC] rounded-2xl shadow-lg overflow-hidden cursor-pointer  relative group flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 "
              onClick={() => handleCardClick("invoice")}
            >
              <div className="px-6 sm:px-10 pt-10 flex-1 flex flex-col justify-center items-center">
                {logoBox(invoicelogo, "Invoice Icon")}
                <p className="text-md text-gray-600 mb-3 leading-relaxed text-center">
                  GST billing and inventory management solution for B2B and retail businesses, designed to provide
                  real-time insights.
                </p>
                <p className="text-[#F47537] lg:mb-3 md:mb-1 font-semibold underline cursor-pointer  text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Know More
                </p>
              </div>
              {previewImage(invoicePreview, "Invoice Preview")}
            </div>
          </div>

          {/* POS */}
          <div
            className="bg-[#F8F9FA] hover:bg-[#FEFBFC] rounded-2xl shadow-lg overflow-hidden cursor-pointer relative group flex flex-col lg:flex-row h-auto lg:h-[500px] transition-transform duration-300 ease-in-out hover:scale-105 "
            onClick={() => handleCardClick("poss")}
          >
            {/* Text Section */}
            <div className="px-6 sm:px-10 pt-10 pb-6 flex flex-col justify-center items-center lg:w-1/2 text-center">
              {logoBox(posslogo, "POS Icon")}
              <p className="text-md text-gray-600 mb-3 leading-relaxed">
                All-rounder solution designed to drive restaurant growth, supporting all types of food service outlets.
              </p>
              <p className="text-[#F47537] lg:mb-3 md:mb-1 font-semibold underline cursor-pointer mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Know More
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 px-6 sm:px-10 pb-8">
              <Image
                src={posPreview || "/placeholder.svg"}
                alt="POS Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Purchase */}
            <div
              className="bg-[#F8F9FA] hover:bg-[#FAF8F2] rounded-2xl shadow-lg overflow-hidden cursor-pointer  duration-300 relative group flex flex-col justify-between transition-transform  ease-in-out hover:scale-105 "
              onClick={() => handleCardClick("purchase")}
            >
              <div className="px-6 sm:px-10 pt-10 flex-1 flex flex-col justify-center items-center">
                {logoBox(purchaselogo, "Purchase Icon")}
                <p className="text-md text-gray-600 mb-3 leading-relaxed text-center">
                  Digitize your invoices and manage your payables by taking a picture of your invoices.
                </p>
                <p className="text-[#F47537] lg:mb-3 md:mb-1 font-semibold underline cursor-pointer text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Know More
                </p>
              </div>
              {previewImage(purchasePreview, "Purchase Preview")}
            </div>

            {/* Tasks */}
            <div
              className="bg-[#F8F9FA] hover:bg-[#F6FCF8] rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all  relative group flex flex-col justify-betweentransition-transform duration-300 ease-in-out hover:scale-105 "
              onClick={() => handleCardClick("tasks")}
            >
              <div className="px-6 sm:px-10 pt-10 flex-1 flex flex-col justify-center items-center">
                {logoBox(taskslogo, "Tasks Icon")}
                <p className="text-md text-gray-600 mb-3 leading-relaxed text-center">
                  Assign, supervise & verify tasks, and get downloadable reports, simplify complex processes, and ensure
                  consistency.
                </p>
                <p className="text-[#F47537] lg:mb-3 md:mb-1 font-semibold underline cursor-pointer text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Know More
                </p>
              </div>
              {previewImage(tasksPreview, "Tasks Preview")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
