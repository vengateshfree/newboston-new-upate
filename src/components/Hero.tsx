import { useEffect, useState, useCallback } from "react";
// import logo from "../assets/fulllogo.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function Hero() {
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [init, setInit] = useState(false);
  const [particleCount, setParticleCount] = useState(150);


  // Particle count based on screen size
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) setParticleCount(120); // mobile
      else setParticleCount(150); // desktop
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  // Initialize tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative min-h-screen">

      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(to bottom right, #f0f7ff, #e6fbff, #f0f7ff)"
        }}
      ></div>

      {/* Particles */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
              },
              modes: { push: { quantity: 4 }, repulse: { distance: 120, duration: 0.4 } },
            },
            particles: {
              color: { value: ["#17B6A6", "#00ffff"] },

              stroke: {            // ✅ move it here
                width: 2,
                color: "#007bff"
              },

              links: {
                color: "#007bff",
                distance: 100,
                enable: true,
                opacity: 0.3,
                width: 1
              },

              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 1.2
              },

              number: {
                density: { enable: true },
                value: particleCount
              },

              opacity: { value: 0.6 },

              shape: {
                type: "circle"
              },

              size: { value: { min: 5, max: 7 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10 "
          
        />
      )}

      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
      <h1 className=" relative text-2xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
      Bridging Infrastructure with <br /> Intelligent Automation
    </h1>
    <p className="text-md md:text-xl font-semibold text-gray-600 leading-relaxed mb-10 max-w-3xl">
        Boston Tech India bridges the gap between complex infrastructure and intelligent automation. As a product-and-service hybrid, we build scalable web applications and IaaS solutions integrated with cutting-edge GenAI — helping organizations scale efficiently while significantly lowering total cost of ownership.
    </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
       
          <a href="#product">
          <button className="px-8 cursor-pointer py-4 rounded-2xl bg-[#0E4FA3] text-white hover:bg-[#1E73BE] transition-all duration-300 font-semibold shadow-lg hover:shadow-[#0E4FA3]/30">
            Explore Products
          </button>
          </a>
          <a href="#contact">
            <button className="px-8 py-4 cursor-pointer rounded-2xl border border-[#0E4FA3]/30 text-[#0E4FA3] hover:bg-[#0E4FA3]/10 transition-all duration-300 font-semibold">
              Talk to Us
            </button>
          </a>
        </div>
      </section>

      {/* Navbar */}


    </div>
  );
}

export default Hero;