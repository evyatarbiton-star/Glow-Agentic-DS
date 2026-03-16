import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBadgeDiscount = ({
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
        d="M13.219 2.608a1.53 1.53 0 0 0-2.438 0L9.406 4.42a1 1 0 0 1-.933.387l-2.253-.31A1.53 1.53 0 0 0 4.497 6.22l.31 2.253a1 1 0 0 1-.386.933l-1.812 1.374a1.53 1.53 0 0 0 0 2.438l1.812 1.374a1 1 0 0 1 .386.933l-.31 2.253a1.53 1.53 0 0 0 1.725 1.724l2.252-.31a1 1 0 0 1 .933.387l1.374 1.812a1.53 1.53 0 0 0 2.439 0l1.374-1.812a1 1 0 0 1 .933-.386l2.253.31a1.53 1.53 0 0 0 1.724-1.725l-.31-2.253a1 1 0 0 1 .387-.933l1.812-1.374a1.53 1.53 0 0 0 0-2.438L19.58 9.407a1 1 0 0 1-.387-.933l.31-2.253a1.53 1.53 0 0 0-1.724-1.724l-2.253.31a1 1 0 0 1-.933-.387zm1.488 6.685a1 1 0 0 0-1.415 0l-4 4a1 1 0 1 0 1.415 1.414l4-4a1 1 0 0 0 0-1.414M10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBadgeDiscount;
