import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgText = ({
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
        d="M7 21a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V6H6v2a1 1 0 0 1-2 0V4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgText;
