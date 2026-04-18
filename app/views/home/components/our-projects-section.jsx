"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { getAllProjects } from "@/data/projects.js";
import ProjectCard from "@/app/views/projects/components/project-card";
import Link from "next/link";

export default function OurProjectSection() {
  const projects = getAllProjects();
  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge={"OUR PROJECTS"}
        title={"Showcase of Completed Projects"}
        description={
          "Explore our successfully completed solar installations across residential, commercial, and industrial sectors."
        }
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

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <Link href={'/projects'} className="btn btn-primary">View All Projects</Link>
      </div>
    </PageWrapper>
  );
}
