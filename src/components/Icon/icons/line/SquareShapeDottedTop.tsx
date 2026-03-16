import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedTop = ({
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
        d="M3 4a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M5 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0M9 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0M12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0M4 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0M16 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M17 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M21 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedTop;
