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
        d="M19 21a1 1 0 1 1-2 0v-5a1 1 0 1 1 2 0zM7 18a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0zM6 9a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1m13-2a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 17a2 2 0 0 1-2-2v-3a2 2 0 1 1 4 0v3a2 2 0 0 1-2 2M6 12a2 2 0 0 1-2-2V9a2 2 0 1 1 4 0v1a2 2 0 0 1-2 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCandlesticksDown;
