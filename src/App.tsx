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
              <About />
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
