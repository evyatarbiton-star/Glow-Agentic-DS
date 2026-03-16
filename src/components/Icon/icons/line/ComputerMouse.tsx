import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgComputerMouse = ({
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
        d="m12.426 17.726 5.3-5.3a4.35 4.35 0 1 0-6.152-6.151l-5.3 5.3a4.35 4.35 0 1 0 6.152 6.151m1.414 1.414 5.3-5.3a6.35 6.35 0 1 0-8.98-8.98l-5.3 5.3a6.35 6.35 0 0 0 8.98 8.98"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.707 8.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgComputerMouse;
