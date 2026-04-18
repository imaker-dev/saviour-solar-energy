"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import SectionHeader from "@/app/components/section-header";
import { getAllBlogs } from "@/data/blogs.js";
import { BlogCard } from "../../blogs/component/blog-card.jsx";

export default function BlogSlider() {
  const blogs = getAllBlogs();
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
        {/* <button className="prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1f6f5f] text-white flex items-center justify-center shadow-md">
          <ArrowLeft size={18} />
        </button> */}

        {/* RIGHT ARROW */}
        {/* <button className="next absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1f6f5f] text-white flex items-center justify-center shadow-md">
          <ArrowRight size={18} />
        </button> */}

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
              <BlogCard post={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PageWrapper>
  );
}
