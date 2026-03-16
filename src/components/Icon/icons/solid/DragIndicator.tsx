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
        d="M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M18 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default SvgDragIndicator;
