import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUser = ({
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
        d="M9 14a5 5 0 0 0-5 5 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 5 5 0 0 0-5-5zM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      />
    </svg>
  );
};
export default SvgUser;
