import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowTurnRightDown = ({
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
        d="M4 3a1 1 0 0 1 1-1h5a5 5 0 0 1 5 5v14a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.707 21.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L14 19.586l4.293-4.293a1 1 0 0 1 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowTurnRightDown;
