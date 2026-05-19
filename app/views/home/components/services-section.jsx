import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getServiceCards } from "@/data/services.js";

export default function ServicesSection() {
  const services = getServiceCards();

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
          return (
            <div
              key={s.id}
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
                  {i + 1}
                </div>

                {/* Floating tagline chip */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-4 py-2.5">
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
                  {i + 1} / {services.length}
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

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/services/${s.slug}`}
                    className="btn btn-primary group"
                  >
                    Explore Service
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="btn border border-gray-200 text-gray-700 hover:border-gray-700 hover:text-gray-950 group"
                  >
                    Get Quote
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
      
    </PageWrapper>
  );
}
