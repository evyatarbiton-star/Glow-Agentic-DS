import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSettingsAdjustHrAl = ({
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
        d="M2 7a1 1 0 0 1 1-1h4v2H3a1 1 0 0 1-1-1M3 16a1 1 0 1 0 0 2h12v-2zM17 16v2h4a1 1 0 1 0 0-2zM9 6v2h12a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSettingsAdjustHrAl;
