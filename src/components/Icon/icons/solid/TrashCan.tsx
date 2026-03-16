import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTrashCan = ({
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
        d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm4 3a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm4 0a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 2a2 2 0 0 0-2 2H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2h-3a2 2 0 0 0-2-2z"
      />
    </svg>
  );
};
export default SvgTrashCan;
