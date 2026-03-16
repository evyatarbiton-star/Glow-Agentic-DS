import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoins7 = ({
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
      <path fill={color} d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0" />
      <path
        fill={color}
        d="M9.29 5.613c-.122.163.006.387.21.387a8.5 8.5 0 0 1 8.5 8.5c0 .204.224.332.387.21A6.5 6.5 0 1 0 9.29 5.613"
      />
    </svg>
  );
};
export default SvgCoins7;
