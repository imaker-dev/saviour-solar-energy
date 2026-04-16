"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/app/components/section-header";
import PageWrapper from "@/app/components/page-wrapper";

const solutions = [
  {
    id: "residential",
    title: "Homes",
    subtitle: "Independent houses & villas",
    image: "/Images/residential.jpg",
  },
  {
    id: "society",
    title: "Housing Society",
    subtitle: "Apartments & gated communities",
    image: "/Images/housing.jpg",
  },
  {
    id: "commercial",
    title: "Commercial",
    subtitle: "Offices, retail & warehouses",
    image: "/Images/commercial.jpg",
  },
];

export default function SolutionsSection() {
  return (
    <PageWrapper className="relative bg-white">
      {/* Premium Header */}
      <SectionHeader
        badge="Solutions"
        title="Powering every space"
        description=" Tailored solar systems designed for homes, communities, and businesses."
        align="center"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution) => {
          return (
            <div key={solution.id} className="group relative cursor-pointer">
              {/* Image Container - Clean and minimal */}
              <div className="relative aspect-[5/5]  overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Card - Floating white card */}
              <div className="relative -mt-20 mx-5 bg-orange-400  p-5 shadow-2xl shadow-black/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
                {/* Stat - Top right of white card */}

                <div className="">
                  <h3 className="text-white text-2xl font-semibold tracking-tight mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {solution.subtitle}
                  </p>

                  {/* CTA - Understated elegance */}
                  <div className="flex items-center gap-3 text-white/90 group-hover:text-white transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Discover
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
