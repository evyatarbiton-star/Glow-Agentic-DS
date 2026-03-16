import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgZoomOut = ({
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
        d="M16.293 16.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14m3-7a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgZoomOut;
