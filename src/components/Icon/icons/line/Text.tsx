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
        fillRule="evenodd"
        d="M7 2a3 3 0 0 0-3 3v4a1 1 0 0 0 2 0V8h3v12H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-1V8h3v1a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3zm11 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1h5v14h2V6h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgText;
