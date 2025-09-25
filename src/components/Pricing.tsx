"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import pattern from "../../public/assets/pattern.png"
const features = [
  { label: "Simple/Easy Billing", key: "Simple/Easy Billin" },
  { label: "Captain App", key: "Captain App" },
  {
    label: "Unlimited Self Ordering Software",
    key: "Unlimited Self Ordering Software",
  },
  { label: "Numeric POS", key: "Numeric POS" },
  { label: "Zomato/Swiggy Integration", key: "Zomato/Swiggy Integration" },
  {
    label: "Free Installation/Training(24/7 Support)",
    key: "Free Installation/Training(24/7 Support)",
  },
  { label: "Unlimited Staff/Role Access", key: "Unlimited Staff/Role Access" },
  { label: "Token Display System", key: "Token Display System" },
  { label: "Token App", key: "Token App" },
  {
    label: "Unlimited Third Party Integrations",
    key: "Unlimited Third Party Integrations",
  },
  { label: "Digital QR Menu", key: "Digital QR Menu" },
  { label: "Google Business Profile", key: "Google Business Profile" },
  { label: "Real Time Reporting", key: "Real Time Reporting" },
  {
    label: "24/7 Outlet Monitoring (Any Where/Any Time/Any Device)",
    key: "24/7 Outlet Monitoring ",
  },
  { label: "Credit Followup Module", key: "Credit Followup Module" },
  {
    label: "WhatsApp Business Profile(Unlimited Messaging)",
    key: "WhatsApp Business",
  },
  {
    label: "2X Profit Merchant Payment QR",
    key: "2X Profit Merchant Payment QR",
  },
  { label: "Integrated Payments", key: "Integrated Payments" },
  {
    label: "Multi Device Support(Phone/PC/Tablet)",
    key: "Multi Device Support(Phone/PC/Tablet)",
  },
  {
    label: "Adaptable Print Module(Bill/KOT)",
    key: "Adaptable Print Module(Bill/KOT)",
  },
  {
    label: "Bluetooth/USB/WIFI/LAN Print Support",
    key: "Bluetooth/USB/WIFI/LAN Print Support",
  },
  {
    label: "Windows/Android/IOS/linux/MAC OS Support",
    key: "Windows/Android/IOS/linux/MAC OS Support",
  },
  { label: "Inventory", key: "Inventory" },
  { label: "Table Reservation", key: "Table Reservation" },
  { label: "Personalized Website", key: "Personalized Website" },
  { label: "Online Ordering Link", key: "Online Ordering Link" },
  {
    label: "CRM/ERP(Payroll/Purchase & More)",
    key: "CRM/ERP(Payroll/Purchase & More)",
  },
  { label: "Magic Feedback System", key: "Magic Feedback System" },
  {
    label: "Digital Invoice(Unlimited Series)",
    key: "Digital Invoice(Unlimited Series)",
  },
  { label: "Customer Calling System", key: "Customer Calling System" },
  {
    label: "Live Order Updates(Customer/Staff)",
    key: "Live Order Updates(Customer/Staff)",
  },
  {
    label: "Delivery/Dine-In/Takeway/Pickup/Room Dine Modules",
    key: "Delivery/Dine-In/Takeway/Pickup/Room Dine Modules",
  },
  {
    label: "Bank/Accounts Reconciliation",
    key: "Bank/Accounts Reconciliation",
  },
  { label: "Customized KOT Module", key: "Customized KOT Module" },
  { label: "Pre-Ordering Module ", key: "Pre-Ordering Module " },
  { label: "Multi-Outlet Management", key: "Multi-Outlet Management" },
  {label:"Google Servers",key:"Google Servers"}
];

const allFeatures = Object.fromEntries(features.map((f) => [f.key, true]));

const plans = [
  {
    name: "Pro 1 year",
    price: "₹40,000",
    subText: "per outlet + GST",
    features: allFeatures,
  },
  {
    name: "Pro 2 years",
    price: "₹70,000",
    subText: "per outlet + GST",
    features: allFeatures,
  },
  
  {
    name: "Pro 3 years",
    price: "₹80,000",
    subText: "per outlet + GST",
    features: allFeatures,
  },
];

export default function PricingGrid() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const handleScrollToForm = () => {
    const target = document.getElementById("ScheduleForm");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-0 px-2">
      
      <div
        className="absolute left-0 w-full bg-[#F47537] z-0
  h-[450px] lg:top-0 md:top-[-40px] sm:top-[-50px] top-[-50px]
  sm:h-[450px] md:h-[500px] lg:h-[550px]">
    <Image
  src={pattern}
  alt="Background pattern"
  fill
  className="object-cover opacity-90 mix-blend-lighten pointer-events-none"
  priority
/>
  </div>
      
 <div className="lg:py-18 py-16">
         <div className="max-w-4xl mx-auto px-4 text-center animate-slide-in-from-bottom">
          <h1 className="text-[24px] sm:text-[28px] md:text-3xl lg:text-4xl font-bold text-white leading-snug text-center">
            All-in-One Features <br />
             at the Best Price.
           </h1>
          <p className="mt-6 text-sm md:text-lg text-white max-w-2xl mx-auto">
             Transparent and affordable pricing with zero hidden fees.
           </p>
         </div>
       </div> 

      <div className="w-full max-w-[1440px] mx-auto px-2 lg:px-10 relative z-10">
        {/* Mobile Version */}
        <div
          className="block lg:hidden -mt-4 animate-slide-in-from-bottom"
          data-aos="scroll-animation"
        >
          <div className="grid grid-cols-3 divide-x divide-gray-500 border border-gray-200 rounded-t-md overflow-hidden bg-white">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col items-center  justify-center px-2 py-4 text-center"
              >
                <div className="text-sm font-semibold">{plan.name}</div>
                <div className="text-lg font-bold">
                  {plan.price}
                  <span className="text-sm font-normal">*</span>
                </div>
                <div className="text-[11px] opacity-80 mt-1">
                  {plan.subText}
                </div>
              </div>
            ))}
          </div>

          <div className="border-x border-b border-gray-200 rounded-b-md bg-white">
            {features.map((feature) => (
              <div key={feature.key} className="border-t border-gray-200">
                <div className="text-sm font-medium text-gray-700 px-3 py-2 border-b border-gray-200">
                  {feature.label}
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-500 text-center">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="py-3 flex items-center justify-center"
                    >
                      {plan.features[feature.key] && (
                        <span className="text-gray-600 font-bold text-lg">
                          ✓
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() =>
            (window.location.href =
              "https://www.nutrimony.in/order-matic-technologies-private-limited?o=1&ot=2")
          }
          className="block lg:hidden w-full mt-4 text-[#F47537] border-[#F47537] hover:bg-[#F47537] hover:text-white"
        >
          Buy Now
        </Button>

        {/* Desktop Version */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Key Features Column */}
          <Card
            className="bg-white border shadow-sm mt-14 animate-slide-in-from-bottom"
            data-aos="scroll-animation"
          >
            <CardHeader className="text-left pb-2 px-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Key Features
              </h3>
              <p className="text-sm text-gray-600">
                Features designed to match every business need:
              </p>
            </CardHeader>
            <CardContent className="pt-0 lg:-mt-6">
              <div className="border-t border-gray-200 my-4 -mx-6"></div>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-12 flex items-center border-b border-gray-200 last:border-b-0 -mx-6 px-6"
                >
                  <span className="text-sm text-gray-700">{feature.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pricing Cards */}
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="bg-white border shadow-sm animate-slide-in-from-bottom"
              data-aos="scroll-animation"
            >
              <CardHeader className="text-left pb-4 relative">
                <div className="py-4 -mx-6 -mt-6 rounded-t-lg">
                  <div className="px-6 mb-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="px-6">
                    <span className="text-4xl font-bold -mt:1 text-gray-900">
                      {plan.price}
                    </span>
                    <p className="text-sm mt-1 text-gray-600">{plan.subText}</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href =
                        "https://www.nutrimony.in/order-matic-technologies-private-limited?o=1&ot=2")
                    }
                    className="mt-6 w-[calc(100%-48px)] mx-auto block text-[#F47537] border-[#F47537] hover:bg-[#F47537] hover:text-white"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="border-t border-gray-200 my-4 lg:-mt-12 -mx-6"></div>
                {features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="h-12 flex items-center justify-center border-b border-gray-200 last:border-b-0 -mx-6 px-6"
                  >
                    {plan.features[feature.key] && (
                      <span className="text-gray-600 font-bold text-lg">✓</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
// "use client";

// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { useEffect } from "react";
// import Aos from "aos";

// const features = [
//   { label: "Simple/Easy Billing", key: "Simple/Easy Billin" },
//   { label: "Captain App", key: "Captain App" },
//   {
//     label: "Unlimited Self Ordering Software",
//     key: "Unlimited Self Ordering Software",
//   },
//   { label: "Numeric POS", key: "Numeric POS" },
//   { label: "Zomato/Swiggy Integration", key: "Zomato/Swiggy Integration" },
//   {
//     label: "Free Installation/Training(24/7 Support)",
//     key: "Free Installation/Training(24/7 Support)",
//   },
//   { label: "Unlimited Staff/Role Access", key: "Unlimited Staff/Role Access" },
//   { label: "Token Display System", key: "Token Display System" },
//   { label: "Token App", key: "Token App" },
//   {
//     label: "Unlimited Third Party Integrations",
//     key: "Unlimited Third Party Integrations",
//   },
//   { label: "Digital QR Menu", key: "Digital QR Menu" },
//   { label: "Google Business Profile", key: "Google Business Profile" },
//   { label: "Real Time Reporting", key: "Real Time Reporting" },
//   {
//     label: "24/7 Outlet Monitoring (Any Where/Any Time/Any Device)",
//     key: "24/7 Outlet Monitoring ",
//   },
//   { label: "Credit Followup Module", key: "Credit Followup Module" },
//   {
//     label: "WhatsApp Business Profile(Unlimited Messaging)",
//     key: "WhatsApp Business",
//   },
//   {
//     label: "2X Profit Merchant Payment QR",
//     key: "2X Profit Merchant Payment QR",
//   },
//   { label: "Integrated Payments", key: "Integrated Payments" },
//   {
//     label: "Multi Device Support(Phone/PC/Tablet)",
//     key: "Multi Device Support(Phone/PC/Tablet)",
//   },
//   {
//     label: "Adaptable Print Module(Bill/KOT)",
//     key: "Adaptable Print Module(Bill/KOT)",
//   },
//   {
//     label: "Bluetooth/USB/WIFI/LAN Print Support",
//     key: "Bluetooth/USB/WIFI/LAN Print Support",
//   },
//   {
//     label: "Windows/Android/IOS/linux/MAC OS Support",
//     key: "Windows/Android/IOS/linux/MAC OS Support",
//   },
//   { label: "Inventory", key: "Inventory" },
//   { label: "Table Reservation", key: "Table Reservation" },
//   { label: "Personalized Website", key: "Personalized Website" },
//   { label: "Online Ordering Link", key: "Online Ordering Link" },
//   {
//     label: "CRM/ERP(Payroll/Purchase & More)",
//     key: "CRM/ERP(Payroll/Purchase & More)",
//   },
//   { label: "Magic Feedback System", key: "Magic Feedback System" },
//   {
//     label: "Digital Invoice(Unlimited Series)",
//     key: "Digital Invoice(Unlimited Series)",
//   },
//   { label: "Customer Calling System", key: "Customer Calling System" },
//   {
//     label: "Live Order Updates(Customer/Staff)",
//     key: "Live Order Updates(Customer/Staff)",
//   },
//   {
//     label: "Delivery/Dine-In/Takeway/Pickup/Room Dine Modules",
//     key: "Delivery/Dine-In/Takeway/Pickup/Room Dine Modules",
//   },
//   {
//     label: "Bank/Accounts Reconciliation",
//     key: "Bank/Accounts Reconciliation",
//   },
//   { label: "Customized KOT Module", key: "Customized KOT Module" },
//   { label: "Pre-Ordering Module ", key: "Pre-Ordering Module " },
//   { label: "Multi-Outlet Management", key: "Multi-Outlet Management" },
// ];

// const allFeatures = Object.fromEntries(features.map((f) => [f.key, true]));

// const plans = [
//   {
//     name: "Pro",
//     price: "₹40,000",
//     subText: "per outlet / 1 year",
//     features: allFeatures,
//   },
//   {
//     name: "Pro",
//     price: "₹70,000",
//     subText: "per outlet / 2 year",
//     features: allFeatures,
//   },
//   {
//     name: "Pro",
//     price: "₹80,000",
//     subText: "per outlet / 3 year",
//     features: allFeatures,
//   },
// ];

// export default function PricingGrid() {
//   useEffect(() => {
//     Aos.init({ once: true });
//   }, []);

//   return (
//     <section className="relative pt-8 pb-0 px-2">
//       <div className="absolute top-0 left-0 w-full bg-[#FEF0E9] z-0 lg:h-[260px] md:h-[240px] sm:h-[100px] h-[260px]" />
//       <div className="w-full max-w-[1440px] mx-auto px-2 lg:px-10 relative z-10">
//         {/* Mobile Version */}
//         <div
//           className="block lg:hidden -mt-4 animate-slide-in-from-bottom"
//           data-aos="scroll-animation"
//         >
//           <div className="grid grid-cols-3 divide-x divide-gray-500 border border-gray-200 rounded-t-md overflow-hidden bg-white">
//             {plans.map((plan, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center px-2 py-4 text-center"
//               >
//                 <div className="text-sm font-semibold">{plan.name}</div>
//                 <div className="text-lg font-bold">
//                   {plan.price}
//                   <span className="text-sm font-normal">*</span>
//                 </div>
//                 <div className="text-[11px] opacity-80 mt-1">
//                   {plan.subText}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="border-x border-b border-gray-200 bg-white">
//             {features.map((feature) => (
//               <div key={feature.key} className="border-t border-gray-200">
//                 <div className="text-sm font-medium text-gray-700 px-3 py-2 border-b border-gray-200">
//                   {feature.label}
//                 </div>
//                 <div className="grid grid-cols-3 divide-x divide-gray-500 text-center">
//                   {plans.map((plan, index) => (
//                     <div
//                       key={index}
//                       className="py-3 flex items-center justify-center"
//                     >
//                       {plan.features[feature.key] && (
//                         <span className="text-[#F47537] font-bold text-lg">
//                           ✓
//                         </span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Buy Now button for sm/md screens */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="block lg:hidden w-full mt-4 text-[#F47537] border-[#F47537] hover:bg-[#F47537] hover:text-white"
//               >
//                 Buy Now
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-3xl h-[90vh] p-0 overflow-hidden">
//               <iframe
//                 src="https://www.nutrimony.in/order-matic-technologies-private-limited?o=1&ot=2"
//                 className="w-full h-full border-0"
//               ></iframe>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* Desktop Version */}
//         <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
//           {/* Key Features Column */}
//           <Card
//             className="bg-white border shadow-sm mt-14 animate-slide-in-from-bottom"
//             data-aos="scroll-animation"
//           >
//             <CardHeader className="text-left pb-2 px-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                 Key Features
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Here are the key features that highlight our three plans:
//               </p>
//             </CardHeader>
//             <CardContent className="pt-0 lg:-mt-6">
//               <div className="border-t border-gray-200 my-4 -mx-6"></div>
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="h-12 flex items-center border-b border-gray-200 last:border-b-0 -mx-6 px-6"
//                 >
//                   <span className="text-sm text-gray-700">{feature.label}</span>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Pricing Cards */}
//           {plans.map((plan, index) => (
//             <Card
//               key={index}
//               className="bg-white border shadow-sm animate-slide-in-from-bottom"
//               data-aos="scroll-animation"
//             >
//               <CardHeader className="text-left pb-4 relative">
//                 <div className="py-4 -mx-6 -mt-6 rounded-t-lg">
//                   <div className="px-6 mb-2">
//                     <h3 className="text-sm font-medium text-gray-900">
//                       {plan.name}
//                     </h3>
//                   </div>
//                   <div className="px-6">
//                     <span className="text-4xl font-bold -mt:1 text-gray-900">
//                       {plan.price}
//                     </span>
//                     <p className="text-sm mt-1 text-gray-600">{plan.subText}</p>
//                   </div>

//                   {/* Shadcn Dialog for desktop Buy Now */}
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="mt-6 w-[calc(100%-48px)] mx-auto block text-[#F47537] border-[#F47537] hover:bg-[#F47537] hover:text-white"
//                       >
//                         Buy Now
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent
//                       className="overflow-y-scroll hide-scrollbar !p-0 max-w-5xl w-full"
//                       style={{ height: "90vh" }}
//                     >
//                       <div className="w-full h-full">
//                         <iframe
//                           src="https://www.nutrimony.in/order-matic-technologies-private-limited?o=1&ot=2"
//                           className="w-full h-full border-none"
//                         ></iframe>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </CardHeader>
//               <CardContent className="pt-0">
//                 <div className="border-t border-gray-200 my-4 lg:-mt-12 -mx-6"></div>
//                 {features.map((feature, featureIndex) => (
//                   <div
//                     key={featureIndex}
//                     className="h-12 flex items-center justify-center border-b border-gray-200 last:border-b-0 -mx-6 px-6"
//                   >
//                     {plan.features[feature.key] && (
//                       <span className="text-gray-600 font-bold text-lg">✓</span>
//                     )}
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
