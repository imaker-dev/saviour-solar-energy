import { memo } from "react";
import clsx from "clsx";

const PageSection = ({
  children,
  id,
  as: Component = "section",
  className = "",
  containerClassName = "",
  paddingY = "py-8 sm:py-12 lg:py-16", // default vertical padding
  paddingX = "px-4 sm:px-6 lg:px-8", // default horizontal padding
  containerWidth = "max-w-7xl mx-auto", // default container width
  style = {},
  ContainerStyle = {},
}) => {
  return (
    <Component id={id} className={clsx(paddingX, paddingY, className)} style={style}>
      <div className={clsx(containerWidth, containerClassName)} style={ContainerStyle}>
        {children}
      </div>
    </Component>
  );
};

export default memo(PageSection);
