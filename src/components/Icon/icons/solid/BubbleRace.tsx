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
        d="M6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m3 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        clipRule="evenodd"
      />
      <path fill={color} d="M21 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    </svg>
  );
};
export default SvgBubbleRace;
