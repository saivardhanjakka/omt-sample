"use client";
import { useState, useEffect } from "react";
import RoyalSriDeviVegandNonVeg from "../../public/assets/RoyalSrideviWithBg.png";
import TheGoldenCave from "../../public/assets/theGoldencafewithbg.png";
import Image from "next/image";
export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: TheGoldenCave ,
      quote:
        "We’ve used a couple of POS systems before, but none came close to the support we get from Ordermatic. Any time we have a question or need help, their team is just a call or message away—and they actually listen and solve things fast. That kind of support makes a huge difference when you’re running a busy restaurant. Honestly, it feels great knowing we’ve got a team that has our back.",
      name: "The Golden Cave",
     
    
    },
    {
      id: 2,
      image: RoyalSriDeviVegandNonVeg,
      quote:
        "Moving to Ordermatic across all our franchise outlets has made things so much easier. It’s simple to use, our new partners get the hang of it quickly, and we finally have one system that keeps everything consistent. The real-time reports give us a clear view of how each location is doing without having to chase numbers. If you’re running a franchise, I’d definitely recommend Ordermatic—it just works and grows with you.",
      name: " Royal Sri Devi",
      
      
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" bg-white">
      {/* Testimonial Carousel */}
      <main className="max-w-7xl mx-auto px-4 py-16 mt-10">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                {/* Mobile Layout - Stacked */}
                <div className="block md:hidden">
                  <div className="flex flex-col items-center space-y-6">
                    {/* Image - Centered on mobile */}
                    <div className="flex justify-center">
                      <div className="w-full max-w-md h-[300px] lg:ml-26 flex items-center justify-center overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} testimonial`}
                          className="object-contain w-auto h-full"
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="text-center space-y-4 sm:-mt-6">
                      <blockquote className="text-gray-600 text-base leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="space-y-2">
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        {/* <div className="text-gray-700">{testimonial.title}</div> */}
                       </div>

                      {/* Company Logo */}
                      {/* <div className="pt-4 flex justify-center">
                        {testimonial.logo === "GO_ZERO" ? (
                          <div className="w-32 h-16 bg-pink-600 rounded flex items-center justify-center">
                            <div className="text-white font-bold text-lg">
                              GO
                              <br />
                              ZERO
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="text-2xl font-bold text-gray-900">
                              HOCCO
                            </div>
                            <div className="text-xs text-gray-500">
                              Serving since 1954
                            </div>
                          </div>
                        )}
                      </div> */} 
                    </div>
                  </div>
                </div>

                {/* Tablet and Desktop Layout - Side by side */}
                <div className="hidden md:block">
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-4 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center md:justify-start h-full items-center">
                      <div className="w-full max-w-md h-[300px] lg:ml-26 flex items-center justify-center overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} testimonial`}
                          className="object-contain w-auto h-full"
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>

                    {/* Right side - Testimonial Content */}
                    <div className="space-y-6">
                      <blockquote className="text-gray-600 text-lg leading-[1.4] max-w-xl">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="space-y-2">
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        {/* <div className="text-gray-700">{testimonial.title}</div> */}
                      </div>

                      {/* Company Logo */}
                      {/* <div className="pt-4">
                        {testimonial.logo === "GO_ZERO" ? (
                          <div className="w-32 h-16 bg-pink-600 rounded flex items-center justify-center">
                            <div className="text-white font-bold text-lg">
                              GO
                              <br />
                              ZERO
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="text-2xl font-bold text-gray-900">
                              HOCCO
                            </div>
                            <div className="text-xs text-gray-500">
                              Serving since 1954
                            </div>
                          </div>
                        )}
                      </div> */}
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
