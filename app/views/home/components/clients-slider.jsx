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

// Duplicate once — the CSS animation scrolls exactly one set-width,
// then loops back to 0, and since the second copy is identical,
// the loop point is invisible.
const LOOP_SET = [...CLIENTS, ...CLIENTS];

export default function ClientsSlider() {
  return (
    <PageWrapper>
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {LOOP_SET.map(({ name, logo }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex shrink-0 items-center gap-3 border border-neutral-200 bg-white px-7 py-5 grayscale opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={"/Images/logo.png"}
                alt={name}
                className="h-10 w-auto object-contain lg:h-16"
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
          animation: marquee 25s linear infinite;
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
