import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBoxes = ({
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
        d="M11 10v10h7a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3zm4 2h-2v6h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 10a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h7V10zm1 2H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v-6H9v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 2a3 3 0 0 0-3 3v7h10V5a3 3 0 0 0-3-3zm1 2h-1a1 1 0 0 0-1 1v5h6V5a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBoxes;
