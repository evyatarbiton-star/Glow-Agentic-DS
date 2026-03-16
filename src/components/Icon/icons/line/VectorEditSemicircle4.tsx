import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditSemicircle4 = ({
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
        d="M6 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M5 8a1 1 0 0 1 1 1v3a6 6 0 0 0 12 0V9a1 1 0 1 1 2 0v3a8 8 0 1 1-16 0V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditSemicircle4;
