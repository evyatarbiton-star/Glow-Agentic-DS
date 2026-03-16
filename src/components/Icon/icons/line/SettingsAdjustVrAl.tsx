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
        d="M17 22a1 1 0 0 0 1-1v-4h-2v4a1 1 0 0 0 1 1M8 21a1 1 0 1 1-2 0V9h2zM8 7H6V3a1 1 0 0 1 2 0zM18 15h-2V3a1 1 0 1 1 2 0z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSettingsAdjustVrAl;
