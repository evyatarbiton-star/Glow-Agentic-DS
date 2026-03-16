import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmOff = ({
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
        d="M6.156 6.156a9 9 0 1 0 12.689 12.689zM12 6q-.446 0-.876.054a1 1 0 1 1-.248-1.984Q11.43 4 12 4a9 9 0 0 1 8.93 10.124 1 1 0 1 1-1.984-.248Q19 13.446 19 13a7 7 0 0 0-7-7M17.2 2.4a1 1 0 0 1 1.4-.2l2 1.5a1 1 0 0 1-1.2 1.6l-2-1.5a1 1 0 0 1-.2-1.4"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlarmOff;
