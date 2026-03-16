import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPaintRoller = ({
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
        d="M18 8a1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3v2.234a3 3 0 0 1-2.628 2.977l-4.496.562a1 1 0 0 0-.876.993V15a1 1 0 1 1-2 0v-.234a3 3 0 0 1 2.628-2.977l4.496-.562a1 1 0 0 0 .876-.993z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 14a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2M15 4H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M7 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPaintRoller;
