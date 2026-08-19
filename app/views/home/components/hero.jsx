"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import Image from "next/image";
import Link from "next/link";
import VideoOverlay from "@/app/components/video-overlay";
import PlayButton from "@/app/components/play-button";
import { Eyebrow } from "@/app/components/section-header";

function GetInTouchBadge() {
  return (
    <div className="absolute -top-3 -right-3 h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white p-1">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-[spin_14s_linear_infinite]"
      >
        <defs>
          {/* Top Arc */}
          <path id="topArc" d="M 15 50 A 35 35 0 0 1 85 50" />

          {/* Bottom Arc (reversed so text stays upright) */}
          <path id="bottomArc" d="M 85 50 A 35 35 0 0 1 15 50" />
        </defs>

        {/* Background */}
        <svg className="text-secondary-500">
          <circle cx="50" cy="50" r="49" fill="currentColor" />
        </svg>

        {/* Top Text */}
        <text fill="#fff" fontSize="8" fontWeight="700" letterSpacing="2">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            GET IN TOUCH
          </textPath>
        </text>

        {/* Bottom Text */}
        <text fill="#fff" fontSize="8" fontWeight="700" letterSpacing="2">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            GET IN TOUCH
          </textPath>
        </text>

        {/* Side Dots */}
        <circle cx="11" cy="50" r="2" fill="#fff" />
        <circle cx="89" cy="50" r="2" fill="#fff" />
      </svg>

      {/* Center Button */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full shadow-md bg-primary-500">
          <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <PageWrapper
      className="overflow-hidden min-h-screen"
      containerClassName="pt-24 lg:pt-20"
    >
      {/* ---------------- DECORATIVE BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="absolute inset-0 bg-[radial-gradient(#3F4347_1px,transparent_1px)] bg-[length:18px_18px] opacity-[0.18]" />

        <div
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary-400/10 
               blur-2xl animate-pulse [animation-duration:7s] motion-reduce:animate-none
               sm:h-80 sm:w-80 sm:blur-3xl
               lg:-top-32 lg:-left-32 lg:h-[30rem] lg:w-[30rem]"
        />
        <div
          className="absolute top-1/4 -right-16 h-56 w-56 rounded-full bg-amber-300/10 
               blur-2xl animate-pulse [animation-duration:9s] motion-reduce:animate-none
               sm:h-72 sm:w-72 sm:blur-3xl
               lg:top-1/3 lg:-right-20 lg:h-[26rem] lg:w-[26rem]"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      {/* ---------------- HERO CONTENT ---------------- */}
      <div className="relative z-10 grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: copy */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Eyebrow>RUSTED SOLAR EXPERTS SINCE 2004</Eyebrow>
          </div>

          <h1 className="max-w-lg text-4xl font-semibold leading-[1.15] text-[#3F4347] sm:text-5xl lg:text-[3.35rem]">
            Solar Energy Solutions for{" "}
            <span className="text-primary-500">Homes & Businesses</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#58595B]">
            Reduce electricity costs with high-performance solar panel
            installations, rooftop solar systems, battery storage, and renewable
            energy solutions designed for residential, commercial, and
            industrial properties.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="btn btn-lg btn-primary btn-shine group"
            >
              Get Free Quote
              <span className="btn-icon">
                <ArrowRight className="h-4 w-4 text-primary-500 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link href="/services" className="btn btn-lg btn-secondary">
              View All Services
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative mx-auto w-full lg:mx-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:rounded-[38px]">
            <Image
              src="/Images/intro.webp"
              alt="Renewable Energy"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <PlayButton
              onClick={() => setPlayVideo(true)}
              className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
            />
          </div>

          <GetInTouchBadge />
        </div>
      </div>

      <VideoOverlay
        isOpen={playVideo}
        onClose={() => setPlayVideo(false)}
        src="https://youtu.be/aqz-KE-bpKQ"
        title="Hero Video"
      />
    </PageWrapper>
  );
};

export default Hero;
