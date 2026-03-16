import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgClearNight11 = ({
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.98 9.98 0 0 0 7.775-3.71 1 1 0 0 0-.777-1.63 8 8 0 0 1-6.219-13.03A1 1 0 0 0 12.002 2z"
      />
      <path
        fill={color}
        d="M15 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 13a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1z"
      />
    </svg>
  );
};
export default SvgClearNight11;
