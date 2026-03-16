import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine03Down = ({
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
        d="m7.16 9.083 1.47 2.94c-.7.086-1.324.412-1.789.894l-1.47-2.94a3 3 0 0 0 1.789-.894m3.134 3.21a3 3 0 0 1 1.414 1.414l1.999-2a3 3 0 0 1-1.414-1.414zm6.866-1.21 1.47 2.94c-.7.086-1.324.412-1.789.894l-1.47-2.94a3 3 0 0 0 1.789-.894"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0m12 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m6 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-7-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine03Down;
