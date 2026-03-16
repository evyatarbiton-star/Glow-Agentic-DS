import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDumbbell = ({
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
        d="M2 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M18 11a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        d="M17 8.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0zM4 8.5a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 1-3 0z"
      />
    </svg>
  );
};
export default SvgDumbbell;
