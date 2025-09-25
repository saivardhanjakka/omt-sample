"use client";

import { useState, useEffect } from "react";

export default function TestimonialsBurger() {
  //const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/assets/ankur_bakery_md.avif",
      quote:
"We have a presence in 23 states. With the help of Petpooja, we get access to real-time data from every single outlet, wherever we are. Plus, it works perfectly well in offline mode too, which is great for our those outlets which are in remote areas.",
      name: "Ankur,",
      title: "Retail Head",
      logo: "winnie-cakes-testimonial",
      logoImage: "/assets/winnie-cakes-testimonial.avif",
    },
  ];

  return (
    <div className=" bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex justify-center">
                      <div className="w-[320px] h-[320px] bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} testimonial`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <blockquote className="text-gray-600 text-base leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="space-y-2">
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-700">{testimonial.title}</div>
                      </div>
                      <div className="pt-4 flex justify-center">
                        {testimonial.logoImage && (
                          <img
                            src={testimonial.logoImage || "/placeholder.svg"}
                            alt={`${testimonial.logo} logo`}
                            className="h-10 object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop & Tablet Layout */}
                <div className="hidden md:block">
                  <div className="grid md:grid-cols-2 gap-2 items-center">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-[350px] h-[350px] md:w-[320px] md:h-[320px] lg:w-[560px] lg:h-[540px] bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} testimonial`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <blockquote className="text-gray-600 text-lg leading-[1.4] max-w-xl">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="space-y-2">
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-700">{testimonial.title}</div>
                      </div>
                      <div className="pt-4">
                        {testimonial.logoImage && (
                          <img
                            src={testimonial.logoImage || "/placeholder.svg"}
                            alt={`${testimonial.logo} logo`}
                            className="h-24 object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
