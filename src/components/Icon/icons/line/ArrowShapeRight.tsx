import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowShapeRight = ({
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
        d="M19.76 12 14 6.646V9a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 1 1 1v2.347zm1.757-1.098a1.5 1.5 0 0 1-.001 2.198l-6.996 6.492c-.96.891-2.52.21-2.52-1.099V16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h7V5.498c0-1.31 1.562-1.99 2.521-1.099z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeRight;
