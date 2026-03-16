import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSpeedVideo = ({
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
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m-.447-8.83a1 1 0 0 0-1.553.834v3.993a1 1 0 0 0 1.553.834l2.998-1.989a1.01 1.01 0 0 0 0-1.683z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 2a1 1 0 1 0 0 2 8 8 0 1 1 0 16 1 1 0 1 0 0 2c5.523 0 10-4.477 10-10S17.523 2 12 2M5.656 4.27a1 1 0 0 1 1.27 1.545 8 8 0 0 0-1.11 1.11 1 1 0 0 1-1.546-1.27c.416-.505.88-.97 1.386-1.385M2.047 11.02a1 1 0 0 1 1.991.194 8 8 0 0 0 0 1.572 1 1 0 1 1-1.99.193 10 10 0 0 1 0-1.958M4.27 18.344a1 1 0 1 1 1.545-1.27q.501.61 1.11 1.11a1 1 0 0 1-1.27 1.546c-.505-.416-.97-.88-1.385-1.386"
      />
    </svg>
  );
};
export default SvgSpeedVideo;
