import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowUpLeftAndArrowDownRight = ({
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
        d="M20.707 20.707a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0M10.707 10.707a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.707 20.707A1 1 0 0 0 21 20v-5a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h5a1 1 0 0 0 .707-.293M4 3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V5h4a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowUpLeftAndArrowDownRight;
