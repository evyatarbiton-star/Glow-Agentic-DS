import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowTurnLeftUp = ({
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
        d="M20 21a1 1 0 0 1-1 1h-5a5 5 0 0 1-5-5V3a1 1 0 1 1 2 0v14a3 3 0 0 0 3 3h5a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L10 4.414 5.707 8.707a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowTurnLeftUp;
