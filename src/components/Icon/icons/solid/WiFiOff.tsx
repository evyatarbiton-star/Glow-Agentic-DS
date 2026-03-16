import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWiFiOff = ({
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
        d="M14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.73 15.73 5.564 5.564a14 14 0 0 0-3.256 2.334 1 1 0 0 0-.069 1.37l5.216 6.113a1 1 0 0 0 1.517.005A3.99 3.99 0 0 1 12 14c1.21 0 2.293.536 3.028 1.386a1 1 0 0 0 .702.344"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6q-.467 0-.924.035a1 1 0 1 1-.152-1.994Q11.457 4 12 4c3.761 0 7.178 1.485 9.692 3.898a1 1 0 0 1 .069 1.37l-2.885 3.381a1 1 0 0 1-1.521-1.298l2.248-2.635A11.95 11.95 0 0 0 12 6M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWiFiOff;
