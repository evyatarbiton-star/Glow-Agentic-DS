import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUndo = ({
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
        d="M2 9a1 1 0 0 1 1-1h13a6 6 0 0 1 0 12H5a1 1 0 1 1 0-2h11a4 4 0 0 0 0-8H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 9.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L4.414 9l3.293 3.293a1 1 0 1 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUndo;
