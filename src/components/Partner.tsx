
import { Building2, GraduationCap, TrendingUp } from "lucide-react";

function Partner() {
  return (
    <section className="py-24 px-6 bg-sky-50">
      <div className="max-w-6xl mx-auto">
           
      <div className="flex justify-center" >
        <div className="inline-flex items-center gap-3 px-6 py-3 
      bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 
      border border-[#1E5DB3]/20 
      rounded-full mb-8 backdrop-blur-sm">

    <div className="relative">
      <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
      <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
    </div>

    <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
     Your Strategic Technology Partner
    </span>
  </div>
</div>
        {/* Heading */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
  Why Partner With {" "}
    <span className="bg-gradient-to-r 
      from-[#0B3C8A] 
      via-[#1E5DB3] 
      to-[#14A7B8] 
      bg-clip-text text-transparent">
      Us?
    </span>
  </h2>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-[#0E4FA3] mb-6">
          
          </h2> */}

  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            The global IT automation and Infrastructure as Code (IaC) market
            is projected to exceed
          </p>

          {/* Market Highlight */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-sky-100">
            <TrendingUp className="text-[#1E73BE]" size={28} />
            <span className="text-3xl font-bold text-[#0E4FA3]">
              $25 Billion+
            </span>
            <span className="text-gray-500">by 2030</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Academic Institutions */}
          <div className="group bg-white p-8 rounded-3xl shadow-md  transition-all duration-500 border border-sky-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1AA0C8]/10 p-4 rounded-2xl">
                <GraduationCap className=" text-cyan-600" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-[#0E4FA3]">
                Academic Research Institutions
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Providing specialized infrastructure, scalable compute environments,
              and automation frameworks tailored for high-level research
              and innovation.
            </p>
          </div>

          {/* Mid Market Enterprises */}
          <div className="group bg-white p-8 rounded-3xl shadow-md transition-all duration-500 border border-sky-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1AA0C8]/10 p-4 rounded-2xl">
                <Building2 className=" text-cyan-600" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-[#0E4FA3]">
                Mid-Market Enterprises
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Delivering enterprise-grade automation, Infrastructure as Code
              solutions, and proactive insights — without enterprise-level cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
