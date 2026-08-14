import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Tractor,
  Home,
  Building2,
  HeartPulse,
  Warehouse,
  Sun,
} from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project, reverse = false }) => {
  const {
    title,
    description,
    image,
    location,
    totalArea,
    clientName,
    tags = [],
  } = project;

  const details = [
    { label: "Location", value: location },
    { label: "Total Area", value: totalArea },
    { label: "Client", value: clientName },
  ];

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[28px] p-4 bg-white shadowsm transition-all duration-500  md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-1/2 rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex w-full flex-col justify-center p-4 md:w-1/2 md:p-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-600">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-5">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-5 space-y-2.5">
          {details.map(({ label, value }) => (
            <li
              key={label}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                strokeWidth={2.25}
              />
              <span>
                <span className="font-medium text-slate-900">{label}:</span>{" "}
                {value}
              </span>
            </li>
          ))}
        </ul>

        <Link
        href={`/projects/${project.id}`}
          className="group/link mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
