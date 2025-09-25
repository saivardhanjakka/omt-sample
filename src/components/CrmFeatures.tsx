"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    title: "Regulate customer retention",
    description:
    "Make your customers feel special by creating SMS campaigns wishing them their special days! Offer special rewards, discounts and offers to your customers for a personalised experience",
    image: {
      src: "/assets/regulate-customer-retention.avif",
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
    
    },
  },
  {
    title: "Synced customer information",
    description:
    "Sync all your customer information collected from online orders, the Captain app, website orders, and in-house orders into one data pool. Use this data to provide a personalized customer experience to earn loyalty!",
    image: {
      src: "/assets/synced-customer-information.avif",
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
   

    },
  },
   {
    title: "Track customer behaviour",
    description:
    "Keep track of all your sales using Petpooja’s in-built CRM feature. You also get insights about your customers’ preferences by tracking their purchase history and special notes. Use all this data to improve overall service and win more customers",
    image: {
      src: "/assets/track-customer-behaviour.avif",
      alt: "Station-wise kot printing",
     
    },
  },
   {
    title: "Create customer labels",
    description:
    "Petpooja POS CRM helps simplify your customer management so that you can run marketing and feedback campaigns and offer group or corporate discounts by simply categorising and labelling your customer pool the way you want",
    image: {
      src: "/assets/create-customer-labels.avif",
      alt: "Table and area management",
     
    },
  },
  
];

export default function CrmFeatures() {
   useEffect(() => {
          Aos.init({
            once: true,
          });
        }, []);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <div className="mb-18 text-center">
  <h3 className="text-4xl  md:text-4xl font-bold text-gray-900 ">

In-built CRM that helps your earn customer loyalty  </h3>
</div>

        <div className="grid lg:grid-cols-2 gap-24">
          {features.map((feature, index) => (
                     <div
                       key={index}
                       className="w-full max-w-2xl mx-auto text-left space-y-6"
                     >
                       {/* Image with same width as text */}
                       <div
                         className="w-full relative aspect-[4/3]  animate-slide-in-from-right"
                         data-aos="scroll-animation"
                       >
                         <Image
                           src={feature.image.src}
                           alt={feature.image.alt}
                           fill
                           className="object-contain rounded-lg"
                           sizes="(max-width: 768px) 100vw, 50vw"
                           priority={index === 0}
                         />
                       </div>
         
                       {/* Text */}
                       <div
                         className="text-left mt-12 animate-slide-in-from-left"
                         data-aos="scroll-animation"
                       >
                         <h2 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                           {feature.title}
                         </h2>
                         <p className="text-gray-600 text-lg sm:text-lg leading-relaxed">
                           {feature.description}
                         </p>
                       </div>
                     </div>
                   ))}
        </div>
      </main>
    </div>
  );
}
