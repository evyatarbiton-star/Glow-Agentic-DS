import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCandlesticksDown = ({
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
        d="M18 21a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0zM8 18a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0zM7 8a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m11 4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 17v-3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0m-4 0a3 3 0 1 0 6 0v-3a3 3 0 1 0-6 0zm-6-7V9a1 1 0 0 0-2 0v1a1 1 0 1 0 2 0m-4 0a3 3 0 1 0 6 0V9a3 3 0 0 0-6 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCandlesticksDown;
