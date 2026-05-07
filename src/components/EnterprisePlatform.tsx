import { motion } from "framer-motion";
import { Building2, Briefcase, ShieldCheck, TrendingUp } from "lucide-react";

export default function EnterprisePlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#ffffff] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#1E73BE] font-medium mb-6">
            <Building2 className="w-5 h-5" />
            <span>Enterprise Catalyst Suite</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Scalable Solutions for <br/>
            <span className="bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
              Modern Enterprises
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Accelerate your business growth with enterprise-grade automation. 
            The Enterprise Catalyst Suite optimizes operations, enhances security, 
            and provides data-driven intelligence for large-scale organizations.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Briefcase className="w-8 h-8 text-[#1E73BE]" />,
              title: "Operational Efficiency",
              desc: "Streamline workflows and reduce overhead with intelligent process automation."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-[#17B6A6]" />,
              title: "Enterprise Security",
              desc: "Bank-grade security protocols ensuring your data is protected at all times."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-[#0E4FA3]" />,
              title: "Data Intelligence",
              desc: "Transform raw data into actionable insights for strategic decision-making."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a href="https://enterprisecatalystsuit.bostontechindia.in/" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-5 rounded-2xl cursor-pointer bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] text-white hover:shadow-2xl hover:shadow-[#17B6A6]/30 transition-all duration-300 font-bold text-lg">
              Explore Enterprise Suite
            </button>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
