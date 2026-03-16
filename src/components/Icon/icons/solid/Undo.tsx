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
        d="M9 8a1 1 0 0 1 1-1h5.5a6.5 6.5 0 1 1 0 13H5a1 1 0 1 1 0-2h10.5a4.5 4.5 0 1 0 0-9H10a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M2.293 8.707a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 7 5v6a1 1 0 0 1-1.707.707z"
      />
    </svg>
  );
};
export default SvgUndo;
