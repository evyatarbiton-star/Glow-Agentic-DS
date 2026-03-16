import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShuffle = ({
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
        d="M9.707 8.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 1.414-1.414zM20.707 19.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 1.414-1.414z"
      />
      <path
        fill={color}
        d="M21 20a1 1 0 0 1-1 1h-4a1 1 0 0 1-.707-1.707l4-4A1 1 0 0 1 21 16z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.707 8.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21 4a1 1 0 0 0-1-1h-4a1 1 0 0 0-.707 1.707l4 4A1 1 0 0 0 21 8z"
      />
    </svg>
  );
};
export default SvgShuffle;
