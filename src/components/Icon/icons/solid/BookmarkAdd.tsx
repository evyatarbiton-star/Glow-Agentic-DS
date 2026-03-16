import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBookmarkAdd = ({
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
        d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v14c0 1.684-1.953 2.615-3.26 1.554l-4.11-3.335a1 1 0 0 0-1.26 0l-4.11 3.335C5.953 22.614 4 21.684 4 20zm9 2a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkAdd;
