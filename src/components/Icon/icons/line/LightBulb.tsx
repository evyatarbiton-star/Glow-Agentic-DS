import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLightBulb = ({
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
      <path fill={color} d="M9 18h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <path
        fill={color}
        d="M10.707 10.293a1 1 0 1 0-1.414 1.414L11 13.414V20h2v-6.586l1.707-1.707a1 1 0 0 0-1.414-1.414L12 11.586z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m15 15.285.75-.6a6 6 0 1 0-7.498 0l.748.6V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm2 .96V17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-.755a8 8 0 1 1 10 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLightBulb;
