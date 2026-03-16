import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowBigDownLeft = ({
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
        d="M11.293 12.707a1 1 0 0 1 0-1.414l8-8a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 20a1 1 0 0 0 1 1h9a1 1 0 0 0 .707-1.707l-9-9A1 1 0 0 0 3 11z"
      />
    </svg>
  );
};
export default SvgArrowBigDownLeft;
