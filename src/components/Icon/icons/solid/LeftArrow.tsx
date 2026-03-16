import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLeftArrow = ({
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
        d="M22 12a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M2.293 12.707a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 8 8v8a1 1 0 0 1-1.707.707z"
      />
    </svg>
  );
};
export default SvgLeftArrow;
