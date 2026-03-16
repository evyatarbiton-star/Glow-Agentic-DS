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
        d="M15.707 15.707a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414 0M11.207 11.207a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21 20a1 1 0 0 1-1 1h-4a1 1 0 0 1-.707-1.707l4-4A1 1 0 0 1 21 16zM3 4a1 1 0 0 1 1-1h4a1 1 0 0 1 .707 1.707l-4 4A1 1 0 0 1 3 8z"
      />
    </svg>
  );
};
export default SvgArrowUpLeftAndArrowDownRight;
