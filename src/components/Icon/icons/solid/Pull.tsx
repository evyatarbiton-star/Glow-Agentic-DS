import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPull = ({
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
        d="M13 5a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 1 0 2 0V8a3 3 0 0 0-3-3zM7 7a1 1 0 0 0-2 0v9a1 1 0 1 0 2 0z"
      />
      <path
        fill={color}
        d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M11.293 6.707a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 15 4v4a1 1 0 0 1-1.707.707z"
      />
    </svg>
  );
};
export default SvgPull;
