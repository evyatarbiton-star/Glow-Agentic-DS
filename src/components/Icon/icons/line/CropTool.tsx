import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCropTool = ({
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
        d="M3 7a1 1 0 0 1 1-1h11a3 3 0 0 1 3 3v11a1 1 0 1 1-2 0V9a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 17a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V4a1 1 0 1 1 2 0v11a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCropTool;
