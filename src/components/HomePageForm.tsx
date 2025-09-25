// HomePageForm.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import HomeFooter from "./HomeFooter"

export default function HomePageForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    businessName: "",
    interestedIn: "",
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

  const interestOptions = [
    { id: "poss", label: "Poss - For Food & Beverage Industry" },
    { id: "invoice", label: "Invoice - For B2B and Retail Businesses" },
    { id: "payroll", label: "Payroll - All-in-One Payroll Solutions" },
    { id: "purchase", label: "Purchase - AI Inventory System" },
    { id: "tasks", label: "Tasks - Task Management Software" },
  ]

  return (
    <div className="relative" id="HomePageForm">
      <div className="absolute top-[40%] left-0 w-full h-[60%] bg-[#1F1E26] z-0" />

      <section className="pt-10 pb-10 relative z-10">
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-7xl bg-[#F2F4F6] rounded-2xl shadow-[0_4px_20px_4px_rgba(0,0,0,0.08)] p-4 sm:p-6 md:p-8 lg:p-12 relative z-20">
            {/* Key change: Add back 'items-start' to the grid, but for the overall alignment */}
            {/* We will adjust individual items using 'self-start' or negative margins/padding */}
           
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-6 items-start">
  <div className="lg:pt-2 max-w-xl mx-auto text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight sm:leading-snug sm:max-w-xs sm:mx-auto lg:max-w-full
                   md:max-w-[20ch]"> {/* <-- KEY CHANGE HERE */}
      {"We'd love to answer your questions"}
    </h1>
    <p className="text-gray-600 text-md leading-relaxed md:text-center lg:text-left">
      Have a query? {"We'd"} be happy to answer any questions you might have.
    </p>
  </div>
 
              {/* Right Column - Form */}
              {/* Keep pt-0 here, as we want the form's first element to start at its natural top */}
              <div className="pt-0 font-quicksand"> 
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-md  text-black">
                    Name<span className="text-[#F47537]">*</span>
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
                     
                      <Label htmlFor="phoneNumber" className="text-md  text-black">
                    Phone number<span className="text-[#F47537]">*</span>
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
                      <Label htmlFor="email" className="text-md  text-black">Email<span className="text-red-700">*</span></Label>
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
                    <Label htmlFor="city" className="text-md  text-black">City<span className="text-red-700">*</span></Label>
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
                    <Label htmlFor="businessName" className="text-md  text-black">Business Name<span className="text-red-700">*</span></Label>
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

                  {/* Interested In */}
                  <div className="space-y-3">
                    <Label className="text-md  text-black">Interested In<span className="text-red-700">*</span></Label>
                    <div className="space-y-3">
                      {interestOptions.map((option) => (
                        <div key={option.id} className="flex items-center">
                          <Input
                            id={option.id}
                            name="interestedIn"
                            type="radio"
                            value={option.id}
                            checked={formData.interestedIn === option.id}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300"
                            required
                          />
                          <Label htmlFor={option.id} className="ml-3 text-sm text-gray-700 cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* reCAPTCHA Placeholder */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded" />
                      <span className="text-sm text-gray-600">{"I'm not a robot"}</span>
                      <div className="ml-4">
                        <div className="text-xs text-gray-500">reCAPTCHA</div>
                        <div className="text-xs text-gray-400">Privacy - Terms</div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <Button
                      type="submit"
                      className="btn-primary hover:bg-[#F47537] text-center text-white px-8 py-6 mr-10 mb-6 text-lg rounded-2xl transition-colors"
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
        <HomeFooter />
      </div>
    </div>
  )
}