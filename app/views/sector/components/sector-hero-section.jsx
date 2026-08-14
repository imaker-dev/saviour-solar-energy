import { ArrowRight, Play, CheckCircle2, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../../../components/page-wrapper";
import PlayButton from "../../../components/play-button";
const SectorHeroSection = ({ hero }) => {
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

      {/* ─── Green Glow Blob ─── */}
      <div
        className="absolute -top-12 -left-12 h-[420px] w-[420px] rounded-full blur-md"
        style={{
          background:
            "radial-gradient(circle, rgba(95,166,54,0.16) 0%, rgba(95,166,54,0) 70%)",
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

export default SectorHeroSection;
