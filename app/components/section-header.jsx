import { twMerge } from "tailwind-merge";

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  const alignment =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div
      className={twMerge(
        `flex flex-col ${alignment} max-w-3xl mb-8 lg:mb-10`,
        className,
      )}
    >
      {/* Badge */}
      {badge && <SectionBadge light={light}>{badge}</SectionBadge>}

      {/* Heading */}
      <SectionHeading light={light}>
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-primary-500">{highlight}</span>
          </>
        )}
      </SectionHeading>

      {/* Description */}
      {description && (
        <SectionSubtext light={light}>{description}</SectionSubtext>
      )}
    </div>
  );
}

/* primitives */

export function SectionBadge({ children, light }) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <div
        className={`h-px w-8 ${light ? "bg-primary-400" : "bg-primary-500"}`}
      />

      <span
        className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] ${
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
      className={`text-2xl sm:text-3xl  font-semibold leading-[1.2] tracking-tight ${
        light ? "text-white" : "text-slate-950"
      }`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtext({ children, light }) {
  return (
    <p
      className={`mt-4 text-sm sm:text-base leading-relaxed max-w-xl ${
        light ? "text-white/70" : "text-slate-600"
      }`}
    >
      {children}
    </p>
  );
}
