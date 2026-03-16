import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowCw = ({
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
        d="M12 5a6.99 6.99 0 0 1 5.71 2.95 1 1 0 1 0 1.63-1.158A9 9 0 1 0 21 12a1 1 0 1 0-2 0 7 7 0 1 1-7-7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M20 8a1 1 0 0 1-1 1h-5a1 1 0 0 1-.707-1.707l5-5A1 1 0 0 1 20 3z"
      />
    </svg>
  );
};
export default SvgArrowCw;
