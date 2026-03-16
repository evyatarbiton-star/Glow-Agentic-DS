import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMoreHrAl = ({
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
        d="M22 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default SvgMoreHrAl;
