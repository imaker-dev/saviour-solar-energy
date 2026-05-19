"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { getSolutionCards } from "@/data/solution";
import Link from "next/link";

export default function SolutionsSection() {
  const solutions = getSolutionCards();
  return (
    <PageWrapper className="bg-white">
      {/* ── Header ── */}
      <SectionHeader
        badge={"Who We Serve"}
        title={"Solar for every space"}
        description={
          "From a single home to a full factory floor — we design the right system for you."
        }
      />

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
        {solutions.map((s, i) => (
          <Link
      key={s.id}
      href={`/solutions/${s.slug}`}
      className="group bg-white flex flex-col relative overflow-hidden"
    >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-950 text-[10px] font-bold tracking-widest px-2.5 py-1">
                0{i + 1}
              </div>
            </div>

            {/* Text block */}
            <div className="flex flex-col flex-1 p-6 border-t border-gray-100">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-[1.3rem] font-semibold text-gray-950 tracking-tight leading-snug">
                  {s.title}
                </h3>
                <ArrowUpRight
                  size={17}
                  className="text-gray-300 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5"
                />
              </div>

              <p className="text-xs text-gray-400 font-medium mb-3">
                {s.subtitle}
              </p>

              {/* Animated underline */}
              <div className="w-8 h-px bg-gray-200 mb-4 group-hover:w-14 group-hover:bg-primary-400 transition-all duration-500 ease-out" />

              <p className="text-[13.5px] text-gray-500 leading-relaxed mb-5 flex-1">
                {s.description}
              </p>

              <ul className="space-y-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0" />
                    <span className="text-[12px] text-gray-500 font-medium">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mobile bottom CTA */}
        <div className="mt-6 flex items-center gap-2 lg:hidden">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-600">
            Explore Solution
          </span>

          <ArrowRight
            size={13}
            className="text-amber-600"
          />
        </div>
            </div>
          </Link>
        ))}
      </div>
      
    </PageWrapper>
  );
}
