// import {ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

interface Pillar {
  icon: React.ReactNode;
  accent: string;
  number: string;
  title: string;
  capability: string;
  benefit: string;
  link: string;
}

const pillars2: Pillar[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4 7l8-4 8 4-8 4-8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
    accent: "#1E73BE",
    number: "01",
    title: "Academic",
     link: "https://catalystsuite.bostontechindia.in",
    capability:
      "Purpose-built for universities, research labs, and educational institutions to manage campus IT infrastructure efficiently.",
    benefit:  "Enable students, researchers, and faculty to access reliable infrastructure for innovation and learning.",
     
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    accent: "#0EA5A4",
    number: "02",
    title: "Enterprise",
     link: "https://enterprisecatalystsuit.bostontechindia.in/",
    capability:
      "Designed for large enterprises managing multi-cloud, DevOps pipelines, and distributed infrastructure environments.",
    benefit:
      "Deliver scalable observability and automation across hybrid and cloud-native systems.",
  },
];

const pillars: Pillar[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4.5 16.5c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0l9-9c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0l-9 9z" />
        <path d="m13.5 6.5 4 4" />
      </svg>
    ),
    accent: "#1AA0C8",
    number: "01",
    title: "One-Touch Provisioning",
     link: "https://catalystsuite.bostontechindia.in",
    capability:
      "Automate OS, application, and Kubernetes/OpenShift deployments on any hardware or VM.",
    benefit:
      "Go from idea to a functional environment in minutes, not days.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    accent: "#1E73BE",
    number: "02",
    title: "One-Dashboard Monitoring",
     link: "https://catalystsuite.bostontechindia.in",
    capability:
      "Real-time, unified visibility into system health and utilization across all labs and servers.",
    benefit:
      "Eliminate waste and forecast infrastructure needs with precision.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    accent: "#0E4FA3",
    number: "03",
    title: "Access Level Control",
     link: "https://catalystsuite.bostontechindia.in",
    capability:
      "Granular, role-based access control (RBAC) to enforce security policies effortlessly.",
    benefit:
      "Ensure the right people have the right access at the right time.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: "#17B6A6",
    number: "04",
    title: "Compliance Automation",
     link: "https://catalystsuite.bostontechindia.in",
    capability:
      "Continuous monitoring and auditing for PCI, SOC 2, and HIPAA standards.",
    benefit:
      "Turn stressful audit prep into an automated background process.",
  },
];

interface PillarCardProps {
  item: Pillar;
  index: number;
}

function PillarCard({ item, index }: PillarCardProps) {
  // const [visible, setVisible] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //       }
  //     },
  //     { threshold: 0.15 }
  //   );

  //   if (ref.current) observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: true ? 1 : 0,
        transform: true ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.12}s`,
      }}
    >
      
     <a href="https://catalystsuite.bostontechindia.in/" target="_blank" >
      <div className="group relative h-full rounded-2xl bg-white border border-cyan-100 shadow-sm  transition-all duration-300 overflow-hidden">
        
        {/* Hover Glow */}
        {/* <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300"
          style={{
            background: `radial-gradient(circle, ${item.accent}20 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
        /> */}

        <div className="p-7 relative">
          <div className="flex items-start justify-between mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: `${item.accent}15`,
                border: `1px solid ${item.accent}33`,
                color: item.accent,
              }}
            >
              {item.icon}
            </div>

            <span
              className="text-xs font-mono font-bold tracking-widest"
              style={{ color: item.accent + "88" }}
            >
              {item.number}
            </span>
          </div>
 <h3
                    className={`text-xl font-semibold text-[#1E5DB3] mb-4  transition-colors duration-300`}
                  >
            {item.title}
          </h3>

       
                  <p className="text-gray-600 leading-relaxed mb-4 "> {item.capability}
          </p>

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              background: `${item.accent}10`,
              border: `1px solid ${item.accent}22`,
              color: item.accent,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: item.accent }}
            />
            {item.benefit}
          </div>

              {/* Learn More Link */}
              {/* <a className="absolute bottom-8 right-5"  href="https://catalystsuite.bostontechindia.in/" target="_blank" >
                           <div className="flex mt-10 justify-center cursor-pointer items-center gap-2 text-sm font-medium text-cyan-600  transition-opacity duration-300">
                            <span>Visit Website</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                          </a> */}
        </div>
      </div>
      </a>
    </div> 
  );
}


function PillarCard2({ item, index }: PillarCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <div className="group relative cursor-pointer h-full rounded-2xl p-[1px] transition-all duration-500">

          {/* 🔥 Glow Border */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
            style={{
              background: `linear-gradient(120deg, ${item.accent}, transparent, ${item.accent})`,
            }}
          />

          {/* 🧊 Card Content */}
          <div
            className="relative rounded-2xl bg-white border border-gray-200 h-full p-7 overflow-hidden"
          >

            {/* 💡 Spotlight Effect */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, ${item.accent}20, transparent 60%)`,
              }}
            />

            {/* 🔹 Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `${item.accent}15`,
                color: item.accent,
              }}
            >
              {item.icon}
            </div>

            {/* 🔹 Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* 🔹 Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              {item.capability}
            </p>

            {/* 🔹 Benefit */}
            <div
              className="text-xs font-medium inline-block px-3 py-1 rounded-md"
              style={{
                background: `${item.accent}12`,
                color: item.accent,
              }}
            >
              {item.benefit}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Suite() {
  return ( 
    <section className="relative py-24 px-6 bg-sky-50 overflow-hidden">
      
      {/* Soft Background Glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div> */}
      
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
     The Future of Infrastructure Management
    </span>
  </div>
</div>
      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          

<a 
  href="https://catalystsuite.bostontechindia.in/" 
  target="_blank"
  rel="noopener noreferrer"
  className="group block"
>
  <h2 className="flex justify-center items-center gap-3 text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A] transition-all duration-300 ">
    
    <span>
      Flagship Product{" "}
      <span className="bg-gradient-to-r 
        from-[#0B3C8A] 
        via-[#1E5DB3] 
        to-[#14A7B8] 
        bg-clip-text text-transparent 
        relative"
      >
        Catalyst Suite
     </span>
     
    </span>

    {/* <ExternalLink
      size={28}
      className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
    /> */}

  </h2>
</a>

        

            <div className="w-24 h-1 mx-auto mb-8 rounded-full 
      bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]">
  </div>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            An advanced observability platform that transforms complex
            infrastructure management into a seamless, one-touch experience.
          </p>
        </div>
         <div className="grid md:grid-cols-2 gap-6">
          {pillars2.map((item, index) => (
            <PillarCard2 key={index} item={item} index={index} />
          ))}
        </div>

        <div className="flex items-center justify-center pt-15 pb-5">
  <div className="w-24 h-[2px] bg-gray-300"></div>

  {/* from-[#1E5DB3] to-[#2EC4C7] */}

  <span className="px-6 text-sm font-semibold text-[#2EC4C7] tracking-wider">
    PLATFORM CAPABILITIES
  </span>

  <div className="w-24 h-[2px] bg-gray-300"></div>
</div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {pillars.map((item, index) => (
            <PillarCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}