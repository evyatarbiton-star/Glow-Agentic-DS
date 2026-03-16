import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStopwatch = ({
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
        d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-12a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1M11 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm7.6 1.95a1 1 0 0 0-1.2 1.6l1 .75a1 1 0 0 0 1.2-1.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStopwatch;
