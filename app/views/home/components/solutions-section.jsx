import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { getSectorsCards } from "@/data/sectors";

function CapacityMeter({ scale }) {
  const bars = 4;
  const filled = Math.max(1, Math.round((scale / 100) * bars));

  return (
    <div className="flex items-end gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${
            i < filled ? "bg-green-600" : "bg-slate-200"
          }`}
          style={{ height: `${7 + i * 3.5}px` }}
        />
      ))}
    </div>
  );
}

function SectorCard({ sector }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white transition-all hover:shadow-xl hover:shadow-slate-200/70">
      {/* duotone image header — same green tint on every photo, unifies the set */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={sector.image}
          alt={sector.title}
          className="h-full w-full scale-105 object-cover  transition-transform duration-500 group-hover:scale-110"
        />
        {/* <div className="absolute inset-0 bg-green-700 mix-blend-multiply" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" /> */}

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 font-mono text-[11px] font-bold text-slate-900 backdrop-blur-sm">
          <Zap size={11} className="text-green-600" strokeWidth={2.5} />
          {sector.range}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-green-600">
          {sector.subtitle}
        </span>
        <h3 className="mt-1 text-lg font-extrabold tracking-tight text-slate-900">
          {sector.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500 ">
          {sector.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <CapacityMeter scale={sector.scale} />

          <Link
            href={`/sectors/${sector.id}`}
            className="btn btn-primary"
          >
            Explore
            <span className="btn-icon text-primary-500">
              <ArrowRight size={13} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const sectors = getSectorsCards();
  return (
    <PageWrapper className="bg-gray-50">
      <SectionHeader
        badge="Who We Serve"
        title="Solutions for Every Scale"
        highlight="Every Scale"
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </PageWrapper>
  );
}
