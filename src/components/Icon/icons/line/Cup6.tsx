import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCup6 = ({
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
        d="M6 3a3 3 0 0 0-3 3v10a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5h1a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1.17A3 3 0 0 0 14 3zm11 4v7h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM5 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 3H8v4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
      />
    </svg>
  );
};
export default SvgCup6;
