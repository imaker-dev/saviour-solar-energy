import { ArrowUpRight, Check, Landmark } from "lucide-react";
import Link from "next/link";
import React from "react";

const SchemeCard = ({ scheme }) => {
  return (
    <Link
      key={scheme.id}
      href={`/schemes/${scheme.id}`}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-950/10 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      <div>
        <div className="flex items-start justify-between mb-6">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-50 group-hover:bg-primary-100 transition-colors duration-300">
            <Landmark
              size={19}
              strokeWidth={2}
              className="text-gray-950 group-hover:text-primary-500 transition-colors duration-300"
            />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 pt-2">
            {scheme.eyebrow}
          </span>
        </div>

        <p className="text-3xl font-bold text-gray-950 leading-none mb-2">
          {scheme.headlineHighlight}
        </p>
        <p className="text-sm font-medium text-gray-950 mb-3">
          {scheme.headlinePrefix} {scheme.headlineHighlight}{" "}
          {scheme.headlineSuffix}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {scheme.summary}
        </p>

        <ul className="space-y-2.5 mb-8">
          {scheme.perks.slice(0, 2).map((p) => (
            <li key={p} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                <Check size={9} className="text-primary-500" strokeWidth={3} />
              </span>
              <span className="text-sm text-gray-700">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-950">
        View details
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
};

export default SchemeCard;
