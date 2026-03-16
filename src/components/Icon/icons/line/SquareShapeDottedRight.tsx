import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedRight = ({
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
        d="M20 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedRight;
