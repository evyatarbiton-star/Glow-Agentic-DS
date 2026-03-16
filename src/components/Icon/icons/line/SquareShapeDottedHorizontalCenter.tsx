import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedHorizontalCenter = ({
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
        d="M4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedHorizontalCenter;
