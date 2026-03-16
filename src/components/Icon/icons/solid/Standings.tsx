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
        d="M6 6a1 1 0 0 0 0 2h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 1 0 0 2h4a3 3 0 0 0 3-3v-2h4a1 1 0 1 0 0-2h-4V9a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m14 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStandings;
