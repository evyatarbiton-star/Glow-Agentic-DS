import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAi5 = ({
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
        d="M13.407 10.198c-.256-1.6-2.558-1.6-2.813 0a4.09 4.09 0 0 1-3.395 3.395c-1.6.255-1.6 2.558 0 2.813a4.09 4.09 0 0 1 3.395 3.395c.255 1.6 2.557 1.6 2.813 0a4.09 4.09 0 0 1 3.394-3.395c1.6-.255 1.6-2.558 0-2.813a4.09 4.09 0 0 1-3.394-3.395M6 11a1 1 0 0 0 1-1V9h1a1 1 0 0 0 0-2H7V6a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h1v1a1 1 0 0 0 1 1M18 9a1 1 0 0 0 1-1V7h1a1 1 0 1 0 0-2h-1V4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 0 0 1 1"
      />
    </svg>
  );
};
export default SvgAi5;
