import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCircular11 = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M11 5a1 1 0 0 1 1-1 8 8 0 1 1-8 8 1 1 0 1 1 2 0 6 6 0 1 0 6-6 1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2 2 2 0 1 1 0 4 1 1 0 1 0 0 2 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCircular11;
