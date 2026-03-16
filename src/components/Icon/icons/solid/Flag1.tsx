import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFlag1 = ({
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
        d="M7 2a1 1 0 0 0-1 1v17H5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8V3a1 1 0 0 0-1-1M10 14.5c0 .833.678 1.5 1.502 1.5h6.996a1.5 1.5 0 0 0 1.31-2.23L17.708 10l2.102-3.77A1.5 1.5 0 0 0 18.498 4h-6.996C10.678 4 10 4.667 10 5.5z"
      />
    </svg>
  );
};
export default SvgFlag1;
