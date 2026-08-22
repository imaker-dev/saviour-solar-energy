"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader, { HighlightText } from "@/app/components/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { getProjectCards } from "@/data/projects.js";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Ruler } from "lucide-react";

export default function OurProjectSection() {
  const projects = getProjectCards();

  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge="Our Latest Projects"
        title={"Explore Our Portfolio"}
        highlight={"Portfolio"}
      />

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-2"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-10 flex justify-center">
        <Link href="/projects" className="btn btn-lg btn-primary">
          View All Projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </PageWrapper>
  );
}

const ProjectCard = ({ project }) => {
  const primaryTag = project.tags?.[0];
  const statusTag = project.tags?.[project.tags.length - 1];
  const areaNumber = project.totalArea?.split(" ")[0]; // "18,500"
  const areaUnit = project.totalArea?.split(" ").slice(1).join(" "); // "sq.ft."

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-gray-950/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow hover:shadow-gray-900/10 hover:ring-gray-950/[0.08]"
    >
      {/* Image */}
      <div className="relative aspect-[16/12] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Status, top left, quiet */}
        {statusTag && (
          <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {statusTag}
          </span>
        )}

        {/* Hero stat, top right — the "catchy" anchor */}
        <div className="absolute right-4 top-4 flex flex-col items-end">
          <span className="text-[1.4rem] font-bold leading-none text-white">
            {areaNumber}
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-amber-400">
            {areaUnit} installed
          </span>
        </div>

        {/* Title on image */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          {primaryTag && (
            <span className="mb-1.5 inline-block text-[10.5px] font-bold uppercase tracking-widest text-amber-400">
              {primaryTag}
            </span>
          )}
          <h3 className="text-[1.25rem] font-semibold leading-tight tracking-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5">
        {/* Description, slides up and fades on hover to reveal footer sooner */}
        <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-gray-500 transition-all duration-300 group-hover:text-gray-700">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
            <MapPin size={12} className="text-primary-500" />
            <span className="font-medium text-gray-700">
              {project.location}
            </span>
          </div>

          {/* CTA — the click trigger */}
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-900 transition-all duration-300 group-hover:gap-2.5 group-hover:text-primary-500">
            View Project
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};
