import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPlus = ({
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
        d="M14 6a2 2 0 1 0-4 0v4H6a2 2 0 1 0 0 4h4v4a2 2 0 1 0 4 0v-4h4a2 2 0 1 0 0-4h-4z"
      />
    </svg>
  );
};
export default SvgPlus;
