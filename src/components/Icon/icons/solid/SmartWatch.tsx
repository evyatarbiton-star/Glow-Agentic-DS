import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSmartWatch = ({
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
        d="M10.171 11a3 3 0 0 1-2.995-3.166l.167-3A3 3 0 0 1 10.338 2h3.324a3 3 0 0 1 2.995 2.834l.167 3A3 3 0 0 1 13.83 11zm-.998-3.055.167-3A1 1 0 0 1 10.338 4h3.324a1 1 0 0 1 .999.945l.166 3A1 1 0 0 1 13.83 9H10.17a1 1 0 0 1-.998-1.055M13.662 22a3 3 0 0 0 2.995-2.834l.167-3A3 3 0 0 0 13.828 13h-3.657a3 3 0 0 0-2.995 3.166l.166 3A3 3 0 0 0 10.338 22zm.998-2.945.167-3A1 1 0 0 0 13.828 15h-3.657a1 1 0 0 0-.998 1.055l.166 3a1 1 0 0 0 .999.945h3.324a1 1 0 0 0 .998-.945"
        clipRule="evenodd"
      />
      <path fill={color} d="M18 8h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1z" />
      <path
        fill={color}
        d="M5 16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3z"
      />
    </svg>
  );
};
export default SvgSmartWatch;
