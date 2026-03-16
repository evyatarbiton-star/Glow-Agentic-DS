import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCloudy8 = ({
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
        d="M22 12a8 8 0 0 1-8 8H8a6 6 0 0 1-.975-11.921A8 8 0 0 1 22 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCloudy8;
