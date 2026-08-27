import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const { title, description, image, badge } = service || {};
  if (!service) return null;

  return (
    <Link
      href={`/services/${service.id}`}
      className="group relative block h-[300px] w-full overflow-hidden rounded-[1.75rem] bg-gray-100 ring-1 ring-black/[0.05] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-20px_rgba(17,24,39,0.28)] focus-visible:-translate-y-1.5 focus-visible:shadow-[0_28px_60px_-20px_rgba(17,24,39,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/60 focus-visible:ring-offset-2 sm:h-[340px]"
    >
      {image && (
        <Image
          src={image}
          alt={title || "Service"}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      )}

      {/* soften the top so a light badge stays legible on any photo */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
      {/* soften the bottom so the panel sits on a consistent backdrop regardless of the image */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />

      {badge && (
        <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B45309] backdrop-blur-md">
          {badge}
        </span>
      )}

      {/* frosted glass panel, sits on top of the photo */}
      <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/70 p-5 shadow-[0_8px_30px_-8px_rgba(17,24,39,0.25)] backdrop-blur-xl ring-1 ring-white/50 transition-colors duration-300 group-hover:bg-white/85">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {title && (
              <h3 className="truncate text-lg font-semibold tracking-tight text-[#111827] sm:text-xl">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-[#4B5563]">
                {description}
              </p>
            )}
          </div>

          <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B2D5B] text-white transition-transform duration-300 group-hover:-rotate-45 sm:flex">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}