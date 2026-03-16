import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWindy = ({
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
        d="M14 6a3 3 0 1 0-5.83 1H4a1 1 0 0 0 0 2h7a3 3 0 0 0 3-3M3 16a1 1 0 0 1 1-1h9a3 3 0 1 1-2.83 2H4a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        d="M21 10a3 3 0 1 0-5.83 1H4a1 1 0 1 0 0 2h14a3 3 0 0 0 3-3"
      />
    </svg>
  );
};
export default SvgWindy;
