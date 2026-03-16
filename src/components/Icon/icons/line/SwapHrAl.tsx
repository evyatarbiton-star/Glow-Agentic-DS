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
        fillRule="evenodd"
        d="M3.293 16.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 16l3.293 3.293a1 1 0 1 1-1.414 1.414zM21 8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.707 7.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 8l-3.293-3.293a1 1 0 0 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSwapHrAl;
