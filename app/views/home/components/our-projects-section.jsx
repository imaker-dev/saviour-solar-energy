"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const projects = [
  {
    id: 1,
    image: "/Images/project-1.webp",
  },
  {
    id: 2,
    image: "/Images/project-2.webp",
  },
  {
    id: 3,
    image: "/Images/project-3.webp",
  },
  {
    id: 4,
    image: "/Images/project-4.webp",
  },
];

export default function OurProjectSection() {
  return (
    <PageWrapper className="bg-secondary-900 text-white">
      <SectionHeader
        badge={"OUR PROJECTS"}
        title={"Showcase of Completed Projects"}
        description={
          "Explore our successfully completed solar installations across residential, commercial, and industrial sectors."
        }
        light
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
            <div className="overflow-hidden group cursor-pointer">
              <img
                src={project.image}
                className="w-full h-[260px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary">View All Projects</button>
      </div>
    </PageWrapper>
  );
}
