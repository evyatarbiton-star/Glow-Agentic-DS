import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHaze = ({
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
        d="M12 3a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1M8.002 11.867a4 4 0 0 1 7.996 0A1.1 1.1 0 0 1 14.9 13H9.1a1.1 1.1 0 0 1-1.098-1.133M6 12a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1M20 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM16.95 5.637a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 1 1-1.415-1.414zM6.343 7.758a1 1 0 0 0 1.414-1.414l-.707-.707A1 1 0 1 0 5.636 7.05zM14 16a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1M9 20a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1M20 19a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 16a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1"
      />
    </svg>
  );
};
export default SvgHaze;
