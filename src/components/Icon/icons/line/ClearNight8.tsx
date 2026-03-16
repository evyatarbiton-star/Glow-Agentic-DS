import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgClearNight8 = ({
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
        d="M10.025 4.245a8 8 0 1 0 6.758 14.168C12.327 17.403 9 13.42 9 8.659c0-1.584.369-3.083 1.025-4.414M2 11.999c0-5.523 4.477-10 10-10h.002a1 1 0 0 1 .777 1.63 8 8 0 0 0 6.219 13.03 1 1 0 0 1 .777 1.63A9.98 9.98 0 0 1 12 21.999c-5.523 0-10-4.477-10-10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 14a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1z"
      />
    </svg>
  );
};
export default SvgClearNight8;
