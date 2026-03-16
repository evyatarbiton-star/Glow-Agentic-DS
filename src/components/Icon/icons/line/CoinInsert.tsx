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
        fillRule="evenodd"
        d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgCoinInsert;
