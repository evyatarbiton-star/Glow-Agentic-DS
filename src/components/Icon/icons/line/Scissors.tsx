import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgScissors = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2 7.5a3.5 3.5 0 1 1 6.58 1.665L10.413 11h5l.293.293 5.857 5.856c.849.85.406 2.302-.772 2.533l-1.142.224a5.05 5.05 0 0 1-4.543-1.385l-2.814-2.814-5.128-5.128A3.5 3.5 0 0 1 2 7.5m17.265 10.443a3.05 3.05 0 0 1-2.744-.836L12.414 13h2.172l4.9 4.9z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.126 5.459a5 5 0 0 1 4.498-1.371l1.168.229c1.178.23 1.62 1.684.771 2.532l-5.856 5.856-.293.293h-4.999l-1.836 1.836a3.5 3.5 0 1 1-1.414-1.414l.421-.422 1.707-1.707zm-2.711 5.54 1.292-1.293 2.833-2.833a3 3 0 0 1 2.699-.823l.247.049-4.9 4.9zm-6.915 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScissors;
