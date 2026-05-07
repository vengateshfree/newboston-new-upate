// import logo from "../assets/fulllogo.png";

import {
  Mail,
  Phone,
  MapPin,
  // Facebook,
  // Instagram,
  // Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#0B1E3C] to-[#020617] text-gray-300 pt-14 pb-7 overflow-hidden">

      {/* glow background */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Logo + Tagline */}
        {/* <div className="flex flex-col items-center text-center mb-12">

          <div className="relative inline-block">

            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>

            <img
              src={logo}
              alt="Boston Tech India"
              className="relative w-40 mb-4"
            />

          </div>

          <p className="text-gray-400 text-sm max-w-md">
            We build modern software, websites, and digital products
            for businesses worldwide.
          </p>

        </div> */}


        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium mb-8">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About Us
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#product" className="hover:text-cyan-400 transition">
              Product
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>


        {/* Contact */}
        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-gray-400 mb-6">

          <div className="flex items-center gap-3">
            <MapPin className="text-cyan-400 w-5 h-5" />
            Salem, Tamil Nadu
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-cyan-400 w-5 h-5" />
            info@bostontechindia.in
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-cyan-400 w-5 h-5" />
            +91 8508589815
          </div>

        </div>


        {/* Social Icons */}
        {/* <div className="flex justify-center gap-5 mb-10">

          <div className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 transition cursor-pointer">
            <Facebook size={18} />
          </div>

          <div className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 transition cursor-pointer">
            <Instagram size={18} />
          </div>

          <div className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 transition cursor-pointer">
            <Linkedin size={18} />
          </div>

        </div> */}


        {/* Divider */}
        <div className="border-t border-white/10 mb-3"></div>


        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Boston Tech India. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;