import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoad = ({
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
        d="M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0zM20 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0zM12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M12 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
      />
    </svg>
  );
};
export default SvgRoad;
