import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStandings = ({
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
        d="M7 8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7v2h3a3 3 0 0 0 3-3v-2h4v-2h-4V9a3 3 0 0 0-3-3H7z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m14-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStandings;
