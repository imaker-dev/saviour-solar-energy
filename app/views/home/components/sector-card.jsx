import Image from "next/image";
import Link from "next/link";

export default function SectorCard({ sector }) {
  const { title, description, image, badge, range, slug } = sector || {};
  if (!sector) return null;

  return (
    <Link
      href={`/sectors/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(17,24,39,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/60 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        {image && (
          <Image
            src={image}
            alt={title || "Sector"}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        )}

        {badge && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B45309] backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {title && (
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#111827]">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[#6B7280]">
            {description}
          </p>
        )}

        {range && (
          <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-4">
            <div>
              <span className="block text-[10px] font-medium uppercase tracking-[0.1em] text-[#9CA3AF]">
                System Size
              </span>
              <span className="text-sm font-semibold text-[#111827]">
                {range}
              </span>
            </div>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white transition-transform duration-300 group-hover:-rotate-45">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
