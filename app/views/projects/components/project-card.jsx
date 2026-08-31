import React from "react";
import { MapPin, Ruler, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project, reverse = false }) => {
  const {
    id,
    title,
    description,
    image,
    location,
    totalArea,
    systemSize,
    status,
    projectType,
    tags = [],
  } = project;

  const stats = [
    { icon: Ruler, value: totalArea },
    { icon: Zap, value: systemSize },
    { icon: MapPin, value: location },
  ].filter((stat) => stat.value);

  const visibleTags = tags.slice(0, 3);
  const extraTagCount = tags.length - visibleTags.length;

  return (
    <article
      className={`group flex flex-col gap-8 md:flex-row md:items-center md:gap-14 lg:gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full shrink-0 md:w-1/2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-[0_25px_60px_-20px_rgba(15,23,42,0.3)]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />

          {status && (
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {status}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col justify-center md:w-1/2">
        {projectType && (
          <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-amber-500">
            {projectType}
          </span>
        )}

        <h3 className="text-[1.6rem] font-bold leading-[1.15] tracking-tight text-gray-900 md:text-[1.85rem]">
          {title}
        </h3>

        {description && (
          <p className="mt-3.5 max-w-lg text-[14.5px] leading-[1.7] text-gray-500 line-clamp-4">
            {description}
          </p>
        )}

        {stats.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            {stats.map(({ icon: Icon, value }, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-[13px] font-medium text-gray-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50">
                  <Icon size={12.5} className="text-primary-600" />
                </span>
                {value}
              </span>
            ))}
          </div>
        )}

        {visibleTags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-50 px-3 py-1 text-[11px] font-medium tracking-wide text-gray-600 ring-1 ring-inset ring-gray-100"
              >
                {tag}
              </span>
            ))}
            {extraTagCount > 0 && (
              <span className="rounded-full bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-400 ring-1 ring-inset ring-gray-100">
                +{extraTagCount}
              </span>
            )}
          </div>
        )}

        <Link
          href={`/projects/${id}`}
          className="mt-7 flex w-fit items-center gap-1.5 border-b border-transparent pb-0.5 text-[13.5px] font-semibold text-gray-900 transition-all duration-300 group-hover:gap-2.5 group-hover:border-primary-500 group-hover:text-primary-600"
        >
          View Project
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
