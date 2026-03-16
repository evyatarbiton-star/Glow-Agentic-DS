import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCircular7 = ({
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
        d="M11 8a1 1 0 0 1 1-1 5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 3a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.56.964-4.898 2.547-6.667a1 1 0 1 1 1.49 1.334A8 8 0 1 0 12 4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCircular7;
