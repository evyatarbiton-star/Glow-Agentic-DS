import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCheckmarkSeal = ({
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
        d="M13.22 2.608a1.53 1.53 0 0 0-2.439 0L9.407 4.42a1 1 0 0 1-.933.386l-2.253-.31a1.53 1.53 0 0 0-1.724 1.725l.31 2.252a1 1 0 0 1-.386.933L2.608 10.78a1.53 1.53 0 0 0 0 2.439l1.813 1.374a1 1 0 0 1 .386.933l-.31 2.253a1.53 1.53 0 0 0 1.724 1.724l2.253-.31a1 1 0 0 1 .933.387l1.374 1.812a1.53 1.53 0 0 0 2.439 0l1.374-1.812a1 1 0 0 1 .933-.387l2.253.31a1.53 1.53 0 0 0 1.724-1.724l-.31-2.253a1 1 0 0 1 .387-.933l1.812-1.374a1.53 1.53 0 0 0 0-2.438L19.58 9.406a1 1 0 0 1-.387-.933l.31-2.253a1.53 1.53 0 0 0-1.724-1.724l-2.253.31a1 1 0 0 1-.933-.386zm2.487 8.1a1 1 0 0 0-1.414-1.415L11 12.586l-1.292-1.293a1 1 0 0 0-1.415 1.414l2 2a1 1 0 0 0 1.415 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCheckmarkSeal;
