import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmSubtractOuLc = ({
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
        d="M15 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6a7 7 0 0 0 0 14 1 1 0 1 1 0 2 9 9 0 1 1 8.716-6.75 1 1 0 0 1-1.937-.5A7 7 0 0 0 12 6"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmSubtractOuLc;
