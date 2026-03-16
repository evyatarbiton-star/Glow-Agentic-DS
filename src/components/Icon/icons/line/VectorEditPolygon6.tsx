import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditPolygon6 = ({
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
        d="M18 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM8 7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zm7.98-.204a1 1 0 0 1-1.176.784l-6-1.2a1 1 0 0 1 .392-1.961l6 1.2a1 1 0 0 1 .785 1.177m-1.176 9.623a1 1 0 0 1 .392 1.961l-6 1.2a1 1 0 0 1-.392-1.961z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M17 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6M7 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6M6 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0m13 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditPolygon6;
