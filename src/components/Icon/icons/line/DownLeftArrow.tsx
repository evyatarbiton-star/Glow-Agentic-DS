import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDownLeftArrow = ({
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
        d="M3.293 20.707a1 1 0 0 1 0-1.414l16-16a1 1 0 1 1 1.414 1.414l-16 16a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.293 20.707A1 1 0 0 1 3 20v-7a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2H4a1 1 0 0 1-.707-.293"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDownLeftArrow;
