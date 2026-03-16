import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCompareArrowsVrAl = ({
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
        d="M16 13a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.707 12.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414zM8 21a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.293 11.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCompareArrowsVrAl;
