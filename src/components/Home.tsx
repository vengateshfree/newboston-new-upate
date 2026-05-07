import { useEffect, useState } from "react";
import Antigravity from "./Antigravity";
import logo from "../assets/fulllogo.png";

export default function Home() {
  const [magnetRadius, setMagnetRadius] = useState(6);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

  const [count, setCount] = useState(200); // particle count

      // Set particle count based on screen size
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 1024) {
        setCount(50); // mobile
      } else {
        setCount(200); // desktop
      }
    };

    updateCount(); // initial
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrolled(currentScrollY > 50);
  
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
  
        setLastScrollY(currentScrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
  
    useEffect(() => {
      const handleMouseMove = (e: any) => {
        if (window.scrollY < 50) return setShowNav(true);
        if (e.clientY < 50) setShowNav(true);
        else if (e.clientY > 50) setShowNav(false);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  return (
    <>
    <div className="h-screen w-screen absolute inset-0 flex justify-center items-center" >
 <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
    <h1 className=" relative text-2xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
      Bridging Infrastructure with <br /> Intelligent Automation
    </h1>
    <p className="text-md md:text-xl font-semibold text-gray-600 leading-relaxed mb-10 max-w-3xl">
        Boston Tech India bridges the gap between complex infrastructure and intelligent automation. As a product-and-service hybrid, we build scalable web applications and IaaS solutions integrated with cutting-edge GenAI — helping organizations scale efficiently while significantly lowering total cost of ownership.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-5">
      <button className="px-8 py-4 rounded-2xl z-50 relative cursor-pointer bg-[#0E4FA3] text-white hover:bg-[#1E73BE] transition-all duration-300 font-semibold shadow-lg hover:shadow-[#0E4FA3]/30">
        Explore Solutions
      </button>
      <a href="#contact">
        <button className="px-8 py-4 rounded-2xl  cursor-pointer z-50 relative border border-[#0E4FA3]/30 text-[#0E4FA3] hover:bg-[#0E4FA3]/10 transition-all duration-300 font-semibold">
          Talk to Us
        </button>
      </a>
    </div>
  </section>
    </div>
         {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 transform
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-white backdrop-blur-md border-white/20 shadow-lg" : "bg-white/50 backdrop-blur-md border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-white">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          </div>
          <div className="hidden md:flex justify-center items-center gap-8 text-white font-medium">
            <a href="#home" className="hover:text-cyan-400 text-[#1E73BE] transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 text-[#1E73BE] transition">About</a>
            <a href="#product" className="hover:text-cyan-400 text-[#1E73BE] transition">Product</a>
            <a href="#services" className="hover:text-cyan-400 text-[#1E73BE] transition">Services</a>
            <a href="#contact" className="hover:text-cyan-400 text-[#1E73BE] transition">Contact</a>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="ml-4 px-6 py-2 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-[#1E73BE] via-[#1E73BE] to-[#17B6A6] 
              hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden text-blue-600 text-2xl" onClick={() => setOpen(!open)}>☰</button>
        </div>
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-4 space-y-4 text-black font-medium shadow-xl">
            <a href="#home" onClick={() => setOpen(false)} className="block">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block">About</a>
            <a href="#product" onClick={() => setOpen(false)} className="block">Product</a>
            <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center mt-4 px-5 py-2 rounded-lg bg-black text-white font-semibold">
              Visit Us
            </a>
          </div>
        )}
      </nav>
    <div 
      className="h-screen w-screen z-30 relative"
      onMouseEnter={() => setMagnetRadius(15)}
      onMouseLeave={() => setMagnetRadius(6)}
    >
      <Antigravity
        count={count}
        magnetRadius={magnetRadius} // dynamic
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#1E73BE"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
      />

    </div>

    </>
  );
}