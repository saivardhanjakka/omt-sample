"use client";

import { useRef, RefObject } from "react";
import Image, { StaticImageData } from "next/image";
import customerservice1 from "../../public/images/Waiter-Calling.avif";
import customerservice2 from "../../public/images/Voice-ordering-kiosk.avif";
import customerservice3 from "../../public/images/scan-and-order.avif";
import operation1 from "../../public/images/Captain-ordering-app.avif";
import operation2 from "../../public/images/Kitchen-Display-System.avif";
import operation3 from "../../public/images/Reservation_Manager.avif";
import crm1 from "../../public/images/business-website.avif";
import crm2 from "../../public/images/Loyalty-wallet.avif";
import crm3 from "../../public/images/sms-marketing.avif";
import crm4 from "../../public/images/Feedback.avif";
import analytics1 from "../../public/images/Online-order-reconcillation.avif"
import analytics2 from "../../public/images/dynami-reports.avif"
// Define a type for the section IDs
type SectionId = "customer" | "operations" | "crm" | "analytics";

// Define the structure of a single feature
interface Feature {
  title: string;
  description: string | string[];
  image: StaticImageData;
  alt: string;
}

// Define the structure of a section
interface Section {
  id: SectionId; // Use the defined type
  heading: string;
  subheading: string;
  label: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    id: "customer",
    heading: "Provide the best to your customers",
    subheading:
      "Offer your customers the premium experience with these innovative and easy-to-use features",
    label: "Customer Service",
    features: [
      {
        title: "Waiter calling system",
        description:
          "A smart food ordering system with a touchscreen & voice recognition interface to allow your guests to order digitally without walking to the counter",
        image: customerservice1,
        alt: "Waiter calling system",
      },
      {
        title: "Voice ordering kiosk",
        description:
          "Upload your aggregator payout reports and get a complete picture of your commissions, discounts, cancellations, pending orders and the real cost of operating on third-party aggregators.",
        image: customerservice2,
        alt: "Voice ordering kiosk",
      },
      {
        title: "Scan and order",
        description:
          "Get system-generated QR codes for your restaurant menu for customers to scan and place orders without having to leave their tables",
        image: customerservice3,
        alt: "Scan and order",
      },
    ],
  },
  {
    id: "operations",
    heading: "Manage your restaurant efficiently",
    subheading:
      "Automate your processes & daily operations to increase staff output and reduce errors",
    label: "Operations",
    features: [
      {
        title: "Captain app",
        description:
          "An android application that allows your staff to take customer orders, offer smart food recommendations and complete payments right at the table.",
        image: operation1,
        alt: "Captain app",
      },
      {
        title: "Kitchen display system",
        description:
          "Customer order-tracking made simple for your kitchen staff with KDS that helps them to update order status and manage multiple orders without any goof-ups.",
        image: operation2,
        alt: "Kitchen display system",
      },
      {
        title: "Token management",
        description:
          "An android app that runs on a screen mounted outside your restaurant, allowing take-away customers & delivery executives to know the real-time status of their orders without having to repeatedly ask your staff.",
        image: operation2,
        alt: "Token management",
      },
      {
        title: "Reservation Manager",
        description:
          "Managing table booking requests from multiple channels during rush hours can be difficult. Equip your staff with this smart app which easily accepts, tracks, & manages multiple table bookings from a single dashboard & syncs data with your POS.",
        image: operation3,
        alt: "Reservation Manager",
      },
    ],
  },
  {
    id: "crm",
    heading: "Earn customer loyalty",
    subheading:
      "Build valuable relations with your customers to increase your brand value",
    label: "CRM",
    features: [
      {
        title: "Business website",
        description:
          "Build personal connection with your customers through your brand website. Accept orders directly from your website to POS system without third-party aggregator or commissions.",
        image: crm1,
        alt: "business website",
      },
      
      {
        title: "Loyalty wallet",
        description:
          "A customer wallet service that lets you allocate loyalty points to customers based on their purchases. Customers can redeem points at your outlet and top-up their wallet for repeat purchases.",
        image: crm2,
        alt: "loyalty-program",
      },
      {
        title: "SMS marketing",
        description:
          "Send personalized SMS to your customers with latest offers, menu updates, and wishes on any occasions, right from the Petpooja dashboard.",
        image: crm3,
        alt: "SMS marketing",
      },
      {
        title: "Customer Feedback",
        description: [
          "Easily collect feedback from your customers via",
          "Feedback app for dine-in customers",
          "SMS link sent to customers",
          "QR code printed on the bill or delivery package",
        ],
        image: crm4,
        alt: "Customer Feedback",
      },
    ],
  },
  {
    id: "analytics",
    heading: "Know your business & ways to upscale",
    subheading:
      "Track and analyze important data metrics to assess your business growth",
    label: "Analytics",
    features: [
      {
        title: "Online order reconcillation",
        description:
          "Upload your aggregator payout reports and get a complete picture of your commissions, discounts, cancellations, pending orders and the real cost of operating on third-party aggregators.",
        image:analytics1,
        alt: "Online order reconcillation",
      },
      {
        title: "Dynamic reports",
        description:
          "A fully customizable reporting dashboard that you can use to visualize your restaurant’s data and make insightful reports, appropriate to your business needs",
        image:analytics2,
        alt: "Dynamic reports",
      },
    ],
  },
];

export default function MarketPlaceService() {
  const sectionRefs: Record<SectionId, RefObject<HTMLDivElement | null>> = {
    customer: useRef<HTMLDivElement>(null),
    operations: useRef<HTMLDivElement>(null),
    crm: useRef<HTMLDivElement>(null),
    analytics: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (id: SectionId) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="py-10 hidden sm:flex justify-center">
        <div className="relative w-full max-w-5xl flex justify-center">
          <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 -z-10"></div>
          <div className="flex gap-10 justify-center bg-white border border-gray-300 rounded-full px-8 py-3  text-gray-800 text-sm  shadow-md">
            <button
              onClick={() => scrollToSection("customer")}
              className="hover:text-[#F47537]  transition-colors whitespace-nowrap"
            >
              CUSTOMER SERVICE
            </button>
            <button
              onClick={() => scrollToSection("operations")}
              className="hover:text-[#F47537] transition-colors whitespace-nowrap"
            >
              OPERATIONS
            </button>
            <button
              onClick={() => scrollToSection("crm")}
              className="hover:text-[#F47537] transition-colors whitespace-nowrap"
            >
              CRM
            </button>
            <button
              onClick={() => scrollToSection("analytics")}
              className="hover:text-[#F47537] transition-colors whitespace-nowrap"
            >
              ANALYTICS
            </button>
          </div>
        </div>
      </div>

      {/* Removed the extra spacer div - no longer needed since it's not fixed */}
      {/* Removed the relative z-0 wrapper around the whole component as well, it's not needed for non-sticky/fixed elements */}

      {/* Section Content */}
      {sections.map((section, i) => (
        <div
          key={section.id}
          ref={sectionRefs[section.id]}
          className="lg:-mt-6"
        >
          <main className="max-w-7xl  mx-auto px-6 md:px-14 lg:px-4 lg:py-16 py-8 sm:py-2 sm:-mt-2 md:py-10">
            <p className="text-[#F47537] text-center md:px-36 mb-4">
              {section.label}
            </p>
            <div className="text-center  mb-8 sm:mb-10 md:mb-12 lg:mb-18">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {section.heading}
              </h3>
              <p className="text-lg md:text-lg xl:text-2xl text-gray-600 mt-4 max-w-3xl mx-auto">
                {section.subheading}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 sm:gap-2 gap-2 md:gap-8 lg:gap-16">
              {section.features.map((feature, index) => (
                <div
                  key={index}
                  className="  overflow-hidden md:flex-col flex flex-col items-start"
                >
                  <div
                    className={`p-6 sm:p-8 w-full flex items-center md:items-start justify-center md:justify-start`}
                  >
                    <div className="relative w-full h-72 sm:h-96 md:w-[80%]">
                      <Image
                        src={feature.image.src}
                        alt={feature.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={i === 0 && index === 0}
                      />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 w-full text-left">
                    <h2 className="text-xl sm:text-xl font:semibold  text-gray-900 mb-2 sm:mb-4">
                      {feature.title}
                    </h2>
                    {Array.isArray(feature.description) ? (
                      <>
                        <p className="text-gray-600 text-base sm:text-md leading-relaxed mb-2">
                          {feature.description[0]}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-base sm:text-lg leading-relaxed">
                          {feature.description.slice(1).map((line, idx) => (
                            <li key={idx}>{line.replace(/^\./, "").trim()}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-gray-600 text-base sm:text-md leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      ))}
    </>
  );
}
