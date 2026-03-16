import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlignHorizontalRight = ({
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
        d="M20 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M5 6a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4zm4 8a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlignHorizontalRight;
