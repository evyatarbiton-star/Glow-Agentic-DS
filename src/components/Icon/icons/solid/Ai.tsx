import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAi = ({
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
        d="M17 8a1 1 0 0 0 1-1V6h1a1 1 0 1 0 0-2h-1V3a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 0 0 1 1M20 19a1 1 0 0 0-1-1h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 1-1M11.407 7.198c-.256-1.6-2.558-1.6-2.813 0a4.09 4.09 0 0 1-3.395 3.395c-1.6.255-1.6 2.557 0 2.813A4.09 4.09 0 0 1 8.594 16.8c.255 1.6 2.557 1.6 2.813 0a4.09 4.09 0 0 1 3.394-3.395c1.6-.256 1.6-2.558 0-2.813a4.09 4.09 0 0 1-3.395-3.395"
      />
    </svg>
  );
};
export default SvgAi;
