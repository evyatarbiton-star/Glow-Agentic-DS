import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGrid = ({
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
        d="M9 3a1 1 0 0 0-1 1v4H4a1 1 0 1 0 0 2h4v4H4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4v-4h4a1 1 0 1 0 0-2h-4V4a1 1 0 1 0-2 0v4h-4V4a1 1 0 0 0-1-1m5 11v-4h-4v4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGrid;
