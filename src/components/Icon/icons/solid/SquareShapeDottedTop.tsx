import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedTop = ({
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
        d="M3 5a2 2 0 0 0 2 2h14a2 2 0 1 0 0-4H5a2 2 0 0 0-2 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M19 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedTop;
