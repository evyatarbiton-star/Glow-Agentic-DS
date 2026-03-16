import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedCenter = ({
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
        d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10 19a2 2 0 1 0 4 0v-5h5a2 2 0 1 0 0-4h-5V5a2 2 0 1 0-4 0v5H5a2 2 0 1 0 0 4h5z"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedCenter;
