// "use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// // import image from "../../public/assets/home-hero_lg.avif";
// import image from "../../public/assets/billing-page-hero.png"
// export function BillingSoftwareHeroSection() {
//   const handleScrollToForm = () => {
//     const target = document.getElementById("ScheduleForm");
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <section className="w-full bg-white overflow-x-hidden lg:-mt-2">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-20 ">
//         <div className="flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-12 xl:py-16 min-h-[400px] lg:min-h-[500px] gap-4 lg:gap-2">
//           {/* Left Column - Content */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-14 animate-slide-in-from-left">
//             {/* Mobile heading */}
//             <h1 className="block md:hidden text-[1.75rem] font-semibold leading-tight text-gray-800">
//              Smart, Simple Billing
//               <br className="block md:hidden" />
//                Software That Scales With Your Business.

//             </h1>

//             {/* Mobile paragraph */}
//             <p className="mt-3 text-sm text-gray-600 text-center max-w-sm mx-auto leading-relaxed md:hidden">
//              Experience the future of food business management. Contact us today to schedule a demo and see how Ordermatic can transform your business.
//             </p>

//             {/* Mobile button */}
//             <div className="mt-4 flex justify-center md:hidden">
//               <Button
//                 size="default"
//                 className="bg-[#F47537] hover:bg-[#F47537] text-white  h-10 px-6 text-md font-semibold"
//                 onClick={handleScrollToForm}
//               >
//                 Book a Free demo
//               </Button>
//             </div>

//             {/* Medium heading */}
//             <h1 className="hidden md:block px-16 lg:hidden text-4xl font-bold leading-tight text-gray-800">
//              Smart, Simple Billing Software That Scales With Your Business.
//             </h1>

//             {/* Medium paragraph */}
//             <p className="hidden md:block lg:hidden mt-4 text-base text-gray-600 max-w-xl mx-auto text-center leading-relaxed">
//              Experience the future of food business management. Contact us today to schedule a demo and see how Ordermatic can transform your business.
//             </p>

//             <div className="hidden md:flex lg:hidden mt-5 justify-center">
//               <Button
//                 size="default"
//                 className="bg-[#F47537] hover:bg-[#F47537] text-white  h-10 px-6 text-md font-semibold"
//                 onClick={handleScrollToForm}
//               >
//               Book a Free demo
//               </Button>
//             </div>

//             {/* Large heading */}
//             <h1 className="hidden lg:block text-[3.5rem]  font-bold leading-tight text-gray-800">
//               Smart, Simple Billing
//               <br />
//             Software That Scales
//               <br />
//           With   Your Business.
//             </h1>

//             {/* Large paragraph */}
//             <p className="hidden lg:block mt-5 text-xl text-gray-600 max-w-xl leading-relaxed">
//              Experience the future of food business management. Contact us today to schedule a demo and see how Ordermatic can transform your business.
//             </p>

//             <div className="hidden lg:flex mt-8">
//               <Button
//                 size="default"
//                 className="bg-[#F47537] hover:bg-[#F47537] text-white  h-11 px-6 text-md font-semibold"
//                 onClick={handleScrollToForm}
//               >
//                Book a Free demo
//               </Button>
//             </div>
//           </div>

//           {/* Right Column - Illustration */}
//           <div className="relative w-full lg:w-1/2 flex justify-center lg:mr-6 items-center mt-6 lg:mt-10 animate-slide-in-from-right">
//             <Image
//               src={image}
//               alt="Restaurant staff managing inventory with Ordermatic software"
//               className="relative z-10 w-80 sm:w-90 md:w-[32rem] lg:w-[38rem] h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "../../public/assets/billing-page-hero.png";

export function BillingSoftwareHeroSection() {
  const handleScrollToForm = () => {
    const target = document.getElementById("ScheduleForm");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white overflow-x-hidden lg:-mt-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-12 xl:py-16 min-h-[400px] lg:min-h-[500px] gap-4 lg:gap-2">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-14 animate-slide-in-from-left">
            {/* Unified heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold leading-tight text-gray-800">
            Smart, Simple Billing Software That Scales With Your Business
            </h1>

            {/* Paragraph */}
            <p className="mt-3 md:mt-4 lg:mt-5 text-sm md:text-base lg:text-xl text-gray-600 max-w-sm md:max-w-xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
              Experience the future of food business management. Contact us
              today to schedule a demo and see how Ordermatic can transform your
              business.
            </p>

            {/* Button */}
            <div className="mt-4 md:mt-5 lg:mt-8 flex justify-center lg:justify-start">
              <Button
                size="default"
                className="bg-[#F47537] hover:bg-[#F47537] text-white h-10 md:h-10 lg:h-11 px-6 text-md font-semibold"
                onClick={handleScrollToForm}
              >
                Book a free demo
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:mr-6 items-center mt-6 lg:mt-10 animate-slide-in-from-right">
            <Image
              src={image}
              alt="Restaurant staff managing inventory with Ordermatic software"
              className="relative z-10 w-80 sm:w-90 md:w-[32rem] lg:w-[38rem] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
