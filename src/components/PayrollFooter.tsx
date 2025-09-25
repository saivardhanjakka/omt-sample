// Footer.tsx
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
import logo from "../../public/images/new-payroll-logo-new.svg"

export default function Footer() {
  return (
    // Removed -mt-6 from the footer's header section container
    <footer className="bg-[#09151F] text-white overflow-x-hidden pt-4"> 
   
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 border-b border-white/10 pb-6">

        {/* Left: Logo (no text on lg) */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={logo}
            alt="Petpooja Payroll"
            width={150}
            height={150}
            className="lg:w-[130px] lg:h-auto"
          />
        </div>

        {/* Center: Phone + Email */}
        <div className="flex flex-col items-center gap-4 lg:gap-2 lg:items-start lg:justify-center">
          <p className="font-semibold lg:ml-90  text-md">Connect with us:</p>
          <div className="flex flex-col gap-2 lg:ml-60 sm:pl-14 lg:flex-row lg:items-center lg:gap-6 text-md">
            <div className="flex items-center gap-2">
              <Phone className="w-4  h-4" />
              <a href="tel:+917228034343" className="text-blue-400 hover:underline whitespace-nowrap">
  +91 7228034343
</a>

            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:getpayroll@petpooja.com" className="text-blue-400 hover:underline">
                getpayroll@petpooja.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Address */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/3">
          <div className="flex items-start gap-2 text-md text-white/80 leading-relaxed max-w-sm text-center lg:text-right px-2 sm:px-4 lg:px-0">
            <MapPin className="w-4 h-4 mt-1 shrink-0" />
            <p>
              3rd Floor, Tower–A, Gopal Palace, Nehrunagar, Ambawadi, Ahmedabad, Gujarat – 380015
            </p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto flex justify-center gap-6 py-4">
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10">
          <Linkedin />
        </Link>
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10">
          <Instagram />
        </Link>
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10">
          <Youtube />
        </Link>
        <Link href="#" className="p-2 border rounded-full hover:bg-white/10">
          <Facebook />
        </Link>
      </div>

      {/* Bottom Text */}
      <div className="text-xs text-center text-white/70 mt-4 mb-8 max-w-7xl mx-auto border-t border-white/10 pt-4 px-2 space-y-1">
        <p>© 2024 All rights Reserved by Prayosha Food Services Pvt. Ltd.</p>
        <p className="flex flex-wrap justify-center gap-2">
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
        </p>
      </div>

         </footer>
  );
}