import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDownArrow = ({
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
        d="M12 2a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m16.707 17.707-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8 16h8a1 1 0 0 1 .707 1.707"
      />
    </svg>
  );
};
export default SvgDownArrow;
