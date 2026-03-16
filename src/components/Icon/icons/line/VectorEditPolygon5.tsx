import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditPolygon5 = ({
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
        d="M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zM7 16a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-.204-7.98a1 1 0 0 1 .784 1.176l-1.2 6a1 1 0 1 1-1.961-.392l1.2-6a1 1 0 0 1 1.177-.785m9.623 1.176a1 1 0 0 1 1.961-.392l1.2 6a1 1 0 0 1-1.961.392z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6M8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditPolygon5;
