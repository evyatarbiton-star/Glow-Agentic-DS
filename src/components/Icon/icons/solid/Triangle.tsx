import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTriangle = ({
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
        d="M13.789 4.103c-.738-1.474-2.842-1.474-3.578.001L3.217 18.106A2 2 0 0 0 5.007 21H19a2 2 0 0 0 1.79-2.894z"
      />
    </svg>
  );
};
export default SvgTriangle;
