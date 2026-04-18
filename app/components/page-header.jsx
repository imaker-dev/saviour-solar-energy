"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function formatLabel(segment) {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function PageHeader({
  title,
  bgImage = "/Images/page-header-bg.jpg",
  align = "center", // "left" | "center"
  labelMap = {},
}) {
  const pathname = usePathname();

  const pathnames = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: labelMap["/"] || "Home", link: "/" },
    ...pathnames.map((segment, index) => {
      const path = "/" + pathnames.slice(0, index + 1).join("/");

      return {
        label: labelMap[path] || formatLabel(segment),
        link: index !== pathnames.length - 1 ? path : null,
      };
    }),
  ];

  return (
    <div className="relative w-full h-[220px] md:h-[320px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 backdrop-blur-[2px]" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 w-full ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {/* Title */}
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div
          className={`flex items-center text-sm text-gray-200 gap-2 flex-wrap ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index !== 0 && <ChevronRight size={14} className="opacity-60" />}

              {item.link ? (
                <Link
                  href={item.link}
                  className="hover:text-white transition duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
