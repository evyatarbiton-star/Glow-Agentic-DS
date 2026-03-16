import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCompareArrowsVrAl = ({
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
        d="M16 13a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m12.293 9.707 3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 19 8h-6a1 1 0 0 0-.707 1.707"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 21a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M8.707 11.293a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 5 16h6a1 1 0 0 0 .707-1.707z"
      />
    </svg>
  );
};
export default SvgCompareArrowsVrAl;
