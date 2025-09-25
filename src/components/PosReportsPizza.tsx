import Image from "next/image";
import { Button } from "@/components/ui/button";

import { BarChart3, Users, FileText, TrendingUp } from "lucide-react";

export default function PosReportsPizza() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className=" text-[#F47537] font-bold text-center  mb-4">
              ANALYTICS
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-4xl mx-auto">
              POS reports made accurate & comprehensive
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Complete Team Image with Profile Card */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/Multiple-Outlet-Reports_lg.avif"
                  alt="Restaurant team meeting with employee management interface"
                  width={900}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Analytics Dashboard */}
            <div className="mt-8 lg:mt-0">
              <Image
                src="/assets/Quick-Billing-with-Customisation_lg.avif"
                alt="Analytics Dashboard"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        {/* <section className="bg-slate-900 text-white px-4 py-16"> */}
        <div className="max-w-7xl mx-auto py-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Employee Management */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Multiple Outlet Report
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
            With Petpooja’s restaurant POS software, you can track and acquire data of all your multiple outlets from a single dashboard
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                  Forget confusing & long reports! Get simplified & in-detail reports of your every single outlet
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
 Know inventory consumption rates & their procurement expenses for all your single or chain outlets

                  </p>
                </div>
              </div>
            </div>

            {/* Comprehensive Tax Reports */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
         Quick Billing with Customisation
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
        With Petpooja POS, you can sell by the slice, or give 100 different toppings as per your diners’ customize
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                Our restaurant POS efficiently manages multiple order sizes with different toppings and requests
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                Diversify your pizza menu as much as your like & leave your billing & inventory on your POS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
