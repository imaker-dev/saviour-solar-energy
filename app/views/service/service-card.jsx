import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service, index = 0 }) {
  const { title, description, image, badge } = service || {};
  if (!service) return null;

  const reversed = index % 2 === 1;

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      {/* image */}
      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
          {image && (
            <Image
              src={image}
              alt={title || "Service"}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
        </div>
      </div>

      {/* content */}
      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        {badge && (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-500">
            {badge}
          </span>
        )}

        {title && (
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#6B7280]">
            {description}
          </p>
        )}

        <Link
          href={`/services/${service.id}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50 focus-visible:ring-offset-2"
        >
          Learn more
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}