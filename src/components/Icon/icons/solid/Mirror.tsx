import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMirror = ({
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
        d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9.293-4.707a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0m4 3.414a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 1 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMirror;
