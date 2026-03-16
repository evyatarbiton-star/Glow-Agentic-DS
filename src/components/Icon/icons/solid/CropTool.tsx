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
        d="M21 17a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V4a1 1 0 1 1 2 0v11a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM4 6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z"
      />
      <path
        fill={color}
        d="M10 7a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0V9a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1M17 16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgCropTool;
