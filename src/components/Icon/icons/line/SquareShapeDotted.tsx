import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDotted = ({
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
        d="M5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
};
export default SvgSquareShapeDotted;
