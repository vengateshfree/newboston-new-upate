// import React from "react";
import {
  Server,
  Code2,
  RefreshCw,
  Network,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Code,
  GitBranch,
} from "lucide-react";

  // {
    //   title: "AI & GenAI Application Development",
    //   desc: "Integrating cutting-edge artificial intelligence to create intelligent, automated workflows.",
    //   icon: Brain,
    //   gradient: "from-cyan-50 to-blue-50",
    //   iconColor: "text-cyan-600",
    // },
    // {
    //   title: "VPS Cloud & Hosting Services",
    //   desc: "Reliable, high-availability hosting solutions tailored to your workload.",
    //   icon: Cloud,
    //    gradient: "from-cyan-50 to-blue-50",
    //   iconColor: "text-cyan-600",
    // },
function Service() {
 const services = [
  {
    title: "Data Centre Infrastructure",
    desc: "Design and management of robust, scalable physical and virtual environments.",
    icon: Server,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Next Gen Application Development",
    desc: "Building modern, high-performance web and software applications.",
    icon: Code2,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Hybrid Cloud Migration",
    desc: "Expert guidance in migrating workloads from public cloud environments to secure hybrid cloud architectures.",
    icon: RefreshCw,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Network Management",
    desc: "End-to-end oversight of network performance, security, and connectivity.",
    icon: Network,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Training & Collaboration",
    desc: "Empowering your teams through technical training and collaborative development models.",
    icon: GraduationCap,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },

  // New Services
  {
    title: "Managed Services (L1 & L2)",
    desc: "24/7 infrastructure monitoring, incident management, and operational support through Level 1 and Level 2 managed services.",
    icon: ShieldCheck,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Application Development",
    desc: "Custom enterprise application development focused on scalability, performance, and business efficiency.",
    icon: Code,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "DevOps (Traditional & Next Gen)",
    desc: "CI/CD automation, containerization, and infrastructure-as-code practices enabling faster and more reliable deployments.",
    icon: GitBranch,
    gradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
];
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
     <div className="text-center max-w-3xl mx-auto mb-20 relative">

  {/* Top Badge */}
  <div className="inline-flex items-center gap-3 px-6 py-3 
      bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 
      border border-[#1E5DB3]/20 
      rounded-full mb-8 backdrop-blur-sm">

    <div className="relative">
      <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
      <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
    </div>

    <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
     End-to-End Infrastructure & AI Solutions
    </span>
  </div>

  {/* Main Heading */}
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
    Comprehensive Services &{" "}
    <span className="bg-gradient-to-r 
      from-[#0B3C8A] 
      via-[#1E5DB3] 
      to-[#14A7B8] 
      bg-clip-text text-transparent">
      Solutions
    </span>
  </h2>

  {/* Accent Line */}
  <div className="w-24 h-1 mx-auto mb-8 rounded-full 
      bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]">
  </div>

  {/* Description */}
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    Beyond our product suite, we provide expert services to handle the
    most demanding technical requirements — from infrastructure to
    AI-powered innovation.
  </p>

</div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`w-7 h-7 ${service.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1E5DB3] mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Learn More Link */}
                <a  href="#contact"  className="flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Decorative Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-cyan-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
            <p className="text-gray-700 font-medium">
              Need a custom solution for your business?
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 group">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Service;