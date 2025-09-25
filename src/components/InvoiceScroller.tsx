"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Business icons
import salon from "../../public/images/salon (1).svg";
import supermarket from "../../public/images/super-market.svg";
import bookstore from "../../public/images/book-store.svg";
import grocery from "../../public/images/gorcery.svg";
import clinic from "../../public/images/clinic-new.svg";
import clothingshop from "../../public/images/clothing-shop.svg";
import dealers from "../../public/images/dealrs-distribution.svg";
import retailshop from "../../public/images/retail-shop.svg";

const businesses = [
  { label: "Clothing Shop", icon: clothingshop },
  { label: "Retail Shop", icon: retailshop },
  { label: "Super Market", icon: supermarket },
  { label: "Grocery Store", icon: grocery },
  { label: "Book Store", icon: bookstore },
  { label: "Salon", icon: salon },
  { label: "Clinic", icon: clinic },
  { label: "Dealers & Distributors", icon: dealers },
];

export default function BusinessScroller() {
  return (
    <div className="min-h-screen bg-[#0A1980] flex flex-col lg:flex-row items-start justify-between px-6 lg:px-20 py-16 overflow-hidden">
      {/* Left Text */}
      <div className="text-white text-4xl font-bold w-full lg:w-1/2 mb-8 lg:mb-0">
        <p>
          Building for the
          <br />
          success of
        </p>
      </div>

      {/* Vertical Animated Scroll Columns for All Screens */}
      <div className="flex w-full lg:w-[460px] gap-4 h-[420px] overflow-hidden relative">
        {[0, 1, 2].map((colIdx) => {
          const scrollCards = Array.from({ length: 20 }, (_, i) =>
            businesses[(i + colIdx * 2) % businesses.length]
          );

          const marginTop =
            colIdx === 1 ? "mt-8" : colIdx === 2 ? "mt-16" : "";

          return (
            <motion.div
              key={colIdx}
              className={`flex flex-col gap-6 ${marginTop}`}
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 18 + colIdx * 2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {scrollCards.map((biz, i) => (
                <Card
                  key={`${colIdx}-${i}`}
                  label={biz.label}
                  icon={biz.icon}
                  large
                  tiltOnLg
                />
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Card Component
function Card({
  label,
  icon,
  large = false,
  tiltOnLg = false,
}: {
  label: string;
  icon: any;
  large?: boolean;
  tiltOnLg?: boolean;
}) {
  const size = large ? "w-[160px] h-[160px]" : "w-[140px] h-[140px]";
  const imgSize = large ? 60 : 40;
  const textSize = large ? "text-base" : "text-sm";

  return (
    <div
      className={`bg-[#11238C] rounded-2xl flex flex-col items-center justify-center p-6 ${size} text-white shadow-lg ${
        tiltOnLg ? "lg:rotate-[-8deg]" : ""
      }`}
    >
      <Image
        src={icon}
        alt={label}
        width={imgSize}
        height={imgSize}
        className="mb-3"
      />
      <p className={`text-center ${textSize}`}>{label}</p>
    </div>
  );
}
