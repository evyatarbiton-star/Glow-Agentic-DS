import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowUpRightAndArrowDownLeft = ({
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
        d="M3.293 20.707a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0M13.293 10.707a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.293 20.707A1 1 0 0 1 3 20v-5a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2H4a1 1 0 0 1-.707-.293M20 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5h-4a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowUpRightAndArrowDownLeft;
