import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoins8 = ({
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
        d="M6 4.5A1.5 1.5 0 0 1 7.5 3h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 6 4.5M4.5 8a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3zM5 14.5A1.5 1.5 0 0 1 6.5 13h5q.162 0 .315.033c.289.062.344.41.18.656a6 6 0 0 0-.827 1.896.53.53 0 0 1-.508.415H6.5A1.5 1.5 0 0 1 5 14.5M3 19.5A1.5 1.5 0 0 1 4.5 18h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 3 19.5"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M17 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCoins8;
