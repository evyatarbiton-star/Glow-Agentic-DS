import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBackward7 = ({
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
        d="M18.704 4.482c1.298-1.108 3.298-.185 3.298 1.521v11.99c0 1.706-2 2.629-3.298 1.522L11.72 13.56a2.05 2.05 0 0 1 0-3.12z"
      />
      <path
        fill={color}
        d="M9.704 4.482c1.298-1.108 3.298-.185 3.298 1.521v11.99c0 1.706-2 2.629-3.298 1.522L2.72 13.56a2.05 2.05 0 0 1 0-3.12z"
      />
    </svg>
  );
};
export default SvgBackward7;
