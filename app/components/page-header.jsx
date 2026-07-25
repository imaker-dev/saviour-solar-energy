"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const formatSegment = (segment) =>
  segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

export default function SectionHeader({
  title,
  breadcrumbs,
  backgroundImage = "/Images/page-header-bg.png", // Change this to your image path
}) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const pageTitle =
    title || formatSegment(segments[segments.length - 1] || "Home");

  const pageBreadcrumbs =
    breadcrumbs ||
    [
      { label: "Home", href: "/" },
      ...segments.map((segment, index) => ({
        label: formatSegment(segment),
        href: "/" + segments.slice(0, index + 1).join("/"),
      })),
    ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F7F5F0]/60" />

      {/* Optional gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#F7F5F0]/20" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-12 text-center">
        <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
          {pageTitle}
        </h1>

        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-neutral-600">
            {pageBreadcrumbs.map((crumb, index) => {
              const isLast = index === pageBreadcrumbs.length - 1;

              return (
                <li key={crumb.href || crumb.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight
                      className="h-4 w-4 text-primary-500"
                      strokeWidth={2.5}
                    />
                  )}

                  {isLast ? (
                    <span className="font-semibold text-neutral-900">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-primary-600"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}