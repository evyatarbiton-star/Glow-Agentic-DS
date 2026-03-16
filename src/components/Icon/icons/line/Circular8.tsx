import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCircular8 = ({
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
        d="M11 3a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a1 1 0 1 1 2 0 8 8 0 1 0 8-8 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 8a1 1 0 0 1 1-1 5 5 0 0 1 0 10 1 1 0 1 1 0-2 3 3 0 1 0 0-6 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCircular8;
