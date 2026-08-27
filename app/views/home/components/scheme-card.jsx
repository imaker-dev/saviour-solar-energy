import { ArrowUpRight, Check, Landmark, Percent } from "lucide-react";
import Link from "next/link";
import React from "react";

// One icon per scheme category, so a subsidy card and a financing card
// don't look identical at a glance. Falls back to Landmark for anything new.
const CATEGORY_ICON = {
  "government-subsidy": Landmark,
  "solar-financing": Percent,
};

const SchemeCard = ({ scheme }) => {
  const { listing, hero } = scheme;
  const Icon = CATEGORY_ICON[scheme.category] ?? Landmark;

  return (
    <Link
      href={`/schemes/${scheme.id}`}
      className="group relative flex h-full flex-col justify-between p-7 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-950/10 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-50 group-hover:bg-primary-100 transition-colors duration-300">
            <Icon
              size={19}
              strokeWidth={2}
              className="text-gray-950 group-hover:text-primary-500 transition-colors duration-300"
            />
          </span>

          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 pt-2">
            {listing.label}
          </span>
        </div>

        {/* Main Highlight */}
        <p className="text-3xl font-bold text-gray-950 leading-none mb-3">
          {hero.title.highlight}
        </p>

        {/* Summary — this is the one line that carries the actual meaning,
            since the highlight above is just the number in isolation. */}
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
          {listing.summary}
        </p>

        {/* Benefits — now sourced from hero.benefits per the current schema */}
        <ul className="space-y-2.5 mb-8">
          {hero.benefits.items.slice(0, 2).map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                <Check size={9} className="text-primary-500" strokeWidth={3} />
              </span>
              <span className="text-sm text-gray-700 line-clamp-1">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
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
