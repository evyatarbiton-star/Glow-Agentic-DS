import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStackedColumn02Average = ({
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
        d="M11 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M18 7a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4 3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStackedColumn02Average;
