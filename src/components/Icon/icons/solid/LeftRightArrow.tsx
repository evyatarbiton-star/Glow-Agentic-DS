import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLeftRightArrow = ({
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
        d="M10 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m17.707 7.293 4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 16 16V8a1 1 0 0 1 1.707-.707M2.293 11.293a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 8 16V8a1 1 0 0 0-1.707-.707z"
      />
    </svg>
  );
};
export default SvgLeftRightArrow;
