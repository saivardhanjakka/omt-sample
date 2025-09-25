"use client";

import { useState, useEffect } from "react";

export default function TestimonialsQsr() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/assets/vaibav_kumaravel_qsr_the_red_box.avif",
      quote:
        "I had the pleasure of using the Petpooja system at The Red Box, and I must say, it's one of the best I've come across in the restaurant industry. The system is incredibly user-friendly and streamlined, making it easy for me to manage orders, especially online orders, and track inventory quickly and efficiently. Overall, I highly recommend Petpooja’s POS system to any restaurant owner or manager looking for a reliable and efficient solution. It's truly been a game-changer for my business.",
      name: "Vaibav Kumaravel,",
      title: "Owner",
      logo: "red box",
      logoImage: "/assets/the-red-box.avif",
    },
    {
      id: 2,
      image: "/assets/dheeraj-gupta.avif",
      quote:
        "The Indian market lacked robust billing software for a while. But I think Petpooja is doing a brilliant job now. We have been using their software for all our outlets & getting the food cost right across multiple locations.",
      name: "Dheeraj Gupta,",
      title: "MD & Owner",
      logo: "jumbo-king",
      logoImage: "/assets/jumbo-king.avif",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
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

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? "bg-[#F47537]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
