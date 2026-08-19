"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";

const videos = [
  {
    id: "video-1",
    youtubeId: "q0iyeDc6LN4",
    title: "Customer Story 1",
  },
  {
    id: "video-2",
    youtubeId: "L-GvP1umbfM",
    title: "Customer Story 2",
  },
  {
    id: "video-3",
    youtubeId: "HP9lbRSZQBU",
    title: "Customer Story 3",
  },
  {
    id: "video-4",
    youtubeId: "RI6IFsrctDI",
    title: "Customer Story 4",
  },
  {
    id: "video-5",
    youtubeId: "Q6vXGKCv-Uk",
    title: "Customer Story 5",
  },
];

function SocialMediaSection({ videos: videoList = videos }) {
  return (
    <PageWrapper>
      <SectionHeader
        badge="Listen to their words"
        title="Businesses that switched never looked back"
      />

      <div className="mt-8">
        <Swiper
          modules={[Pagination]}
          grabCursor
          slidesPerView={1.25}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
              pagination: false,
            },
          }}
          className="customer-video-swiper !pb-10"
        >
          {videoList.map((video) => {
            const embedUrl =
              `https://www.youtube.com/embed/${video.youtubeId}` +
              `?autoplay=1` +
              `&mute=1` +
              `&controls=0` +
              `&loop=1` +
              `&playlist=${video.youtubeId}` +
              `&playsinline=1` +
              `&rel=0` +
              `&disablekb=1`;

            return (
              <SwiperSlide key={video.id}>
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    className="pointer-events-auto absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </PageWrapper>
  );
}

export default SocialMediaSection;
