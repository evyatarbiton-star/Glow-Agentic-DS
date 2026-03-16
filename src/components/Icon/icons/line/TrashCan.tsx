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
        d="M7 8v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8h2v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 11a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1M14 11a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h3a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2zm2-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTrashCan;
