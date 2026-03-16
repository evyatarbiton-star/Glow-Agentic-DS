import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBranch = ({
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
        d="M7 8a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0v-2a1 1 0 0 1 1-1h8a3 3 0 0 0 3-3V8a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H8c-.35 0-.687.06-1 .17z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 18a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBranch;
