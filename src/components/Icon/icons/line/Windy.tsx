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
        d="M10 3a1 1 0 0 0 0 2h1a1 1 0 1 1 0 2H4a1 1 0 0 0 0 2h7a3 3 0 1 0 0-6zM4 15a1 1 0 1 0 0 2h9a1 1 0 1 1 0 2h-1a1 1 0 1 0 0 2h1a3 3 0 1 0 0-6z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16 8a1 1 0 0 1 1-1h1a3 3 0 1 1 0 6H4a1 1 0 1 1 0-2h14a1 1 0 1 0 0-2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWindy;
