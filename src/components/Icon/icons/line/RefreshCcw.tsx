import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRefreshCcw = ({
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
        d="M12 19a6.99 6.99 0 0 0 5.71-2.95 1 1 0 1 1 1.63 1.159A9 9 0 0 1 3 12a1 1 0 1 1 2 0 7 7 0 0 0 7 7M12 5a6.99 6.99 0 0 0-5.71 2.95 1 1 0 0 1-1.63-1.158A9 9 0 0 1 21 12a1 1 0 1 1-2 0 7 7 0 0 0-7-7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19.707 15.293A1 1 0 0 1 20 16v5a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h5a1 1 0 0 1 .707.293M4.293 8.707A1 1 0 0 1 4 8V3a1 1 0 0 1 2 0v4h4a1 1 0 1 1 0 2H5a1 1 0 0 1-.707-.293"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRefreshCcw;
