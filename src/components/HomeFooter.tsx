'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import medal1 from "../../public/images/medal1.svg";
import medal2 from "../../public/images/medal2.svg";
import medal3 from "../../public/images/medal3.svg";
import medal4 from "../../public/images/medal4.svg";
import medal5 from "../../public/images/medal-users-love-us.svg";
import medal6 from "../../public/images/MomentumLeader.svg";
import medal7 from "../../public/images/Business_Leader.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1F1E26] text-white overflow-x-hidden pt-4">
      {/* Header Section */}
      <div className="border-b border-slate-700 ">
        <div className="container mx-auto px-4 py-0">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center  mb-4 justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">PETPOOJA</span>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-300">Connect with us:</span>
              <div className="flex items-center gap-2 text-[#F47537]">
                <Phone className="w-4 h-4" />
                <span>(+91) 91043 69797</span>
              </div>
              <div className="flex items-center gap-2 text-[#F47537]">
                <Mail className="w-4 h-4" />
                <span>inquiry@petpooja.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[Linkedin, Instagram, Youtube, Facebook].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center gap-3">
            {/* Logo */}
            <span className="text-xl sm:text-2xl font-bold">PETPOOJA</span>

            {/* Connect with us */}
            <div className="text-sm text-gray-300">Connect with us:</div>

            {/* Contact Info */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1 text-[#F47537]">
                <Phone className="w-3 h-3" />
                <span>(+91) 91043 69797</span>
              </div>
              <div className="flex items-center gap-1 text-[#F47537]">
                <Mail className="w-3 h-3" />
                <span>inquiry@petpooja.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              {[Linkedin, Instagram, Youtube, Facebook].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            {"We're the best, we told you already!"}
          </h2>

          {/* Desktop: All Awards in One Row */}
          <div className="hidden lg:flex justify-center items-center gap-6">
            {[medal1, medal2, medal3, medal4, medal5, medal6, medal7].map(
              (medal, i) => (
                <div key={i} className="flex-shrink-0">
                  <Image
                    src={medal}
                    alt={`Award ${i + 1}`}
                    width={120}
                    height={100}
                    className="h-24 w-auto"
                    loading="lazy"
                  />
                </div>
              )
            )}
          </div>

          {/* Mobile/Tablet Grid */}
          <div className="lg:hidden space-y-4">
            {/* First 3 */}
            <div className="flex justify-center gap-2 sm:gap-4">
              {[medal1, medal2, medal3].map((medal, i) => (
                <Image
                  key={i}
                  src={medal}
                  alt={`Award ${i + 1}`}
                  width={120}
                  height={100}
                  className="h-14 sm:h-16 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Next 3 */}
            <div className="flex justify-center gap-2 sm:gap-4">
              {[medal4, medal5, medal6].map((medal, i) => (
                <Image
                  key={i}
                  src={medal}
                  alt={`Award ${i + 4}`}
                  width={120}
                  height={100}
                  className="h-14 sm:h-16 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Final One */}
            <div className="flex justify-center">
              <Image
                src={medal7}
                alt="Award 7"
                width={120}
                height={100}
                className="h-14 sm:h-16 w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          {/* Desktop Bottom */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Prayosha Food Services Pvt. Ltd., India
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/cancellation-refund" className="hover:text-white transition-colors">Cancellation & Refund</Link>
              <span>•</span>
              <Link href="/corporate-information" className="hover:text-white transition-colors">Corporate Information</Link>
              <span>•</span>
              <Link href="/escalation-matrix" className="hover:text-white transition-colors">Escalation Matrix</Link>
            </div>
          </div>

          {/* Mobile Bottom */}
          <div className="lg:hidden flex flex-col items-center gap-3 text-center">
            <div className="text-xs sm:text-sm text-gray-400 px-2">
              © 2024 Prayosha Food Services Pvt. Ltd., India
            </div>
            <div className="flex flex-wrap justify-center items-center gap-1 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/cancellation-refund" className="hover:text-white transition-colors">Refund</Link>
              <span>•</span>
              <Link href="/corporate-information" className="hover:text-white transition-colors">Corporate</Link>
              <span>•</span>
              <Link href="/escalation-matrix" className="hover:text-white transition-colors">Escalation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
