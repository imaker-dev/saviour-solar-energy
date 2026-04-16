import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { ArrowRight, Sun, Wind, Battery } from "lucide-react";

const services = [
  {
    icon: Sun,
    image: "/Images/services-1.png",
    title: "Solar Panel Solutions",
    desc: "High-efficiency solar panels for residential, commercial, and industrial use, ensuring optimal energy generation and long-term cost savings.",
  },
  {
    icon: Wind,
    image: "/Images/services-1.png",
    title: "Solar Inverter Systems",
    desc: "Advanced on-grid, off-grid, and hybrid inverter systems designed for efficient energy conversion, stable performance, and reliable power supply.",
  },
  {
    icon: Battery,
    image: "/Images/services-1.png",
    title: "Solar Installation & Maintenance",
    desc: "Complete solar services including site survey, professional installation, and regular maintenance to ensure maximum efficiency and system durability.",
  },
];

export default function ServicesSection() {
  return (
    <PageWrapper className="bg-white">
      {/* Header */}
      <SectionHeader
        badge={"Our Services"}
        title={"Complete Solar Solutions for Every Energy Need"}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-black/10 flex flex-col items-center text-center transition-all duration-300 "
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={s.image}
                alt={s.title}
                className="w-[190px] object-contain"
              />
            </div>

            <div className="space-y-4 p-6">
              {/* Title */}
              <h3 className="text-secondary-900 text-[17px] font-medium ">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-secondary-400 text-[13px] leading-relaxed  line-clamp-3">
                {s.desc}
              </p>

              {/* CTA */}
              <button className="inline-flex items-center gap-1 text-[13px] text-secondary-500 border-b border-primary-500/70 pb-[2px] hover:text-primary-500 transition-all">
                Request a quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
