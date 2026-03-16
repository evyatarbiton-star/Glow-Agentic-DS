import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBar02Up = ({
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
        d="M13 6a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1m6 4a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1m-3 3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm5 5a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1M4 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBar02Up;
