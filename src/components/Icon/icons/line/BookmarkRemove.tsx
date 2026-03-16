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
        d="M4 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v11.99c0 2.553-2.987 3.939-4.937 2.29l-2.417-2.044a1 1 0 0 0-1.292 0L8.937 21.28C6.987 22.929 4 21.543 4 18.99zm5-3a3 3 0 0 0-3 3v11.99a1 1 0 0 0 1.646.763l2.417-2.044a3 3 0 0 1 3.874 0l2.417 2.044A1 1 0 0 0 18 18.989V7a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.293 7.293a1 1 0 0 1 1.414 0L12 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 10l1.293 1.293a1 1 0 0 1-1.414 1.414L12 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 10 9.293 8.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkRemove;
