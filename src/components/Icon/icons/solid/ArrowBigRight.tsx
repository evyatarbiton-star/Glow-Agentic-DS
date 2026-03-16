import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowBigRight = ({
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
        d="M11 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21.707 12.707a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 13 5v14a1 1 0 0 0 1.707.707z"
      />
    </svg>
  );
};
export default SvgArrowBigRight;
