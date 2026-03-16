import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowBigUpRight = ({
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
        d="M3.293 20.707a1 1 0 0 1 0-1.414l16-16a1 1 0 1 1 1.414 1.414l-16 16a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.707 3.293A1 1 0 0 1 21 4v10a1 1 0 1 1-2 0V5h-9a1 1 0 1 1 0-2h10a1 1 0 0 1 .707.293"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowBigUpRight;
