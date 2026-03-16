import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUpRightDownLeftArrow = ({
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
        d="M9.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21 4a1 1 0 0 0-1-1h-6a1 1 0 0 0-.707 1.707l6 6A1 1 0 0 0 21 10zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 .707-1.707l-6-6A1 1 0 0 0 3 14z"
      />
    </svg>
  );
};
export default SvgUpRightDownLeftArrow;
