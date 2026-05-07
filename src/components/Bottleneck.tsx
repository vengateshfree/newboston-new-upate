// import React from "react";
import {
  Clock,
  LayoutDashboard,
  Eye,
  ShieldCheck
} from "lucide-react";

function Bottleneck() {

  const challenges = [
    {
      id: 1,
      title: "Slow Setup",
      description:
        "Provisioning servers, desktops, and software stacks can take days or even weeks, delaying innovation and productivity.",
      gradient: "from-cyan-50 to-blue-50",
      hoverBorder: "hover:border-blue-200",
      hoverText: "group-hover:text-blue-600",
      glowGradient: "from-blue-500 to-cyan-400",
      icon: Clock
    },
      //     gradient: "from-cyan-50 to-blue-50",
      // iconColor: "text-cyan-600",
    {
      id: 2,
      title: "Tool Sprawl",
      description:
        "Organizations juggle dozens of tools for provisioning, monitoring, and security — creating inefficiency and confusion.",
      gradient: "from-cyan-50 to-blue-50",
      hoverBorder: "hover:border-cyan-200",
      hoverText: "group-hover:text-cyan-600",
      glowGradient: "from-cyan-500 to-blue-400",
      icon: LayoutDashboard
    },
    {
      id: 3,
      title: "No Visibility",
      description:
        "A lack of centralized insight leads to wasted resources, operational blind spots, and hidden security risks.",
      gradient: "from-cyan-50 to-blue-50",
      hoverBorder: "hover:border-purple-200",
      hoverText: "group-hover:text-purple-600",
      glowGradient: "from-purple-500 to-blue-400",
      icon: Eye
    },
    {
      id: 4,
      title: "Compliance Headaches",
      description:
        "Manual audit preparation is stressful and error-prone, increasing compliance risks and operational pressure.",
 gradient: "from-cyan-50 to-blue-50",
      hoverBorder: "hover:border-rose-200",
      hoverText: "group-hover:text-rose-600",
      glowGradient: "from-rose-500 to-orange-400",
      icon: ShieldCheck
    }
  ]; 

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="relative max-w-7xl mx-auto">


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
     Breaking the Innovation Barrier
    </span>
  </div>

  {/* Main Heading */}
  <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
 The Innovation {" "}
    <span className="bg-gradient-to-r 
      from-[#0B3C8A] 
      via-[#1E5DB3] 
      to-[#14A7B8] 
      bg-clip-text text-transparent">
     Bottleneck
    </span>
  </h2>

  {/* Accent Line */}
  <div className="w-24 h-1 mx-auto mb-8 rounded-full 
      bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]">
  </div>

  {/* Description */}
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    Modern R&D and software development are frequently slowed by complex, fragmented
infrastructure. Teams often waste countless hours on repetitive, manual tasks:

  </p>

</div>


        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {challenges.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                // className={`group relative bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-2xl  transition-all duration-500 overflow-hidden ${item.hoverBorder}`}
                className={`group relative bg-white border border-gray-200 p-8 rounded-3xl shadow-sm  transition-all duration-500 overflow-hidden `}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32  bg-gradient-to-br ${item.glowGradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`}
                ></div>
 
                <div className="relative">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br text-cyan-600 ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-7 h-7 text-cyan-600" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-semibold text-[#1E5DB3] mb-4  transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed ">
                    {item.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Bottleneck;
