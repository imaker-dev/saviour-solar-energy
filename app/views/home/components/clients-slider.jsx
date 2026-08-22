"use client";
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

const LOOP_SET = [...CLIENTS, ...CLIENTS];

export default function ClientsSlider() {
  return (
    <PageWrapper containerWidth="max-w-container mx-auto">
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] sm:gap-14">
          {LOOP_SET.map(({ name, logo }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex h-10 w-28 shrink-0 items-center justify-center sm:h-12 sm:w-32"
            >
              <img
                src={'/Images/logo.svg'}
                // src={logo}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </PageWrapper>
  );
}