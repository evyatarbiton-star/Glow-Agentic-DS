import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSunset7 = ({
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
        d="M6.343 11.758a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 1 0-1.414 1.414zM16.95 9.637a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.415-1.414zM12 12a4 4 0 0 0-3.998 3.867A1.1 1.1 0 0 0 9.1 17h5.8c.601 0 1.119-.494 1.098-1.133A4 4 0 0 0 12 12M5 15a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM21 16a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1M20 19a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 3a1 1 0 0 0-1 1v2.586L9.707 5.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 6.586V4a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default SvgSunset7;
