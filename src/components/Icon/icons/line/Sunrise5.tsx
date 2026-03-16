import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSunrise5 = ({
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
        d="M6.343 11.758a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 1 0-1.414 1.414zM16.95 9.637a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.415-1.414zM12 14a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 1 1 8 0 1 1 0 1 1-2 0 2 2 0 0 0-2-2M5 15a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM21 16a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1M20 19a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM11.617 3.076a1 1 0 0 0-.324.217l-3 3a1 1 0 0 0 1.414 1.414L11 6.414V9a1 1 0 1 0 2 0V6.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.09-.217"
      />
    </svg>
  );
};
export default SvgSunrise5;
