import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { twMerge } from "tailwind-merge";
import PageWrapper from "../../../components/page-wrapper";
import { SITE_CONFIG } from "../../../const";
export default function CTASection({
  title,
  description,
  light = false,
  centered = false,
  className = "",
}) {
  return (
    <PageWrapper className={twMerge("w-full", className)}>
      <div
        className={twMerge(
          `rounded-md px-6 sm:px-10 py-10 sm:py-12 
           flex flex-col lg:flex-row gap-6 lg:items-center justify-between`,
          light
            ? "bg-secondary-500 border border-slate-200"
            : "bg-primary-500 text-white",
          centered && "text-center lg:text-left",
        )}
      >
        {/* Content */}
        <div className="max-w-2xl">
          <h2
            className={twMerge(
              "text-2xl sm:text-3xl font-bold leading-tight",
              light ? "text-white" : "text-white",
            )}
          >
            {title}
          </h2>

          {description && (
            <p
              className={twMerge(
                "mt-3 text-sm sm:text-base leading-relaxed",
                light ? "text-slate-300" : "text-white/80",
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="/contact"
            className={twMerge(
              "btn whitespace-nowrap",
              light
                ? "bg-primary-500 text-white hover:bg-primary-600"
                : "bg-white text-primary-600 hover:bg-primary-50",
            )}
          >
            Get Free Quote
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
          <Link
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className={twMerge(
              "btn border-2 whitespace-nowrap",
              light
                ? "border-white/10 text-white hover:border-white/20 hover:bg-white/5"
                : "border-white/30 text-white hover:border-white/60",
            )}
          >
            <Phone size={13} strokeWidth={2} />
            Call Now
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
