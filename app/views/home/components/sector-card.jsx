import { ArrowUpRight, Building2, Factory, Home, Store } from "lucide-react";
import Link from "next/link";

const SECTOR_ICONS = {
  homes: Home,
  "housing-society": Building2,
  commercial: Store,
  industries: Factory,
};

function SectorCard({ sector }) {
  const Icon = SECTOR_ICONS[sector.id] || Home;

  return (
    <Link
      href={`/sectors/${sector.id}`}
      className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[24px] bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20 sm:min-h-[390px] sm:rounded-[26px] lg:min-h-[420px] lg:rounded-[28px]"
    >
      <img
        src={sector.image}
        alt={sector.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/45" />

      {/* <div className="relative z-10 p-4 sm:p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-sm sm:h-11 sm:w-11 sm:rounded-2xl">
          <Icon size={18} className="text-slate-900 sm:size-5" strokeWidth={2} />
        </div>
      </div> */}

      <div className="relative z-10 mt-auto p-5 sm:p-6">
        <span className="mb-1.5 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-green-400 sm:text-[11px]">
          {sector.range}
        </span>

        <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-[1.45rem] lg:text-[1.55rem]">
          {sector.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/80 sm:text-[13.5px]">
          {sector.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-bold text-slate-900 transition-all duration-300 group-hover:gap-3 group-hover:bg-primary-500 group-hover:text-white sm:mt-5 sm:text-[13px]">
          View Details
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default SectorCard;