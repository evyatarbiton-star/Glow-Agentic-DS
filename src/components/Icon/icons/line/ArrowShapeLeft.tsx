import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowShapeLeft = ({
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
        d="m4.235 12 5.76-5.354V9a1 1 0 0 0 1 1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 0-1 1v2.347zm-1.756-1.098a1.5 1.5 0 0 0 0 2.198l6.996 6.492c.96.891 2.52.21 2.52-1.099V16h7a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-7V5.498c0-1.31-1.561-1.99-2.52-1.099z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeLeft;
