"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { getServiceCards } from "@/data/services.js";
import ServiceCard from "../../home/components/service-card";

export default function OurServicesSlider() {
  const services = getServiceCards();

  return (
    <PageWrapper>
      <div className="text-center">
        <SectionHeader
          badge="Our Services"
          title="Services for Sustainable Energy"
          highlight="Sustainable Energy"
          actions={
            <Link href="/services" className="group btn btn-lg btn-primary">
              View All Services
              <span className="btn-icon text-primary-500">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          }
        />
      </div>

      <div>
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
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="h-auto">
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous service"
            className="services-prev flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next service"
            className="services-next flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
