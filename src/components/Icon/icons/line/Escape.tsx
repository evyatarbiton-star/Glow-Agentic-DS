import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEscape = ({
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
        d="M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H5.414l7.293 7.293a1 1 0 0 1-1.414 1.414L4 5.414V8a1 1 0 0 1-2 0z"
      />
    </svg>
  );
};
export default SvgEscape;
