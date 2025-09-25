// HomePageForm.tsx
"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PurchaseFeatures from "./PurchaseFeatures";
import PurchaseFooter from "./PurchaseFooter";


export default function PurchaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    businessName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative  text-[#222222] lg:mt-10" id="PurchaseForm">
      <div className="absolute top-[45%] left-0 w-full  h-[55%] bg-[#EECB4D] z-0" />

      <section className="pt-10 pb-10 relative  z-10">
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-sm sm:max-w-3xl  md:max-w-4xl lg:max-w-7xl rounded-2xl shadow-[0_4px_20px_4px_rgba(0,0,0,0.08)] p-4 sm:p-6 md:p-8 lg:p-12 relative z-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-6 items-start">
              <div className="lg:pt-2 max-w-xl mx-auto text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:-mt-4 lg:ml-3 font-semibold text-gray-900 mb-4 leading-tight sm:leading-snug lg:leading-[1.1] sm:max-w-xs sm:mx-auto lg:max-w-full md:max-w-[20ch]">
                  Implement Petpooja Purchase and see the difference
                </h1>

                <p className="text-[#52566C] text-md  mt-4 leading-relaxed lg:ml-3 md:text-center lg:text-left">
                 Have a query? We'd be happy to answer any questions you might have.
                </p>
              </div>

              <div className="pt-0 font-quicksand">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-lg text-black">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label
                        htmlFor="phoneNumber"
                        className="text-md text-black"
                      >
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
                      <Label htmlFor="email" className="text-lg text-black">
                        Email<span className="text-red-700">*</span>
                      </Label>
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

                  <div className="space-y-1">
                    <Label htmlFor="city" className="text-lg text-black">
                      City<span className="text-red-700">*</span>
                    </Label>
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

                  <div className="space-y-1">
                    <Label
                      htmlFor="businessName"
                      className="text-lg text-black"
                    >
                      Business Name<span className="text-red-700">*</span>
                    </Label>
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

                  <div className="flex justify-end pt-4">
                    <Button
                      type="submit"
                      className="bg-[#ebb901] text-center text-black px-8 py-6 lg:mt-2 mr-10 mb-6 text-lg rounded-2xl transition-colors"
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
        <PurchaseFooter />
      </div>
    </div>
  );
}
