import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * SectionHeader
 *
 * Usage patterns:
 *
 * 1) Centered, multiple highlighted spans across two lines (testimonial-style)
 *    <SectionHeader
 *      badge="Testimonial"
 *      align="center"
 *      title={<>What Our <HighlightText>Client</HighlightText><br /><HighlightText>Say About Us</HighlightText></>}
 *    />
 *
 * 2) Left aligned, highlight leading phrase, CTA button on the right
 *    <SectionHeader
 *      badge="Our Latest Projects"
 *      align="left"
 *      title={<><HighlightText>Explore Our Portfolio</HighlightText> of Featured Projects</>}
 *      actions={<Link href="/projects" className="...">View All Projects</Link>}
 *    />
 *
 * 3) Left aligned, single line, highlight a trailing phrase via the `highlight` shorthand
 *    <SectionHeader
 *      badge="Our Services"
 *      title="Services for Sustainable Energy"
 *      highlight="Sustainable Energy"
 *    />
 */

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align,
  light = false,
  actions,
  ghost = true,
  className = "",
}) {
  // "responsive" = centered on mobile, left-aligned with actions on the
  // right from `lg` up. This is the sensible default whenever `actions`
  // is passed; pass an explicit `align` to opt out of the responsive
  // behavior and force one alignment at every breakpoint.
  const resolvedAlign = align || (actions ? "responsive" : "center");

  const textBlockClasses =
    resolvedAlign === "center"
      ? "mx-auto items-center text-center"
      : resolvedAlign === "left"
        ? "items-start text-left"
        : "items-center text-center lg:items-start lg:text-left";

  const ghostPositionClasses =
    resolvedAlign === "center"
      ? "left-1/2 -translate-x-1/2"
      : resolvedAlign === "left"
        ? "-left-1"
        : "left-1/2 -translate-x-1/2 lg:-left-1 lg:translate-x-0";

  const subtextAlignClasses =
    resolvedAlign === "center"
      ? "mx-auto"
      : resolvedAlign === "left"
        ? ""
        : "mx-auto lg:mx-0";

  return (
    <div
      className={twMerge(
        "relative mb-10 overflow-hidden lg:mb-14",
        actions &&
          "flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div
        className={twMerge(
          "relative flex max-w-2xl flex-col",
          textBlockClasses,
        )}
      >
        {/* Ghost text */}
        {/* {ghost && badge && (
          <span
            aria-hidden="true"
            className={twMerge(
              "pointer-events-none absolute -top-6 hidden select-none whitespace-nowrap text-6xl font-extrabold uppercase leading-none tracking-wide sm:block sm:text-7xl lg:text-8xl",
              light
                ? "text-white/[0.06]"
                : "text-transparent [-webkit-text-stroke:1px_theme(colors.slate.200)]",
              ghostPositionClasses,
            )}
          >
            {badge}
          </span>
        )} */}

        {/* Badge */}
        {badge && <SectionBadge light={light}>{badge}</SectionBadge>}

        {/* Heading */}
        <SectionHeading light={light}>
          {renderTitle(title, highlight)}
        </SectionHeading>

        {/* Description */}
        {description && (
          <SectionSubtext light={light} className={subtextAlignClasses}>
            {description}
          </SectionSubtext>
        )}
      </div>

      {/* Right-side content: one or more buttons */}
      {actions && (
        <div
          className={twMerge(
            "relative flex shrink-0 flex-wrap items-center gap-3",
            resolvedAlign === "center" && "justify-center",
          )}
        >
          {actions}
        </div>
      )}
    </div>
  );
}

/* Auto-highlight a substring when `title` is a plain string. For anything
   more elaborate (multiple spans, forced line breaks), pass JSX directly
   as `title` and wrap the relevant parts in <HighlightText> yourself. */
function renderTitle(title, highlight) {
  if (typeof title === "string" && highlight) {
    const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
    if (idx !== -1) {
      const before = title.slice(0, idx);
      const match = title.slice(idx, idx + highlight.length);
      const after = title.slice(idx + highlight.length);
      return (
        <>
          {before}
          <HighlightText>{match}</HighlightText>
          {after}
        </>
      );
    }
  }
  return title;
}

/* primitives */

export function HighlightText({ children, className = "" }) {
  return (
    <span className={twMerge("text-primary-500", className)}>{children}</span>
  );
}

export function SectionBadge({ children, light }) {
  return (
    <div className="relative mb-4 inline-flex items-center gap-3">
      <span
        className={`h-px w-6 ${light ? "bg-primary-400" : "bg-primary-500"}`}
      />
      <span
        className={`text-xs font-bold uppercase tracking-[0.25em] sm:text-sm ${
          light ? "text-primary-400" : "text-primary-500"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({ children, light }) {
  return (
    <h2
      className={`relative text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl ${
        light ? "text-white" : "text-slate-900"
      }`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtext({ children, light, className = "" }) {
  return (
    <p
      className={twMerge(
        `max-w-xl text-base leading-relaxed sm:text-lg ${
          light ? "text-white/70" : "text-slate-500"
        }`,
        "mt-5",
        className,
      )}
    >
      {children}
    </p>
  );
}
