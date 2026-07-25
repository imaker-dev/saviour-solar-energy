import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      key={service.id}
      className="group relative aspect-square shrink-0 snap-center overflow-hidden rounded-2xl bg-ink"
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/75" />

      {/* Inset glass content panel */}
      <div className="absolute inset-x-4 bottom-4 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xs transition-colors duration-500 group-hover:bg-black/45">
        <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary-300">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
          {service.description}
        </p>

        {/* Read more — reveals on hover */}
        <div className="mt-4 grid transition-all duration-300 ease-out grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <Link
              href={`/services/${service.id}`}
              className="inline-flex items-center gap-3 rounded-full bg-primary-500 py-1.5 pl-4 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Read more
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-3.5 w-3.5 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
