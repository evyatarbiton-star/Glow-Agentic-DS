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
        d="M4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7z"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedCenter;
