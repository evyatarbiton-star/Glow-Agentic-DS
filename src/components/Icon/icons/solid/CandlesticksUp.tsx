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
        d="M19 3a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zM7 6a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 9a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m13 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 7a2 2 0 0 0-2 2v3a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2M6 12a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0v-1a2 2 0 0 0-2-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCandlesticksUp;
