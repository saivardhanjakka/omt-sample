// 'use client';

// import Image from 'next/image';
// import dashboardImage from '../../public/images/Outlet Page.png'; // Replace with actual path to the uploaded image

// const TasksPricing = () => {
//   return (
//     <section className="bg-[#0A0F0D] text-white rounded-[32px] lg:my-20 overflow-hidden max-w-7xl mx-auto my-10 shadow-lg">
//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
//         {/* Text Section */}
//         <div className="p-6 lg:p-10 flex flex-col justify-center space-y-4">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:-mt-20 font-semibold leading-tight">
//             Simplify collaboration at just <span className="text-4xl lg:text-4xl font-bold mt-2 block">
//               ₹ 5,000<sup className="text-sm">*</sup> every year
//             </span>
//             <br />
            
//           </h2>
//           <p className="text-[#D0D1D2] lg:text-xl lg:-mt-6 ">
//             Invest in your productivity to simplify your workflow
//           </p>
//           <p className="text-lg opacity-50  text-[#D0D1D2]">
//             *exclusive of GST
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className=" pl-0 pt-4 pb-0 flex items-end rounded-tr-[32px] rounded-br-[32px]">
//           <Image
//             src={dashboardImage}
//             alt="Dashboard Screenshot"
//             className="h-auto w-full object-cover"
//             placeholder="blur"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TasksPricing;
'use client';

import Image from 'next/image';
import dashboardImage from '../../public/images/Outlet Page.png'; // Update the path as needed

const TasksPricing = () => {
  return (
    <section className="bg-[#0A0F0D] text-white my-20 md:mx-8 rounded-[24px] overflow-hidden max-w-7xl mx-4 lg:mx-auto  shadow-lg px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
       <div className="px-4 sm:px-6 mt-10 sm:mt-16  lg:p-8 lg:-mt-26 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-4">
  <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-center lg:text-left">
  {/* ✅ Only for small screens (no span) */}
  <span className="block md:hidden">
    Simplify collaboration at just ₹ 5,000<sup className="text-sm">*</sup> every year
  </span>

  {/* ✅ For md and lg screens (with span and custom styles) */}
  <span className="hidden md:flex md:flex-wrap lg:mb-4 md:justify-center lg:justify-start gap-2">
    Simplify collaboration at just&nbsp;
    <span className=" text-3xl lg:text-4xl">
      ₹ 5,000<sup className="text-base">*</sup> every year
    </span>
  </span>
</h2>



  

  <p className="text-base lg:pb-4 lg:text-xl lg:mb-2 sm:pb-2 text-[#D0D1D2]">
    Invest in your productivity to simplify your workflow
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
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default TasksPricing;

