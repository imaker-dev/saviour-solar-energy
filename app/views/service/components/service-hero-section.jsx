// "use client";

// import { ArrowRight, Sparkles } from "lucide-react";
// import PageWrapper from "../../../components/page-wrapper";
// import PlayButton from "../../../components/play-button";

// export default function ServiceHeroSection({
//   hero,
//   eyebrow = "Solar Energy Solutions",
//   ctaLabel = "Get a Free Quote",
//   ctaHref = "#consultation",
//   secondaryLabel = "View All Services",
//   secondaryHref = "#services",
// }) {
//   const { title, subtitle, image, alt, videoUrl } = hero;

//   // Highlights the real last two words of the title — nothing invented.
//   const words = title.trim().split(" ");
//   const hasHighlight = words.length >= 3;
//   const lead = hasHighlight ? words.slice(0, -2).join(" ") : title;
//   const highlight = hasHighlight ? words.slice(-2).join(" ") : "";

//   return (
//     <PageWrapper
//       className="relative overflow-hidden bg-[#FCFDFB]"
//       containerClassName="pt-20"
//     >
//       <style jsx>{`
//         @keyframes floatBlobA {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(30px, -40px) scale(1.1);
//           }
//         }
//         @keyframes floatBlobB {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(-25px, 30px) scale(1.06);
//           }
//         }
//         @keyframes ringPulse {
//           0% {
//             transform: scale(1);
//             opacity: 0.55;
//           }
//           100% {
//             transform: scale(1.4);
//             opacity: 0;
//           }
//         }
//         @keyframes drift {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 60px 60px;
//           }
//         }
//         .blob-a {
//           animation: floatBlobA 11s ease-in-out infinite;
//         }
//         .blob-b {
//           animation: floatBlobB 13s ease-in-out infinite;
//         }
//         .ring-pulse {
//           animation: ringPulse 2.1s ease-out infinite;
//         }
//         .dot-drift {
//           animation: drift 18s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .blob-a,
//           .blob-b,
//           .ring-pulse,
//           .dot-drift {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* animated dot grid */}
//       <div
//         className="dot-drift pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(#DCE7D3_1.5px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_75%_65%_at_30%_10%,black_30%,transparent_100%)]"
//         aria-hidden="true"
//       />

//       {/* animated gradient blobs */}
//       <div
//         className="blob-a pointer-events-none absolute -top-32 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#54A836]/15 blur-[90px]"
//         aria-hidden="true"
//       />
//       <div
//         className="blob-b pointer-events-none absolute bottom-[-6rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#3B82C4]/10 blur-[90px]"
//         aria-hidden="true"
//       />

//       <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
//         {/* Media, layered card */}
//         <div className="relative order-2 lg:order-1">
//           <div
//             className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#54A836]/20 via-[#54A836]/10 to-transparent"
//             style={{ transform: "rotate(4deg) translate(14px, 14px)" }}
//             aria-hidden="true"
//           />
//           <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-black/5 shadow-[0_35px_70px_-25px_rgba(15,23,20,0.35)] sm:aspect-[5/4]">
//             <img src={image} alt={alt} className="h-full w-full object-cover" />

//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

//             {videoUrl && (
//               <PlayButton className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#0B1120]/45 backdrop-blur-sm transition-transform hover:scale-105" />
//             )}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="order-1 flex gap-5 lg:order-2">
//           <div className="mt-2 hidden lg:block" aria-hidden="true" />
//           <div className="max-w-xl">
//             {eyebrow && (
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#54A836]/25 bg-[#EAF4E3] px-4 py-1.5">
//                 <Sparkles
//                   className="h-3.5 w-3.5 text-[#3F7D2A]"
//                   aria-hidden="true"
//                 />
//                 <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#3F7D2A]">
//                   {eyebrow}
//                 </span>
//               </div>
//             )}

//             <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0B1120] sm:text-5xl lg:text-[3.15rem]">
//               {lead}
//               {hasHighlight && (
//                 <>
//                   {" "}
//                   <span className="relative inline-block whitespace-nowrap text-primary-500">
//                     {highlight}
//                     <svg
//                       className="absolute -bottom-1.5 left-0 w-full"
//                       height="8"
//                       viewBox="0 0 200 8"
//                       fill="none"
//                       preserveAspectRatio="none"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M1 5.5C45 1.5 155 1.5 199 5.5"
//                         stroke="#54A836"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </span>
//                 </>
//               )}
//             </h1>

//             <p className="mt-6 text-base leading-relaxed text-[#5B6472] sm:text-lg">
//               {subtitle}
//             </p>

//             <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
//               <a
//                 href={ctaHref}
//                 className="group inline-flex items-center gap-3 rounded-full bg-[#54A836] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-[0_16px_32px_-12px_rgba(84,168,54,0.65)] transition-colors hover:bg-[#428429]"
//               >
//                 {ctaLabel}
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
//                   <ArrowRight className="h-4 w-4 text-white" />
//                 </span>
//               </a>
//               <a
//                 href={secondaryHref}
//                 className="group inline-flex items-center gap-2 text-sm font-bold text-[#0B1120]"
//               >
//                 <span className="border-b-2 border-[#0B1120]/20 pb-0.5 transition-colors group-hover:border-[#54A836]">
//                   {secondaryLabel}
//                 </span>
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageWrapper>
//   );
// }

import { ArrowRight, Play, CheckCircle2, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../../../components/page-wrapper";
import PlayButton from "../../../components/play-button";
const ServiceHeroSection = ({ hero }) => {
  const renderTitle = (title, highlight) => {
    if (!highlight) return title;

    const start = title.indexOf(highlight);

    if (start === -1) return title;

    return (
      <>
        {title.slice(0, start)}
        <span className="text-primary-500">{highlight}</span>
        {title.slice(start + highlight.length)}
      </>
    );
  };

  return (
    <PageWrapper
      className="relative overflow-hidden"
      containerClassName="pt-16"
    >
      {/* ─── Dot Pattern Background ─── */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(46,58,69,0.14) 1.4px, transparent 1.6px)",
          backgroundSize: "20px 20px",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Content Container ─── */}
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ─── LEFT: Image (Mirrored Layout) ─── */}
        <div
          className={`relative order-2 lg:order-1 transition-all duration-700 ease-out `}
        >
          {/* Image Frame */}
          <div className="relative h-80 sm:h-96 lg:h-[30rem] overflow-hidden rounded-[1.75rem] shadow shadow-[#2E3A45]/20">
            <Image
              src={hero?.image || "/api/placeholder/800/600"}
              alt={
                hero?.alt ||
                "Solar technician inspecting a rooftop panel installation"
              }
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2E3A45]/25 via-transparent to-transparent" />

            {/* Video Play Button - Centered with absolute positioning */}
            {hero?.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton className="" />
              </div>
            )}
          </div>
        </div>

        {/* ─── RIGHT: Content ─── */}
        <div
          className={`relative order-1 lg:order-2 transition-all duration-700 ease-out delay-100 `}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <Sun className="h-4 w-4 text-primary-500" strokeWidth={2} />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#647082]">
              {hero?.eyebrow}
            </span>
          </div>

          {/* Headline */}

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#2E3A45] sm:text-5xl lg:text-[3.1rem]">
            {renderTitle(hero?.title, hero?.highlight)}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#647082] sm:text-lg">
            {hero?.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-500 py-2 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4C8A2B] active:scale-[0.98]"
            >
              Get Free Quote
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-500 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/services"
              className="text-sm font-semibold text-[#2E3A45] underline decoration-[#647082]/40 decoration-2 underline-offset-[5px] transition-colors duration-200 hover:decoration-primary-500"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServiceHeroSection;
