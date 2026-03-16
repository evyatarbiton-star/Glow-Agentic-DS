import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTimelapse50 = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.5-1.996a.477.477 0 0 1-.5-.485V4.491c0-.277.225-.502.5-.485C16.685 4.265 20 7.75 20 12s-3.315 7.744-7.5 8.004"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTimelapse50;
