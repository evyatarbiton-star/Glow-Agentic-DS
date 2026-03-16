import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRazor = ({
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
        d="M7 2a3 3 0 0 0 0 6h1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h1a3 3 0 1 0 0-6zm8 4h2a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2h8"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a2 2 0 1 1-4 0z"
      />
    </svg>
  );
};
export default SvgRazor;
