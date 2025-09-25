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
  MapPin,
} from "lucide-react";
import logo from "../../public/images/tasks_logo.webp";

export default function TaskFooter() {
  return (
    <footer className="bg-[linear-gradient(97.85deg,_#0b130c,_#0a1f0d)] text-white overflow-x-hidden pt-4">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 border-b border-white/10 pb-6 px-4">
        {/* Left: Logo */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={logo}
            alt="Petpooja Invoice"
               width={150}
            height={150}
            className="lg:w-[130px] lg:h-auto"
          />
        </div>

        {/* Center: Connect with us */}
{/* Center: Connect with us */}
<div className="flex flex-col items-center text-center gap-2 w-full lg:w-auto lg:ml-60">
  <p className="font-semibold text-md">Connect with us:</p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-6 text-md flex-wrap">
    <div className="flex items-center gap-2">
      <Phone className="w-4 h-4" />
      <a href="tel:+917228034343" className="text-[#85ABF0] hover:underline">
        +91 7228034343
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="w-4 h-4" />
      <a href="mailto:getinvoice@petpooja.com" className="text-[#85ABF0] hover:underline">
        getaskus@petpooja.com
      </a>
    </div>
  </div>
</div>




        {/* Right: Address */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/3 ">
          <div className="flex items-start gap-1 text-md text-white/80 lg:-mr-16 leading-relaxed max-w-sm text-center lg:text-right">
            <MapPin className="w-4 h-4 mt-1 shrink-0 " />
            <p>
              3rd Floor, Tower–A, Gopal Palace, Nehrunagar, Ambawadi, Ahmedabad, Gujarat – 380015
            </p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto flex justify-center gap-6 py-4">
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10"><Linkedin /></Link>
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10"><Instagram /></Link>
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10"><Youtube /></Link>
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10"><Facebook /></Link>
      </div>

      {/* Bottom Text */}
      <div className="text-xs text-white/70 border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2 text-center">
          <p>© 2024 All rights Reserved by Prayosha Food Services Pvt. Ltd.</p>
          <span>•</span>
          <Link href="#" className="hover:underline">Privacy</Link>
          <span>•</span>
          <Link href="#" className="hover:underline">Terms</Link>
          <span>•</span>
          <Link href="#" className="hover:underline">EULA</Link>
          <span>•</span>
          <Link href="#" className="hover:underline">Cancellation & Refund</Link>
          <span>•</span>
          <Link href="#" className="hover:underline">Corporate Information</Link>
          <span>•</span>
          <Link href="#" className="hover:underline">Escalation Matrix</Link>
        </div>
      </div>
    </footer>
  );
}
