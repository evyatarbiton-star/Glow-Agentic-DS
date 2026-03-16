import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStethoscope = ({
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
        d="M8 12a1 1 0 0 1 1 1v2a4 4 0 0 0 8 0v-1a1 1 0 1 1 2 0v1a6 6 0 0 1-12 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path fill={color} d="M21 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.5 5a.5.5 0 0 0-.5.5V9a3 3 0 1 0 6 0V5.5a.5.5 0 0 0-.5-.5H10a1 1 0 0 1 0-2h.5A2.5 2.5 0 0 1 13 5.5V9A5 5 0 0 1 3 9V5.5A2.5 2.5 0 0 1 5.5 3H6a1 1 0 0 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStethoscope;
