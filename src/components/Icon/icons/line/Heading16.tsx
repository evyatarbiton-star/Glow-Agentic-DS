import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading16 = ({
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
        d="M18 4a4 4 0 0 0-4 4 1 1 0 1 0 2 0 2 2 0 1 1 4 0v1a2 2 0 0 1-2 2 1 1 0 1 0 0 2 2 2 0 0 1 2 2v1a2 2 0 1 1-4 0 1 1 0 1 0-2 0 4 4 0 0 0 8 0v-1a4 4 0 0 0-1.354-3A4 4 0 0 0 22 9V8a4 4 0 0 0-4-4M3 4a1 1 0 0 1 1 1v6h6V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H4v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgHeading16;
