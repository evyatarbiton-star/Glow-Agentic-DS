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
        d="M19 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2M3 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2M3 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M20 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M16 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M19 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M20 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2M15 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedVerticalCenter;
