import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine03Up = ({
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
        d="m16.841 9.083-1.47 2.94c.7.086 1.324.412 1.789.894l1.47-2.94a3 3 0 0 1-1.789-.894m-3.134 3.21a3 3 0 0 0-1.414 1.414l-2-2a3 3 0 0 0 1.415-1.414zm-6.866-1.21-1.47 2.94c.7.086 1.324.412 1.789.894l1.47-2.94a3 3 0 0 1-1.789-.894"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m7-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine03Up;
