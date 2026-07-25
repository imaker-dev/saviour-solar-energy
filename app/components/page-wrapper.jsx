import { memo } from "react";
import clsx from "clsx";
import TornEdge from "./torn-edge";

const PageSection = ({
  children,
  id,
  as: Component = "section",
  className = "",
  containerClassName = "",
  paddingY = "py-8 sm:py-12 lg:py-16",
  paddingX = "px-4 sm:px-6 lg:px-8",
  containerWidth = "max-w-7xl mx-auto",
  style = {},
  ContainerStyle = {},

  // New props
  topEdge = false,
  bottomEdge = false,
  edgeHeight = 20,
  edgeClassName = "",
}) => {
  return (
    <Component
      id={id}
      className={clsx(
        "relative overflow-visible",
        paddingX,
        paddingY,
        className
      )}
      style={style}
    >
      {topEdge && (
        <TornEdge
          side="top"
          height={edgeHeight}
          className={clsx("z-10", edgeClassName)}
        />
      )}

      <div
        className={clsx(containerWidth, containerClassName)}
        style={ContainerStyle}
      >
        {children}
      </div>

      {bottomEdge && (
        <TornEdge
          side="bottom"
          height={edgeHeight}
          className={clsx("z-10", edgeClassName)}
        />
      )}
    </Component>
  );
};

export default memo(PageSection);