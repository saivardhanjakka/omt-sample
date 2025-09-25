"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/ordermaticlogo.svg"
const navTriggerStyle =
  "group inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-lg  text-base font-medium hover:text-[#F47537] text-gray-800";

const Navbar = () => {
  const handleScrollToForm = () => {
    const target = document.getElementById("ScheduleForm");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#F47537]">
           <Image
                  src={logo}
                  alt="Ordermatic Logo"
                  height={36}
                  style={{ height: "36px", width: "auto" }} // maintain aspect ratio
                  priority
                />
          </Link>

        <div className="hidden lg:flex items-center mt-6 mb-5 space-x-4">
              <Link href="/" className={navTriggerStyle}>
                POS
              </Link>
              <Link href="/pos/pricing" className={navTriggerStyle}>
                Pricing
              </Link>
             
            </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-0 hover:bg-transparent">
                 <Menu size={24} /> 
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="p-5 w-full h-full max-w-full lg:max-w-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-bold text-[#F47537] mb-10">
                  <Link
                        href="/"
                        className="text-2xl font-bold text-[#F47537]"
                      >
                        <Image
                          src={logo}
                          alt="Ordermatic Logo"
                          height={36}
                          style={{ height: "36px", width: "auto" }} // maintain aspect ratio
                          priority
                        />
                      </Link>
                  </div>

                  <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                    <div className="border-b pb-2">
                      <Link
                        href="/"
                        className="block text-base font-medium text-gray-800 "
                      >
                        POS
                      </Link>
                    </div>

                    <div className="border-b pb-2">
                      <Link
                        href="/pos/pricing"
                        className="block text-base font-medium text-gray-800 hover:text-[#F47537]"
                      >
                        Pricing
                      </Link>
                    </div>
                  </div>
                </div>

                
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
