import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChevronSmallLeftRight = ({
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
        d="M14.086 7.086a2 2 0 0 0 0 2.828L16.172 12l-2.086 2.086a2 2 0 1 0 2.828 2.828l3.5-3.5a2 2 0 0 0 0-2.828l-3.5-3.5a2 2 0 0 0-2.828 0M9.914 7.086a2 2 0 0 1 0 2.828L7.828 12l2.086 2.086a2 2 0 1 1-2.828 2.828l-3.5-3.5a2 2 0 0 1 0-2.828l3.5-3.5a2 2 0 0 1 2.828 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChevronSmallLeftRight;
