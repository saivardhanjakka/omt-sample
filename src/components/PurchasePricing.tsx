'use client';

import Image from 'next/image';
import dashboardImage from '../../public/images/smart-invoice-ss.svg'; // Update the path as needed

const PurchasePricing = () => {
  return (
    <section className="bg-[#212121] lg:mt-34 text-white my-20 md:mx-8 rounded-[24px] overflow-hidden max-w-7xl mx-4 lg:mx-auto  shadow-lg px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
       <div className="px-4 sm:px-6 mt-10 sm:mt-16  lg:p-8 lg:-mt-26 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-4">
  <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-center lg:text-left">
  {/* ✅ Only for small screens (no span) */}
  <span className="block md:hidden">
 Smart invoice processing at just ₹ 6,000<sup className="text-sm">*</sup> every year
  </span>

  {/* ✅ For md and lg screens  (with span and custom styles) */}
  <span className="hidden md:flex lg:mt-4 md:flex-wrap lg:mb-4 md:justify-center lg:justify-start gap-2">
    Smart invoice processing at just  &nbsp;
    <span className=" text-3xl lg:text-4xl">
      ₹ 6,000<sup className="text-base">*</sup> every year
    </span>
  </span>
</h2>



  

  <p className="text-base lg:pb-4 lg:text-xl lg:mb-2 sm:pb-2 text-[#D0D1D2]">
 Save time and make better decisions - transform hours of work into minutes!
  </p>

  <p className="text-xs lg:text-lg opacity-50 text-[#D0D1D2]">
    *exclusive of GST
  </p>
</div>


        {/* Image Section */}
         <div className=" pl-0 pt-4 -mr-8.5 pb-0 flex items-end rounded-tr-[32px] rounded-br-[32px]">
         <Image
            src={dashboardImage}
            alt="Dashboard Screenshot"
            className="h-auto w-full object-cover"
           
          />
        </div>
      </div>
    </section>
  );
};

export default PurchasePricing;

