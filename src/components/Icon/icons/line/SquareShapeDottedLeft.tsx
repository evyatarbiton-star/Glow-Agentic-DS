import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedLeft = ({
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
        d="M4 21a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v16a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M20 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M20 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M16 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 20a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M20 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M20 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedLeft;
