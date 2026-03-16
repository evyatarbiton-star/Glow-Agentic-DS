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
        d="M19.447 6.106a1 1 0 0 1 .448 1.341l-4 8a1 1 0 0 1-1.602.26l-5.019-5.019-3.38 6.76a1 1 0 1 1-1.788-.895l4-8a1 1 0 0 1 1.601-.26l5.02 5.019 3.379-6.76a1 1 0 0 1 1.341-.446"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-4 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m13-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine03Up;
