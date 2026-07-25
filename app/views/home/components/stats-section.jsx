"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { Zap, CalendarDays, Users, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Zap, value: 8, suffix: "MW+", label: "Total Installed Capacity" },
  { icon: CalendarDays, value: 24, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 75, suffix: "+", label: "In-House Engineers" },
  { icon: Leaf, value: 12, suffix: "K+", label: "Tons of CO\u2082 Offset" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let frame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return count;
}

function StatItem({ icon: Icon, value, suffix, label, start, isLast }) {
  const count = useCountUp(value, 1800, start);

  return (
    <div
      className={`relative flex flex-col items-center gap-3 px-6 py-2 text-center ${
        !isLast ? "sm:border-r sm:border-white/10" : ""
      }`}
    >
      {/* <Icon className="h-7 w-7 text-primary-400" strokeWidth={1.75} /> */}

      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {count}
        <span className="text-primary-400">{suffix}</span>
      </div>

      <p className="max-w-[170px] text-sm font-medium leading-snug text-white/60">
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
    <PageWrapper className="bg-secondary-500" topEdge bottomEdge edgeClassName="text-secondary-500">
      <div
        ref={ref}
        className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-y-0"
      >
        {stats.map((s, i) => (
          <StatItem
            key={s.label}
            {...s}
            start={started}
            isLast={i === stats.length - 1}
          />
        ))}
      </div>
    </PageWrapper>
  );
}