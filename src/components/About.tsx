import { motion } from "framer-motion";
import { 
  Zap, LayoutDashboard, ShieldCheck, 
  Rocket, Sparkles, ArrowRight, Target, Code, Cloud, 
  Users, CheckCircle2, Globe
} from "lucide-react";
import aboutImg from "../assets/aboutimg.png";

function About() {


  return (
    <div className="pt-20">
      {/* 1. Header & Mission Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20 relative"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 border border-[#1E5DB3]/20 rounded-full mb-8 backdrop-blur-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
              </div>
              <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
              About {" "}
              <span className="bg-gradient-to-r from-[#0B3C8A] via-[#1E5DB3] to-[#14A7B8] bg-clip-text text-transparent">
                Boston Tech India
              </span>
            </h2>

            <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We empower organizations to break the innovation bottleneck through intelligent automation, robust cloud infrastructure, and modern application development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#1AA0C8] opacity-10 blur-3xl rounded-full"></div>
              <img
                src={aboutImg}
                alt="Boston Tech India Mission"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-6 py-4 text-center border border-gray-100 z-20">
                <Target className="w-8 h-8 text-[#14A7B8] mx-auto mb-2" />
                <h4 className="text-lg font-bold text-[#0E4FA3]">Our Mission</h4>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-[#0B3C8A]">
                Driving Digital Transformation
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Boston Tech India, our mission is to simplify complex technology ecosystems. We build scalable platforms, intuitive applications, and automated DevOps systems that allow enterprises and academic institutions to innovate faster and smarter without being hindered by infrastructure constraints.
              </p>
              <div className="flex items-center gap-4 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <Rocket className="w-10 h-10 text-[#1E5DB3] shrink-0" />
                <p className="text-slate-700 font-medium">
                  We are committed to delivering enterprise-grade engineering tailored to your unique business objectives.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. Our Expertise */}
      <section className="bg-slate-50 py-24 px-4 md:px-0 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C8A] mb-4">Our Core Expertise</h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Software Engineering", desc: "Building scalable web platforms, high-performance mobile apps, and robust enterprise software.", icon: Code, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Cloud & DevOps", desc: "Architecting dedicated cloud environments, automated deployment pipelines, and 24/7 monitoring.", icon: Cloud, color: "text-cyan-600", bg: "bg-cyan-50" },
              { title: "Digital Solutions", desc: "Providing end-to-end IT services including SEO, UI/UX design, and dedicated expert teams.", icon: Globe, color: "text-indigo-600", bg: "bg-indigo-50" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Infrastructure & Innovation */}
      <section className="py-24 px-4 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
                Infrastructure & Innovation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that modern technology shouldn't be a bottleneck. Our specialized platforms (Academic & Enterprise) provide seamless, one-touch solutions to eliminate manual workflows.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-[#1E5DB3]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">One-Touch Provisioning</h4>
                    <p className="text-gray-600">Deploy complex server stacks and applications instantly without manual configuration.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 mt-1">
                    <LayoutDashboard className="w-6 h-6 text-[#17B6A6]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">One-Click View Monitoring</h4>
                    <p className="text-gray-600">Centralized visibility into all operational metrics, logs, and system health.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Security & Compliance</h4>
                    <p className="text-gray-600">Automated access level controls and continuous compliance tracking built-in.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0B3C8A] to-[#14A7B8] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6">Our Proprietary Platforms</h3>
              <ul className="space-y-6">
                <li className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Users className="w-5 h-5" /> Academic Platform</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">Comprehensive ERP and digital infrastructure tailored specifically for schools, colleges, and educational institutions.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Enterprise Platform</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">High-performance suite designed for corporate environments, ensuring massive scalability and data security.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-slate-900 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-[#17B6A6]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "End-to-End Technology Partner",
              "Industry-Specific Expertise",
              "Enterprise-Grade Security",
              "Scalable & Future-Proof Solutions",
              "24/7 Priority Support",
              "Agile Development Methodology",
              "Cost-Effective Cloud Architecture",
              "Data-Driven SEO & Marketing"
            ].map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-[#17B6A6] transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#17B6A6] shrink-0" />
                <span className="text-slate-200 font-medium">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center mb-20 px-4"
      >
        <div className="relative overflow-hidden inline-flex flex-col md:flex-row items-center gap-10 p-10 md:p-14 bg-gradient-to-r from-gray-50 to-blue-50 rounded-[3rem] border border-blue-100 w-full max-w-5xl mx-auto justify-between shadow-xl shadow-blue-900/5">
          {/* Animated Icons */}
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

          {/* CTA Text */}
          <div className="text-left relative z-10 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Ready to transform your digital presence?
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Let's build something extraordinary together. Our team is ready to analyze your requirements and propose the perfect scalable solution.
            </p>
          </div>

          {/* CTA Button */}
          <a href="/contact" className="relative z-10 shrink-0">
            <button className="px-10 py-5 bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-[#17B6A6]/40 transition-all duration-300 flex items-center gap-3 group whitespace-nowrap cursor-pointer hover:-translate-y-1">
              Start Your Project Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;