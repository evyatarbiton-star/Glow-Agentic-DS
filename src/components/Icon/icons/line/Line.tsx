import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine = ({
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
        d="M5.293 5.293a1 1 0 0 1 1.414 0L9 7.586l2.293-2.293a1 1 0 0 1 1.414 0L15 7.586l2.293-2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L18 7.414l-2.293 2.293a1 1 0 0 1-1.414 0L12 7.414 9.707 9.707a1 1 0 0 1-1.414 0L6 7.414 3.707 9.707a1 1 0 0 1-1.414-1.414zM5.293 14.293a1 1 0 0 1 1.414 0L9 16.586l2.293-2.293a1 1 0 0 1 1.414 0L15 16.586l2.293-2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L18 16.414l-2.293 2.293a1 1 0 0 1-1.414 0L12 16.414l-2.293 2.293a1 1 0 0 1-1.414 0L6 16.414l-2.293 2.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine;
