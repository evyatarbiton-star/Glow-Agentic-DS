import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine02Up = ({
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
        d="M4 3a1 1 0 0 1 1 1v13a2 2 0 0 0 2 2h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.317 3.051a1 1 0 0 1 .632 1.265l-1.977 5.93c-.705 2.116-3.39 2.75-4.967 1.173L12.58 9.995a1 1 0 0 0-1.655.391l-1.977 5.93a1 1 0 1 1-1.897-.632l1.976-5.93c.705-2.116 3.39-2.75 4.968-1.173l1.423 1.424a1 1 0 0 0 1.656-.391l1.977-5.93a1 1 0 0 1 1.265-.633"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine02Up;
