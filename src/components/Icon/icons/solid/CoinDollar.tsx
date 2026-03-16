import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoinDollar = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3V5a1 1 0 1 0-2 0v1a3 3 0 0 0-3 3v.558a3 3 0 0 0 2.051 2.847l3.265 1.088a1 1 0 0 1 .684.948V15a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3v1a1 1 0 1 0 2 0v-1a3 3 0 0 0 3-3v-.559a3 3 0 0 0-2.051-2.846l-3.265-1.088A1 1 0 0 1 10 9.558z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCoinDollar;
