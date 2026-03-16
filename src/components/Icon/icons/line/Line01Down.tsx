import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine01Down = ({
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
        d="M4 3a1 1 0 0 1 1 1v13a2 2 0 0 0 2 2h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.707 16.707a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293V11a6 6 0 0 0-6-6H8a1 1 0 1 1 0-2h3a8 8 0 0 1 8 8v2.586l.293-.293a1 1 0 0 1 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine01Down;
