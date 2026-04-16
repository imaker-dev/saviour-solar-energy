"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import SectionHeader from "@/app/components/section-header";

const blogs = [
  {
    id: 1,
    title: "How Solar Panels Reduce Your Electricity Bills",
    image: "/Images/project-1.webp",
    date: "January 3, 2026",
    category: "Savings",
  },
  {
    id: 2,
    title: "Top Benefits of Installing Solar for Your Home",
    image: "/Images/project-1.webp",
    date: "January 5, 2026",
    category: "Residential",
  },
  {
    id: 3,
    title: "Commercial Solar Solutions: ROI Explained",
    image: "/Images/project-1.webp",
    date: "January 8, 2026",
    category: "Commercial",
  },
];

export default function BlogSlider() {
  return (
    <PageWrapper className="bg-white">
      {/* HEADER */}
      <SectionHeader
        badge={"News & Articles"}
        title={"Our Latest News & Articles"}
        description={""}
      />

      {/* SLIDER */}
      <div className="relative">
        {/* LEFT ARROW */}
        <button className="prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1f6f5f] text-white flex items-center justify-center shadow-md">
          <ArrowLeft size={18} />
        </button>

        {/* RIGHT ARROW */}
        <button className="next absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1f6f5f] text-white flex items-center justify-center shadow-md">
          <ArrowRight size={18} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          spaceBetween={28}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="group">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={blog.image}
                    className="w-full h-[220px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-4">
                  {/* META */}
                  <div className="flex items-center gap-5 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary-500" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={14} className="text-primary-500" />
                      {blog.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-secondary-900 font-semibold text-[17px] leading-snug mb-5">
                    {blog.title}
                  </h3>

                  {/* BUTTON */}
                  <button className="btn btn-primary  hover:opacity-90 transition">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PageWrapper>
  );
}
