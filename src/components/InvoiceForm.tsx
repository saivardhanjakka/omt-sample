// HomePageForm.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import PayrollFooter from "./PayrollFooter"
import InvoiceFooter from "./InvoiceFooter"

export default function InvoiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    businessName: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="relative font-quicksand" id="InvoiceForm">
      {/* This div creates the dark background at the bottom of the page */}
      {/* Adjust 'top' percentage based on where you want it to start relative to the page height */}
      {/* I've put 45% as a starting point to try and get it under the form container */}
      <div className="absolute top-[45%] left-0 w-full h-[55%] bg-[linear-gradient(135deg,_#15227A,_#152279,_#172686,_#15237B,_#121E69)] z-0" />
     
      {/* Ensure the main content section has a higher z-index to appear above the background */}
      <section className="pt-10 pb-10 relative z-10">
        <div className="flex items-center justify-center p-4">
          {/* Main container for text and form - this should remain entirely white */}
          {/* Removed `overflow-hidden` as it's not needed if the background is external */}
          <div className="w-full max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-7xl rounded-2xl shadow-[0_4px_20px_4px_rgba(0,0,0,0.08)] p-4 sm:p-6 md:p-8 lg:p-12 relative z-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-6 items-start">
              {/* Left Column - Text */}
              <div className="lg:pt-2 max-w-xl mx-auto text-center lg:text-left">
                {/* Text color reverted to gray-900 (or black) as it's on a white background */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight sm:leading-snug sm:max-w-xs sm:mx-auto lg:max-w-full md:max-w-[20ch]">
                  {"We'd love to answer your questions"}
                </h1>
                {/* Paragraph text color reverted to gray-600 */}
                <p className="text-gray-600 text-md leading-relaxed md:text-center lg:text-left">
                 Get a personalised online demo and see what else Petpooja Retail POS can do for you.
                </p>
              </div>

              {/* Right Column - Form */}
              <div className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    {/* Label text color reverted to black */}
                    <Label htmlFor="name" className="text-md text-black">
                      Name<span className="text-red-700">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      {/* Label text color reverted to black */}
                      <Label htmlFor="phoneNumber" className="text-md text-black">
                        Phone number<span className="text-red-700">*</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-1">
                      {/* Label text color reverted to black */}
                      <Label htmlFor="email" className="text-md text-black">Email<span className="text-red-700">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-1">
                    {/* Label text color reverted to black */}
                    <Label htmlFor="city" className="text-md text-black">City<span className="text-red-700">*</span></Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1">
                    {/* Label text color reverted to black */}
                    <Label htmlFor="businessName" className="text-md text-black">Business Name<span className="text-red-700">*</span></Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <Button
                      type="submit"
                      className="bg-[#2740e3] text-center text-white px-8 py-6 mr-10 mb-6 text-lg rounded-2xl transition-colors"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-30">
        <InvoiceFooter />
      </div>
    </div>
  )
}