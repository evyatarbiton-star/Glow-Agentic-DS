import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBar01Down = ({
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
        d="M15 16a3 3 0 0 0-3-3H8a1 1 0 1 0 0 2h4a1 1 0 1 1 0 2H8a1 1 0 1 0 0 2h4a3 3 0 0 0 3-3M21 8a3 3 0 0 0-3-3H8a1 1 0 1 0 0 2h10a1 1 0 1 1 0 2H8a1 1 0 1 0 0 2h10a3 3 0 0 0 3-3M4 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBar01Down;
