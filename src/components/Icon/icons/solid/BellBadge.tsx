import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBellBadge = ({
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
        d="M10.062 20.495c-.068-.268.162-.495.438-.495h3c.276 0 .507.227.438.495a2 2 0 0 1-3.876 0M13.004 4h-2.009l-1.031.371A5.99 5.99 0 0 0 6 10.01v1.326c0 .734-.345 1.425-.932 1.866C3.021 14.741 4.11 18 6.671 18h10.657c2.562 0 3.65-3.26 1.603-4.799A2.33 2.33 0 0 1 18 11.335V10.01a5.99 5.99 0 0 0-3.964-5.638zM11 3a1 1 0 1 1 2 0v1h-2zM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default SvgBellBadge;
