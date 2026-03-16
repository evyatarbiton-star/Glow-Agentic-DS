import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCream = ({
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
        d="M3 14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM5 9.556A3.556 3.556 0 0 1 8.556 6H10.5A1.5 1.5 0 0 0 12 4.5v-1a.5.5 0 0 1 .649-.478l2.135.665A6 6 0 0 1 19 9.416V9.5a.5.5 0 0 1-.5.5H5.444A.444.444 0 0 1 5 9.556"
      />
    </svg>
  );
};
export default SvgCream;
