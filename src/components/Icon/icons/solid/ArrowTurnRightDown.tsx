import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowTurnRightDown = ({
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
        d="M4 4a1 1 0 0 1 1-1h6a5 5 0 0 1 5 5v5a1 1 0 1 1-2 0V8a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M14.293 21.707a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 19 16h-8a1 1 0 0 0-.707 1.707z"
      />
    </svg>
  );
};
export default SvgArrowTurnRightDown;
