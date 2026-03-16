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
        d="M2 7a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1M3 16a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zM18 16a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM14 6a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </svg>
  );
};
export default SvgSettingsAdjustHrAl;
