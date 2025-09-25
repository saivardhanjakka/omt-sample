// 'use client';

// import Image from 'next/image';
// import invoiceImage from '../../public/images/hero-new.svg';
// import logo from "../../public/images/invoice_logo.webp";

// export default function InvoiceHero() {
//    const handleScrollToForm = () => {
//     const target = document.getElementById("InvoiceForm")
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" })
//     }
//   }
//   return (
//     <section className="bg-[linear-gradient(135deg,_#15227A,_#152279,_#172686,_#15237B,_#121E69)] text-white py-12 px-4">
//       <div className="max-w-7xl mx-auto lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-10">

//         {/* Text Content */}
//         <div className="text-center lg:text-left max-w-xl mb-4 lg:mb-0">
          
//           {/* Logo */}
//           <div className="mb-4 sm:mb-5 flex justify-center lg:justify-start">
//             <Image
//               src={logo}
//               alt="Logo"
//               width={500}
//               height={400}
//               className="w-[clamp(135px,_calc(118px+5.3125vw),_220px)]  h-auto block"
//             />
//           </div>

//           {/* Heading */}
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug mb-4 sm:mb-8">
//             Lightning–Fast Billing Software for Seamless Operations
//           </h1>

//           {/* Paragraph */}
//           <p className="text-sm sm:text-base md:text-lg text-[#B0B8D1] mb-8 sm:mb-8">
//             Streamline your billing process and keep track of inventory. Track every transaction with Petpooja Invoice.
//           </p>

//           {/* Button */}
//           <button onClick={handleScrollToForm} className="bg-white text-[#0A1D60] text-md px-6 py-3 rounded-md lg:mb-16 hover:bg-gray-200 transition">
//             Take A FREE Demo
//           </button>
//         </div>

//         {/* Image Section */}
//         {/* The image is now responsive, scaling to fit the screen's width */}
//         <div className="w-full mx-auto lg:translate-x-10 flex justify-center">
//           <Image
//             src={invoiceImage}
//             alt="Petpooja Invoice Illustration"
//             width={600}
//             height={600}
//             className="w-full h-auto max-w-sm object-contain lg:max-w-none lg:w-[600px] lg:h-[600px]"
//             priority
//           />
//         </div>
        
//       </div>
//     </section>
//   );
// }
'use client';

import Image from 'next/image';
import invoiceImage from '../../public/images/hero-new.svg';
import logo from "../../public/images/invoice_logo.webp";

// No import for 'invoice-animations.css' here.
// The custom Tailwind utilities are globally available via globals.css

export default function InvoiceHero() {
  const handleScrollToForm = () => {
    const target = document.getElementById("InvoiceForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[linear-gradient(135deg,_#15227A,_#152279,_#172686,_#15237B,_#121E69)] text-white py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Text Content */}
        {/* Using the custom utility class defined in globals.css */}
        <div className="text-center lg:text-left max-w-xl mb-4 lg:mb-0 animate-slide-in-from-left">

          {/* Logo */}
          <div className="mb-4 sm:mb-5 flex justify-center lg:justify-start">
            <Image
              src={logo}
              alt="Logo"
              width={500}
              height={400}
              className="w-[clamp(135px,_calc(118px+5.3125vw),_220px)] h-auto block"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug mb-4 sm:mb-8">
            Lightning–Fast Billing Software for Seamless Operations
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#B0B8D1] mb-8 sm:mb-8">
            Streamline your billing process and keep track of inventory. Track every transaction with Petpooja Invoice.
          </p>

          {/* Button */}
          <button onClick={handleScrollToForm} className="bg-white text-[#0A1D60] text-md px-6 py-3 rounded-md lg:mb-16 hover:bg-gray-200 transition">
            Take A FREE Demo
          </button>
        </div>

        {/* Image Section */}
        {/* Using the custom utility class defined in globals.css */}
        <div className="w-full mx-auto lg:translate-x-10 flex justify-center animate-slide-in-from-right">
          <Image
            src={invoiceImage}
            alt="Petpooja Invoice Illustration"
            width={600}
            height={600}
            className="w-full h-auto max-w-sm object-contain lg:max-w-none lg:w-[600px] lg:h-[600px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}