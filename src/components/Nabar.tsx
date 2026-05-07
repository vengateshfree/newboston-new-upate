import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from "../assets/fulllogo.png";

export default function Nabar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Dropdown states for mobile
  const [mobileDropdowns, setMobileDropdowns] = useState({
    products: false,
    infrastructure: false,
    services: false
  });

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Scroll handling for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Mouse move handling for navbar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY < 50 || e.clientY < 50) setShowNav(true);
      else setShowNav(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 transform
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-white backdrop-blur-md border-white/20 shadow-lg" : "bg-white/50 backdrop-blur-md border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-white">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-6 text-[#1E73BE] font-medium">
            <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
            {/* Infrastructure Dropdown */}
            <div className="relative group">
              <Link to="/infrastructure/cloud"  >
                <button className="flex items-center hover:text-cyan-400 transition pb-2 pt-2">
                  {/* Digital Infrastructure */}
                  Cloud Service
                  {/* <ChevronDown className="ml-1 w-4 h-4" /> */}
                </button>
              </Link>
              {/* <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/infrastructure/cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">Cloud / Server Management</Link>
                  <Link to="/infrastructure/devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">DevOps / Monitoring</Link>
                </div>
              </div> */}
            </div>
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-cyan-400 transition pb-2 pt-2">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/products/academic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">Academic Platform</Link>
                  <Link to="/products/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">Enterprise Platform</Link>
                </div>
              </div>
            </div>



            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-cyan-400 transition pb-2 pt-2">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">Web Development</Link>
                  {/* <Link to="/services/mobile-app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">Mobile App Development</Link> */}
                  {/* <Link to="/services/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">SEO Services</Link>
                  <Link to="/services/dedicated-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E73BE]">Dedicated Team</Link> */}
                </div>
              </div>
            </div>

            <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-[#1E73BE] via-[#1E73BE] to-[#17B6A6] 
              hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact
            </Link>
          </div>
          <button className="md:hidden text-blue-600 text-2xl" onClick={() => setOpen(!open)}>☰</button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-4 space-y-2 text-black font-medium shadow-xl h-[80vh] overflow-y-auto">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 border-b border-gray-100">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2 border-b border-gray-100">About</Link>

            {/* Mobile Products */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileDropdown('products')} className="flex items-center justify-between w-full py-2">
                Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns.products ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns.products && (
                <div className="pl-4 py-2 space-y-2 border-l-2 border-blue-100 ml-2 mb-2">
                  <Link to="/products/academic" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">Academic Platform</Link>
                  <Link to="/products/enterprise" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">Enterprise Platform</Link>
                </div>
              )}
            </div>

            {/* Mobile Infrastructure */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileDropdown('infrastructure')} className="flex items-center justify-between w-full py-2">
                Infrastructure <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns.infrastructure ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns.infrastructure && (
                <div className="pl-4 py-2 space-y-2 border-l-2 border-blue-100 ml-2 mb-2">
                  <Link to="/infrastructure/cloud" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">Cloud / Server Management</Link>
                  <Link to="/infrastructure/devops" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">DevOps / Monitoring</Link>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileDropdown('services')} className="flex items-center justify-between w-full py-2">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns.services ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns.services && (
                <div className="pl-4 py-2 space-y-2 border-l-2 border-blue-100 ml-2 mb-2">
                  <Link to="/services/web-development" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">Web Development</Link>
                  <Link to="/services/mobile-app-development" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">Mobile App Development</Link>
                  <Link to="/services/seo" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">SEO Services</Link>
                  <Link to="/services/dedicated-team" onClick={() => setOpen(false)} className="block text-gray-600 text-sm">Dedicated Team</Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 border-b border-gray-100">Contact</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block text-center mt-6 px-5 py-3 rounded-lg bg-gradient-to-r from-[#1E73BE] to-[#17B6A6] text-white font-semibold shadow-lg">
              Visit Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}