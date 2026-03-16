import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserEditOuLc = ({
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
        d="M15 14c.218 0 .293.277.126.418A5.99 5.99 0 0 0 13 19v2.5a.5.5 0 0 1-.5.5H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5zM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M15.924 19.182l-.886 2.126a.5.5 0 0 0 .654.654l2.126-.886a1 1 0 0 0 .322-.216l3.563-3.563a1 1 0 0 0 0-1.415l-.585-.585a1 1 0 0 0-1.415 0L16.14 18.86a1 1 0 0 0-.216.322"
      />
    </svg>
  );
};
export default SvgUserEditOuLc;
