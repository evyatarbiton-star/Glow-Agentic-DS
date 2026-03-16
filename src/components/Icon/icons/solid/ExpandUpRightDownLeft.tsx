import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgExpandUpRightDownLeft = ({
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
        d="M14.293 8.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0-1.414-1.414zM3.293 19.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0-1.414-1.414zM3 4a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H5v4a1 1 0 0 1-2 0zM21 20a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0z"
      />
      <path
        fill={color}
        d="M21 4a1 1 0 0 0-1-1h-4a1 1 0 0 0-.707 1.707l4 4A1 1 0 0 0 21 8zM3 20a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-1.707l-4-4A1 1 0 0 0 3 16z"
      />
    </svg>
  );
};
export default SvgExpandUpRightDownLeft;
