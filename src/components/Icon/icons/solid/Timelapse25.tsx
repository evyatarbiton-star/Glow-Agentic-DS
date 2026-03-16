import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTimelapse25 = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.5-17.995a8.02 8.02 0 0 1 7.495 7.495.477.477 0 0 1-.485.5H12.5a.5.5 0 0 1-.5-.5V4.49c0-.277.225-.502.5-.485"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTimelapse25;
