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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12.707 6.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414L11 9.414V17a1 1 0 1 0 2 0V9.414l.293.293a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
export default SvgRoadSignAheadOnly;
