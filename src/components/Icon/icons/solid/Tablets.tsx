import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTablets = ({
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
        d="M14.401 6.384c.147.302-.08.637-.413.68a8.004 8.004 0 0 0-6.925 6.924c-.042.333-.377.56-.68.413a6 6 0 1 1 8.018-8.017"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.477 10.11a6 6 0 0 0-8.367 8.367zm1.414 1.414-8.367 8.367a6 6 0 0 0 8.367-8.367"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTablets;
