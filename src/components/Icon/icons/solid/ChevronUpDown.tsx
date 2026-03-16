import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChevronUpDown = ({
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
        d="M17.914 14.086a2 2 0 0 0-2.828 0L12 17.172l-3.086-3.086a2 2 0 1 0-2.828 2.828l4.5 4.5a2 2 0 0 0 2.828 0l4.5-4.5a2 2 0 0 0 0-2.828M17.914 9.914a2 2 0 0 1-2.828 0L12 6.828 8.914 9.914a2 2 0 1 1-2.828-2.828l4.5-4.5a2 2 0 0 1 2.828 0l4.5 4.5a2 2 0 0 1 0 2.828"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChevronUpDown;
