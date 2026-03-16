import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCandlesticksUp = ({
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
        d="M18 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM8 6a1 1 0 0 0-2 0v6a1 1 0 1 0 2 0zM7 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m11-4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 7v3a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0m-4 0a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0zm-6 7v1a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0m-4 0a3 3 0 1 1 6 0v1a3 3 0 1 1-6 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCandlesticksUp;
