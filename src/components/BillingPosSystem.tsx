"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import qrmenus from "../../public/assets/more-than-billing1.png"
import tablemanagement from "../../public/assets/tablemanagement.png"
import orderprocessing from "../../public/assets/orderprocessing.png"
import staffandrole from "../../public/assets/staffrole.png"
import crm from "../../public/assets/crm.png"
const features = [
  {
    title: "Streamlined Ordering with Digital QR Menus",
    description:
      "Let your customers browse, order, and pay from their own devices. Minimize contact and maximize convenience.",
    image: qrmenus,
    alt: "Online Order Management icon",
    href: "/poss/online-order-management-software",
  },
  {
    title: "Simplified Table Management for Dine-In",
    description:
      "Effortlessly manage table assignments and reservations. Ensure every guest is seated promptly and enjoys a smooth dining experience.",
    image: tablemanagement,
    alt: "Restaurant Rights and Reports icon",
    href: "/poss/reports-and-analytics",
  },
  {
    title: "Faster Order Processing for Takeaway and Deliveries",
    description:
      "Boost your takeaway and delivery operations with quick, efficient order processing. Keep your customers satisfied with faster service and accurate orders. Offer scheduled ordering from home to returning customers for maximum convenience.",
    image: orderprocessing,
    alt: "Inventory Management icon",
    href: "/poss/restaurant-inventory-management-software",
  },
  {
    title: "Staff and Role Management",
    description:
      "Efficiently manage your staff, including Captains, Managers, and Chefs. Grant granular access control to different features, ensuring each staff member has the right access levels to perform their duties efficiently and securely.",
    image:staffandrole,
    alt: "Menu Management icon",
    href: "/poss/restaurant-menu-management-software",
  },
  {
    title: "CRM – Know Your Customers, Grow Your Business",
    description:
      "Build rich customer data pools and deliver personalized experiences at every touchpoint. Reward their loyalty with points and incentives that keep them coming back.",
    image: crm,
    alt: "CRM icon",
    href: "/poss/restaurant-customer-management-software",
  },
];

export default function BillingPosSystem() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="lg:text-3xl   md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
            More Than Billing — A Complete Solution for Restaurant Growth
          </h1>
          <p className="text-md lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ordermatic brings every restaurant operation together on a single,
            easy-to-use POS platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col justify-start bg-[#FEF0E9] px-6 py-8 border border-gray-400 hover:bg-[#F47537] transition-colors duration-300 min-h-[460px]"
            >
              {/* Icon */}
              <div className="mb-5">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl sm:text-xl font-semibold text-gray-900 group-hover:text-white mb-3 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-lg  text-gray-600 group-hover:text-white text-justify leading-relaxed">
                {feature.description}
              </p>
              {/* <a
                href={feature.href}
                className="absolute bottom-8 left-8 no-underline group"
              >
                <span className="relative inline-block w-[210px] h-8">
                  
                  <span className="absolute top-1/2 left-0 -translate-y-1/2 text-lg text-white group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore all features
                  </span>

                  
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 left-0 group-hover:left-[188px] w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
