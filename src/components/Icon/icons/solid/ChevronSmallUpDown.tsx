import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChevronSmallUpDown = ({
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
        d="M16.914 14.086a2 2 0 0 0-2.828 0L12 16.172l-2.086-2.086a2 2 0 1 0-2.828 2.828l3.5 3.5a2 2 0 0 0 2.828 0l3.5-3.5a2 2 0 0 0 0-2.828M16.914 9.914a2 2 0 0 1-2.828 0L12 7.828 9.914 9.914a2 2 0 1 1-2.828-2.828l3.5-3.5a2 2 0 0 1 2.828 0l3.5 3.5a2 2 0 0 1 0 2.828"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChevronSmallUpDown;
