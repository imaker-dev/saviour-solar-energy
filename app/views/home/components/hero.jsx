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
      className="relative overflow-hidden min-h-screen"
      containerClassName="pt-24 lg:pt-16"
    >
  {/* ---------------- BACKGROUND ---------------- */}
  <div
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(65% 55% at 82% 20%, rgba(234,179,8,0.07), transparent 70%), #ffffff",
    }}
  />

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
           From consultation and system design to installation and long-term support, Savior Solar delivers solutions built around your energy needs, property and budget.
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
