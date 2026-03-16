import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBubbles = ({
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
        d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m3 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0M9.5 20a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13M8 13c0-.175.097-.433.332-.668S8.825 12 9 12a1 1 0 1 0 0-2c-.825 0-1.567.402-2.082.918C6.403 11.433 6 12.175 6 13a1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBubbles;
