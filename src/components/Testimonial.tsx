// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import testimonialone from "../../public/images/testmonial-1.svg"
// import testimonialtwo from "../../public/images/testmonial-2.svg"
// import testimonialthree from "../../public/images/textmonial-3.svg"

// const testimonials = [
//   {
//     id: 1,
//     text: "Petpooja provides detailed financial reports and analytics for sales and profits, along with exceptional customer service for troubleshooting. I highly recommend Petpooja.",
//     name: "Viraaj Badhwar",
//     title: "Co-founder @ Burgerama",
//     image: testimonialone,
//   },
//   {
//     id: 2,
//     text: "Petpooja simplifies restaurant management by handling online orders, inventory, and menu updates. The user-friendly POS frees up time for brand growth. Invest in automated solutions like Petpooja for seamless operations.",
//     name: "Aditi Madan",
//     title: "Founder @ Yangkiez Momos",
//     image: testimonialthree,
//   },
//   {
//     id: 3,
//     text: "To run multiple outlets, you need a comprehensive solution that perfectly synchronizes operations and is all well-integrated into your restaurant operations. I think Petpooja does a phenomenal job in helping us achieve that.",
//     name: "Kabir Advani",
//     title: "Managing Partner @ Burger Singh",
//     image: testimonialtwo,
//   },
// ]

// export default function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
//   }

//   const getCurrentTestimonial = () => testimonials[currentIndex]

//   const getVisibleTestimonialsForMd = () => {
//     const visible = []
//     for (let i = 0; i < 2; i++) {
//       const index = (currentIndex + i) % testimonials.length
//       visible.push(testimonials[index])
//     }
//     return visible
//   }

//   const getVisibleTestimonials = () => {
//     const visible = []
//     for (let i = 0; i < 3; i++) {
//       const index = (currentIndex + i) % testimonials.length
//       visible.push(testimonials[index])
//     }
//     return visible
//   }

//   return (
//     <section className="lg:py-2 px-4 md:px-6 sm:py-16 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//        <div className="flex flex-col md:flex-row justify-between  items-center md:items-start mb-12">
//   <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-md
//                  text-center md:text-left
//                  mx-auto md:ml-[2%] lg:ml-0 sm:mt-6 sm:text-center sm:text-4xl">
//                  <br className="md:hidden" />
//                  <br className="md:hidden" />
//     Hear from our clients
//   </h2>

//           <div className="hidden md:flex gap-3">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={prevSlide}
//               className="w-12 h-12 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
//             >
//               <ChevronLeft className="w-5 h-5 text-red-500" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={nextSlide}
//               className="w-12 h-12 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
//             >
//               <ChevronRight className="w-5 h-5 text-red-500" />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile */}
//         <div className="block sm:hidden">
//           <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[250px] flex flex-col">
//             <p className="text-gray-700 text-sm leading-snug mb-2 ml-1 mr-1 mt-4 flex-grow">
//               {getCurrentTestimonial().text}
//             </p>
//             <div className="flex items-center gap-3 mt-auto">
//               <Image
//                 src={getCurrentTestimonial().image}
//                 alt={getCurrentTestimonial().name}
//                 width={50}
//                 height={50}
//                 className="rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-base">{getCurrentTestimonial().name}</h4>
//                 <p className="text-gray-600 text-xs">{getCurrentTestimonial().title}</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center gap-4 mt-6">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={prevSlide}
//               className="w-10 h-10 mt-4 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
//             >
//               <ChevronLeft className="w-4 h-4 text-red-500" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={nextSlide}
//               className="w-10 h-10 mt-4 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
//             >
//               <ChevronRight className="w-4 h-4 text-red-500" />
//             </Button>
//           </div>
//         </div>

//         {/* Tablet */}
//         <div className="hidden sm:block overflow-hidden">
//           <div className="block md:hidden">
//             <div className="grid grid-cols-2 gap-6">
//               {getVisibleTestimonialsForMd().map((testimonial) => (
//                 <div
//                   key={`${testimonial.id}-${currentIndex}-md`}
//                   className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[460px]"
//                 >
//                   <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
//                     {testimonial.text}
//                   </p>
//                   <div className="flex items-center gap-4 mt-auto">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       width={60}
//                       height={60}
//                       className="rounded-full object-cover"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
//                       <p className="text-gray-600 text-sm">{testimonial.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Desktop */}
//           <div className="hidden md:block overflow-hidden">
//             <div className="flex gap-6">
//               {getVisibleTestimonials().map((testimonial) => (
//                 <div
//                   key={`${testimonial.id}-${currentIndex}-lg`}
//                   className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 hover:shadow-md transition-shadow duration-300 flex-shrink-0 flex flex-col w-[calc(100%/2.15)] min-h-[200px]"
//                 >
//                   <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 flex-grow">
//                     {testimonial.text}
//                   </p>
//                   <div className="flex items-center gap-4 mt-auto">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       width={60}
//                       height={60}
//                       className="rounded-full object-cover"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
//                       <p className="text-gray-600 text-sm">{testimonial.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import testimonialone from "../../public/images/testmonial-1.svg"
import testimonialtwo from "../../public/images/testmonial-2.svg"
import testimonialthree from "../../public/images/textmonial-3.svg"
import Aos from "aos"
import "aos/dist/aos.css";
const testimonials = [
  {
    id: 1,
    text: "Petpooja provides detailed financial reports and analytics for sales and profits, along with exceptional customer service for troubleshooting. I highly recommend Petpooja.",
    name: "Viraaj Badhwar",
    title: "Co-founder @ Burgerama",
    image: testimonialone,
  },
  {
    id: 2,
    text: "Petpooja simplifies restaurant management by handling online orders, inventory, and menu updates. The user-friendly POS frees up time for brand growth. Invest in automated solutions like Petpooja for seamless operations.",
    name: "Aditi Madan",
    title: "Founder @ Yangkiez Momos",
    image: testimonialthree,
  },
  {
    id: 3,
    text: "To run multiple outlets, you need a comprehensive solution that perfectly synchronizes operations and is all well-integrated into your restaurant operations. I think Petpooja does a phenomenal job in helping us achieve that.",
    name: "Kabir Advani",
    title: "Managing Partner @ Burger Singh",
    image: testimonialtwo,
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getCurrentTestimonial = () => testimonials[currentIndex]

  const getVisibleTestimonialsForMd = () => {
    const visible = []
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }
  useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);

  return (
    <section className="lg:py-2 px-4 md:px-6 sm:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-md
                       text-center md:text-left
                       mx-auto md:ml-[2%] lg:ml-0 sm:mt-6 sm:text-center sm:text-4xl">
            <br className="md:hidden" />
            <br className="md:hidden" />
            Hear from our clients
          </h2>

          <div className="hidden md:flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
            >
              <ChevronLeft className="w-5 h-5 text-red-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
            >
              <ChevronRight className="w-5 h-5 text-red-500" />
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="block sm:hidden">
          <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[250px] flex flex-col animate-fade-in"  data-aos="scroll-animation" >
            <p className="text-gray-700 text-sm leading-snug mb-2 ml-1 mr-1 mt-4 flex-grow">
              {getCurrentTestimonial().text}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={getCurrentTestimonial().image}
                alt={getCurrentTestimonial().name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-base">{getCurrentTestimonial().name}</h4>
                <p className="text-gray-600 text-xs">{getCurrentTestimonial().title}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-10 h-10 mt-4 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
            >
              <ChevronLeft className="w-4 h-4 text-red-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-10 h-10 mt-4 rounded-full border-2 border-red-200 hover:border-red-300 hover:bg-red-50"
            >
              <ChevronRight className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden sm:block overflow-hidden">
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-6">
              {getVisibleTestimonialsForMd().map((testimonial) => (
                <div
                  key={`${testimonial.id}-${currentIndex}-md`}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[460px] animate-slide-right"  data-aos="scroll-animation" 
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex gap-6">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={`${testimonial.id}-${currentIndex}-lg`}
                  className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 hover:shadow-md transition-shadow duration-300 flex-shrink-0 flex flex-col w-[calc(100%/2.15)] min-h-[200px] animate-slide-right"
                >
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}