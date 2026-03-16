import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHourglassOff = ({
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
        d="m11.283 11.283-6.445 4.604A2 2 0 0 0 4 17.515V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 3a1 1 0 0 1 1-1h9a2 2 0 0 1 2 2v2.485a2 2 0 0 1-.837 1.628L16.58 9.957a1 1 0 1 1-1.162-1.628L18 6.485V4H9a1 1 0 0 1-1-1M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHourglassOff;
