import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBurger = ({
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
        d="M2 14a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 10a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m6-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21 18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1"
      />
    </svg>
  );
};
export default SvgBurger;
