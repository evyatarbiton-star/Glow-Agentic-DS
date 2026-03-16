import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAdjust = ({
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
        d="M19 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M13 17a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM12 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M6 5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM6 13a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM20 11a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2M9 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0m2 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0m2 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAdjust;
