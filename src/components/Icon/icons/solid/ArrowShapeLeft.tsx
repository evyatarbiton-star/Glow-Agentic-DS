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
        d="M2.371 11.176a1.1 1.1 0 0 0 0 1.648l7.8 6.898c.71.628 1.828.124 1.828-.824V16h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-8V5.1c0-.947-1.119-1.451-1.829-.823z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeLeft;
