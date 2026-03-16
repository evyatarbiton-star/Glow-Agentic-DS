import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTestTube = ({
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
        d="M4 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-1v12a6 6 0 0 1-12 0V4H5a1 1 0 0 1-1-1m4 4h8V4H8zm4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTestTube;
