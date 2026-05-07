import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Layers, Users } from "lucide-react";

export default function AcademicPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] to-[#ffffff] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#1E73BE] font-medium mb-6">
            <GraduationCap className="w-5 h-5" />
            <span>CatalystSuite Academy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Next-Generation <br/>
            <span className="bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] bg-clip-text text-transparent">
              Academic Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Empower your educational institution with intelligent automation. 
            CatalystSuite Academy streamlines administration, enhances learning experiences, 
            and bridges the gap between technology and modern education.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <BookOpen className="w-8 h-8 text-[#1E73BE]" />,
              title: "Smart Curriculum",
              desc: "AI-driven insights to optimize curriculum planning and delivery."
            },
            {
              icon: <Layers className="w-8 h-8 text-[#17B6A6]" />,
              title: "Unified Administration",
              desc: "Centralize all your institution's data, from admissions to alumni."
            },
            {
              icon: <Users className="w-8 h-8 text-[#0E4FA3]" />,
              title: "Student Success",
              desc: "Predictive analytics to track and boost student performance."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
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
          <a href="https://catalystsuite.bostontechindia.in/" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-5 rounded-2xl cursor-pointer bg-gradient-to-r from-[#0E4FA3] to-[#17B6A6] text-white hover:shadow-2xl hover:shadow-[#17B6A6]/30 transition-all duration-300 font-bold text-lg">
              Visit CatalystSuite Academy
            </button>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
