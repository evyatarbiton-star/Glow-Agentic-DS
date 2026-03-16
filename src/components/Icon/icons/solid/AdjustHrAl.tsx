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
        d="M4 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M17 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M5 18a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM17 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM15 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        d="M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0M14 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </svg>
  );
};
export default SvgAdjustHrAl;
