import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSettingsAdjustVrAl = ({
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
        d="M18 3a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zM18 18a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M8 14a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0z"
      />
      <path
        fill={color}
        d="M14 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0M4 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
      />
    </svg>
  );
};
export default SvgSettingsAdjustVrAl;
