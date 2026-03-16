import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgColumn01Down = ({
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
        d="M3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M16 9a3 3 0 0 0-3 3v4a1 1 0 1 0 2 0v-4a1 1 0 1 1 2 0v4a1 1 0 1 0 2 0v-4a3 3 0 0 0-3-3M8 3a3 3 0 0 0-3 3v10a1 1 0 1 0 2 0V6a1 1 0 0 1 2 0v10a1 1 0 1 0 2 0V6a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgColumn01Down;
