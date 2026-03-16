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
        d="M19 4a1 1 0 0 1 1 1v3.234a3 3 0 0 1-2.628 2.977l-4.496.562a1 1 0 0 0-.876.993V14a1 1 0 1 1-2 0v-1.234a3 3 0 0 1 2.628-2.977l4.496-.562A1 1 0 0 0 18 8.234V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 13a2 2 0 0 0-2 2v5a2 2 0 1 0 4 0v-5a2 2 0 0 0-2-2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgPaintRoller;
