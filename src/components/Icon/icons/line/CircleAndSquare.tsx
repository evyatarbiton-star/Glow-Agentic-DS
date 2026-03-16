import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCircleAndSquare = ({
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
        d="M18 9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1 1 1 0 1 1 0-2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 9a6 6 0 1 1 12 0A6 6 0 0 1 3 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCircleAndSquare;
