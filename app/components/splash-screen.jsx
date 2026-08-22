"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BRAND_ICON, SITE_CONFIG } from "../const";

export default function SplashScreen({ isLoading = true, onExitComplete }) {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isLoading && mounted && !exiting) {
      setExiting(true);
      const t = setTimeout(() => {
        setMounted(false);
        onExitComplete?.();
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isLoading, mounted, exiting, onExitComplete]);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={isLoading}
      className={[
        "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
        "px-6 transition-all duration-500 ease-out",
        exiting ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100",
      ].join(" ")}
      style={{ backgroundColor: "#F4F6F9" }}
    >
      {/* Soft ambient glow behind the mark — depth, not decoration */}
      <div
        className="imr-glow pointer-events-none absolute rounded-full"
        style={{
          width: "min(60vw, 420px)",
          height: "min(60vw, 420px)",
          background:
            "radial-gradient(circle, rgba(234,25,73,0.10) 0%, rgba(234,25,73,0) 70%)",
        }}
      />

      <div className="relative flex flex-col items-center text-center">
        <div
          className="imr-icon"
          style={{
            width: "clamp(76px, 16vw, 104px)",
            height: "clamp(76px, 16vw, 104px)",
          }}
        >
          <Image
            src={BRAND_ICON}
            alt={SITE_CONFIG.name}
            width={208}
            height={208}
            priority
            draggable={false}
            className="h-full w-full select-none object-contain"
          />
        </div>

        <h1
          className="imr-text mt-6 font-semibold text-[#1C2B3D]"
          style={{
            fontFamily:
              "var(--font-sans, ui-sans-serif, system-ui, -apple-system, sans-serif)",
            fontSize: "clamp(1.125rem, 2.6vw, 1.375rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {SITE_CONFIG.name}
        </h1>

        {/* Thin rule + eyebrow — quiet premium signature, not a progress bar */}
        <div className="imr-rule mt-4 flex items-center gap-2.5">
          <span className="h-px w-5 bg-[#1C2B3D]/15" />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1C2B3D]/40"
          >
            {SITE_CONFIG.tagline || "Welcome"}
          </span>
          <span className="h-px w-5 bg-[#1C2B3D]/15" />
        </div>
      </div>

      <span className="sr-only">Loading {SITE_CONFIG.name}</span>

      <style jsx>{`
        .imr-glow {
          animation: imr-glow-in 900ms ease-out both,
            imr-breathe 3.2s ease-in-out 900ms infinite;
        }
        .imr-icon {
          animation: imr-icon-in 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .imr-text {
          animation: imr-text-in 600ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;
        }
        .imr-rule {
          animation: imr-text-in 600ms cubic-bezier(0.16, 1, 0.3, 1) 320ms both;
        }

        @keyframes imr-glow-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes imr-breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.75;
          }
        }
        @keyframes imr-icon-in {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(8px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
        @keyframes imr-text-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .imr-glow,
          .imr-icon,
          .imr-text,
          .imr-rule {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
}