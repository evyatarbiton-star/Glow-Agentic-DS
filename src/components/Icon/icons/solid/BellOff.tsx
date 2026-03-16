import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBellOff = ({
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
        d="M10.062 20.495c-.068-.268.162-.495.438-.495h3c.276 0 .507.227.438.495a2 2 0 0 1-3.876 0M6.881 6.881A6 6 0 0 0 6 10.01v1.326c0 .734-.345 1.425-.932 1.866C3.021 14.741 4.11 18 6.671 18h10.657q.32-.001.607-.065zM12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 0 2h1a4 4 0 0 1 4 4v1a1 1 0 1 0 2 0v-1a6 6 0 0 0-5-5.917V3a1 1 0 0 0-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBellOff;
