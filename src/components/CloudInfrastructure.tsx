import { motion } from "framer-motion";
import { Server, Cloud, Shield, Zap, Globe2, Clock, ArrowRight, Rocket, Sparkles } from "lucide-react";


export default function CloudInfrastructure() {
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
      title: "VPS Hosting",
      icon: Server,
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      description: "Scalable virtual private servers designed for developers and high-traffic websites. Get the power and control you need to run your applications smoothly.",
    },
    {
      title: "Cloud Hosting",
      icon: Cloud,
      gradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
      description: "Flexible and highly available cloud servers for growing businesses. Seamlessly scale resources as your traffic and data requirements increase.",
    },
    {
      title: "Dedicated Hosting",
      icon: Shield,
      gradient: "from-indigo-50 to-purple-50",
      iconColor: "text-indigo-600",
      description: "Private server hosting offering top-tier speed, security, and absolute control for enterprise-level needs and mission-critical applications.",
    }
  ];

  const features = [
    { name: "99.99% Uptime Guarantee", icon: Clock },
    { name: "Blazing Fast NVMe SSDs", icon: Zap },
    { name: "Global Data Centers", icon: Globe2 },
    { name: "24/7 Expert Support", icon: Server },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-[60vh] mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 border border-[#1E5DB3]/20 rounded-full mb-8"
          >
            <Cloud className="w-5 h-5 text-[#14A7B8]" />
            <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
              Digital Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent"
          >
            Fast, Flexible & Scalable <br className="hidden md:block" /> Cloud Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed mb-10 max-w-3xl"
          >
            We provide high-performance cloud infrastructure tailored for creators, brands, and businesses. Get your applications live quickly with our reliable and secure server management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto"
          >
            <button className="px-8 py-4 rounded-2xl relative cursor-pointer bg-[#0E4FA3] text-white hover:bg-[#1E73BE] transition-all duration-300 font-semibold shadow-lg hover:shadow-[#0E4FA3]/30 flex items-center justify-center gap-2">
              Explore Plans <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl cursor-pointer relative border border-[#0E4FA3]/30 text-[#0E4FA3] hover:bg-[#0E4FA3]/10 transition-all duration-300 font-semibold">
              Talk to an Expert
            </button>
          </motion.div>
        </section>

        {/* Value Proposition features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-slate-50 rounded-[3rem] p-10 md:p-12 border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-[#17B6A6]" />
                  </div>
                  <span className="text-lg font-semibold text-slate-800">{feature.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Core Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
              Our Infrastructure{" "}
              <span className="bg-gradient-to-r from-[#0B3C8A] via-[#1E5DB3] to-[#14A7B8] bg-clip-text text-transparent">
                Offerings
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className="group relative bg-white rounded-3xl border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col overflow-hidden"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#1E5DB3] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[#0E4FA3] font-semibold group-hover:gap-4 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Decorative Border Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              );
            })}
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

        {/* Bottom Contact Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div> */}

      </div>
    </div>
  );
}
