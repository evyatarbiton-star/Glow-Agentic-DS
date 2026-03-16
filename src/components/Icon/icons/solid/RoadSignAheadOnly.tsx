import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignAheadOnly = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M12 6a1 1 0 0 1 .707.293l2 2a1 1 0 0 1-1.414 1.414L13 9.414V17a1 1 0 1 1-2 0V9.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2A1 1 0 0 1 12 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoadSignAheadOnly;
