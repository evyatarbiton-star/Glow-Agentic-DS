import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditTriangle6 = ({
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
        d="M12 8.022a1 1 0 0 1-.105.425l-4 8a1 1 0 1 1-1.79-.894l4-8A1 1 0 0 1 12 7.98a1 1 0 0 1 1.895-.427l4 8a1 1 0 1 1-1.79.894l-4-8A1 1 0 0 1 12 8.022M7 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m12 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditTriangle6;
