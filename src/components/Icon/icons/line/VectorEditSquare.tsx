import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditSquare = ({
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
        d="M16 5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM6 7a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m-1 11a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2M3 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0m15 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m12 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditSquare;
