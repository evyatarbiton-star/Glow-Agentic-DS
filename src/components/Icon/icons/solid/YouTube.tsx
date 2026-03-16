import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgYouTube = ({
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
        d="M5.59 4.21c-1.862.126-3.298 1.607-3.419 3.468C2.081 9.069 2 10.68 2 12s.08 2.932.171 4.322c.121 1.861 1.557 3.343 3.419 3.469C7.214 19.9 9.4 20 12 20s4.786-.1 6.41-.21c1.861-.125 3.298-1.607 3.419-3.468.09-1.39.171-3.002.171-4.322s-.08-2.931-.171-4.321c-.121-1.862-1.558-3.343-3.419-3.47C16.786 4.1 14.6 4 12 4s-4.786.1-6.41.21m5.962 4.958a1 1 0 0 0-1.552.834v3.997a1 1 0 0 0 1.552.833l2.993-1.981a1.02 1.02 0 0 0 0-1.701z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgYouTube;
