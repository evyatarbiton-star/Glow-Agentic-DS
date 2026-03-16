import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPerfume = ({
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
        d="M5 6c0 .505.51 1 1 1 .668 0 1.323-.273 1.938-.715q.192-.139.364-.285a6 6 0 0 0-.364-.285C7.323 5.273 6.668 5 6 5c-.49 0-1 .495-1 1M3 6c0 1.657 1.454 3 3 3 1.84 0 3.302-1.127 4.16-2H11v2.634c0 1.069 1.02 1.685 1.898 1.488a5 5 0 0 1 2.204 0c.879.197 1.898-.42 1.898-1.488V7h2a1 1 0 1 0 0-2h-2.17a3.001 3.001 0 0 0-5.66 0h-1.01C9.301 4.127 7.84 3 6 3 4.454 3 3 4.343 3 6m10 0v3.071a7 7 0 0 1 2 0V6a1 1 0 1 0-2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 19A5 5 0 1 0 10 19zm.49 2c.262 0 .516-.1.692-.294a7 7 0 1 0-10.364 0c.176.194.43.294.691.294z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPerfume;
