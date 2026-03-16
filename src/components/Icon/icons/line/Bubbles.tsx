import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBubbles = ({
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
        d="M19 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m2 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M9 14a1 1 0 0 1 1-1 1 1 0 1 0 0-2 3 3 0 0 0-3 3 1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBubbles;
