import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditTriangle7 = ({
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
        d="M8.182 8.182c-.195-.195-.51-.192-.728-.023a4 4 0 0 1-1.955.81C5.225 9.004 5 9.224 5 9.5v5c0 .276.225.497.499.531a4 4 0 0 1 3.47 3.47c.034.274.255.5.531.5h5c.276 0 .497-.226.53-.5a4 4 0 0 1 .81-1.955c.17-.218.173-.532-.022-.728zM3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0m16-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditTriangle7;
