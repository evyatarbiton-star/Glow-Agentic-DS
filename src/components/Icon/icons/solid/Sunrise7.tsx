import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSunrise7 = ({
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
        d="M12 7a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1M8.002 15.867a4 4 0 0 1 7.996 0A1.1 1.1 0 0 1 14.9 17H9.1a1.1 1.1 0 0 1-1.098-1.133M6 16a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1M20 15a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM16.95 9.637a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.415-1.414zM6.343 11.758a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 1 0-1.414 1.414zM20 19a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
      />
      <path
        fill={color}
        d="M11.617 3.076a1 1 0 0 0-.324.217l-3 3a1 1 0 0 0 1.414 1.414L11 6.414V9a1 1 0 1 0 2 0V6.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.09-.217"
      />
    </svg>
  );
};
export default SvgSunrise7;
