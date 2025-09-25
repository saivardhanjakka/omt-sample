"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Eye,
  Globe,
  Wallet,
  Mail,
  Star,
  Smartphone,
  Ticket,
  Monitor,
  Users,
  CreditCard,
  Bell,
  Mic,
  QrCode,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AddonsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      categories: [
        {
          title: "Analytics",
          items: [
            {
              icon: RotateCcw,
              name: "Online order reconciliation",
            },
            {
              icon: Eye,
              name: "Dynamic reports",
            },
          ],
        },
        {
          title: "CRM",
          items: [
            {
              icon: Globe,
              name: "Business website",
            },
            {
              icon: Wallet,
              name: "Loyalty wallet",
            },
            {
              icon: Mail,
              name: "SMS marketing",
            },
            {
              icon: Star,
              name: "Customer feedback",
            },
          ],
        },
        {
          title: "Operations",
          items: [
            {
              icon: Smartphone,
              name: "Captain app",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      categories: [
        {
          title: "Operations",
          items: [
            {
              icon: Smartphone,
              name: "Captain app",
            },
            {
              icon: Ticket,
              name: "Token management",
            },
            {
              icon: Monitor,
              name: "Kitchen display service",
            },
            {
              icon: Users,
              name: "Reservation Manager",
            },
          ],
        },
        {
          title: "Customer service",
          items: [
            {
              icon: CreditCard,
              name: "Petpooja Pay",
            },
            {
              icon: Bell,
              name: "Waiter calling system",
            },
            {
              icon: Mic,
              name: "Voice ordering kiosk",
            },
            {
              icon: QrCode,
              name: "Scan & Pay",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      categories: [
        {
          title: "Customer service",
          items: [
            {
              icon: Bell,
              name: "Waiter calling system",
            },
            {
              icon: Mic,
              name: "Voice ordering kiosk",
            },
            {
              icon: QrCode,
              name: "Scan & Pay",
            },
          ],
        },
        {
          title: "Analytics",
          items: [
            {
              icon: RotateCcw,
              name: "Online order reconciliation",
            },
            {
              icon: Eye,
              name: "Dynamic reports",
            },
          ],
        },
        {
          title: "CRM",
          items: [
            {
              icon: Globe,
              name: "Business website",
            },
            {
              icon: Wallet,
              name: "Loyalty wallet",
            },
          ],
        },
      ],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className=" py-16 bg-[#FEF0E9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-3xl">
<h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Explore Add-ons that boost your business
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              All-in-one restaurant billing POS system that handles all your
              operations on a single screen
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-14 h-14 border-gray-300 hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-14 h-14 border-gray-300 hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                {/* This is the line I changed. Increased gap from gap-16 to gap-24 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-16">
                  {slide.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-10">
                      <h3 className="text-2xl md:text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      {/* Grid for the items within a category */}
                      <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:gap-6 md:justify-start">
                        {category.items.map((item, itemIndex) => {
                          const IconComponent = item.icon
                          return (
                            <div
                              key={itemIndex}
                              className="flex flex-col items-center text-center space-y-4"
                            >
                              <div className="w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-2">
                                <IconComponent className="w-12 h-12 text-gray-700" />
                              </div>
                              <p className="text-gray-700 font-medium text-base md:text-lg  max-w-[140px]">
                                {item.name}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}