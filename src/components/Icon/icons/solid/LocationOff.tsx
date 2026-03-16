import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationOff = ({
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
        d="M5.156 5.156A8.96 8.96 0 0 0 3 11c0 3.026 1.81 5.592 3.895 7.4l3.441 2.982a2.54 2.54 0 0 0 3.328 0l3.44-2.983q.345-.297.674-.62zM9.188 2.448A9 9 0 0 1 21 11c0 1.028-.21 2.007-.57 2.92a1 1 0 0 1-1.86-.733c.277-.705.43-1.436.43-2.187a7 7 0 0 0-9.187-6.652 1 1 0 0 1-.625-1.9"
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
export default SvgLocationOff;
