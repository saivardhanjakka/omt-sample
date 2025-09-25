// import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t text-gray-800 text-[17px] md:text-[16px]">

//       {/* Bottom Strip */}
//       <div className="border-t py-6 px-6">
//         <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Logo + Social */}
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
//             <span className="text-2xl font-bold text-black">ORDERMATIC</span>

//             {/* Social Icons - Always visible and centered on mobile */}
//             <div className="flex gap-6 text-gray-600 text-xl justify-center">
//               <a href="https://www.linkedin.com/company/order-matic-technologies-private-limited/" aria-label="LinkedIn"><i className="ri-linkedin-fill" /><Linkedin/></a>
//               <a href="https://www.instagram.com" aria-label="Instagram"><i className="ri-instagram-fill" /><Instagram/></a>
//               <a href="https://www.youtube.com" aria-label="YouTube"><i className="ri-youtube-fill" /><Youtube/></a>
//               <a href="https://www.facebook.com" aria-label="Facebook"><i className="ri-facebook-fill" /><Facebook/></a>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[17px] text-center md:text-left">
//             <div className="flex items-center gap-2">
//               <Phone size={18} />
//               <span>+91 9100109902</span>
//             </div>
//              <div className="flex items-center gap-2">
//               <Phone size={18} />
//               <span>+91 6303675231</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={18} />
//               <span>getposs@petpooja.com</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-[15px] text-gray-600 py-5 px-6">
//         COPYRIGHT © 2024 – Prayosha Food Services Pvt. Ltd., India • Privacy • Terms • EULA • Cancellation & Refund • Corporate Information • Escalation Matrix
//       </div>
//     </footer>
//   );
// }

import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/ordermaticlogo.svg"
export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-800 text-[17px] md:text-[16px]">
      <div className="border-t py-6 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* ✅ md-only layout */}
          <div className="hidden md:flex lg:hidden flex-col gap-4">
            {/* Top row: logo/social on left, address on right */}
            <div className="flex justify-between items-start w-full">
              {/* Logo + Social */}
              <div className="flex items-center gap-4">
                <Image
                  src={logo}
                  alt="Ordermatic Logo"
                  height={36}
                  style={{ height: "36px", width: "auto" }} // maintain aspect ratio
                  priority
                />
                <div className="flex gap-4 text-xl text-gray-600">
                  <a
                    href="https://www.linkedin.com/company/order-matic-technologies-private-limited/"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2  max-w-xs text-sm text-gray-700 text-left">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  8-3-833/251, 2nd floor, Kamalapuri Colony Rd, Srinagar Colony,
                  Hyderabad, Telangana 500073
                </span>
              </div>
            </div>

            {/* Centered Phone & Email */}
            <div className="flex justify-center gap-8 mt-2">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919100109902" className="hover:underline">
                  +91 9100109902
                </a>
                <span>,</span>
                <a href="tel:+916303675231" className="hover:underline">
                  6303675231
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>partners@ordermatic.in</span>
              </div>
            </div>
          </div>

          {/* ✅ Default layout for sm and lg+ screens */}
          <div className="flex flex-col md:hidden lg:flex lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            {/* Left: Logo + Social */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
               <Image
                  src={logo}
                  alt="Ordermatic Logo"
                  height={36}
                  style={{ height: "36px", width: "auto" }} // maintain aspect ratio
                  priority
                />
              <div className="flex gap-4 text-xl text-gray-600">
                <a
                  href="https://www.linkedin.com/company/order-matic-technologies-private-limited/"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            {/* <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
              <div className="flex items-center lg:ml-18 gap-2">
                <Phone size={18} />
                <span>+91 9100109902, 6303675231</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>partners@ordermatic.in</span>
              </div>
            </div> */}
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
              <div className="flex items-center gap-2 lg:ml-18 text-sm text-gray-800">
                <Phone size={18} />
                <div>
                <a href="tel:+919100109902" className="hover:underline">+91 91001 09902,</a><a href="tel:+916303675231" className="hover:underline">  +91 63036 75231</a> </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:partners@ordermatic.in">
                  partners@ordermatic.in
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 lg:-mr-10 max-w-sm text-sm">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                8-3-833/251, 2nd floor, Kamalapuri Colony Rd, Srinagar Colony,
                Hyderabad, Telangana 500073
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-[15px] text-gray-600 py-5 px-10">
        © 2025 – Order Matic Technologies Private Limited
        <br className="block lg:hidden" />
        <span className="ml-2">•</span>
        <Link href="/privacy-policy" className="hover:underline ml-1">
          Privacy Policy
        </Link>
        <span className="ml-2">•</span>
        <Link href="/terms-of-service" className="hover:underline ml-1 ">
          Terms of Service
        </Link>
        <span className="ml-2">•</span>
        <Link href="/careers" className="hover:underline ml-1 ">
          Careers
        </Link>
      </div>
    </footer>
  );
}
