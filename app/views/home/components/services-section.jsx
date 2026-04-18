// // import PageWrapper from "@/app/components/page-wrapper";
// // import SectionHeader from "@/app/components/section-header";
// // import { ArrowRight, Sun, Wind, Battery } from "lucide-react";

// // const services = [
// //   {
// //     icon: Sun,
// //     image: "/Images/services-1.png",
// //     title: "Solar Panel Solutions",
// //     desc: "High-efficiency solar panels for residential, commercial, and industrial use, ensuring optimal energy generation and long-term cost savings.",
// //   },
// //   {
// //     icon: Wind,
// //     image: "/Images/services-1.png",
// //     title: "Solar Inverter Systems",
// //     desc: "Advanced on-grid, off-grid, and hybrid inverter systems designed for efficient energy conversion, stable performance, and reliable power supply.",
// //   },
// //   {
// //     icon: Battery,
// //     image: "/Images/services-1.png",
// //     title: "Solar Installation & Maintenance",
// //     desc: "Complete solar services including site survey, professional installation, and regular maintenance to ensure maximum efficiency and system durability.",
// //   },
// // ];

// // export default function ServicesSection() {
// //   return (
// //     <PageWrapper className="bg-white">
// //       {/* Header */}
// //       <SectionHeader
// //         badge={"Our Services"}
// //         title={"Complete Solar Solutions for Every Energy Need"}
// //       />

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {services.map((s, i) => (
// //           <div
// //             key={i}
// //             className="bg-white border border-black/10 flex flex-col items-center text-center transition-all duration-300 "
// //           >
// //             {/* Image */}
// //             <div className="p-4">
// //               <img
// //                 src={s.image}
// //                 alt={s.title}
// //                 className="w-[190px] object-contain"
// //               />
// //             </div>

// //             <div className="space-y-4 p-6">
// //               {/* Title */}
// //               <h3 className="text-secondary-900 text-[17px] font-medium ">
// //                 {s.title}
// //               </h3>

// //               {/* Description */}
// //               <p className="text-secondary-400 text-[13px] leading-relaxed  line-clamp-3">
// //                 {s.desc}
// //               </p>

// //               {/* CTA */}
// //               <button className="inline-flex items-center gap-1 text-[13px] text-secondary-500 border-b border-primary-500/70 pb-[2px] hover:text-primary-500 transition-all">
// //                 Request a quote
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </PageWrapper>
// //   );
// // }

// import PageWrapper from "@/app/components/page-wrapper";
// import { ArrowUpRight, Sun, Cpu, Wrench } from "lucide-react";

// const services = [
//   {
//     icon: Sun,
//     tag: "01",
//     title: "Solar Panel Solutions",
//     short: "Panels built to last 25 years",
//     desc: "High-efficiency monocrystalline panels for homes, societies, and businesses. Every system is sized for your exact consumption — zero over-engineering, zero waste.",
//     bullets: ["Tier-1 brands only", "Up to 22% efficiency", "MNRE certified"],
//     image: "/Images/services-1.png",
//   },
//   {
//     icon: Cpu,
//     tag: "02",
//     title: "Solar Inverter Systems",
//     short: "On-grid, off-grid & hybrid",
//     desc: "Smart inverter systems that adapt to your load and grid conditions. Real-time monitoring, auto-switching, and remote diagnostics included as standard.",
//     bullets: ["On-grid / Off-grid / Hybrid", "App-based monitoring", "Grid-tie & net metering"],
//     image: "/Images/services-1.png",
//   },
//   {
//     icon: Wrench,
//     tag: "03",
//     title: "Installation & Maintenance",
//     short: "End-to-end, start to finish",
//     desc: "Site survey, structural analysis, professional installation, and annual maintenance contracts — all under one roof. We handle everything so you don't have to.",
//     bullets: ["Free site survey", "AMC plans available", "24hr support"],
//     image: "/Images/services-1.png",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <PageWrapper className="bg-white">
//       <link
//         href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap"
//         rel="stylesheet"
//       />

//       {/* ── Header ── */}
//       <div className="mb-14">
//         <div className="flex items-center gap-2.5 mb-5">
//           <span className="w-5 h-px bg-amber-500" />
//           <span
//             className="text-[11px] font-semibold text-amber-600 uppercase tracking-[0.15em]"
//             style={{ fontFamily: "'DM Sans', sans-serif" }}
//           >
//             Our Services
//           </span>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//           <h2
//             className="text-[2.5rem] sm:text-5xl font-bold text-gray-950 leading-[1.08] tracking-tight max-w-md"
//             style={{ fontFamily: "'Instrument Serif', serif" }}
//           >
//             Complete solar solutions,{" "}
//             <em className="not-italic text-amber-500">end to end</em>
//           </h2>
//           <p
//             className="text-gray-400 text-[14.5px] leading-relaxed max-w-[260px] sm:text-right"
//             style={{ fontFamily: "'DM Sans', sans-serif" }}
//           >
//             Everything you need — from the first panel to the last wire — handled by one team.
//           </p>
//         </div>
//       </div>

//       {/* ── Service cards ── */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
//         {services.map((s) => {
//           const Icon = s.icon;
//           return (
//             <div
//               key={s.tag}
//               className="group bg-white flex flex-col cursor-pointer"
//               style={{ fontFamily: "'DM Sans', sans-serif" }}
//             >
//               {/* Image area */}
//               <div className="relative overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center p-8">
//                 <img
//                   src={s.image}
//                   alt={s.title}
//                   className="w-36 h-36 object-contain transition-transform duration-700 ease-out group-hover:scale-[1.07]"
//                 />
//                 {/* Tag */}
//                 <div className="absolute top-4 left-4 text-[10px] font-bold text-gray-300 tracking-widest">
//                   {s.tag}
//                 </div>
//                 {/* Icon chip — bottom right */}
//                 <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-amber-400 group-hover:border-amber-400 transition-colors duration-300">
//                   <Icon size={14} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="flex flex-col flex-1 p-6 sm:p-7">
//                 {/* Title + arrow */}
//                 <div className="flex items-start justify-between gap-3 mb-1">
//                   <h3
//                     className="text-[1.2rem] font-semibold text-gray-950 tracking-tight leading-snug"
//                     style={{ fontFamily: "'Instrument Serif', serif" }}
//                   >
//                     {s.title}
//                   </h3>
//                   <ArrowUpRight
//                     size={16}
//                     className="text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5"
//                   />
//                 </div>

//                 <p className="text-[11.5px] text-amber-600 font-semibold uppercase tracking-wider mb-3">
//                   {s.short}
//                 </p>

//                 {/* Animated rule */}
//                 <div className="w-8 h-px bg-gray-200 mb-4 group-hover:w-14 group-hover:bg-amber-400 transition-all duration-500 ease-out" />

//                 <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6 flex-1">
//                   {s.desc}
//                 </p>

//                 {/* Bullets */}
//                 <ul className="space-y-2 mb-6">
//                   {s.bullets.map((b) => (
//                     <li key={b} className="flex items-center gap-2">
//                       <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
//                       <span className="text-[12px] text-gray-500 font-medium">{b}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA link */}
//                 <a
//                   href="#contact"
//                   className="self-start text-[12.5px] font-semibold text-gray-950 border-b border-gray-200 pb-px hover:border-amber-500 hover:text-amber-600 transition-colors duration-200"
//                 >
//                   Request a quote →
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </PageWrapper>
//   );
// }

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { ArrowUpRight, Sun, Cpu, Wrench } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Sun,
    tag: "01",
    title: "Solar Panel Solutions",
    tagline: "High-efficiency. Built to last.",
    desc: "We source only Tier-1 monocrystalline panels with up to 22% efficiency — sized precisely for your consumption, not over-engineered. Every panel is MNRE certified and backed by a 25-year performance warranty.",
    bullets: [
      "Tier-1 brands only",
      "Up to 22% efficiency",
      "MNRE certified",
      "25-yr warranty",
    ],
    image: "/Images/service-1.jpg",
    imageLeft: true,
  },
  {
    icon: Cpu,
    tag: "02",
    title: "Solar Inverter Systems",
    tagline: "Smart conversion. Real-time control.",
    desc: "On-grid, off-grid, or hybrid — our inverter systems adapt to your load and grid conditions automatically. Comes with app-based monitoring, auto-switching, and remote diagnostics built in.",
    bullets: [
      "On-grid / Off-grid / Hybrid",
      "App-based monitoring",
      "Net metering enabled",
      "Auto grid-switching",
    ],
    image: "/Images/service-2.jpg",
    imageLeft: false,
  },
  {
    icon: Wrench,
    tag: "03",
    title: "Installation & Maintenance",
    tagline: "One team. Start to finish.",
    desc: "From the first site survey to the final commissioning — and every service visit after — we handle everything. No subcontractors, no hand-offs. Just one accountable team with 24hr support.",
    bullets: [
      "Free site survey",
      "Professional installation",
      "Annual AMC plans",
      "24hr support",
    ],
    image: "/Images/service-3.jpg",
    imageLeft: true,
  },
];

export default function ServicesSection() {
  return (
    <PageWrapper className="bg-white">
      {/* Header */}
      <SectionHeader
        badge={"Our Services"}
        title={"Everything solar,under one roof"}
        description={
          "Three core services. One trusted team. Zero compromise on quality."
        }
      />

      {/* Services */}
      <div className="flex flex-col space-y-6">
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <div
              key={s.tag}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 `}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden bg-gray-50 aspect-[4/3] lg:aspect-auto lg:min-h-[400px] ${
                  !s.imageLeft ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/25 pointer-events-none" />

                {/* Big ghost number */}
                <div className="absolute top-6 left-6 text-white/20 font-bold text-6xl leading-none select-none pointer-events-none">
                  {s.tag}
                </div>

                {/* Floating tagline chip */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-4 py-2.5">
                  <Icon size={13} className="text-amber-500 flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider">
                    {s.tagline}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center space-y-6 ${
                  !s.imageLeft ? "lg:order-1" : ""
                }`}
              >
                <p className="text-[10px] font-mono text-gray-300 tracking-widest ">
                  {s.tag} / 03
                </p>

                <h3 className="text-[1.9rem] sm:text-[2.3rem] font-bold text-gray-950 leading-[1.1] tracking-tight ">
                  {s.title}
                </h3>

                <div className="w-10 h-px bg-amber-400 " />

                <p className="text-[14px] text-gray-500 leading-[1.85]  max-w-[380px]">
                  {s.desc}
                </p>

                {/* Bullets 2-col */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 ">
                  {s.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                      <span className="text-[12.5px] text-gray-500 font-medium">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="w-fit btn btn-primary group">
                  Request a Quote
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
