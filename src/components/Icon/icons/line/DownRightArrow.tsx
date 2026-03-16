import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDownRightArrow = ({
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
        d="M20.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414l16 16a1 1 0 0 0 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.707 20.707A1 1 0 0 0 21 20v-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h7a1 1 0 0 0 .707-.293"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDownRightArrow;
