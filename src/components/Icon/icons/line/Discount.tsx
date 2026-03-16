import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDiscount = ({
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
        d="M18.6 3.2a1 1 0 0 1 .2 1.4l-12 16a1 1 0 0 1-1.6-1.2l12-16a1 1 0 0 1 1.4-.2M8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m9 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDiscount;
