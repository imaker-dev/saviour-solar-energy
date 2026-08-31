"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
import { getProjectCards } from "@/data/projects.js";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Ruler,
  Zap,
} from "lucide-react";

export default function OurProjectSection() {
  const projects = getProjectCards();
  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge="Our Latest Projects"
        title="Explore Our Portfolio"
        highlight="Portfolio"
        actions={
          <Link href="/projects" className="btn btn-lg btn-primary">
            View All Projects
            <span className="btn-icon text-primary-500">
              <ArrowRight size={16} />
            </span>
          </Link>
        }
      />

      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Keyboard]}
          spaceBetween={16}
          slidesPerView={1.12}
          loop
          speed={700}
          grabCursor
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!pb-2"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="!h-auto">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            className="projects-prev flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next project"
            className="projects-next flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

const ProjectCard = ({ project }) => {
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Status */}
        {project.status && (
          <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {project.status}
          </span>
        )}

        {/* Title */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          {project.projectType && (
            <span className="mb-1.5 inline-block text-[10.5px] font-bold uppercase tracking-widest text-amber-400">
              {project.projectType}
            </span>
          )}

          <h3 className="text-[1.25rem] font-semibold leading-tight tracking-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5">
        <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-gray-500 transition-all duration-300 group-hover:text-gray-700">
          {project.shortDescription}
        </p>

        {/* Stats: area + power, now on solid ground instead of the photo */}
        <div className="mb-4 flex items-stretch divide-x divide-gray-100 rounded-2xl bg-gray-50 py-3">
          {project.totalArea && (
            <div className="flex flex-1 items-center justify-center gap-2 px-3">
              <Ruler size={15} className="shrink-0 text-primary-500" />
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-gray-900">
                  {project.totalArea}
                </div>
                <div className="text-[10px] text-gray-400">
                  installed area
                </div>
              </div>
            </div>
          )}

          {project.systemSize && (
            <div className="flex flex-1 items-center justify-center gap-2 px-3">
              <Zap size={15} className="shrink-0 text-primary-500" />
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-gray-900">
                  {project.systemSize}
                </div>
                <div className="text-[10px] text-gray-400">system size</div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div className="flex min-w-0 items-center gap-1.5 text-[12px] text-gray-500">
            <MapPin size={12} className="shrink-0 text-primary-500" />

            <span className="truncate font-medium text-gray-700">
              {project.location}
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1.5 text-[11.5px] font-semibold text-gray-700 transition-all duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white">
            View Project
            <ArrowUpRight
              size={13}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};