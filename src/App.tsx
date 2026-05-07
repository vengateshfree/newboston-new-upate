  import { useEffect, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  
  import Bottleneck from "./components/Bottleneck";
  import Suit from "./components/Suit";
  import Service from "./components/Service";
  import Partner from "./components/Partner";
  import Contact from "./components/Contact";
  import logo from "./assets/fulllogo.png";
  import Hero from "./components/Hero";
  import About from "./components/About";
  import Layout from "./components/Layout";
  import PlaceholderPage from "./components/PlaceholderPage";
  import AcademicPlatform from "./components/AcademicPlatform";
  import EnterprisePlatform from "./components/EnterprisePlatform";
  import WebDevelopment from "./components/WebDevelopment";
  import CloudInfrastructure from "./components/CloudInfrastructure";
  import MobileAppDevelopment from "./components/MobileAppDevelopment";

  import aboutImg from "./assets/aboutimg.png";
import { Zap, LayoutDashboard, ShieldCheck, ClipboardCheck } from "lucide-react";


  // A component to hold the original single-page content
  const HomePage = () => {
    const [li, setLi] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLi(true);
      }, 100);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="">
        <div id="home">
          <Hero />
        </div>

        {li && (
          <>
            <div id="about" className="z-50">
              {/* <About /> */}
                  <section id="about" className="min-h-screen flex items-center bg-white py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-0">

        {/* Left Image */}
        <div className="relative w-full md:w-auto">
          <img
            src={aboutImg}
            alt="Boston Tech India Infrastructure"
            className="rounded-3xl shadow-xl w-full object-cover"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-2xl px-6 py-4 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold text-[#0E4FA3]">Lead</h4>
            <p className="text-gray-500 text-sm">Tech Experts</p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
            About Boston Tech India
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Boston Tech India helps organizations simplify complex
            infrastructure through intelligent automation,
            <span className="font-semibold text-[#0E4FA3]"> cloud platforms, and modern application development</span>. Our team of technology professionals 
            builds <span className="font-semibold text-[#0E4FA3]">scalable infrastructure, DevOps systems, and AI-powered platforms</span> that enable enterprises and institutions to innovate faster.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Zap className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">One-Touch Provisioning</span>
            </div>

            <div className="flex items-center gap-3">
              <LayoutDashboard className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">One Click One View Monitoring</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">Access Level Control</span>
            </div>

            <div className="flex items-center gap-3">
              <ClipboardCheck className="text-[#0E4FA3]" size={22} />
              <span className="text-gray-700 font-medium">Compliance Automation</span>
            </div>
          </div>

          <a href="#services">
            <button className="w-full sm:w-auto px-6 py-3 cursor-pointer bg-[#0E4FA3] text-white rounded-xl font-semibold hover:bg-[#1E73BE] transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>

            </div>

            <div id="solutions" className="z-50">
              <Bottleneck />
            </div>

            <div id="product" className="z-50">
              <Suit />
            </div>

            <div id="services" className="z-50">
              <Service />
            </div>

            <div className="z-50">
              <Partner />
            </div>

            <div id="contact" className="z-50">
              <Contact />
            </div>
          </>
        )}
      </div>
    );
  };

  function App() {
    const [showWebsite, setShowWebsite] = useState(false);

    // Automatically hide logo after 2 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowWebsite(true);
      }, 1700);

      return () => clearTimeout(timer);
    }, []);

    const handleScroll = () => {
      setShowWebsite(true);
    };

    return (
      <div>
        {/* Logo overlay */}
        <AnimatePresence>
          {!showWebsite && (
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-[9999]"
              onWheel={handleScroll}
              onTouchMove={handleScroll}
              onClick={handleScroll}
            >
              <img className="h-60 w-60" src={logo} alt="Logo" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Website content */}
        {showWebsite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<About />} />
                  
                  {/* Products */}
                  <Route path="products/academic" element={<AcademicPlatform />} />
                  <Route path="products/enterprise" element={<EnterprisePlatform />} />
                  
                  {/* Infrastructure */}
                  <Route path="infrastructure/cloud" element={<CloudInfrastructure />} />
                  <Route path="infrastructure/devops" element={<PlaceholderPage title="DevOps / Monitoring" />} />
                  
                  {/* Services */}
                  <Route path="services/web-development" element={<WebDevelopment />} />
                  <Route path="services/mobile-app-development" element={<MobileAppDevelopment />} />
                  <Route path="services/seo" element={<PlaceholderPage title="SEO Services" />} />
                  <Route path="services/dedicated-team" element={<PlaceholderPage title="Dedicated Team" />} />
                  
                  <Route path="contact" element={<Contact />} />
                </Route>
              </Routes>
            </Router>
          </motion.div>
        )}
      </div>
    );
  }

  export default App;
