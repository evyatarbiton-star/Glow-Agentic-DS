import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditRectangle6 = ({
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
        d="M8 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M7 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M8 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M4 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-1-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditRectangle6;
