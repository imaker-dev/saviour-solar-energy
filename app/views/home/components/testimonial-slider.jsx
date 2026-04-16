"use client";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { Quote } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    quote:
      "Installed solar panels for our home and saw a big drop in electricity bills. Easy process, great support, and now we enjoy reliable clean energy daily.",
    name: "Ramesh Patel",
    location: "Ahmedabad, Gujarat",
    initials: "R",
  },
  {
    id: 2,
    quote:
      "Smooth installation and clear guidance throughout. My shop now runs on solar power, and monthly savings have made a noticeable difference.",
    name: "Anita Sharma",
    location: "Delhi",
    initials: "A",
  },
  {
    id: 3,
    quote:
      "Very beginner-friendly experience! System works great even in peak summer. Feels good to save money and stay connected to sustainable living.",
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    initials: "V",
  },
  {
    id: 4,
    quote:
      "Switching to solar was the best decision for our family. Installation was quick, and we’ve already noticed significant savings on monthly bills.",
    name: "Mehul Shah",
    location: "Surat, Gujarat",
    initials: "M",
  },
  {
    id: 5,
    quote:
      "Professional team and smooth process from start to finish. My office now runs efficiently on solar, and the cost benefits are clearly visible.",
    name: "Priya Verma",
    location: "Mumbai, Maharashtra",
    initials: "P",
  },
  {
    id: 6,
    quote:
      "Great experience overall! The system performs well even during cloudy days. It feels rewarding to reduce electricity costs and go eco-friendly.",
    name: "Arjun Mehta",
    location: "Pune, Maharashtra",
    initials: "A",
  },
  {
    id: 7,
    quote:
      "Very satisfied with the service and installation quality. Our factory now uses solar energy daily, helping us cut expenses and stay sustainable.",
    name: "Karan Gupta",
    location: "Ludhiana, Punjab",
    initials: "K",
  },
  {
    id: 8,
    quote:
      "Clear communication and timely installation made everything easy. We’re saving money every month and contributing to a cleaner environment.",
    name: "Neha Kapoor",
    location: "Chandigarh",
    initials: "N",
  },
  {
    id: 9,
    quote:
      "Reliable system and excellent support team. Even during high usage, solar power keeps things running smoothly and reduces our dependence on grid power.",
    name: "Sandeep Reddy",
    location: "Hyderabad, Telangana",
    initials: "S",
  },
];

function TestimonialCard({ testimonial, index }) {
  return (
    <div
      className="relative h-full bg-white p-6 flex flex-col justify-between 
       border border-slate-200 hover:shadow-md transition-shadow duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-8 w-12 h-1.5 rounded-b-full bg-primary-500" />

      {/* CONTENT */}
      <div className="flex flex-col flex-1">
        <Quote
          size={28}
          className="text-slate-200 mb-4 flex-shrink-0"
          fill="currentColor"
          strokeWidth={0}
        />

        {/* FIXED HEIGHT TEXT */}
        <p className="text-slate-700 text-[15px] leading-relaxed font-medium line-clamp-4 min-h-[96px]">
          {testimonial.quote}
        </p>
      </div>

      {/* USER */}
      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm leading-tight">
            {testimonial.name}
          </p>
          <p className="text-slate-400 text-xs mt-0.5">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

const TestimonialSlider = () => {
  return (
    <PageWrapper>
      <SectionHeader
        badge={"Solar Customer Reviews"}
        title={"Happy Indian Clients"}
        description={
          "Real stories from customers who switched to solar and started saving every month."
        }
      />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={t.id} className="p-2">
            <TestimonialCard testimonial={t} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PageWrapper>
  );
};

export default TestimonialSlider;
