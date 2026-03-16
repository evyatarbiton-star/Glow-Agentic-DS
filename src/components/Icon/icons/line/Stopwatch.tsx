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
        d="M12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      />
      <path fill={color} d="M11 11a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm7.6 1.95a1 1 0 0 0-1.2 1.6l1 .75a1 1 0 0 0 1.2-1.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStopwatch;
