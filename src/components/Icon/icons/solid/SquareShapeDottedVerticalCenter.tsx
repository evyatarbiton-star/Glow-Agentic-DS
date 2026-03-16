import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedVerticalCenter = ({
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
        d="M17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 3a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedVerticalCenter;
