"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { getSectorsCards } from "@/data/sectors";
import SectorCard from "./sector-card";

export default function SectorsSection() {
  const sectors = getSectorsCards();

  return (
    <PageWrapper className="bg-gray-50">
      <SectionHeader
        badge="Who We Serve"
        title="Find the Right Solution for You"
        highlight="Right Solution"
      />

      <div className="relative ">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          slidesPerView={1.12}
          loop
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".sectors-prev",
            nextEl: ".sectors-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {sectors.map((sector) => (
            <SwiperSlide key={sector.id} className="h-auto">
              <SectorCard sector={sector} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous sector"
            className="sectors-prev flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next sector"
            className="sectors-next flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
