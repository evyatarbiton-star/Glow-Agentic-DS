import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgForward7 = ({
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
        d="M5.298 4.482C4 3.374 2 4.297 2 6.003v11.99c0 1.706 2 2.629 3.298 1.522l6.984-5.955c.96-.819.96-2.301 0-3.12z"
      />
      <path
        fill={color}
        d="M14.298 4.482C13 3.374 11 4.297 11 6.003v11.99c0 1.706 2 2.629 3.298 1.522l6.984-5.955c.96-.819.96-2.301 0-3.12z"
      />
    </svg>
  );
};
export default SvgForward7;
