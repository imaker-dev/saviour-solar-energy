"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8000, display: "8K", label: "Total installed power" },
  { value: 24, display: "24", label: "Years of experience" },
  { value: 75, display: "75", label: "Professionals in our team" },
  { value: 3000, display: "3K", label: "Our clients worldwide" },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function formatNumber(val) {
  if (val >= 1000) return Math.floor(val / 1000) + "K";
  return val;
}

function StatItem({ value, display, label, start }) {
  const count = useCountUp(value, 2000, start);

  return (
    <div className="relative flex items-center gap-4">
      {/* OUTLINE Background Number */}
      <span
        className="hidden md:absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[150px] font-extrabold select-none pointer-events-none"
        style={{
          WebkitTextStroke: "1.5px rgba(0,0,0,0.08)",
          color: "transparent",
        }}
      >
        {display}
      </span>

      {/* Foreground Number */}
      <div className="text-5xl md:text-6xl font-extrabold text-primary-500 z-10">
        {formatNumber(count)}
      </div>

      {/* Label */}
      <p className="text-white/80 text-sm md:text-base font-medium max-w-[150px] leading-snug z-10">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <PageWrapper
      className="bg-white"
      paddingY="py-0"
      containerClassName="bg-secondary-500 px-10 py-16"
    >
      <div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16"
      >
        {stats.map((s, i) => (
          <StatItem key={i} {...s} start={started} />
        ))}
      </div>
    </PageWrapper>
  );
}
