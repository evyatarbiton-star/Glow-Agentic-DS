import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDragIndicator = ({
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
        d="M16 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
export default SvgDragIndicator;
