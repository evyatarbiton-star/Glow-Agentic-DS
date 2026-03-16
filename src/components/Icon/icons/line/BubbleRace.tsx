import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBubbleRace = ({
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
        d="M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBubbleRace;
