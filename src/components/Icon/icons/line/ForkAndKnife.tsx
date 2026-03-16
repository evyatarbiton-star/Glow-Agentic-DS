import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgForkAndKnife = ({
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
        d="M16 3a5 5 0 0 1 5 5v4a1 1 0 0 1-.758.97L17 13.78V20a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m1 8.72 2-.5V8a3 3 0 0 0-2-2.83z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M5 4a1 1 0 0 0-2 0v2a5 5 0 0 0 4 4.9V20a1 1 0 1 0 2 0v-9.1A5 5 0 0 0 13 6V4a1 1 0 1 0-2 0v2a3 3 0 0 1-2 2.83V4a1 1 0 0 0-2 0v4.83A3 3 0 0 1 5 6z"
      />
    </svg>
  );
};
export default SvgForkAndKnife;
