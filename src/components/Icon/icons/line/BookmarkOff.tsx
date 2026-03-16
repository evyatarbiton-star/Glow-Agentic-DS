import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBookmarkOff = ({
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
        d="M4.608 4.608A5 5 0 0 0 4 7v11.989c0 2.554 2.987 3.94 4.937 2.29l2.417-2.043a1 1 0 0 1 1.292 0l2.417 2.044c1.71 1.447 4.22.557 4.81-1.408L18 18v.989a1 1 0 0 1-1.646.764l-2.417-2.044a3 3 0 0 0-3.874 0l-2.417 2.044A1 1 0 0 1 6 18.989V6.999a3 3 0 0 1 .129-.87z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 3a1 1 0 0 1 1-1h6a5 5 0 0 1 5 5v6a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3H9a1 1 0 0 1-1-1M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkOff;
