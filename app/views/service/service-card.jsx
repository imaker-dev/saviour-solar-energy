import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="group relative aspect-square shrink-0 snap-center overflow-hidden rounded-3xl bg-ink ring-1 ring-white/10 transition-all duration-500 [@media(hover:hover)]:hover:ring-white/20">
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/0 transition-colors duration-500 [@media(hover:hover)]:group-hover:from-black/75" />

      {/* Fine grain texture overlay — the "distinctive" touch: a near-invisible
          noise layer that keeps flat gradients from looking like flat digital fills */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Index */}
      {typeof index === "number" && (
        <span className="absolute left-5 top-5 font-mono text-xs font-semibold text-white/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      {/* Glass panel */}
      <div className="absolute inset-x-4 bottom-4 overflow-hidden rounded-2xl bg-black/15 p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-500 [@media(hover:hover)]:group-hover:bg-black/30">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 [@media(hover:hover)]:group-hover:text-primary-300">
            {service.title}
          </h3>

          <Link
            href={`/services/${service.id}`}
            aria-label={`View ${service.title} details`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 focus-visible:bg-primary-500 focus-visible:rotate-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 [@media(hover:hover)]:group-hover:rotate-45 [@media(hover:hover)]:group-hover:bg-primary-500"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile / touch: short teaser always visible, no hover dependency */}
        <p className="mt-2 line-clamp-1 text-sm text-white/60 [@media(hover:hover)]:hidden">
          {service.description}
        </p>
        <Link
          href={`/services/${service.id}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-300 [@media(hover:hover)]:hidden"
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        {/* Desktop / real hover: full description + CTA reveal */}
        <div className="hidden grid-rows-[0fr] transition-all duration-400 ease-out [@media(hover:hover)]:grid [@media(hover:hover)]:group-hover:mt-4 [@media(hover:hover)]:group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
              {service.description}
            </p>

            <Link
              href={`/services/${service.id}`}
              className="btn btn-primary mt-4"
            >
              Read more
              <span className="btn-icon text-primary-500">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;