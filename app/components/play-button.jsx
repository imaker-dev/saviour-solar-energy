// components/play-button.jsx
import { Play } from "lucide-react";
import clsx from "clsx";

export default function PlayButton({
  onClick,
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
  };

  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <button
      type="button"
      aria-label="Play video"
      onClick={onClick}
      className={clsx(
        "group flex items-center justify-center rounded-full border-[3px] border-white backdrop-blur-sm transition-all duration-300 hover:scale-110",
        sizes[size],
        className
      )}
    >
      {/* Ring 1 */}
      <span className="absolute inset-0 animate-ping rounded-full border-2 border-white/60" />

      {/* Ring 2 */}
      <span
        className="absolute inset-0 animate-ping rounded-full border border-white/40"
        style={{ animationDelay: "700ms" }}
      />

      <Play
        className={clsx(
          "relative z-10 ml-1 fill-white text-white transition-transform duration-300 group-hover:scale-110",
          iconSizes[size]
        )}
      />
    </button>
  );
}