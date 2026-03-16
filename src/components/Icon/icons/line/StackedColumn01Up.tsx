import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStackedColumn01Up = ({
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
        d="M21 10a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1m-7 3a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm-5 1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-6 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M3 4a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1m5 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm7-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStackedColumn01Up;
