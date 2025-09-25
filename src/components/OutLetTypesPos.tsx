// // OutletTypes.jsx
// "use client";
// import Image from "next/image";
// import Aos from "aos";
// import React, { useEffect } from "react";
// import bakery from "../../public/assets/Bakery.png";
// import barandbrewery from "../../public/assets/Bar-&-Breweries.png";
// import cafe from "../../public/assets/CafeTea-Shops.png";
// import currypoint from "../../public/assets/Curry-Points.png";
// import grocery from "../../public/assets/Grocery-Stores.png";
// import largechain from "../../public/assets/Large-chain.png";
// import QSRS from "../../public/assets/QSRS.png";
// import restaurant from "../../public/assets/Restaurants.png";
// import streetvendor from "../../public/assets/Street-Vendors.png";
// import tiffincenter from "../../public/assets/Tiffin-Centers.png";
// const outletData = [
//   { name: "Cafe", image: cafe },
//   { name: "Fine dine", image: restaurant },
//   { name: "Bar & brewery", image: barandbrewery },
//   { name: "QSR", image: QSRS },
//   { name: "Large chains", image: largechain },
//   { name: "Bakery", image: bakery },
//   { name: "Tiffin Centers", image: tiffincenter },
//   { name: "Street Vendors", image: streetvendor },
//   { name: "Curry Points", image: currypoint },
//   { name: "Grocery Store", image: grocery },
// ];

// export default function OutletTypes() {
//   useEffect(() => {
//     Aos.init({ once: true });
//   }, []);
//   return (
//     <section className="bg-[#F47537] py-20 px-4 md:px-20 text-white">
//       <div className="text-center mb-16">
//         <p className="text-lg md:text-xl font-semibold tracking-wide">
//           OUTLET TYPES
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold mt-3">
//           Built for all types of food business
//         </h2>
//         <p className="text-base md:text-lg mt-5 max-w-3xl mx-auto">
//           The all-in-one Restaurant Management System for all types of
//           restaurant formats and food outlets
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
//         {outletData.map((outlet, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center space-y-4 animate-slide-in-from-bottom"
//             data-aos="scroll-animation"
//           >
//             <div className="w-28 h-28 md:w-28 md:h-28">
//               {/* <img
//                 src={outlet.image}
//                 alt={outlet.name}
//                 className="w-full h-full object-contain"
//               /> */}
//               <Image
//                 src={outlet.image} // This is StaticImageData
//                 alt={outlet.name}
//                 width={116} // or appropriate size
//                 height={116}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <p className="text-white font-semibold text-xl md:text-xl mb-4 leading-snug">
//               {outlet.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// OutletTypes.jsx
"use client";
import Image, { StaticImageData } from "next/image";
import Aos from "aos";
import React, { useEffect } from "react";

import bakery from "../../public/assets/Bakery.png";
import barandbrewery from "../../public/assets/Bar-&-Breweries.png";
import cafe from "../../public/assets/CafeTea-Shops.png";
import currypoint from "../../public/assets/Curry-Points.png";
import grocery from "../../public/assets/Grocery-Stores.png";
import largechain from "../../public/assets/Large-chain.png";
import QSRS from "../../public/assets/QSRS.png";
import restaurant from "../../public/assets/Restaurants.png";
import streetvendor from "../../public/assets/Street-Vendors.png";
import tiffincenter from "../../public/assets/Tiffin-Centers.png";
import pattern from "../../public/assets/pattern.png";

interface Outlet {
  name: string;
  image: StaticImageData;
}

const outletData: Outlet[] = [
  { name: "Cafe", image: cafe },
  { name: "Fine dine", image: restaurant },
  { name: "Bar & brewery", image: barandbrewery },
  { name: "QSR", image: QSRS },
  { name: "Large chains", image: largechain },
  { name: "Bakery", image: bakery },
  { name: "Tiffin Centers", image: tiffincenter },
  { name: "Street Vendors", image: streetvendor },
  { name: "Curry Points", image: currypoint },
  { name: "Grocery Store", image: grocery },
];

export default function OutletTypes() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-20 text-white overflow-hidden bg-[#F47537]">
      {/* Pattern as overlay image */}
      {/* Pattern as overlay image */}
<Image
  src={pattern}
  alt="Background pattern"
  fill
  className="object-cover opacity-90 mix-blend-lighten pointer-events-none"
  priority
/>


      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl font-semibold tracking-wide">
            OUTLET TYPES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Built for all types of food business
          </h2>
          <p className="text-base md:text-lg mt-5 max-w-3xl mx-auto">
            The all-in-one Restaurant Management System for all types of
            restaurant formats and food outlets
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {outletData.map((outlet, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 animate-slide-in-from-bottom"
              data-aos="scroll-animation"
            >
              <div className="w-28 h-28 md:w-28 md:h-28">
                <Image
                  src={outlet.image}
                  alt={outlet.name}
                  width={116}
                  height={116}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white font-semibold text-xl md:text-xl mb-4 leading-snug">
                {outlet.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
