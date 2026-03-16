import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChevronSmallRight = ({
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
        d="M9.586 7.586a2 2 0 0 0 0 2.828L11.172 12l-1.586 1.586a2 2 0 1 0 2.828 2.828l3-3a2 2 0 0 0 0-2.828l-3-3a2 2 0 0 0-2.828 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChevronSmallRight;
