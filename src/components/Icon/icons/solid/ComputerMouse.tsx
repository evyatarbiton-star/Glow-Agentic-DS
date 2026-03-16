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
        d="m13.84 19.14 5.3-5.3a6.35 6.35 0 1 0-8.98-8.98l-5.3 5.3a6.35 6.35 0 1 0 8.98 8.98m1.867-9.433a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgComputerMouse;
