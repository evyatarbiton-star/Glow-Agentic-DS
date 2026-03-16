import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoinInsert = ({
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
        d="M3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M21 12a8.96 8.96 0 0 1-1.232 4.548.94.94 0 0 1-.817.452H5.05a.94.94 0 0 1-.817-.452A9 9 0 1 1 21 12"
      />
    </svg>
  );
};
export default SvgCoinInsert;
