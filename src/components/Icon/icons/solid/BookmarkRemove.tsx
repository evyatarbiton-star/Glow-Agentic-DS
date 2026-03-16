import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBookmarkRemove = ({
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
        d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v14c0 1.684-1.953 2.615-3.26 1.554l-4.11-3.335a1 1 0 0 0-1.26 0l-4.11 3.335C5.953 22.614 4 21.684 4 20zm6.707 1.293a1 1 0 0 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L12 8.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkRemove;
