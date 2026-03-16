import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAdjust = ({
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
        d="M19 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M13 17a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM12 4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M6 5a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0zM6 17a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM20 15a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
      />
      <path
        fill={color}
        d="M16 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6M5 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
      />
    </svg>
  );
};
export default SvgAdjust;
