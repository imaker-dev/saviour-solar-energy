"use client";
import React, { useEffect, useState } from "react";
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

function useTypewriterCycle(
  words,
  { typingSpeed = 65, deletingSpeed = 32, pauseDuration = 2200 } = {},
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // "typing" | "deleting"

  useEffect(() => {
    const currentWord = words[wordIndex];
    const jitter = (base) => base + Math.random() * (base * 0.35);

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const t = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, jitter(typingSpeed));
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), pauseDuration);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, jitter(deletingSpeed));
        return () => clearTimeout(t);
      }
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }
  }, [
    text,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return text;
}

const CYCLE_WORDS = ["Homes", "Businesses", "Societies", "Industries"];

const Hero = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const cyclingWord = useTypewriterCycle(CYCLE_WORDS);

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
        <div className="text-center lg:text-left">
          <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
            <Eyebrow>Complete Solar Solutions in Gujarat</Eyebrow>
          </div>

          <h1 className="mx-auto max-w-lg text-4xl font-semibold leading-[1.15] tracking-[-0.025em] text-slate-900 sm:text-5xl lg:mx-0 lg:text-[3.35rem]">
            Complete Solar Energy Solutions for{" "}
            <span className="relative inline-block min-w-[7ch] text-left text-primary-500">
              <span className="whitespace-nowrap">{cyclingWord}</span>
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-[0.9em] w-[2px] animate-pulse bg-primary-500 align-middle"
              />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-[#58595B] lg:mx-0">
            From trusted solar panels and inverters to complete installation,
            government-benefit assistance and after-sales support, Savior
            Renewable Energy delivers customized solar systems designed around
            your energy requirements and budget.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:gap-8 lg:justify-start">
            <Link
              href="/contact"
              className="btn btn-lg btn-primary btn-shine group"
            >
              Get a Free Solar Quote
              <span className="btn-icon">
                <ArrowRight className="h-4 w-4 text-primary-500 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link href="/services" className="btn btn-lg btn-secondary">
              Explore Solar Solutions
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative mx-auto flex w-[90%] items-center justify-center lg:mx-0 lg:h-full">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <Image
              src="/Images/new-hero.webp"
              alt="Renewable Energy"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover animate-[spin_40s_linear_infinite] motion-reduce:animate-none"
            />
          </div>
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
