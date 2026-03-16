import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSunny = ({
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
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0M11 3a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zM5.636 7.05A1 1 0 0 0 7.05 5.638l-.707-.707A1 1 0 1 0 4.93 6.344zM19.071 4.93a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414M7.05 16.95a1 1 0 0 0-1.414 0l-.707.706a1 1 0 1 0 1.414 1.415l.707-.708a1 1 0 0 0 0-1.414M19.071 19.07a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414M12 19a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1M21 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM5 12a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1"
      />
    </svg>
  );
};
export default SvgSunny;
