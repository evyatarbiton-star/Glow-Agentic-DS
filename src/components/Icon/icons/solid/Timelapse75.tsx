import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTimelapse75 = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-7.995-9.5a.477.477 0 0 1 .485-.5H12V4.49c0-.277.225-.502.5-.485C16.685 4.264 20 7.75 20 12a8 8 0 0 1-8 8c-4.25 0-7.736-3.315-7.995-7.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTimelapse75;
