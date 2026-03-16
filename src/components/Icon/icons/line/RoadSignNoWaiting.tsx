import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignNoWaiting = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.094 6.32A8 8 0 0 1 5.68 7.095zm1.414-1.414L7.094 5.68A8 8 0 0 1 18.32 16.905"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoadSignNoWaiting;
