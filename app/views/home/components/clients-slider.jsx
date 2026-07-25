'use client';
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// swiper core styles — required, not "custom" CSS
import "swiper/css";
import "swiper/css/free-mode";
import PageWrapper from "@/app/components/page-wrapper";

const CLIENTS = [
  { name: "Northpeak", logo: "https://placehold.co/120x40?text=Northpeak" },
  { name: "Velora", logo: "https://placehold.co/120x40?text=Velora" },
  { name: "Ignis Labs", logo: "https://placehold.co/120x40?text=Ignis+Labs" },
  { name: "Arclight", logo: "https://placehold.co/120x40?text=Arclight" },
  { name: "Evergreen Co.", logo: "https://placehold.co/120x40?text=Evergreen" },
  { name: "Meridian", logo: "https://placehold.co/120x40?text=Meridian" },
  { name: "Harborline", logo: "https://placehold.co/120x40?text=Harborline" },
  { name: "Stratos", logo: "https://placehold.co/120x40?text=Stratos" },
];

export default function ClientsSlider() {
  const swiperRef = useRef(null);

  return (
    <PageWrapper>
    <Swiper
      onSwiper={(s) => (swiperRef.current = s)}
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={20}
      loop
      allowTouchMove
      speed={3000}
      freeMode={{ enabled: true, momentum: false }}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
      className="!py-2"
    >
      {CLIENTS.map(({ name, logo }) => (
        <SwiperSlide key={name} className="!w-auto">
          <div className="group flex items-center gap-3 border border-neutral-200 bg-white px-7 py-5 grayscale opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0">
            <img src={logo} alt={name} className="h-8 w-auto object-contain" />
            {/* <span className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-wide text-neutral-800">
              {name}
            </span> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </PageWrapper>
  );
}