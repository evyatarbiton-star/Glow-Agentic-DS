import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTextAlignRight = ({
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
        d="M21 4a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h16a1 1 0 0 0 1-1M21 12a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h16a1 1 0 0 0 1-1M20 19a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM21 8a1 1 0 0 0-1-1h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z"
      />
    </svg>
  );
};
export default SvgTextAlignRight;
