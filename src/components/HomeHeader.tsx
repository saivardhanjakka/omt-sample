
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"

interface ProductItem {
  name: string
  href: string
}

export default function HomeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  const handleScrollToForm = () => {
    const target = document.getElementById("HomePageForm")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const productItems: ProductItem[] = [
    { name: "POS", href: "/poss" },
    { name: "Payroll", href: "/payroll" },
    { name: "Invoice", href: "/invoice" },
    { name: "Purchase", href: "/purchase" },
    { name: "Task", href: "/task" },
  ]

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-[#1F1E26] fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <div className="text-white text-xl sm:text-2xl font-bold">
            PETPOOJA
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-white hover:text-white text-sm sm:text-base lg:text-lg transition-all border-b-2 border-transparent hover:border-[#F47537] pb-0.5">
              Products
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
              {productItems.map((item) => (
                <DropdownMenuItem key={item.name} className="hover:bg-gray-50">
                  <Link href={item.href} className="w-full text-gray-900">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className="text-white hover:text-white text-sm sm:text-base lg:text-lg transition-all border-b-2 border-transparent hover:border-[#F47537] pb-0.5"
          >
            About Us
          </Link>

          <Link
            href="/careers"
            className="text-white hover:text-white text-sm sm:text-base lg:text-lg transition-all border-b-2 border-transparent hover:border-[#F47537] pb-0.5"
          >
            Careers
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            onClick={handleScrollToForm}
            className="hidden md:block btn-primary  text-white px-4 py-2 sm:px-6 text-center sm:py-2 text-sm sm:text-base font-medium"
          >
            Get Started
          </Button>

          <Button
            onClick={() => {
              handleScrollToForm()
              setIsMobileMenuOpen(false)
            }}
            className="md:hidden btn-primary  text-white px-4 py-2 text-sm font-medium"
          >
            Get Started
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:bg-white/10 h-10 w-10"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-white">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="text-slate-900 text-xl font-bold">
                PETPOOJA
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleScrollToForm}
                  className="btn-primary text-white px-4 py-2 text-sm font-medium"
                >
                  Get Started
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-900 hover:bg-gray-100 h-10 w-10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="flex-1 py-2 h-full overflow-y-auto">
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full px-4 py-4 text-left text-slate-900 hover:bg-gray-50 text-lg"
                >
                  <span>Products</span>
                  {isMobileProductsOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {isMobileProductsOpen && (
                  <div className="bg-gray-50">
                    {productItems.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-8 py-3 text-slate-700 hover:bg-gray-100 text-base ${
                          index !== productItems.length - 1 ? "border-b border-gray-200" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-gray-100">
                <Link
                  href="/about"
                  className="block px-4 py-4 text-slate-900 hover:bg-gray-50 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>

              <div className="border-b border-gray-100">
                <Link
                  href="/careers"
                  className="block px-4 py-4 text-slate-900 hover:bg-gray-50 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
