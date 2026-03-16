import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationCheckOuLc = ({
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
        d="M22.707 16.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 19.586l3.293-3.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 11a9 9 0 0 1 18 0c0 1.22-.297 2.37-.785 3.421a1 1 0 0 1-1.814-.842C18.785 12.754 19 11.89 19 11a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .354.132 1 1 0 1 1 0 2 2.54 2.54 0 0 1-1.664-.62l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export default SvgLocationCheckOuLc;
