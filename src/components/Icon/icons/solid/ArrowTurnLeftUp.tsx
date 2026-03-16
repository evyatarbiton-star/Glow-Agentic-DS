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
        d="M20 21a1 1 0 0 1-1 1h-6a5 5 0 0 1-5-5v-5a1 1 0 1 1 2 0v5a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9.707 3.293a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 5 9h8a1 1 0 0 0 .707-1.707z"
      />
    </svg>
  );
};
export default SvgArrowTurnLeftUp;
