import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowDownLeftCrFr = ({
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M8.617 15.924A1 1 0 0 0 9 16h6a1 1 0 1 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414L10 12.586V9a1 1 0 1 0-2 0v6.016a1 1 0 0 0 .617.908"
      />
    </svg>
  );
};
export default SvgArrowDownLeftCrFr;
