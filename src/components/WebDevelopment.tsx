import { motion } from "framer-motion";
import { Globe, Code, ShoppingCart, CheckCircle2, ArrowRight, ExternalLink, Sparkles, Rocket, Zap } from "lucide-react";


export default function WebDevelopment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const services = [
    {
      title: "Website Development",
      icon: Globe,
      gradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
      items: [
        "Business Websites",
        "Corporate Websites",
        "Portfolio Websites",
        "Landing Pages",
        "Educational Websites",
        "Hospital Websites",
        "Real Estate Websites"
      ]
    },
    {
      title: "Web Application",
      icon: Code,
      gradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
      items: [
        "Custom Web Applications",
        "ERP Systems",
        "CRM Software",
        "Admin Dashboards",
        "Client Portals",
        "SaaS Platforms"
      ]
    },
    {
      title: "E-Commerce",
      icon: ShoppingCart,
      gradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
      items: [
        "Online Stores",
        "Payment Gateway Integration",
        "Inventory Management",
        "Shopping Cart Systems",
        "Multi-Vendor Platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-[70vh] mb-20 relative">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-3xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent"
          >
            Build Fast, Modern & Scalable <br className="hidden md:block" /> Websites for Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-xl font-semibold text-gray-600 leading-relaxed mb-10 max-w-3xl"
          >
            We create responsive, SEO-friendly, and high-performance web applications for startups, businesses, schools, hospitals, and enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto"
          >
            <button className="px-8 py-4 rounded-2xl  relative cursor-pointer bg-[#0E4FA3] text-white hover:bg-[#1E73BE] transition-all duration-300 font-semibold shadow-lg hover:shadow-[#0E4FA3]/30 flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl cursor-pointer  relative border border-[#0E4FA3]/30 text-[#0E4FA3] hover:bg-[#0E4FA3]/10 transition-all duration-300 font-semibold">
              Our Services
            </button>
            {/* <button className="px-8 py-4 rounded-2xl cursor-pointer z-50 relative bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-slate-900/30">
              Free Consultation
            </button> */}
          </motion.div>
        </section>

        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 border border-[#1E5DB3]/20 rounded-full mb-8 backdrop-blur-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
              </div>
              <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
                Premium Web Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
              Our Specialized{" "}
              <span className="bg-gradient-to-r from-[#0B3C8A] via-[#1E5DB3] to-[#14A7B8] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${service.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#1E5DB3] mb-6 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-4 flex-grow">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} shrink-0 mt-0.5`} />
                        <span className="text-md text-gray-600 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Border Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Our Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
              Our Featured <span className="bg-gradient-to-r from-[#0B3C8A] via-[#1E5DB3] to-[#14A7B8] bg-clip-text text-transparent">Work</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>
            <p className="mt-6 text-gray-600 text-lg">
              Take a look at one of our recently completed educational platforms, tailored for high performance and engaging user experiences.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row group max-w-6xl mx-auto">
            {/* Image Container */}
            <div className="w-full lg:w-3/5 overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <img
                src="/jcsimage.png"
                alt="JCS Educational Website"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-2/5 p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white relative z-20">
              <div className="inline-block px-4 py-2 bg-blue-50 text-[#1E5DB3] rounded-full text-sm font-semibold mb-6 w-max">
                Educational Platform
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Jayarani Arts & Science
                College for Women


              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A comprehensive digital transformation for a premier educational institution. This platform features a modern, responsive design, optimized for both prospective students and faculty.
              </p>

              <ul className="space-y-3 mb-10">
                {["Responsive UX/UI Design", "Performance Optimization", "SEO Friendly Structure"].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#17B6A6]" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.jcs.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0E4FA3] text-white rounded-xl hover:bg-[#1E73BE] transition-colors duration-300 w-max font-semibold shadow-lg shadow-blue-900/20"
              >
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Engineering Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C8A] mb-4">Our Engineering Standards</h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Enterprise-grade architecture",
              "High-performance applications",
              "Scalable infrastructure",
              "Modern cloud solutions",
              "Real-time systems",
              "Secure digital platforms"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#17B6A6]" />
                </div>
                <span className="text-lg font-semibold text-slate-800">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center mb-10"
        >
          <div className="relative overflow-hidden inline-flex flex-col sm:flex-row items-center gap-6 p-8 md:p-10 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl border border-blue-100 w-full max-w-4xl mx-auto justify-between shadow-lg shadow-blue-900/5">
            {/* Animated Background Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-8 opacity-20 pointer-events-none"
            >
              <Sparkles className="w-8 h-8 text-[#0E4FA3]" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-1/3 opacity-20 pointer-events-none"
            >
              <Zap className="w-6 h-6 text-[#17B6A6]" />
            </motion.div>
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, -15, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-1/3 opacity-10 pointer-events-none"
            >
              <Rocket className="w-12 h-12 text-[#1E5DB3]" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-10 pointer-events-none"
            >
              <Sparkles className="w-10 h-10 text-[#17B6A6]" />
            </motion.div>

            <div className="text-left relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to transform your digital presence?</h3>
              <p className="text-gray-600 font-medium">
                Let's build something extraordinary together.
              </p>
            </div>
            <a href="/contact" className="relative z-10">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-[#17B6A6]/30 transition-all duration-300 flex items-center gap-2 group whitespace-nowrap cursor-pointer hover:-translate-y-1">
                Start Your Project Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>


        </motion.div>

      </div>
    </div>
  );
}
