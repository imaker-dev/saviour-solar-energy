"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader, { HighlightText } from "@/app/components/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { getProjectCards } from "@/data/projects.js";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Zap } from "lucide-react";

export default function OurProjectSection() {
  const projects = getProjectCards();
  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge="Our Latest Projects"
        title={"Explore Our Portfolio of Featured Projects"}
        highlight={"Featured Projects"}
      />

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="btn btn-lg btn-primary"
          // className="inline-flex items-center justify-center rounded-full bg-primary-500 px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30"
        >
          View All Projects
          <ArrowRight size={16}/>
        </Link>
      </div>
    </PageWrapper>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <Link href={"#"} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 mb-5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className=" ">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[1.1rem] font-semibold text-gray-950 leading-snug tracking-tight group-hover:text-amber-600 transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="flex-shrink-0 mt-0.5 text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>

        {/* Description */}
        <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Meta pills */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-[11.5px] text-gray-500 font-medium">
            <MapPin size={11} className="text-amber-400" />
            {project.location}
          </span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="flex items-center gap-1.5 text-[11.5px] text-gray-500 font-medium">
            <Zap size={11} className="text-amber-400" />
            {project.capacity}
          </span>
        </div>
      </div>
    </Link>
  );
};
