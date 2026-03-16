import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSwapHrAl = ({
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
        d="M13 16a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3.293 15.293a1 1 0 0 0 0 1.414l3 3A1 1 0 0 0 8 19v-6a1 1 0 0 0-1.707-.707z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m17.707 11.707 3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 16 5v6a1 1 0 0 0 1.707.707"
      />
    </svg>
  );
};
export default SvgSwapHrAl;
