import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAdjustHrAl = ({
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
        d="M4 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M17 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M5 18a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM13 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM11 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAdjustHrAl;
