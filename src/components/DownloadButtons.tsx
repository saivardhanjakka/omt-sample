// import React from "react";
// import { FaWindows, FaMobileAlt } from "react-icons/fa";

// const DownloadButtons: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-8 md:py-25 lg:py-4 sm:-mt-10">
//       <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
//         Download Our App
//       </h2>

//       {/* Grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
//         {/* Windows Card */}
//         <a
//           href="#"
//           className="flex flex-col items-center justify-center h-44 rounded-xl shadow-md bg-[#F47537] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-6"
//         >
//           <FaWindows className="w-10 h-10 mb-3" />
//           <span className="font-semibold text-center text-md leading-snug">
//             Download for Windows
//           </span>
//         </a>

//         {/* Mobile Card */}
//         <a
//           href="#"
//           className="flex flex-col items-center justify-center h-44 rounded-xl shadow-md bg-[#F47537] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-6"
//         >
//           <FaMobileAlt className="w-10 h-10 mb-3" />
//           <span className="font-semibold text-center text-md leading-snug">
//             Download for Mobile
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default DownloadButtons;
import React from "react";
import { FaWindows } from "react-icons/fa";
import { MdAndroid } from "react-icons/md"; // ✅ full Android robot

const DownloadButtons: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-40 lg:py-8 px-4 sm:px-6">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 text-center">
       Ordermatic Hub v4
      </h2>

      {/* Grid layout (always 2 cards side by side) */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md md:max-w-2xl">
        {/* Windows Card */}
        <a
          href="https://cdn.ordermatic.in/downloads/ordermatic-windows-latest.exe"
          className="flex flex-col items-center justify-center h-40 rounded-xl shadow-md bg-[#F47537] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-4"
        >
          <FaWindows className="w-12 h-12 mb-2 text-white" />
          <span className="font-semibold text-center text-sm leading-snug">
            Download for Windows
          </span>
        </a>

        {/* Android Card */}
        <a
          href="https://cdn.ordermatic.in/downloads/ordermatic-android-latest.apk"
          className="flex flex-col items-center justify-center h-40 rounded-xl shadow-md bg-[#F47537] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-4"
        >
          <MdAndroid  className="w-12 h-12 mb-2 text-white" /> 
          <span className="font-semibold text-center text-sm leading-snug">
            Download for Android
          </span>
        </a>
      </div>  

    </div>
  );
};

export default DownloadButtons;
