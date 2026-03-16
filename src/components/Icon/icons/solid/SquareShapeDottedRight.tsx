import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareShapeDottedRight = ({
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
        d="M19 21a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0v14a2 2 0 0 1-2 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
      />
    </svg>
  );
};
export default SvgSquareShapeDottedRight;
