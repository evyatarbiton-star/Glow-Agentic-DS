import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEarphones = ({
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
        d="M21 7a4 4 0 1 0-4 4v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM21 17.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V19a2 2 0 1 0 4 0zM3 7a4 4 0 1 1 4 4v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM3.5 17a.5.5 0 0 0-.5.5V19a2 2 0 1 0 4 0v-1.5a.5.5 0 0 0-.5-.5z"
      />
    </svg>
  );
};
export default SvgEarphones;
